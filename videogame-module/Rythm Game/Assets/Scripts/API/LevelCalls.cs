/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
Script used to handle level calls from unity
05/04/2022
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class Level{
    public int level_number;
    public int difficulty;
    public int total_number_of_notes;
    public int max_possible_score;
}

[System.Serializable]
public class LevelList{
    public List<Level> levels;

}
public class LevelCalls : MonoBehaviour
{
    public string url;
    private APICaller www;
    Request response = new Request();
    public static LevelList allLevels;
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

    public void getLevels(){
        StartCoroutine(www.GetRequest(url, request =>
        {
            response = request;
            printRequest(response);
            string jsonString = "{\"levels\":" + response.response + "}";
            allLevels = JsonUtility.FromJson<LevelList>(jsonString);
        }));
    }
}
