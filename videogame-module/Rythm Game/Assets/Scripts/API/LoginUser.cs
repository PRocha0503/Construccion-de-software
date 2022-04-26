using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class LoginUser : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] private GameObject username;
    [SerializeField] private GameObject pwd;
    private string username_text;
    private string pwd_text;
    private UserCalls userAPI;

    void Start(){
        userAPI = FindObjectOfType<UserCalls>();
    }
    public void loginUser()
    {
        string username_text = username.GetComponent<TMP_InputField>().text;
        string pwd_text = pwd.GetComponent<TMP_InputField>().text;
        userAPI.login(username_text,pwd_text);
    }
}
