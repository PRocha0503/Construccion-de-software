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
        callback(req);
    }
    public IEnumerator PostRequest(string uri, WWWForm form, System.Action<Request> callback=null)
    {
        UnityWebRequest www = UnityWebRequest.Post(uri,form);
        // Request and wait for the desired page.
        yield return www.SendWebRequest();
        Request req = new Request();
        req.result = www.result;
        req.error = www.error;
        req.response =  www.downloadHandler.text;
        callback(req);
    }
    public IEnumerator PutRequest(string uri, byte[] body, System.Action<Request> callback=null)
    {
        UnityWebRequest www = UnityWebRequest.Put(uri,body);
        // Request and wait for the desired page.
        yield return www.SendWebRequest();
        Request req = new Request();
        req.result = www.result;
        req.error = www.error;
        req.response =  www.downloadHandler.text;
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
        req.response =  www.downloadHandler.text;
        callback(req);
    }
}
