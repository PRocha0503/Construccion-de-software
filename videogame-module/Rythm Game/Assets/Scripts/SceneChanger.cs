/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
05/04/2022
Script to change between scenes
*/

using System;
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
public class SceneChanger : MonoBehaviour
{
    [SerializeField] private Animator transition;
    [SerializeField] private float transitionTime = 1f;
    public static int currentLevel = 0;

    public void GoToScene(string scene)
    {
        StartCoroutine(LoadLevel(scene));
    }

    public void changeLevel(int level){
        currentLevel = level;
    }

    IEnumerator LoadLevel(string scene)
    {
        //Play animation
        transition.SetTrigger("Start");
        
        //Wait
        yield return new WaitForSeconds(transitionTime);

        //Load scene
        SceneManager.LoadSceneAsync(scene);
    }

}
