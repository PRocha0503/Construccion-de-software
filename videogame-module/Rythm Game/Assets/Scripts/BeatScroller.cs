using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BeatScroller : MonoBehaviour
{
    [SerializeField] private float beatTempo;

    [SerializeField] public bool hasStarted = false;
    // Start is called before the first frame update
    void Start()
    {
        beatTempo /= 60;
        
    }

    // Update is called once per frame
    void Update()
    {
        if (!hasStarted)
        {
            // if (Input.anyKeyDown)
            // {
            //     hasStarted = true;
            // }
        }
        else
        {
            transform.position -= new Vector3(beatTempo * Time.deltaTime, 0f, 0f);
        }

    }
}
