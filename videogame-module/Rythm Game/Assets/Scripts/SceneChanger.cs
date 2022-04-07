/*
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
