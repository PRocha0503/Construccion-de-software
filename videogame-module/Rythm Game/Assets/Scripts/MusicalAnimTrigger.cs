/*
By: Luis Javier Karam, Pablo Rocha and Miguel Arriaga
Script working with koreographer extension used to check for events and calling functions on them
05/04/2022
*/
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
            animCon.SetTrigger(eventID);
        }

}
