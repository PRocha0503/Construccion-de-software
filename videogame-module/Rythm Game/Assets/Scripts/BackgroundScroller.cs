/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
Makes the nightsky background scroll for a cool effect
05/04/2022
*/
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BackgroundScroller : MonoBehaviour
{
    [SerializeField] private float backgroundScrollSpeed = .1f;
    private Material myMaterial;
    private Vector2 offSet;


    private void Start()
    {
        myMaterial = GetComponent<Renderer>().material;
        offSet = new Vector2(backgroundScrollSpeed, 0f);
    }

    // Update is called once per frame
    void Update()
    {
        myMaterial.mainTextureOffset += offSet * Time.deltaTime;
    }
}
    