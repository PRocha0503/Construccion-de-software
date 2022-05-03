/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
Script to handle game calls from unity
05/04/2022
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DBGame {
    public string username;
    public int level_id;
    public int score;
    public int correct_number_of_notes;
}

public class GameCalls : MonoBehaviour
{
    public string url;
    private APICaller www;
    Request response = new Request();
    SceneChanger sChanger;
    public static GameCalls instance;
    private UserCalls userAPI;
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

    public void postGame(string username, int level_id, int score, int correct_number_of_notes=1){
        DBGame myGame = new DBGame();
        myGame.username = username;
        myGame.level_id = level_id;
        myGame.score = score;
        myGame.correct_number_of_notes = correct_number_of_notes;
        string json = JsonUtility.ToJson(myGame);
        StartCoroutine(www.PostRequest(url,json, request =>
        {
            response = request;
            printRequest(response);
            userAPI = FindObjectOfType<UserCalls>();
            userAPI.getUser(UserCalls.currentUser.username);
             
        }));
    }
}
