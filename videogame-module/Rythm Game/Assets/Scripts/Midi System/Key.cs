/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
Manages the sprite and input of each key
05/04/2022
*/

using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Key : MonoBehaviour
{
    [SerializeField] private AudioSource drumSound;
    [SerializeField] private Animator drumset;
    public Sprite[] spriteArray;
    public KeyCode input;

    enum DrumAnimations
    {
        BassDrum,
        FloorTom,
        SnareDrum,
        Hihat,
        Tom2,
        Tom1,
        Ride,
        Crash
    };

    [SerializeField] private DrumAnimations animationToPlay;

    private void Start()
    {
    }


    void Update()
    {
        //Change the sprite when the player presses the key
        if(Input.GetKeyDown(input))
        {
            GetComponent<SpriteRenderer>().sprite=spriteArray[1];
            drumSound.Play();
            
            //This activated the drumset animation
            Drumset.instance.PlayDrumAnimation(animationToPlay.ToString());
        }
        else if (Input.GetKeyUp(input))
        {
            GetComponent<SpriteRenderer>().sprite=spriteArray[0];
        }
    }
    
}