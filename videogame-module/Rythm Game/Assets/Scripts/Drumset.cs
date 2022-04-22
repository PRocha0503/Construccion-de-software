using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Drumset : MonoBehaviour
{
    //Variables Accessing Child Objects
    [SerializeField] Animator bassDrum;
    [SerializeField] Animator leftHalf;
    [SerializeField] Animator rightHalf;
    public static Drumset instance;

    private void Start()
    {
        instance = this; 
    }


    public void PlayDrumAnimation(string anim)
    {
        if (anim == "BassDrum")
            bassDrum.SetTrigger("BassDrumHit");
        else if (anim == "FloorTom")
            leftHalf.SetTrigger("FloorTomHit");
        else if (anim == "SnareDrum")
            rightHalf.SetTrigger("SnareDrumHit");
        else if (anim == "Hihat")
            rightHalf.SetTrigger("HihatHit");
        else if (anim == "Tom2")
            leftHalf.SetTrigger("Tom2Hit");
        else if (anim == "Tom1")
            rightHalf.SetTrigger("Tom1Hit");
        else if (anim == "Ride")
            leftHalf.SetTrigger("RideHit");
        else if (anim == "Crash")
            rightHalf.SetTrigger("CrashHit");
    }
}
