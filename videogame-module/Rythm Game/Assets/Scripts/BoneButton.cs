using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BoneButton : MonoBehaviour
{
    [SerializeField] private Sprite defaultSprite;
    [SerializeField] private Sprite pressedSprite;
    private SpriteRenderer sr;


    [SerializeField] private KeyCode keyToPress;
    // Start is called before the first frame update
    void Start()
    {
        sr = gameObject.GetComponent<SpriteRenderer>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(keyToPress))
        {
            sr.sprite = pressedSprite;
        }

        if (Input.GetKeyUp(keyToPress))
        {
            sr.sprite = defaultSprite;
        }
    }
}
