/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
The progress bar game component that indicates game state
05/04/2022
*/
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ProgressBar : MonoBehaviour
{

    private bool hasStarted = false;
    public bool isPlaying = true;
    public static ProgressBar Instance; 
    [SerializeField] public Slider slider;
    [SerializeField] private float emptyAmount = .1f;
    [SerializeField] private float emptySpeed = .05f;

    public void SetHealth(int health)
    {
        slider.value = health;
    }

    public void AddHealth(int health)
    {
        slider.value += health;
    }

    public void StartDecreasing()
    {
        if (hasStarted == false)
        {
            hasStarted = true;
            StartCoroutine(DecreaseBar());
        }
    }

    private void Start()
    {
        Instance = this;
    }

    IEnumerator DecreaseBar()
    {
        while (isPlaying)
        {
            slider.value -= emptyAmount * Time.deltaTime;
            yield return new WaitForSeconds(emptySpeed);
        }
    }
}
