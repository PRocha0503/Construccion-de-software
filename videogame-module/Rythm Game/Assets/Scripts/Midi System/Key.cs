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
            PlayDrumAnimation(animationToPlay);
        }
        else if (Input.GetKeyUp(input))
        {
            GetComponent<SpriteRenderer>().sprite=spriteArray[0];
        }
    }


    private void PlayDrumAnimation(DrumAnimations anim)
    {
        if (anim == DrumAnimations.BassDrum)
            drumset.SetTrigger("BassDrum");
        else if (anim == DrumAnimations.FloorTom)
            drumset.SetTrigger("FloorTom");
        else if (anim == DrumAnimations.SnareDrum)
            drumset.SetTrigger("SnareDrum");
        else if (anim == DrumAnimations.Hihat)
            drumset.SetTrigger("Hihat");
        else if (anim == DrumAnimations.Tom2)
            drumset.SetTrigger("Tom2");
        else if (anim == DrumAnimations.Tom1)
            drumset.SetTrigger("Tom1");
        else if (anim == DrumAnimations.Ride)
            drumset.SetTrigger("Ride");
        else if (anim == DrumAnimations.Crash)
            drumset.SetTrigger("Crash");
    }
}