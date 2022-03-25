using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FlameAnim : MonoBehaviour
{

    public void ChangeAnimation(string color)
    {
        if (color == "Yellow")
        {
            GetComponent<Animator>().Play("FlameW_Start");
        }
        else if (color == "Blue")
        {
            GetComponent<Animator>().Play("FlameB_Start");
        }
        else if (color == "Red")
        {
            GetComponent<Animator>().Play("FlameR_Start");
        }
        else
        {
            GetComponent<Animator>().Play("FlameW_Start");
        }
    }
}
