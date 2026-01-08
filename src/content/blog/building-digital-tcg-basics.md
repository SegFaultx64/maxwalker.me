---
title: "Building a Digital Trading Card Game: First Principles"
date: "2025-04-14"
excerpt: "The first in a series exploring how to build a digital trading card game from scratch. We cover the foundational objects—cards, players, and zones—and why understanding these primitives is essential before writing any code."
shortTitle: "Building a Digital TCG: The Basics"
---

The purpose of this series of blog posts is to capture and clearly articulate my understanding of how to build a **digital trading card game** from the ground up, from first principles. This is something I know quite a bit about. I played an enormous amount of *Magic: The Gathering* throughout my youth and early adulthood. I'm friends with several professional Magic players and people who went on to design major trading card games, including those who worked on *Flesh and Blood* and many others.

I myself have built several **digital trading card games**, mostly as a contract developer, so I can't discuss the specific games, however in this process I have learned a lot about the best approaches and common pitfalls for building these sorts of game.

This series isn't meant to be a tutorial—it's not about what code to type to create a working trading card game in Unity or another engine. Instead, it's an overview of the challenging aspects of trading card games as I understand them. I'll cover the concepts that are difficult to figure out, the elements that are hard to implement correctly, and the fundamental ideas that, if you don't get right from the start, will prevent your game from working, scaling, or functioning properly.

At its core, this series addresses the question: if you were facing a **blank canvas** today and wanted to implement a digital trading card game, how would you approach it? It's an intimidating challenge. Any engineering problem is most difficult when you're starting from scratch, especially if it's something you've never built before.

Trading card games present a particular challenge because they combine extremely complex interactions between different cards, gameplay mechanics, and rules with what appears superficially to be a simple implementation—just rectangles of digital cardboard moving around the screen. This combination creates a situation where it's easy for developers to misunderstand the actual challenges involved in creating a trading card game and how to overcome them. My goal is to share my experience so that others can benefit and avoid making the same mistakes I've made when building these games.

Before diving into the main content, I should clarify that when I talk about **digital trading card games**, I really mean **digital card games** more broadly. Many of these concepts apply whether you're building a *rogue-lite deck builder* like *Slay the Spire*, or games inspired by trading card games but not directly in that genre, such as **Faeria** or **Prismata**. While every game has unique rules and systems, the core principles persist across different implementations.

## So, What is the Theoretical Game We Are Building?

To frame this discussion effectively, let's define what game we're conceptually building. Much of this material is abstract, and it's easier to articulate clearly if we have a specific model in mind rather than trying to address all possible variations of rules and structures.

For this blog series, we'll assume we're building a game mechanically similar to **_Hearthstone_**. This means we have:
- Decks of cards
- A playing area (battlefield)
- Minions/monsters/units/creatures that enter play, remain on the battlefield, and engage in combat
- Spell/skill/action cards that create temporary effects before being discarded

Throughout this series, I'll point out when certain concepts might differ for other game designs. But fundamentally, we're discussing a game where two players take alternating turns and play cards from their hands.

The core concepts we'll explore are adaptable to other approaches. You could build a game with real-time alternating actions between players or many other variations. Even games like **_The Bazaar_** are, in many ways, still trading card games at heart. However, for clarity, we'll focus on the minimalist trading card game structure I've outlined.

## What are the Foundational Objects of a Digital TCG?

When thinking about a trading card game, it's useful to consider what objects exist and interact within the game. You can think of this in terms of **_object-oriented programming_**. While you don't have to frame it exactly that way, there is fundamentally a set of objects that act upon each other, which is the simplest way to conceptualize the game.

### Cards

The first and most obvious object in any card game is **cards**. Cards exist in various areas: the player's deck, hand, board, or other locations. They are the fundamental unit of the game.

When considering cards in a digital trading card game, it's important to distinguish between:
1. The specific card instance that exists in your hand
2. The card in the abstract (its "platonic ideal")

For example, in **_Magic: The Gathering_**, there's the abstract concept of **Lightning Bolt**, which is a card that says "deal three damage to target creature or player." Then there's the specific copy of **Lightning Bolt** that exists in your hand. Magic players differentiate between these—the abstract card represents the **platonic ideal** of its functionality, cost, and rarity, while the card in your hand is a specific instance drawn from that ideal.

An interesting aspect of paper games like **Magic** is that cards reset to their platonic ideal instead of maintaining state changes. If you play a **Lightning Bolt** and somehow return it to your hand, it's treated as a new card. Digital games like **_Hearthstone_**, however, can maintain state across zones—a minion might die and return to your hand with its buffs intact. This is possible because digital games can track card states without the limitations of physical cards. **Eternal**, developed by Direwolf Digital, has a mechanic called **Warcry** that buffs the top unit card in your deck—something that would be impossible to implement in a physical game.

### Players

Another fundamental object is the **player**. In some games, players have direct representations in play; in others, they don't. In **_Hearthstone_**, the hero represents the player. In **Magic**, the player has a life total that decreases over time. Many games involve players taking damage until they lose. In games like **Netrunner**, players aren't directly attacked; instead, they target other entities. Regardless, the player exists as the entity who acts on cards and holds cards in their hand.

### Zones

The third foundational object is less obvious: **zones**. While this term comes from **Magic**, other games may use different names. Zones are the spaces where cards exist. Generally, a card exists in exactly one zone at any given time.

For nearly all games, you can map zones to their components. In **Magic**, zones include your hand, deck, battlefield, stack, graveyard, etc. This model applies to **Hearthstone** as well, with zones like the deck zone, hand zone, and battlefield zone, even if they aren't explicitly called zones. Event though **Hearthstone** doesn't have a searchable discard pile, cards still go to a defined place—a discard zone—when destroyed.

Even in a game like **_Slay the Spire_**, which lacks an in-play zone like **Magic** or **Hearthstone**, cards are categorized into zones like the deck, hand, discard pile, and exhaust pile (where cards are removed for the remainder of the game).

## The Core Game Loop

Fundamentally, the business logic of implementing a trading card game revolves around players acting on cards by moving them between zones, which triggers interactions. This is the basic logic:
1. Playing a card causes it to enter a new zone
2. This movement triggers effects based on the card's rules
3. It may also trigger effects based on the rules of other cards it influences
4. Or it may trigger effects based on cards that are waiting for an action to activate

Every trading card game can be distilled down to these three primitive constructs: **cards**, **players**, and **zones**. Other constructs may exist in specific games, such as counters that modify cards in play, but the core mechanics remain the same: you (the player) draw cards and play cards which move themselves and other cards between zones. This defines the fundamental nature of trading card games.

## Next Time

Now that we've established the fundamental objects in a trading card game and the basic actions (moving cards between zones), our next topic will be how to actually implement cards in such a system.

We'll explore how to conceptualize a computer system with zones, cards, and players, and discuss the best ways to implement cards. We'll walk through examples of a theoretical game model based on **_Hearthstone_**, where you play cards from your hand, and examine what it means to implement a card in that system. We'll also cover some common technical pitfalls that arise when implementing these concepts.
