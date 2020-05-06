import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonModal,
  IonBadge,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonButtons,
  IonButton,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import storageService from "../services/storage.service";
import { Item } from "../types/item";
import dateService from "../services/date.service";
import { Counter } from "../types/counter";
import { close, removeOutline, addOutline } from "ionicons/icons";
import dateFilterService, { DateFilters } from "../services/dateFilter.service";

export type CountersProps = {
  showModal: boolean;
  item: Item;
  onClose: () => void;
  dates: DateFilters;
};

export default (props: CountersProps) => {
  const [counters, setCounters] = useState([] as Counter[]);
  const getItemsFiltered = () => {
    const data = dateFilterService(
      storageService.getItemCounters(props.item.id),
      props.dates
    ) as Counter[];
    setCounters(data);
  };

  const updateItemAndCounter = (counterItem: Item, counter: Counter) => {
    storageService.updateCounter(counter);
    storageService.updateItemCount(counterItem.id, counterItem.count);
    getItemsFiltered();
  };

  const reduceCount = (counter: Counter) => {
    const counterItem = storageService.getItem(counter.itemId);
    if (!counterItem || counter.count < 0) return;

    counter.count = counter.count == 0 ? 0 : counter.count - 1;
    counterItem.count = counterItem.count == 0 ? 0 : counterItem.count - 1;
    updateItemAndCounter(counterItem, counter);
  };

  const addCount = (counter: Counter) => {
    const counterItem = storageService.getItem(counter.itemId);
    if (!counterItem || counter.count < 0) return;

    counter.count = counter.count + 1;
    counterItem.count = counterItem.count + 1;
    updateItemAndCounter(counterItem, counter);
  };

  useEffect(() => {
    getItemsFiltered();
  }, []);

  return (
    <IonModal onDidDismiss={props.onClose} isOpen={props.showModal}>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonButtons slot="start">
            <IonButton onClick={props.onClose} fill="clear">
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
          <IonTitle>{props.item.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          {counters.map((counter) => (
            <IonItemSliding key={counter.id}>
              <IonItem>
                <IonLabel>
                  {dateService.getReadableDateFromString(counter.date)}
                </IonLabel>
                <IonBadge color="tertiary">{counter.count}</IonBadge>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption
                  color="danger"
                  onClick={() => reduceCount(counter)}
                >
                  <IonIcon icon={removeOutline}></IonIcon>
                </IonItemOption>
                <IonItemOption
                  color="tertiary"
                  onClick={() => addCount(counter)}
                >
                  <IonIcon icon={addOutline}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonModal>
  );
};
