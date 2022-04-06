using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Key : MonoBehaviour
{
    public Sprite[] spriteArray;
    public KeyCode input;
    void Update()
    {
        if(Input.GetKey(input))
        {
            GetComponent<SpriteRenderer>().sprite=spriteArray[1];
        }
        else
        {
            GetComponent<SpriteRenderer>().sprite=spriteArray[0];
        }
    }
}