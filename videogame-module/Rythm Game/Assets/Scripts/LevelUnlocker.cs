using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// public class LevelSelector {
//     public string nextScene;
//     public string songName;
//     public int difficulty;
//     public int numberOfNotes;

// }
// public class LevelSelectorList {
//     public List<LevelSelector> levels;

// }

public class LevelUnlocker : MonoBehaviour
{
    [SerializeField] private Button[] levelButtons;
    public static LevelUnlocker instance;
    private int levelsUnlocked;



    private void Start()
    {

        instance = this;
        levelsUnlocked = UserCalls.currentUser.levels_unlocked;
        //levelsUnlocked = 9;
        foreach (var button in levelButtons)
        {
            button.interactable = false;
        }
        unlockLevels(levelsUnlocked);

    }
    
    public void unlockLevels(int unlocks)
    {
        for (int i = 0; i < unlocks; i++)
        {
            levelButtons[i].interactable = true;
        }
        
    }
}