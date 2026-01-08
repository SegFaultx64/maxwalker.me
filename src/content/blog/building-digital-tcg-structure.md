---
title: "Building a Digital Trading Card Game: Implementing the Core Structure"
date: "2025-04-21"
excerpt: "Part two of the TCG series. We dive into implementing the game object, players, zones, and cards—including the critical distinction between card data and card attributes that trips up many developers."
shortTitle: "Building a Digital TCG: Core Structure"
---

Let's start from the root object and work our way down through the various objects. In the context of a trading card game, the root object is the game or the instance of the game. It's not the game itself, but it's the game between two players playing. This game then has players, and players have zones, while zones have cards within them.

There's some subtlety here; there are often zones that can be owned by both players or neither player. A lot of games will have that. For example, in **_Magic_**, the Stack is owned by both players. But generally speaking, that's the hierarchy: Game, players, zones, cards.

We'll walk through in that order and explain how you might implement this if you're going to do it from a clean slate today. I'm going to give some code examples in **C#**, because a lot of the digital card games I've worked on have been built in C#. That doesn't mean that you couldn't do this in other languages.

There are some concepts from **C#** that work really well for card games, like the idea of pass-by-reference versus pass-by-value being an optional thing between structs and objects. But that's technical detail, and you could engineer this in any language, any set of tools and achieve the same end result.

## The Game Object

At the root of the tree of objects that exist in a card game is the game itself. This is an instance of a game being played between two players. So, the game itself obviously has a reference to both of the players in the game. It probably also has a reference to zones that exist but are not owned by a player. For most games, most zones are going to be owned by one player.

However, in **_Magic: The Gathering_**, the stack is not owned by a player; it's shared between both players in the game. You might think that the battlefield in **_Magic_** is also owned by both players. I would say the battlefield is actually two zones. We'll get into that when we get to the zone section. But each one of those is owned by one of the two players.

The game will have a reference to the players and the zones which are not owned by a player. I think the zones that are owned by a player should be under the player themselves. It's probably beneficial as well for the game to have a reference to every card in the game. There are aspects about the way this works that make a lot of sense if you have access to each card in the game.

The game will also have some sort of concept of the turn structure generally. The turn structure can be placed into two basic categories: one is which player is currently active, and the other is the overall structure of the turn and the game. When I think about a trading card game that is turn-based, even though there are larger turn structures—like in **_Magic_**, where there are alternating turns back and forth—in other games that use alternating actions or similar, there's still this concept of it being one or the other player's turn to act at any given time.

As long as your game is truly turn-based, which most trading card games are, there is always one or the other player acting at that time, even if it's the other player's turn. To make this clear, in **_Magic: The Gathering_**, when you can respond to things on the stack, even though there's this back and forth between the players, at any given time there's a specific player who must act or pass in the game.

So, activity refers to which player is currently active—who needs to act or pass in the game structure. The turn structure refers to where the players are in the overall sequence of states through which the turn passes. In **_Magic_**, this would be untap, upkeep, draw, main phase, combat, and there's sub-steps within a lot of these as well—combat, second main phase, end step.

This idea of a series of events happening means that cards can trigger at the start of these phases. There are different rules about what you can do; for example, certain cards can only be played during specific phases in **_Magic_**. You can't play sorceries during combat, etc.

There are also often special rules that trigger when entering a phase. For instance, in **_Magic_**, at the beginning of the untap step, you untap all your cards. When entering combat, you have the ability to declare attackers and blockers, along with a whole special set of rules that exist around combat.

**_Hearthstone_** is similar; it doesn't have a combat step, but it has a start of turn, a drawing of a card, and then you get to play things and attack things before it becomes your opponent's turn.

So, the basic objects that the game will include are the players, references to the players that are participating in the game, the zones that aren't owned by any one of those players, probably all the cards in the game, and the current turn structure. Other little elements may exist here and there, but those fundamentals are what the game will look like.

## Players

Below the game are the players in that game. We can assume that each player is basically identical to each other. I mean, there are things like names that are associated with them, but we can just look at an individual player in the game for the concept of this.

A player consists of **metadata** about the player themselves. For instance, if your game is one that has a life total associated directly with the player, like **_Magic: The Gathering_**, that would be your life total. It includes things like the player's name and that sort of thing.

The main thing that the player has is a collection of **zones**. So, a player will have a deck, a hand, probably a discard pile, and an in-play zone, along with quite a few other zones. Most of the rest of the player object is not really data, but actions that it can act on other cards and things like that.

So, that's basically, at its fundamentals, the player. It's really about the ownership of the zones and then the actions that act on those zones.

## Zones

In some respects, zones are the simplest of the objects in this setting. You could implement zones as literally just a list of cards, and for some purposes, that might be appropriate. Probably there are a few other things that you want to know about on a zone, like it being able to define whether or not cards from that zone are playable, or whether those cards are face up or face down, whether they're hidden or revealed to either their owner or their opponent, those sorts of things.

But generally speaking, zones are effectively just, as I mentioned, a list of cards. These are the cards that are currently in this zone, and this is the player that owns me, is probably how you implement a zone.

## Cards

Cards are certainly the most interesting and the most complicated object in this hierarchy. Cards are representing, in this context, an instance of a card that exists in the game. But this gets extremely complicated with cards because they don't just represent the instance; they also represent the root card idea.

To go back to a previous example I used in the last entry, the card **_Lightning Bolt_** versus a copy of the card **_Lightning Bolt_**. The thing that's gotten wrong by many people when they set out to implement a trading card game is conflating these two things. There is the idea that there is only one card object in a game. But realistically, every card is represented by two objects: the data of the card and what we would call the attributes of the card.

The data of the card is the representation of that *platonic ideal* of what this card is in the abstract if you opened one from a booster pack. What are the attributes, rules, and all those sorts of things that are associated with the card? Then, the attributes are a layer on top of that data that represent the current values of these things. Whether it's the same as it is in the data, or the attributes have been modified by another card or the ability of this card itself, etc.

Before diving deeply into this difference between attributes and data, let's talk about what the things are that a card needs to know:

- **Name**: The card's name
- **Cost**: Most games' cards have costs
- **Faction or Identity**: In **_Magic_**, the cost determines that. In other games, like **_Hearthstone_**, there's just a cost of a certain number of mana, and then the faction or identity is a separate trait
- **Type**: In our imaginary pseudo-**_Hearthstone_** game, there are **_units_** and **_skills_**. Units are cards that come into play, stay in play, and engage in combat. Skills are cards that, when they're played, something happens and then they cease to exist
- **Subtypes or Tags**: A subtype or a tag basically defines the categorization of that card. In **_Magic_**, creature types are a great example. **_Goblins_** are a tag. Goblin being written on the card as a subtype doesn't actually do anything for that card, but it means cards can count goblins, give all goblins bonuses, or destroy a goblin
- **Stats**: The attack and defense in most games, health and attack or damage. Some games will have other stats like **_armor_**
- **Rules**: The logic that defines how the card works

The last major thing that matters on a card is the **_rules_** of the card itself. You can think about this as basically a single field in a paper card game—the text printed onto the card that describes its functionality. In a digital card game, this is really code that defines how the card works in this complicated rules engine system in which it exists.

How you implement rules on the card is something I'm going to write an entire piece on next when I talk about how triggers work. But fundamentally, you're attaching the logic to the card.

### Attributes vs. Data

Now that we've established what fields fundamentally exist on a card, it's a good time to talk about the idea of **_attributes_** versus **_data_**. To reiterate: attributes are the current status of the card and data is the status of the platonic ideal. It's basically the initial status if you want to think about it that way.

To give a very concrete example, a card will have an attack value and it will have a current attack value. For instance, a card may have an attack value of four, but it's been buffed by something, debuffed by something else, and then buffed by a third thing, resulting in it having a current attack value of eight. The fundamental difference between data and attributes is that the data will never change, but the attributes will. In fact, the attributes' whole purpose is to change when you create a new instance of a card.

Imagine you have a game that's digital only, and you have a card that creates a random card in your hand. When you create that random card, the attributes and the data will be exactly the same. They will have the same exact values because the data defines the initial values of the attributes. When you create a card in a well-designed digital card game, you define what its data is. You don't define what its attributes are because that is defined by the process of the game happening.

The interesting thing this creates is that attributes are often the only thing you care about. You don't really care about the data once the card has been created. However, there are actually cards that do care a little bit about what that initial data was.

A straightforward example is a card that says, "Destroy a monster with base defense five or less." When referring to "base defense," it generally means the default value, not its value when modified by buffs and debuffs. A more interesting example is if you have a card that says, "Give a monster you control plus three attack until the end of the turn." This card cares a lot about the default data of the card because it wears off at the end of the turn.

You wouldn't want that card to give the creature three extra attack and then remove three attack at the end of the turn. You also don't want to remove three attack if that creature now has zero attack, as in your game, attack can't go below zero. Thus, you risk having it go to negative attack, which is undesirable.

Moreover, you wouldn't want it to function as a modifier and then a reverse modification because you may have modifications that change in value over time. You might want them to either be consistent with the change or not be. For example, if there's a unit that comes into play and has the ability that states, "If you have three other units, give a unit of your choice plus three attack," that card would need to effectively fix the value of the change. This leads into more complex topics concerning the modification system, but that's a separate issue altogether.

## Next Time

In the next entry, we'll dive deep into how triggers and effects work—the system that makes cards actually *do* things when they're played or when certain game events occur. This is where most of the complexity in a trading card game lives, and getting it right is essential for a game that can scale to hundreds or thousands of unique cards.
