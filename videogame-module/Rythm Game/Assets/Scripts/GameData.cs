using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Game {
    public int level;
    public string username;
    public int score; 
    public int correct_number_of_notes;
}

public class GameData : MonoBehaviour
{
    public static GameData instance;

   public static Game currentGameData  = new Game();

    // Start is called before the first frame update
    void Start()
    {
        instance = this;
        currentGameData.level = SceneChanger.currentLevel;
        currentGameData.username =UserCalls.currentUser.username;
        printGame();
    }

    public void printGame(){
        Debug.Log("Level:" + currentGameData.level);
        Debug.Log("Username:" + currentGameData.username);
        Debug.Log("Score:" + currentGameData.score);
    }

    public void setScore(int _score){
        currentGameData.score = _score;
    }

    void Awake() {
        DontDestroyOnLoad(transform.gameObject);
    }
}
