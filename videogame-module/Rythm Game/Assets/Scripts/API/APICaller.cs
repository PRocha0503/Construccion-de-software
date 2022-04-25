using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

// UnityAPICaller class
public class Request  
{  
    public string error;
    public UnityEngine.Networking.UnityWebRequest.Result result;
    public string response; 
    public long responseCode;
}  

public class APICaller : MonoBehaviour
{
    public IEnumerator GetRequest(string uri,System.Action<Request> callback=null)
    {
        UnityWebRequest www = UnityWebRequest.Get(uri);
        // Request and wait for the desired page.
        yield return www.SendWebRequest();
        Request req = new Request();
        req.result = www.result;
        req.error = www.error;
        req.response =  www.downloadHandler.text;
        req.responseCode= www.responseCode;
        callback(req);
    }
    public IEnumerator PostRequest(string uri, string json, System.Action<Request> callback=null)
    {
        UnityWebRequest www = UnityWebRequest.Put(uri,json);
        www.SetRequestHeader("Content-Type", "application/json");
        // Request and wait for the desired page.
        yield return www.SendWebRequest();
        Request req = new Request();
        req.result = www.result;
        req.error = www.error;
        req.response =  www.downloadHandler.text;
        req.responseCode= www.responseCode;
        callback(req);
    }
    public IEnumerator PutRequest(string uri, string json, System.Action<Request> callback=null)
    {
        UnityWebRequest www = UnityWebRequest.Put(uri,json);
        www.SetRequestHeader("Content-Type", "application/json");
        // Request and wait for the desired page.
        yield return www.SendWebRequest();
        Request req = new Request();
        req.result = www.result;
        req.error = www.error;
        req.response =  www.downloadHandler.text;
        req.responseCode= www.responseCode;
        callback(req);
    }
    public IEnumerator DeleteRequest(string uri, System.Action<Request> callback=null)
    {
        UnityWebRequest www = UnityWebRequest.Delete(uri);
        // Request and wait for the desired page.
        yield return www.SendWebRequest();
        Request req = new Request();
        req.result = www.result;
        req.error = www.error;
        req.response =  www.responseCode.ToString();
        req.responseCode= www.responseCode;
        callback(req);
    }
}
