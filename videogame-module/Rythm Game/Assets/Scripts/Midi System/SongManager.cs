﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Melanchall.DryWetMidi.Core;
using Melanchall.DryWetMidi.Interaction;
using System.IO;
using UnityEngine.Networking;
using System;
using TMPro;

public class SongManager : MonoBehaviour
{
    // Midi Stuff
    [Header("Midi Settings")]
    public static SongManager Instance;
    public AudioSource audioSource;
    public Lane[] lanes;
    public float songDelayInSeconds;
    public double marginOfError; // in seconds
    public int inputDelayInMilliseconds;
    public string fileLocation;
    public float noteTime;
    public float noteSpawnX;
    public float noteTapX;
    public float noteDespawnX
    {
        get
        {
            return noteTapX - (noteSpawnX - noteTapX);
        }
    }
    
    [Header("Score Settings")]
    [SerializeField] private int currentScore;
    [SerializeField] private int scorePerNote;

    [SerializeField] private TextMeshProUGUI scoreText;
    [SerializeField] private TextMeshProUGUI multiplierText;

    [Header("Multiplier Settings")] 
    [SerializeField] private int currentMultiplier;
    [SerializeField] private int multiplierTracker;
    [SerializeField] private int[] multiplierThresholds;

    public static MidiFile midiFile;
    // Start is called before the first frame update
    void Start()
    {
        currentMultiplier = 1; 
        Instance = this;
        if (Application.streamingAssetsPath.StartsWith("http://") || Application.streamingAssetsPath.StartsWith("https://"))
        {
            StartCoroutine(ReadFromWebsite());
        }
        else
        {
            ReadFromFile();
        }
    }

    private IEnumerator ReadFromWebsite()
    {
        using (UnityWebRequest www = UnityWebRequest.Get(Application.streamingAssetsPath + "/" + fileLocation))
        {
            yield return www.SendWebRequest();

            if (www.result == UnityWebRequest.Result.ConnectionError|| www.result == UnityWebRequest.Result.ProtocolError)
            {
                Debug.LogError(www.error);
            }
            else
            {
                byte[] results = www.downloadHandler.data;
                using (var stream = new MemoryStream(results))
                {
                    midiFile = MidiFile.Read(stream);
                    GetDataFromMidi();
                }
            }
        }
    }

    private void ReadFromFile()
    {
        midiFile = MidiFile.Read(Application.streamingAssetsPath + "/" + fileLocation);
        GetDataFromMidi();
    }
    public void GetDataFromMidi()
    {
        var notes = midiFile.GetNotes();
        var array = new Melanchall.DryWetMidi.Interaction.Note[notes.Count];
        notes.CopyTo(array, 0);

        foreach (var lane in lanes) lane.SetTimeStamps(array);

        Invoke(nameof(StartSong), songDelayInSeconds);
    }
    public void StartSong()
    {
        audioSource.Play();
    }
    public static double GetAudioSourceTime()
    {
        return (double)Instance.audioSource.timeSamples / Instance.audioSource.clip.frequency;
    }

    public void AddScore()
    {
        multiplierTracker++;
        if (currentMultiplier - 1 < multiplierThresholds.Length)
        {
            multiplierTracker++;
            if (multiplierThresholds[currentMultiplier - 1] <= multiplierTracker)
            {
                multiplierTracker = 0;
                currentMultiplier++;
            }
            
        }

        multiplierText.text = "Multiplier: x" + currentMultiplier;
        
        currentScore += scorePerNote * currentMultiplier;
        scoreText.text = "Score: " + currentScore;

        var lightPillars = FindObjectsOfType<LightPillar>();
        foreach (var lightPillar in lightPillars)
        {
            lightPillar.UpdateLights(currentMultiplier);
        }
    }

    public void SubstractScore()
    {
        if (currentScore > 0)
        {
            currentScore -= scorePerNote;
            scoreText.text = "Score: " + currentScore;
        }
        else
        {
            currentScore -= 0;
            scoreText.text = "Score: " + currentScore;
        }

        currentMultiplier = 1;
        multiplierTracker = 0;

        multiplierText.text = "Multiplier: x" + currentMultiplier;
        var lightPillars = FindObjectsOfType<LightPillar>();
        foreach (var lightPillar in lightPillars)
        {
            lightPillar.UpdateLights(currentMultiplier);
        }
    }


    public void UpdateLights()
    {
        /*var lights = FindObjectsOfType<LightPulse>();
        var flames = FindObjectsOfType<FlameAnim>();
        
        if (currentScore == lightSwitch[0])
        {
            foreach (LightPulse light in lights)
            {
                light.ChangeColor("Red");
            }
            foreach (FlameAnim flame in flames)
            {
                flame.ChangeAnimation("Red");
            }
        }
        else if (currentScore == lightSwitch[1])
        {
            foreach (LightPulse light in lights)
            {
                light.ChangeColor("Yellow");
            }
            foreach (FlameAnim flame in flames)
            {
                flame.ChangeAnimation("Yellow");
            }
        }
        else if (currentScore == lightSwitch[2])
        {
            foreach (LightPulse light in lights)
            {
                light.ChangeColor("Blue");
            }
            foreach (FlameAnim flame in flames)
            {
                flame.ChangeAnimation("Blue");
            }
        }*/
    }
}