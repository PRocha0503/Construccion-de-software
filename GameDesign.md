# **DrumStar**

## _Game Design Document_

---

##### **Pablo Rocha A01028638 PONGAN SUS NOMBRES**

##### **Miguel Arriaga A01028570**

##

## _Index_

---

- [**DrumStar**](#drumstar)
  - [_Game Design Document_](#game-design-document)
        - [**Pablo Rocha A01028638 PONGAN SUS NOMBRES**](#pablo-rocha-a01028638-pongan-sus-nombres)
        - [**Miguel Arriaga A01028570**](#miguel-arriaga-a01028570)
  - [_Index_](#index)
  - [_Game Design_](#game-design)
    - [**Summary**](#summary)
    - [**Gameplay**](#gameplay)
    - [**Mindset**](#mindset)
  - [_Technical_](#technical)
    - [**Screens**](#screens)
    - [**Controls**](#controls)
    - [**Mechanics**](#mechanics)
  - [_Level Design_](#level-design)
    - [**Themes**](#themes)
    - [**Game Flow**](#game-flow)
  - [_Development_](#development)
    - [**Abstract Classes / Components**](#abstract-classes--components)
    - [**Derived Classes / Component Compositions**](#derived-classes--component-compositions)
  - [_Graphics_](#graphics)
    - [**Style Attributes**](#style-attributes)
    - [**Graphics Needed**](#graphics-needed)
  - [_Sounds/Music_](#soundsmusic)
    - [**Style Attributes**](#style-attributes-1)
    - [**Sounds Needed**](#sounds-needed)
    - [**Music Needed**](#music-needed)
  - [_Schedule_](#schedule)

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

---

### **Themes**

1. Forest
   1. Mood
      1. Dark, calm, foreboding
2. Objects
   1. _Ambient_
      1. Fireflies
      2. Beams of moonlight
      3. Tall grass
   2. _Interactive_
      1. Wolves
      2. Goblins
      3. Rocks
3. Castle
   1. Mood
      1. Dangerous, tense, active
   2. Objects
      1. _Ambient_
         1. Rodents
         2. Torches
         3. Suits of armor
      2. _Interactive_
         1. Guards
         2. Giant rats
         3. Chests

### **Game Flow**

1. Player starts in forest
2. Pond to the left, must move right
3. To the right is a hill, player jumps to traverse it (&quot;jump&quot; taught)
4. Player encounters castle - door&#39;s shut and locked
5. There&#39;s a window within jump height, and a rock on the ground
6. Player picks up rock and throws at glass (&quot;throw&quot; taught)
7. … etc.

_(example)_

## _Development_

---

### **Abstract Classes / Components**

1. Conductor (Used to keep track of the song)
2. SceneLoader (Used to manage scenes)
3. MusicPlayer

_(example)_

### **Derived Classes / Component Compositions**


1. BaseNote
   1. WholeNote
   2. HalfNote
   3. QuarterNote
   4. EightNote
   5. SixteenthNote
2. BaseRest
   1. WholeRest
   2. HalfRest
   3. QuarterRest
   4. EightRest
   5. SixteenRest
3. BaseHitbox
   1. EarlyHitbox
   2. GoodHitbox
   3. PerfectHitbox
   4. LateHitbox
4. BaseDancer
   1. SkeletonDancer
   2. SlimeDancer
   3. MonsterDancer

_(example)_

## _Graphics_

---

### **Style Attributes**

Dark palette consistent for all the levels

Pixel-Art graphics sorrounded by black lines (Cartoony style)

Visual feedback for hitting a note right (flashes of color, text showing how good the press was) as well as if there was a bad hit or none at all, progresively more audience as the score gets higher.

### **Graphics Needed**

1. Characters
   1. Hooded-Figure (Player)
   2. Dancers
      1. Skeleton
      2. Slime
      3. Zombie
      4. etc.
2. Blocks
   1. Dirt
   2. Dirt/Grass
   3. Stone Block
   4. Stone Bricks
   5. Tiled Floor
   6. Weathered Stone Block
   7. Weathered Stone Bricks
3. Scene
   1. Background Graveyard
      1. Tombstones
      2. Bones
      3. Grass
      4. Dirt
      5. river?
   2. Pentagram
      1. Large bones for pentagram lines
      2. Notes (Skull themed)
         1. Whole note
         2. Half note
         3. Quarter note
         4. Eighth note
         5. Sixteenth note
         6. Whole rest
         7. Half rest
         8. Quarter rest
         9. Eighth rest
         10. Sixteenth rest

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
