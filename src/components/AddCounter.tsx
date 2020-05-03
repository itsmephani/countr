import {
  IonModal,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
} from "@ionic/react";
import React, { useState, useCallback } from "react";
import { Counter } from "../types/counter";
import storageService from "../services/storage.service";
import dateService from "../services/date.service";
import { add, close } from "ionicons/icons";
import { Item } from "../types/item";

const fabStyle = {
  margin: "auto",
  top: "33.33vh",
  left: "25vw",
};

const fabButtonStyle = {
  height: "50vw",
  width: "50vw",
};

export type AddCounterProps = {
  showModal: boolean;
  counterAdded: (item: Counter) => void;
  item: Item;
  onClose: () => void;
};

const counterData: Counter = {
  id: storageService.getCounters().length,
  date: dateService.getDateFormatted(),
  itemId: 0,
  count: 0,
};

const today = dateService.getReadableDateFormatted();

export default (props: AddCounterProps) => {
  const { item } = props;
  const [counter] = useState(() => {
    return { ...counterData };
  });
  const addCounter = useCallback(() => {
    let counterToAdd = storageService.findCounter({
      itemId: item.id,
      date: dateService.getDateFormatted(),
    });
    if (counterToAdd) {
      counterToAdd.count += 1;
      storageService.updateCounter(counterToAdd);
    } else {
      counterToAdd = counter;
      counterToAdd.id = storageService.getCounters().length;
      counterToAdd.count = 1;
      counterToAdd.itemId = item.id;
      storageService.addCounter(counterToAdd);
    }
    storageService.updateItemCount(item.id, counterToAdd.count);
    props.counterAdded(counterToAdd);
  }, [counter]);

  return (
    <IonModal
      onDidDismiss={props.onClose}
      animated={true}
      swipeToClose={true}
      isOpen={props.showModal}
    >
      <IonContent>
        <IonHeader>
          <IonToolbar className="ion-text-center">
            <IonButtons slot="start">
              <IonButton onClick={props.onClose} fill="clear">
                <IonIcon icon={close} />
              </IonButton>
            </IonButtons>
            <IonTitle>
              <span style={{ color: "var(--ion-color-primary)" }}>
                {item.title}
              </span>{" "}
              {today}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonFab
          vertical="center"
          horizontal="center"
          slot="fixed"
          style={fabStyle}
        >
          <IonFabButton onClick={addCounter} style={fabButtonStyle}>
            <IonIcon
              icon={add}
              size="large"
              style={{ transform: "scale(4)" }}
            />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonModal>
  );
};
