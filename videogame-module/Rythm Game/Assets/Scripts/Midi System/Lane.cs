/*
Script forked from: https://github.com/SkyanSam/RhythmGameTutorialProject
Modified by: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
This lane class instances the timestamps for each note and arranges the notes that go in each lane  
05/04/2022
*/


using Melanchall.DryWetMidi.Interaction;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Lane : MonoBehaviour
{
    public Melanchall.DryWetMidi.MusicTheory.NoteName noteRestriction;
    public KeyCode input;
    public GameObject notePrefab;
    List<Note> notes = new List<Note>();
    public List<double> timeStamps = new List<double>();
    public List<Melanchall.DryWetMidi.Interaction.MusicalTimeSpan> noteTimes = new List<Melanchall.DryWetMidi.Interaction.MusicalTimeSpan>();
    int spawnIndex = 0;
    int inputIndex = 0;
    private SongManager _songManager;

    //Note Types by length
    Melanchall.DryWetMidi.Interaction.MusicalTimeSpan sixteenth_note=new MusicalTimeSpan(1,16,true);
    Melanchall.DryWetMidi.Interaction.MusicalTimeSpan eighth_note=new MusicalTimeSpan(1,8,true);
    Melanchall.DryWetMidi.Interaction.MusicalTimeSpan quarter_note=new MusicalTimeSpan(1,4,true);
    Melanchall.DryWetMidi.Interaction.MusicalTimeSpan half_note=new MusicalTimeSpan(1,2,true);
    Melanchall.DryWetMidi.Interaction.MusicalTimeSpan whole_note=new MusicalTimeSpan(1,1,true);

    void Start()
    {
        _songManager = FindObjectOfType<SongManager>();
    }
    public void SetTimeStamps(Melanchall.DryWetMidi.Interaction.Note[] array)
    {
        foreach (var note in array)
        {
            if (note.NoteName==noteRestriction)
            {
                var tempoMap=SongManager.midiFile.GetTempoMap();
                
                var metricTimeSpan = TimeConverter.ConvertTo<MetricTimeSpan>(note.Time, tempoMap);
                timeStamps.Add((double)metricTimeSpan.Minutes * 60f + metricTimeSpan.Seconds + (double)metricTimeSpan.Milliseconds / 1000f);

                //Append the musical length of each note to the musicalLength list
                var musicalLength = note.LengthAs<MusicalTimeSpan>(tempoMap);
                noteTimes.Add(musicalLength);
            }
        }
    }
    // Update is called once per frame
    void Update()
    {
        if (spawnIndex < timeStamps.Count)
        {
            
            if (SongManager.GetAudioSourceTime() >= timeStamps[spawnIndex] - SongManager.Instance.noteTime)
            {   
                var noteLength=noteTimes[spawnIndex];
                var note = Instantiate(notePrefab, transform);

                // Decide what to do depending on note length
                if (noteLength==whole_note){
                    note.GetComponent<SpriteRenderer>().sprite=note.GetComponent<Note>().spriteArray[0];
                }
                else if (noteLength==half_note){
                    note.GetComponent<SpriteRenderer>().sprite=note.GetComponent<Note>().spriteArray[1];
                }
                else if (noteLength==quarter_note){
                    note.GetComponent<SpriteRenderer>().sprite=note.GetComponent<Note>().spriteArray[2];
                }
                else if (noteLength==eighth_note){
                    note.GetComponent<SpriteRenderer>().sprite=note.GetComponent<Note>().spriteArray[3];
                }
                else if (noteLength==sixteenth_note){
                    note.GetComponent<SpriteRenderer>().sprite=note.GetComponent<Note>().spriteArray[4];
                }
                else{
                    note.GetComponent<SpriteRenderer>().color=Color.black;
                }
                

                notes.Add(note.GetComponent<Note>());
                note.GetComponent<Note>().assignedTime = (float)timeStamps[spawnIndex];
                spawnIndex++;
            }
        }

        if (inputIndex < timeStamps.Count)
        {
            double timeStamp = timeStamps[inputIndex];
            double marginOfError = SongManager.Instance.marginOfError;
            double audioTime = SongManager.GetAudioSourceTime() - (SongManager.Instance.inputDelayInMilliseconds / 1000.0);

            if (Input.GetKeyDown(input))
            {
                if (Math.Abs(audioTime - timeStamp) < marginOfError)
                {
                    Hit();
                    // print($"Hit on {inputIndex} note");
                    Destroy(notes[inputIndex].gameObject);
                    inputIndex++;
                }
                else
                {
                    // Miss();  //Substracts score if button pressed at wrong time
                }
            }
            if (timeStamp + marginOfError <= audioTime)
            {
                Miss();
                // print($"Missed {inputIndex} note");
                inputIndex++;
            }
        }       
    
    }
    private void Hit()
    {
        _songManager.AddScore();
        // _songManager.UpdateLights();
    }
    private void Miss()
    {
        _songManager.SubstractScore();
        // _songManager.UpdateLights();
    }
}
