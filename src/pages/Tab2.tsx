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
  IonBadge,
  useIonViewDidEnter,
  IonRow,
  IonCol,
  IonInput,
} from "@ionic/react";
import "./Tab2.css";
import storageService from "../services/storage.service";
import Counters from "../components/Counters";
import { Item } from "../types/item";
import dateService from "../services/date.service";
import dateFilterService, { DateFilters } from "../services/dateFilter.service";

const getDates = (): DateFilters => {
  const date = dateService.getTodayDate();
  date.setDate(1);
  const dates = { startDate: dateService.getDateFormatted(date), endDate: "" };
  date.setDate(30);
  dates.endDate = dateService.getDateFormatted(date);

  return dates;
};

const Tab2: React.FC = () => {
  const [items, setItems] = useState([] as Item[]);
  const [dates, setDates] = useState(() => getDates());
  const [item, setItem] = useState(null as Item | null);
  const [showCountersModal, setShowCountersModal] = useState(false);
  const showCounters = (item: Item) => {
    setItem(item);
    setShowCountersModal(true);
  };
  const getItemsFiltered = () => {
    const data = dateFilterService(storageService.getItems(), dates) as Item[];
    setItems(data);
  };
  const handleCounterModalClose = () => {
    setShowCountersModal(false);
    setItem(null);
    getItemsFiltered();
  };

  useIonViewDidEnter(() => {
    getItemsFiltered();
  });

  useEffect(() => {
    getItemsFiltered();
  }, [dates.startDate, dates.endDate]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Countr</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow>
          <IonCol>
            <IonItem color="tertiary">
              <IonLabel>Start</IonLabel>
              <IonInput
                value={dates.startDate}
                placeholder="Start"
                onIonChange={(e) =>
                  setDates({ ...dates, startDate: e.detail.value! })
                }
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem color="tertiary">
              <IonLabel>End</IonLabel>
              <IonInput
                value={dates.endDate}
                placeholder="End"
                onIonChange={(e) =>
                  setDates({ ...dates, endDate: e.detail.value! })
                }
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonList lines="full">
          {items.map((item) => (
            <IonItem key={item.id} onClick={() => showCounters(item)}>
              <IonLabel>{item.title}</IonLabel>
              <IonBadge color="tertiary">{item.count}</IonBadge>
            </IonItem>
          ))}
        </IonList>

        {item != null && (
          <Counters
            dates={dates}
            onClose={handleCounterModalClose}
            showModal={showCountersModal}
            item={item}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
