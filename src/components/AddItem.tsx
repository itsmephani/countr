import {
  IonModal,
  IonItem,
  IonInput,
  IonButton,
  IonTitle,
  IonContent,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonHeader,
} from "@ionic/react";
import React, { useState, useCallback } from "react";
import { Item } from "../types/item";
import storageService from "../services/storage.service";
import dateService from "../services/date.service";
import { close } from "ionicons/icons";
import KeyCode from "../constants/KeyCode";

export type AddItemProps = {
  showModal: boolean;
  itemAdded: (item: Item) => void;
  onClose: () => void;
};

const itemData: Item = {
  id: storageService.getItems().length,
  title: "",
  date: dateService.getDateFormatted(),
  count: 0,
};

export default (props: AddItemProps) => {
  const [item, setItem] = useState(() => {
    return { ...itemData };
  });
  const addItem = useCallback(() => {
    if (item.title) {
      storageService.addItem(item);
      props.itemAdded(item);
    }
  }, [item]);

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
            <IonTitle color="primary">Add Item</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ padding: 16 }}>
          <IonItem>
            <IonInput
              value={item.title}
              placeholder="Enter item"
              onKeyDown={(e) => {
                if (e.keyCode == KeyCode.ENTER || e.which == KeyCode.ENTER) {
                  addItem();
                }
              }}
              onIonChange={(e) => setItem({ ...item, title: e.detail.value! })}
            ></IonInput>
          </IonItem>
          <IonButton color="primary" onClick={addItem}>
            Add
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};
