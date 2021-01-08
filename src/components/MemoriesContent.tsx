import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  isPlatform,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { Memory } from "../data/memories-context";
import FixedBottomFab from "./FixeBottomFab";
import MemoriesList from "./MemoriesList";

const MemoriesContent: React.FC<{
  title: string;
  fallbackText: string;
  memories: Memory[];
}> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.title}</IonTitle>
          {isPlatform("ios") && (
            <IonButtons slot='end'>
              <IonButton routerLink='/new-memory'>
                <IonIcon icon={add} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {props.memories.length === 0 && (
            <IonRow>
              <IonCol className='ion-text-center'>
                <h2>{props.fallbackText}</h2>
              </IonCol>
            </IonRow>
          )}
          <MemoriesList items={props.memories} />
          {!isPlatform("ios") && (
            <FixedBottomFab/>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MemoriesContent;
