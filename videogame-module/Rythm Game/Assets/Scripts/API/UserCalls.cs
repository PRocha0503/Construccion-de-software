using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using System;

public class User
{
    public string classDB;
    public string username;
    public string pwd;
    public int levels_unlocked;
}


public class UserCalls : MonoBehaviour
{
    public string url;
    private APICaller www;
    Request response = new Request();
    public static User currentUser = new User();
    SceneChanger sChanger;
    [SerializeField] private TextMeshProUGUI displayMessage;

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
    public void getUser(string username){
        StartCoroutine(www.GetRequest(url+"/"+username, request =>
        {
            response = request;
            printRequest(response);
            currentUser = JsonUtility.FromJson<User>(response.response);
        }));
    }

    public void login(string username, string pwd){
        User myObject = new User();
        myObject.classDB = "";
        myObject.username = username;
        myObject.pwd = pwd;
        myObject.levels_unlocked = 0;
        string json = JsonUtility.ToJson(myObject);
        Debug.Log(url+"/login/"+username);
        StartCoroutine(www.PostRequest(url+"/login/"+username,json, request =>
        {
            response = request;
            // printRequest(response);
            response.response = response.response.Replace("class", "classDB");
            if(response.responseCode == 200){
            currentUser = JsonUtility.FromJson<User>(response.response);
            sChanger.GoToScene("HomeScreen");
            }else{
                string TrimString = response.response.Trim(new Char[] { ' ', '{', '}' });
                TrimString = TrimString.Replace("\"", "");
                TrimString = TrimString.Replace("msg:", "");
                TrimString = TrimString.Replace("error:", "");
                displayMessage.text=TrimString;
                Debug.Log(response.response);
            }
        }));
    }
    public void deleteUser(string username){
        StartCoroutine(www.DeleteRequest(url+"/"+username, request =>
        {
            response = request;
            printRequest(response);
        }));
    }
    public void addUser(string classDB, string username, string pwd, int levels_unlocked=1){
        User myObject = new User();
        myObject.classDB = classDB;
        myObject.username = username;
        myObject.pwd = pwd;
        myObject.levels_unlocked = levels_unlocked;
        string json = JsonUtility.ToJson(myObject);
        StartCoroutine(www.PostRequest(url,json, request =>
        {
            response = request;
            printRequest(response);

            string TrimString = response.response.Trim(new Char[] { ' ', '{', '}' });
            TrimString = TrimString.Replace("\"", "");
            TrimString = TrimString.Replace("msg:", "");
            TrimString = TrimString.Replace("error:", "");
            displayMessage.text=TrimString;
             
        }));
    }

    public void updateUser(string oldUserName,string classDB="", string newUserName="", string pwd="", int levels_unlocked=0){
        User myObject = new User();
        myObject.classDB = classDB;
        myObject.username = newUserName;
        myObject.pwd = pwd;
        myObject.levels_unlocked = levels_unlocked;
        string json = JsonUtility.ToJson(myObject);
        StartCoroutine(www.PutRequest(url+"/"+oldUserName,json, request =>
        {
            response = request;
            printRequest(response);
        }));
    }
    
}
