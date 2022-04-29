using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class EndGameController : MonoBehaviour
{
    // Start is called before the first frame update

    private GameCalls gameAPI;

    [SerializeField] TextMeshProUGUI scoreText;
    void Start()
    {
        gameAPI = FindObjectOfType<GameCalls>();
        scoreText.text = "Score: " + GameData.currentGameData.score;
        GameData.instance.printGame();
        gameAPI.postGame(
            GameData.currentGameData.username,
            GameData.currentGameData.level,
            GameData.currentGameData.score,
            GameData.currentGameData.correct_number_of_notes
            );
        
    }
}
