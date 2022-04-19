/*
Script forked from: https://github.com/SkyanSam/RhythmGameTutorialProject
Modified by: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
From this song manager the lanes, song and its atributes are defined and instanciated. It also includes score and audiosource settings. 
This scripts reads and parses the MIDI file using the Melanchall.DryWetMidi library
05/04/2022
*/
using System.Collections;
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

    [Header("Multiplier Settings")] 
    [SerializeField] private int barBonus;

    [Header("Endgame Conditions Settings")]
    [SerializeField] private int timeToWaitAfterWin;
    [SerializeField] private ProgressBar progressBar;
    public SceneChanger levelLoader;
    public string sceneAfterWin; 
    public string sceneAfterLoose; 
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

    void Update(){
        //Check if the song has ended -> the game has been won
        if (!audioSource.isPlaying){
            levelWon();
        }
        if (progressBar.slider.value<=0){
            levelLost();
        }
    }

    void levelWon(){
        StartCoroutine(waitTime(timeToWaitAfterWin, sceneAfterWin));
    }
    void levelLost(){
        StartCoroutine(waitTime(0, sceneAfterLoose));
    }

    IEnumerator waitTime(int timeToWait, string scene){
        yield return new WaitForSeconds(timeToWait);
        levelLoader.GoToScene(scene);
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
        ProgressBar.Instance.AddHealth(barBonus);
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

        multiplierText.text = "x" + currentMultiplier;
        
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

        multiplierText.text = "x" + currentMultiplier;
        var lightPillars = FindObjectsOfType<LightPillar>();
        foreach (var lightPillar in lightPillars)
        {
            lightPillar.UpdateLights(currentMultiplier);
        }
    }
}
