using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ProgressBar : MonoBehaviour
{

    public static ProgressBar Instance; 
    [SerializeField] public Slider slider;
    [SerializeField] private float emptySpeed = .1f;

    public void SetHealth(int health)
    {
        slider.value = health;
    }

    public void AddHealth(int health)
    {
        slider.value += health;
    }

    private void Start()
    {
        Instance = this;
    }

    private void Update()
    {
        if (slider.value > 0)
        {
            slider.value -= emptySpeed * Time.deltaTime;
        }
    }
}
