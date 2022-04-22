using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

// UnityWebRequest.Get
public class getUser : MonoBehaviour
{
    public string url;
    void Start()
    {
        // A correct website page.
        // StartCoroutine(GetRequest("localhost:8080/api/user/john"));
        StartCoroutine(GetRequest(url));

    }

    IEnumerator GetRequest(string uri)
    {
        UnityWebRequest www = UnityWebRequest.Get(uri);
        
        // Request and wait for the desired page.
        Debug.Log(www.url);
        yield return www.SendWebRequest();
        Debug.Log(www);
        Debug.Log("Result: " + www.result);
        Debug.Log("Error: " + www.error);
        Debug.Log("Response: " + www.downloadHandler.text);
        
    }
}
