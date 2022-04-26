using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LevelUnlocker : MonoBehaviour
{
    [SerializeField] private Button[] levelButtons;
    private int levelsUnlocked;


    private void Start()
    {
        levelsUnlocked = 2;
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