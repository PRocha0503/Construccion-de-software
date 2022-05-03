/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
Script used to handle register calls from unity
05/04/2022
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class RegisterUser : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] private GameObject username;
    [SerializeField] private GameObject pwd;
    [SerializeField] private GameObject _class;
    private string username_text;
    private string pwd_text;
    private UserCalls userAPI;

    void Start(){
        userAPI = FindObjectOfType<UserCalls>();
    }
    public void createUser()
    {
        string username_text = username.GetComponent<TMP_InputField>().text;
        string pwd_text = pwd.GetComponent<TMP_InputField>().text;
        string class_text = _class.GetComponent<TMP_InputField>().text;
        userAPI.addUser(class_text,username_text,pwd_text);
    }
}
