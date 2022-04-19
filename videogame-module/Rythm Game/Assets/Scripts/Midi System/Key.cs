/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
Manages the sprite and input of each key
05/04/2022
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Key : MonoBehaviour
{
    [SerializeField] private AudioSource drumSound;
    public Sprite[] spriteArray;
    public KeyCode input;
    void Update()
    {
        if(Input.GetKeyDown(input))
        {
            GetComponent<SpriteRenderer>().sprite=spriteArray[1];
            drumSound.Play();
        }
        else if (Input.GetKeyUp(input))
        {
            GetComponent<SpriteRenderer>().sprite=spriteArray[0];
        }
    }
}