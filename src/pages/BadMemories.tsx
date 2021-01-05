import React, { useContext } from "react";
import {
  IonButton,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonIcon,
  isPlatform,
  IonFab,
  IonFabButton,
  IonCol,
  IonRow,
  IonGrid,
} from "@ionic/react";
import { add } from "ionicons/icons";
import MemoriesContext from "../data/memories-context";
import MemoriesList from "../components/MemoriesList";
import MemoriesContent from "../components/MemoriesContent";

const BadMemories: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);

  const badMemories = memoriesCtx.memories.filter(
    (memory) => memory.type === "bad"
  );

  return (
    <MemoriesContent
      title='Bad Memories'
      fallbackText='No Bad Memories Must Be Nice.'
      memories={badMemories}
    />
  );
};

export default BadMemories;
