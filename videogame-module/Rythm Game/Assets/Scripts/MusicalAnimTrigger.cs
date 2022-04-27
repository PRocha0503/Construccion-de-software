using UnityEngine;
using SonicBloom.Koreo;

public class MusicalAnimTrigger : MonoBehaviour
{
    public Animator animCon;
    [EventID] public string eventID;

    private void Awake()
    {
        Koreographer.Instance.RegisterForEvents(eventID, OnAnimationTrigger);
    }

    void OnAnimationTrigger(KoreographyEvent evt)
        {
            Debug.Log(eventID);
            animCon.SetTrigger(eventID);
        }

}
