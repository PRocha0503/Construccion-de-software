# **DrumStar**

## _Game Design Document_

---

##### **Pablo Rocha A01028638 PONGAN SUS NOMBRES**

##### **Miguel Arriaga A01028570**

##

## _Index_

---

1. [Index](#index)
2. [Game Design](#game-design)
   1. [Summary](#summary)
   2. [Gameplay](#gameplay)
   3. [Mindset](#mindset)
3. [Technical](#technical)
   1. [Screens](#screens)
   2. [Controls](#controls)
   3. [Mechanics](#mechanics)
4. [Level Design](#level-design)
   1. [Themes](#themes)
      1. Ambience
      2. Objects
         1. Ambient
         2. Interactive
      3. Challenges
   2. [Game Flow](#game-flow)
5. [Development](#development)
   1. [Abstract Classes](#abstract-classes--components)
   2. [Derived Classes](#derived-classes--component-compositions)
6. [Graphics](#graphics)
   1. [Style Attributes](#style-attributes)
   2. [Graphics Needed](#graphics-needed)
7. [Sounds/Music](#soundsmusic)
   1. [Style Attributes](#style-attributes-1)
   2. [Sounds Needed](#sounds-needed)
   3. [Music Needed](#music-needed)
8. [Schedule](#schedule)

## _Game Design_

---

### **Summary**

The game is going to be inspired in Guitar Hero, adapted for drumset learning and training. Musical notes are going to move on a partiture accross de screen and the player needs to play them at the correct time. This will help the player learn to read partitures and rhythm.

### **Gameplay**

Notes will move across the screen and the player must play them at the right time. The goal is to play the most correct notes in order to get the maximum score. Good scores will unlock new songs.
The drums will be represented with keystrokes.

### **Mindset**

We want to provoke a drummer mindset to the player. The feeling of what it is like to play music and slowly improve. The player will feel the stress that comes from learning a new instrument and the glory of achieving a goal. We intend to achieve this by challenging the user to slowly learn new songs and unlock new challenges.

## _Technical_

---

### **Screens**

<!--
1. Title Screen
   1. Options
2. Level Select
3. Game
   1. Inventory
   2. Assessment / Next Level
4. End Credits -->

1. Log In Screen
2. Home/Level Select
3. Game
   1. Assessment / Next Level

### **Controls**

The player will interact with the game with keystrokes. Each drum will be represented by a key. For example, the bass drum could be represented by the "J" key. The player will not be able to choose his inputs, they will be decided by the development team.

The in-game-events triggered by the player are going to be:

1.  when a player hits a key the corresponding drum will sound.
2.  If the key corresponds to the drum that had to be played according to the partiture and the timing is correct, the player score will increase.

### **Mechanics**

<!-- Are there any interesting mechanics? If so, how are you going to accomplish them? Physics, algorithms, etc. -->

A very interesting mechanic to implement will be converting a drumset partiture into something that can be interpreted and processed by Unity to instance the right notes at the correct time.

Another game mechanic to implement are different trigger zones, that give the player different amount of points, for example, 10 points for a perfect timing note.

The team will also have to develop an algorithm so that the notes move across the screen at the correct tempo and the different length of notes are represented accordingly.

## _Level Design_

The game will be based in a cemetery, in which a hooded figure will play the drumset and other monsters such as skeletons and blobs will cheer for him.

The game will have three base levels, which are going to be represented as songs. Each song will be harder than the previous, including more difficult notes and tempos to play. 

The visual styles of the levels are all going to be similar, however, more elements are going to be added as the level progresses. This graphic style will be described fully in the graphic section. 

The playability of each level will also be based around the same gameplay concept already described. The only new mechanics introduced with each level will be faster tempos, meaning that the notes will travel across the screen with higher intensity and more complicated partitures to read.

### **Themes**

1. Cemetery
   1. Mood
      1. Dark, party
2. Objects
   1. _Ambient_
      1. Tombstones
      2. Skeletons
      3. Blobs
      4. Bats
      5. Dancing monsters
      6. Party lights
   2. _Interactive_
      1. Music notes made out of bones

### **Game Flow**

1. 
1. Player/hooded figure will be sat in a drumset, in a cemetery.
2. Notes will begin to fly accross the screen as music starts, the player must play them
3. The ambient, already surrounded by tombstones, will become more party-intense as the player plays notes.
4. Skeletons and other monsters will begin to rise from the death and dance and party as the player progresses though the song/score.
5. When the song ends, the crowd will cheer and in case of having the required score, a pop up to the next level will appear. Otherwise, a retry pop up will appear.

_(example)_

## _Development_

---

### **Abstract Classes / Components**

1. BasePhysics
   1. BasePlayer
   2. BaseEnemy
   3. BaseObject
2. BaseObstacle
3. BaseInteractable

_(example)_

### **Derived Classes / Component Compositions**

1. BasePlayer
   1. PlayerMain
   2. PlayerUnlockable
2. BaseEnemy
   1. EnemyWolf
   2. EnemyGoblin
   3. EnemyGuard (may drop key)
   4. EnemyGiantRat
   5. EnemyPrisoner
3. BaseObject
   1. ObjectRock (pick-up-able, throwable)
   2. ObjectChest (pick-up-able, throwable, spits gold coins with key)
   3. ObjectGoldCoin (cha-ching!)
   4. ObjectKey (pick-up-able, throwable)
4. BaseObstacle
   1. ObstacleWindow (destroyed with rock)
   2. ObstacleWall
   3. ObstacleGate (watches to see if certain buttons are pressed)
5. BaseInteractable
   1. InteractableButton

_(example)_

## _Graphics_

---

### **Style Attributes**

What kinds of colors will you be using? Do you have a limited palette to work with? A post-processed HSV map/image? Consistency is key for immersion.

What kind of graphic style are you going for? Cartoony? Pixel-y? Cute? How, specifically? Solid, thick outlines with flat hues? Non-black outlines with limited tints/shades? Emphasize smooth curvatures over sharp angles? Describe a set of general rules depicting your style here.

Well-designed feedback, both good (e.g. leveling up) and bad (e.g. being hit), are great for teaching the player how to play through trial and error, instead of scripting a lengthy tutorial. What kind of visual feedback are you going to use to let the player know they&#39;re interacting with something? That they \*can\* interact with something?

### **Graphics Needed**

1. Characters
   1. Human-like
      1. Goblin (idle, walking, throwing)
      2. Guard (idle, walking, stabbing)
      3. Prisoner (walking, running)
   2. Other
      1. Wolf (idle, walking, running)
      2. Giant Rat (idle, scurrying)
2. Blocks
   1. Dirt
   2. Dirt/Grass
   3. Stone Block
   4. Stone Bricks
   5. Tiled Floor
   6. Weathered Stone Block
   7. Weathered Stone Bricks
3. Ambient
   1. Tall Grass
   2. Rodent (idle, scurrying)
   3. Torch
   4. Armored Suit
   5. Chains (matching Weathered Stone Bricks)
   6. Blood stains (matching Weathered Stone Bricks)
4. Other
   1. Chest
   2. Door (matching Stone Bricks)
   3. Gate
   4. Button (matching Weathered Stone Bricks)

_(example)_

## _Sounds/Music_

---

### **Style Attributes**

Again, consistency is key. Define that consistency here. What kind of instruments do you want to use in your music? Any particular tempo, key? Influences, genre? Mood?

Stylistically, what kind of sound effects are you looking for? Do you want to exaggerate actions with lengthy, cartoony sounds (e.g. mario&#39;s jump), or use just enough to let the player know something happened (e.g. mega man&#39;s landing)? Going for realism? You can use the music style as a bit of a reference too.

Remember, auditory feedback should stand out from the music and other sound effects so the player hears it well. Volume, panning, and frequency/pitch are all important aspects to consider in both music _and_ sounds - so plan accordingly!

### **Sounds Needed**

1. Effects
   1. Soft Footsteps (dirt floor)
   2. Sharper Footsteps (stone floor)
   3. Soft Landing (low vertical velocity)
   4. Hard Landing (high vertical velocity)
   5. Glass Breaking
   6. Chest Opening
   7. Door Opening
2. Feedback
   1. Relieved &quot;Ahhhh!&quot; (health)
   2. Shocked &quot;Ooomph!&quot; (attacked)
   3. Happy chime (extra life)
   4. Sad chime (died)

_(example)_

### **Music Needed**

1. Slow-paced, nerve-racking &quot;forest&quot; track
2. Exciting &quot;castle&quot; track
3. Creepy, slow &quot;dungeon&quot; track
4. Happy ending credits track
5. Rick Astley&#39;s hit #1 single &quot;Never Gonna Give You Up&quot;

_(example)_

## _Schedule_

---

_(define the main activities and the expected dates when they should be finished. This is only a reference, and can change as the project is developed)_

1. develop base classes
   1. base entity
      1. base player
      2. base enemy
      3. base block
2. base app state
   1. game world
   2. menu world
3. develop player and basic block classes
   1. physics / collisions
4. find some smooth controls/physics
5. develop other derived classes
   1. blocks
      1. moving
      2. falling
      3. breaking
      4. cloud
   2. enemies
      1. soldier
      2. rat
      3. etc.
6. design levels
   1. introduce motion/jumping
   2. introduce throwing
   3. mind the pacing, let the player play between lessons
7. design sounds
8. design music

_(example)_
