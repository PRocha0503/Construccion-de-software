using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.Rendering.Universal;
using UnityEngine.UI; 

public class GameManager : MonoBehaviour
{
    [SerializeField] private AudioSource theMusic;

    [SerializeField] private bool startPlaying;

    [SerializeField] private BeatScroller theBS;

    public static GameManager instance; 

    [SerializeField] private int currentScore;
    [SerializeField] private int scorePerNote;

    [SerializeField] private TextMeshProUGUI scoreText;
    [SerializeField] private TextMeshProUGUI multiplierText;

    [SerializeField] private int[] lightSwitch = {0, 300, 600};

    // Start is called before the first frame update
    void Start()
    {
        instance = this;

        scoreText.text = "Score: 0";
    }

    // Update is called once per frame
    void Update()
    {
        if (!startPlaying)
        {
            if (Input.anyKeyDown)
            {
                startPlaying = true;
                theBS.hasStarted = true; 
                
                theMusic.Play();
            }
        }
    }


    public void NoteHit()
    {
        Debug.Log("Hit on Time");
        var lights = FindObjectsOfType<LightPulse>();
        var flames = FindObjectsOfType<FlameAnim>();
        
        currentScore += scorePerNote;
        scoreText.text = "Score: " + currentScore;
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
        }
    }

    public int getScore()
    {
        return currentScore;
    }
}
