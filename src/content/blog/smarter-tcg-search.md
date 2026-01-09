---
title: "Towards Smarter TCG Card Search"
date: "2026-01-08"
excerpt: "Building a card search that understands natural language and strategic concepts. How I combined LLM translation, a custom query language, and AI-generated role tagging to let players search for 'red penguins that make fishsicles.'"
shortTitle: "Towards Smarter TCG Card Search"
---

When you're searching for cards in a trading card game, you usually have two options: click through a maze of dropdown filters, or learn some arcane query syntax that looks like it escaped from a SQL textbook. Neither is great.

I wanted something better for [Vibes](https://vibes.game). What if you could just type "red penguins that make fishsicles" and get exactly what you're looking for?

Turns out, you can. Here's how I built it.

## The Problem with Card Search

Card games have *a lot* of filterable attributes. In Vibes alone, you've got colors, types, subtypes, costs (multiple kinds), stats, keywords, and more. Traditional filter UIs turn into an overwhelming wall of dropdowns that makes you feel like you're filing taxes. Power users want something faster.

But there's a deeper problem beyond just the UI. There are things you want to search for that aren't really attributes at all—"removal spells" or "card advantage" or "cards that go in aggro decks." These concepts don't exist as fields in any card database. Historical approaches to card search are basically modified grep plus some game-specific magic, and that's just not going to cut it for this kind of thing. For this work I bundled the idea of "what is this card *for*" into a special attribute I'm calling **role**.

[Scryfall](https://scryfall.com) solved the first half of this problem for Magic: The Gathering with a query language. Type `c:blue t:creature cmc<=3` and you get cheap blue creatures. It's powerful, but there's a learning curve. You need to memorize that `c:` means color, `t:` means type, `cmc` means converted mana cost, and so on. I've been playing Magic for an embarrassing number of decades at this point and I still have to look things up regularly.

I wanted both: the power of a query language *and* the ability to just describe what you want in plain English. Including the strategic stuff that isn't printed on any card.

## Three Layers of Search

The system I built has three distinct layers that work together:

**Layer 1: Natural Language Translation**
"Red penguins that make fishsicles" → `c:red t:penguin role:makes_fishsicles`

**Layer 2: Query Parsing**
`c:red t:penguin role:makes_fishsicles` → Abstract Syntax Tree → SQL

**Layer 3: Role Tagging**
AI-generated semantic tags that capture *what a card does strategically*, not just what's printed on it.

That third layer is where it gets interesting.

## The Role Tagging Problem

Here's the thing about card games: the most useful search criteria often aren't explicit on the card. They're emergent properties that require actually understanding how the game works.

Take "cards that draw cards" in Vibes. Some cards literally say "draw a card"—[[Have an Encore]] is a perfect example. Easy. But others like [[Keyturning Penguin]] say "look at the top card of your deck, put it on the bottom." That's card *selection*, not card draw—a naive text search for "draw" won't find it, but it's still card advantage in a different form. And what about [[Lil Who Breaks Free]], which draws a card when it *leaves* the huddle? That's conditional draw that requires understanding the game's mechanics. What about a card that makes your opponent discard? That's card advantage in the sense that it's a two-for-one, but it's doing something strategically very different from the first three examples.

What players actually want is to search by **strategic role**: "show me cards that generate card advantage." But that concept doesn't exist anywhere in the card data—it's emergent from understanding how the game works. You basically need a card game expert to look at every card and tag it with what that card is *for*. So I taught an AI to understand how the game works.

## Building the Role Taxonomy

Before you can tag cards with roles, you need to define what roles exist. This is the part that can't be automated—you need someone who actually *gets* the game to think carefully about what strategic concepts matter. I came up with 22 roles across 8 categories for Vibes:

- **Interaction**: removal (like [[Peace Out Penguin]] and [[Popcorn Penguin]]), board clears (like [[Yum Yum]]), relic destruction, counterspells, discard
- **Card Advantage**: draw effects, card selection (scry/filter), tutors
- **Resource**: pudge fixing, fishsicle generation, fishsicle synergies
- **Recursion**: playing from the ice (graveyard), returning cards from ice
- **Mill**: opponent mill, self-mill for recursion strategies
- **Pump & Counters**: vibe boosting, temporary buffs, counter synergies
- **Flop/Unflop**: tap effects, untap effects, untap synergies
- **Type Synergies**: relic-matters effects

The key insight here is that roles should capture things you *can't* derive from the raw card data. There's no point having a "high defense" role when you can just search `def>=3`. Roles are for strategic concepts that require understanding the game—the kind of thing that a new player wouldn't know to look for but an experienced player thinks about constantly.

I built a similar system for Flesh and Blood with 28 roles—things like `go_wide` (multiple attacks per turn), `tempo_stopper` (cards that halt aggressive momentum), and `finisher` (game-ending threats). Different game, different strategic vocabulary. The FAB taxonomy looks completely different from the Vibes one because the games have fundamentally different strategic axes. You can't just copy-paste this stuff between games; someone needs to actually understand each game's metagame and build a taxonomy that makes sense for how people actually think about deckbuilding in that specific game.

## Why Offline Tagging?

There's an obvious question here: why not just have the AI classify cards on-the-fly when someone searches? Run the query through an LLM, have it figure out which cards match, done. It would be simpler to build.

A few reasons why I didn't go that route:

**Consistency.** If you ask an LLM to classify the same card twice, you might get slightly different answers. That's fine for chat, but terrible for search. Users expect `role:removal` to return the same results every time. When you're trying to build a deck, you want to be able to trust that the search isn't randomly forgetting cards that matched yesterday. By tagging offline and storing the results, searches are deterministic.

**Speed.** Even fast LLMs add hundreds of milliseconds of latency. Card search needs to feel instant—that's the whole point of having a query language in the first place. With pre-computed tags stored in the database, role filters are just SQL joins. Single-digit milliseconds. The search box should feel like a real-time filter, not a loading spinner.

**Cost.** Classifying 500 cards once costs a few dollars. Classifying cards on every search would cost a few dollars per hour. The math doesn't work, and that's before you consider that some users will sit there iterating on searches dozens of times in a session while they're brewing.

**Curation.** Offline tagging lets me review the results, spot patterns in misclassification, and refine the prompts. The AI's output becomes a starting point that I can audit and override when needed. This matters more than you might think—I've caught some pretty egregious misclassifications that would have made the search actively misleading.

The tradeoff is that new cards don't get tagged until I run the pipeline. In practice, this is fine—new sets release on a known schedule, and I just run tagging as part of the card import process. It's not like cards are appearing randomly throughout the day.

## The AI Tagging Pipeline

With roles defined, I needed to actually tag ~500 Vibes cards. Doing this manually would take forever and require constant updates as new cards release. And frankly I would make mistakes—there's no way I would correctly identify every single card that counts as "card selection" versus "card draw" after staring at hundreds of cards in a row.

Instead, I built a batch processing pipeline that sends cards to a Claude model with a detailed prompt explaining each role's definition and criteria. The prompt includes the full role taxonomy with explicit inclusion and exclusion criteria. This precision turns out to be really important:

> **draw**: Cards that provide card advantage through drawing. Must actually draw cards, not just filter/scry. Cantrips count. Conditional draw (on attack, on ETB) counts if reliable.

> **card_selection**: Cards that improve card quality without drawing (scry, look at top N, filter). Does NOT include raw draw effects—use the draw role for those.

These distinctions matter. Without them, the AI might tag a scry effect as "draw" because it vaguely relates to card advantage. You need to be annoyingly precise about the boundaries between related concepts, or you get a mushy mess where everything that's vaguely related to a concept gets lumped together. That defeats the whole purpose.

Each card gets sent with its full data—name, type, subtypes, costs, stats, and crucially, the full rules text. The AI reads the card like a player would and decides which roles apply. Importantly, we also prompt the model with a high-level understanding of the rules and terminology of Vibes—this is especially important for newer or smaller games that aren't well known to the models. Claude has probably seen millions of Magic cards in its training data, but Vibes? Not so much. You need to explain the game to it.

The AI returns structured JSON with role assignments and confidence scores:

```json
{
  "id": "card-uuid-here",
  "roles": [
    {
      "code": "draw",
      "confidence": 0.92,
      "reasoning": "Draws 2 cards on enter, reliable card advantage"
    }
  ]
}
```

The reasoning field is invaluable for debugging. When a card gets an unexpected tag, I can see *why* the AI thought it fit and adjust the prompt accordingly. Half the time the AI is actually right and I just hadn't thought carefully enough about that edge case.

I batch 50 cards per API call and run up to 20 batches concurrently. The whole Vibes card pool tags in a few minutes. Results save incrementally after each batch, so if something fails partway through, I don't lose progress—I've been burned by that one before on long-running batch jobs.

When new cards release, I query for cards without role assignments and run just those through the pipeline. The delta approach keeps costs low and runtime fast.

## Confidence Calibration

The confidence scores matter more than you might think.

A 0.95 means the card clearly and unambiguously fits the role. A 0.7 means it's a reasonable fit but maybe conditional or requires specific circumstances. Below 0.5, we don't assign the role at all.

Without this calibration, the AI tends toward over-tagging. A card that *might* enable card draw in a very specific deck isn't the same as a card that's *primarily* about drawing cards. The confidence threshold acts as a filter—only cards that strongly fit a role get tagged with it. Without this, you end up with searches that return way too many marginally-relevant results, and that's almost worse than returning too few.

I also store the confidence in the database, which opens up future possibilities. A stricter search mode could require 0.9+ confidence. A looser mode could include 0.6+ matches with a "maybe" indicator. For now, I just use a simple threshold, but the data is there if I want to get fancier later.

## From English to Database: The Query Pipeline

Here's what happens when you search for "cheap red penguins that make fishsicles":

```
"cheap red penguins that make fishsicles"
        ↓ (LLM translation)
"c:red t:penguin cost<=2 role:makes_fishsicles"
        ↓ (parsing)
    Abstract Syntax Tree
        ↓ (compilation)
    Parameterized SQL
        ↓ (database)
    Results
```

Each stage has a specific job, and keeping them separate makes the whole system easier to reason about and extend. This is basic software engineering, but it's worth spelling out because I've seen people try to do this all in one giant LLM prompt and end up with something unmaintainable.

### Stage 1: Natural Language → Query Syntax

The first translation is the fuzziest—turning human intent into structured syntax. This is where an LLM shines. I give Claude a prompt that explains the available filters, operators, and roles for the specific game, and it translates the natural language into query syntax.

The key insight is that LLMs are *really good* at this kind of structured translation when you give them clear constraints. "Here are the valid filters. Here are the valid operators. Here's what the user said. Output only the query." It works remarkably well. You're basically using the LLM as a translator between two formal languages, which is way more reliable than asking it to reason about abstract concepts.

This translation happens on-demand—it's the one place where LLM latency is acceptable because the user explicitly asked for "smart" search. We can also use really fast and cheap models for this, since it's a pretty clearly defined task. The result is shown to the user before executing, so they can see exactly what the AI interpreted and tweak it if needed. This is important for building trust; if the AI interprets "cheap" as cost<=2 but you meant cost<=1, you can see that and fix it.

Over time, users naturally learn the syntax by seeing these translations. The AI becomes a teacher, not a crutch. I've noticed that heavy users of the search start typing the query syntax directly after a while—they've internalized the filter names just from seeing them in the translations.

### Stage 2: Query Syntax → AST

Once we have structured query syntax, we need to parse it. This is classic [compiler theory](https://en.wikipedia.org/wiki/Abstract_syntax_tree)—tokenize the input, then build a tree that represents the logical structure.

`c:red t:penguin cost<=2 role:makes_fishsicles`

becomes something like:

```
AND
 ├─ color = "red"
 ├─ type = "penguin"
 ├─ cost <= 2
 └─ role = "makes_fishsicles"
```

The parser handles operator precedence (NOT binds tighter than AND binds tighter than OR), grouping with parentheses, and validates that filters actually exist. If you typo `colr:red`, the parser catches it and returns a helpful error. This is important—silent failures are the worst user experience. If someone's search isn't returning what they expect, they should know *why*.

This stage is entirely deterministic. Same input, same tree, every time. No AI involved. This is the point in the pipeline where we go from "fuzzy human intent stuff" to "rigorous computer science stuff," and that boundary is important to maintain.

### Stage 3: AST → SQL

The final stage walks the syntax tree and generates database queries. Each node type has a corresponding SQL pattern—text filters become `ILIKE` clauses, numeric filters become comparisons, array filters become containment checks, role filters become joins against the role table.

The output is parameterized SQL, so there's no injection risk from user input. The query hits the database, and results come back. Pretty straightforward once you have the AST.

This compilation step is where game-specific knowledge lives. Vibes has different filters than FAB, which has different filters than Magic. The parser is generic; the compiler knows about each game's schema. Adding a new game means writing a new compiler configuration, not rewriting the whole system.

### Why This Architecture?

Separating these stages has real benefits:

**Debuggability.** When search results are wrong, I can check each stage independently. Did the LLM mistranslate? Did the parser misunderstand the syntax? Is the SQL wrong? Each stage has clear inputs and outputs. I can't overstate how much easier this makes debugging compared to a monolithic "throw it all at the LLM" approach.

**Extensibility.** Adding a new filter means updating the compiler. Adding a new game means adding a new compiler configuration. The parser doesn't change. The LLM prompt gets a new filter in its list. Everything stays modular.

**Testability.** The parser and compiler are pure functions—same input, same output. Easy to unit test. The LLM translation is the only non-deterministic part, and it's isolated. I have hundreds of test cases for the parser and compiler; I have vibes-based spot checks for the LLM translation.

**Flexibility.** Power users can skip the LLM entirely and write queries directly. The natural language layer is an optional on-ramp, not a requirement. And honestly, the power users are faster with the query syntax anyway—they don't want to wait for an LLM round-trip.

## What I Learned

**Roles need to be truly semantic.** Early versions had roles for FAB that didn't properly map to game mechanics. The AI would confidently assign roles based on vague pattern matching, and the search results were useless garbage. Every game's roles need to be designed by someone who actually understands that game's strategic landscape. You cannot shortcut this.

**Confidence calibration matters.** Without confidence scores, the AI tends toward over-tagging. A card that *might* enable a strategy in the right deck isn't the same as a card that's *primarily* about that strategy. The threshold is doing real work.

**The query language is the foundation.** Smart search is a nice-to-have, but the real power is in the query syntax. Power users will learn it and be faster than natural language. The AI translation is an on-ramp, not the destination. If I had to choose between having only the query language or only the natural language translation, I'd pick the query language every time.

**Game-specific prompts are essential.** The FAB tagging prompts are completely different from Vibes because the games have different strategic axes. You can't just say "tag these cards with roles"—you need to teach the AI what matters in *this* game, especially for newer and smaller games that aren't well represented in training data. Claude knows Magic inside and out. It does not know Vibes. You have to explain things.

## Try It

The search is live on NetDeck for both [Vibes](https://app.netdeck.gg/cards/vibes) and [Flesh and Blood](https://app.netdeck.gg/cards/fab). Type a natural language query or dive into the syntax—the help panel documents everything.

For example, searching `c:red role:removal` returns cards like [[Peace Out Penguin]], [[Popcorn Penguin]], [[Lil Daydreamer]], and [[Squibblestone the Wise]]—all red cards that can remove opposing penguins from play, even though they each do it in completely different ways. That's the power of semantic role tagging: you describe *what you want the card to do*, and the system finds cards that accomplish that goal regardless of how the rules text is worded.
