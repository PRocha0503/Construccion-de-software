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
