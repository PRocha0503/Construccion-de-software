using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UserCallsTest : MonoBehaviour
{
    public string url;
    private APICaller www;
    void Start()
    {
        www = FindObjectOfType<APICaller>();
        getUser();
    }
    void getUser(){
        StartCoroutine(www.GetRequest(url+"/john", request =>
        {
             print("Result: " + request.result);
             print("Error: " + request.error);
             print("Response: " + request.response);
        }));
    }
    void deleteUser(){
        StartCoroutine(www.DeleteRequest(url+"/john", request =>
        {
             print("Result: " + request.result);
             print("Error: " + request.error);
             print("Response: " + request.response);
        }));
    }
    void addUser(){
        WWWForm form=new WWWForm();
        form.AddField("class","miguel");
        form.AddField("username","userFromUnity");
        form.AddField("pwd","hola");
        form.AddField("levels_unlocked",2);

        StartCoroutine(www.PostRequest(url,form, request =>
        {
             print("Result: " + request.result);
             print("Error: " + request.error);
             print("Response: " + request.response);
        }));
    }
    
}
