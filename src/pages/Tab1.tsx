import React, { useState, useCallback, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonBadge,
} from "@ionic/react";
import "./Tab1.css";
import { add } from "ionicons/icons";
import storageService from "../services/storage.service";
import { Item } from "../types/item";
import AddItem from "../components/AddItem";
import AddCounter from "../components/AddCounter";

const Tab1: React.FC = () => {
  const [showItemModal, setShowItemModal] = useState(false);
  const [showCounterModal, setShowCounterModal] = useState(false);
  const [items, setItems] = useState([] as Item[]);
  const [selectedItem, setSelectedItem] = useState(null as Item | null);
  const getItemsFromStorage = useCallback(() => {
    setItems(storageService.getItems());
  }, []);
  const onItemAdded = () => {
    setShowItemModal(false);
    getItemsFromStorage();
  };
  const onCounterAdded = () => {
    setShowCounterModal(false);
    setSelectedItem(null);
    getItemsFromStorage();
  };
  const showAddCounter = (item: Item) => {
    setSelectedItem(item);
    setShowCounterModal(true);
  };

  useEffect(() => {
    getItemsFromStorage();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Countr</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense" color="primary">
          <IonToolbar>
            <IonTitle size="large">Countr</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList lines="full">
          {items.map((item: Item) => (
            <IonItem key={item.id} onClick={() => showAddCounter(item)}>
              <IonLabel>{item.title}</IonLabel>
              <IonBadge color="primary">{item.count}</IonBadge>
            </IonItem>
          ))}
        </IonList>

        <AddItem
          showModal={showItemModal}
          itemAdded={onItemAdded}
          onClose={() => setShowItemModal(false)}
        />
        {selectedItem != null && (
          <AddCounter
            showModal={showCounterModal}
            counterAdded={onCounterAdded}
            item={selectedItem}
            onClose={() => setShowCounterModal(false)}
          />
        )}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowItemModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
