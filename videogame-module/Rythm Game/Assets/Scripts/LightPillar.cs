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
        light.SetInteger("Multiplier", currentMultiplier);
        flame.SetInteger("Multiplier", currentMultiplier);
    }
}
