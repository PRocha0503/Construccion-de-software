using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameCalls : MonoBehaviour
{
    public string url;
    private APICaller www;
    Request response = new Request();
    SceneChanger sChanger;


    void Start()
    {
        www = FindObjectOfType<APICaller>();
        sChanger= FindObjectOfType<SceneChanger>();
    }

    void printRequest(Request _req){
        Debug.Log("Response Code: "+response.responseCode);
        Debug.Log("Error: "+response.error);
        Debug.Log("Result: "+response.result);
        Debug.Log("Response: "+response.response);
    }

    // public void postGame(string classDB, string username, string pwd, int levels_unlocked=1){
    //     User myObject = new User();
    //     myObject.classDB = classDB;
    //     myObject.username = username;
    //     myObject.pwd = pwd;
    //     myObject.levels_unlocked = levels_unlocked;
    //     string json = JsonUtility.ToJson(myObject);
    //     StartCoroutine(www.PostRequest(url,json, request =>
    //     {
    //         response = request;
    //         printRequest(response);
             
    //     }));
    // }

    // public void addGame()
    // {
        
    //     userAPI.addUser("miguel",username_text,pwd_text);
    // }
}
