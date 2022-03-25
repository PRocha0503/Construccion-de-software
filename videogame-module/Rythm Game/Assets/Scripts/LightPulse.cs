using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering.Universal;

public class LightPulse : MonoBehaviour
{
    //List of colors used in ChangeColor function
    [SerializeField] Color[] c;
    [SerializeField] private float[] intensity = {.6f,.8f,.4f}; 

    public void ChangeColor(string color)
    {

        if (color == "Yellow")
        {
            GetComponent<Light2D>().color = c[0];
            GetComponent<Light2D>().intensity = intensity[0];
        }
        else if (color == "Blue")
        {
            GetComponent<Light2D>().color = c[1];
            GetComponent<Light2D>().intensity = intensity[1];
        }
        else if (color == "Red")
        {
            GetComponent<Light2D>().color = c[2];
            GetComponent<Light2D>().intensity = intensity[2];
        }
        else
        {
            GetComponent<Light2D>().color = Color.white;
        }
    }
}
