/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
Changes the pillars light intensity to create cool animation
05/04/2022
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering.Universal;

public class LightPillar : MonoBehaviour
{
    [SerializeField] private new Animator light;
    [SerializeField] private Animator flame;


    public void UpdateLights(int currentMultiplier)
    {
        if (currentMultiplier == 1)
        {
            light.SetInteger("Multiplier", 1);
            flame.SetInteger("Multiplier", 1);
        }
        if (currentMultiplier == 2)
        {
            light.SetInteger("Multiplier", 2);
            flame.SetInteger("Multiplier", 2);
        }

        if (currentMultiplier == 3)
        {
            light.SetInteger("Multiplier",3);
            flame.SetInteger("Multiplier", 3);
        }

    }
}
