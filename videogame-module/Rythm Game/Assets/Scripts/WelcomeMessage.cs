/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
Simple script used to add the user name to the menu screen
05/04/2022
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class WelcomeMessage : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        this.GetComponent<TextMeshProUGUI>().text += UserCalls.currentUser.username;
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
