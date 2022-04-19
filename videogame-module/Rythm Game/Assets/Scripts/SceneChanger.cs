/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
05/04/2022
Script to change between scenes
*/


using UnityEngine;
using UnityEngine.SceneManagement;
public class SceneChanger : MonoBehaviour
{
    public void GoToScene(string scene){
        SceneManager.LoadScene(scene);
    }

}
