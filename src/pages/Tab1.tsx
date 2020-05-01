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
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonAlert,
  IonChip,
  useIonViewDidEnter,
} from "@ionic/react";
import "./Tab1.css";
import {
  add,
  trash,
  star,
  navigateSharp,
  removeOutline,
  removeCircleOutline,
} from "ionicons/icons";
import storageService from "../services/storage.service";
import { Item } from "../types/item";
import AddItem from "../components/AddItem";
import AddCounter from "../components/AddCounter";

const Tab1: React.FC = () => {
  const [showItemModal, setShowItemModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showCounterModal, setShowCounterModal] = useState(false);
  const [items, setItems] = useState([] as Item[]);
  const [selectedItem, setSelectedItem] = useState(null as Item | null);
  const [selectedItemForDelete, setSelectedItemForDelete] = useState(
    null as Item | null
  );
  const [listRef, setListRef] = useState(null as HTMLIonListElement | null);
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
  const handleDelete = (item: Item) => {
    setSelectedItemForDelete(item);
    setShowAlert(true);
  };

  useIonViewDidEnter(() => {
    getItemsFromStorage();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Countr</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList
          lines="full"
          ref={(ref) => {
            setListRef(ref);
          }}
        >
          {items.map((item: Item) => (
            <IonItemSliding key={item.id}>
              <IonItem onClick={() => showAddCounter(item)}>
                <IonLabel>{item.title}</IonLabel>
                <IonBadge color="primary">{item.count}</IonBadge>
              </IonItem>

              <IonItemOptions side="end">
                <IonItemOption
                  color="danger"
                  onClick={() => handleDelete(item)}
                >
                  <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
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
        {selectedItemForDelete && (
          <IonAlert
            animated={true}
            isOpen={showAlert}
            header={"Remove"}
            message={
              "Are you sure to remove " + selectedItemForDelete?.title + " ?"
            }
            onDidDismiss={() => {
              listRef && listRef.closeSlidingItems();
              setShowAlert(false);
            }}
            buttons={[
              {
                text: "No",
                role: "cancel",
                cssClass: "secondary",
              },
              {
                text: "Yes",
                cssClass: "danger",
                handler: () => {
                  storageService.removeItem(selectedItemForDelete.id);
                  setSelectedItemForDelete(null);
                  getItemsFromStorage();
                },
              },
            ]}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
