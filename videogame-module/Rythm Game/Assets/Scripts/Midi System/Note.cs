/*
Script forked from: https://github.com/SkyanSam/RhythmGameTutorialProject
Modified by: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
This note class corresponds to each of the notes of each lane, te note gameojects are destroyed from this script
05/04/2022
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Note : MonoBehaviour
{
    double timeInstantiated;
    public float assignedTime;
    public Sprite[] spriteArray;
    void Start()
    {
        timeInstantiated = SongManager.GetAudioSourceTime();
    }

    // Update is called once per frame
    void Update()
    {
        double timeSinceInstantiated = SongManager.GetAudioSourceTime() - timeInstantiated;
        float t = (float)(timeSinceInstantiated / (SongManager.Instance.noteTime * 2));

        
        if (t > 0.6)
        {
            //Destroy the note if its off screen
            Destroy(gameObject);
        }
        else
        {
            //Spawn note on desired position
            transform.localPosition = Vector3.Lerp(Vector3.right * SongManager.Instance.noteSpawnX, Vector3.right * SongManager.Instance.noteDespawnX, t);
            GetComponent<SpriteRenderer>().enabled = true;
        }
    }
}
