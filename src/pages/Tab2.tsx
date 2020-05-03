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
  IonChip,
  IonSelect,
  IonSelectOption,
  IonItemDivider,
} from "@ionic/react";
import "./Tab2.css";
import storageService from "../services/storage.service";
import Counters from "../components/Counters";
import { Item } from "../types/item";
import dateService, {
  dates as Dates,
  months,
  years,
} from "../services/date.service";
import dateFilterService, { DateFilters } from "../services/dateFilter.service";

const getDates = (): DateFilters => {
  const date = dateService.getTodayDate();
  date.setDate(1);
  const dates = { startDate: dateService.getDateFormatted(date), endDate: "" };
  date.setDate(20);
  dates.endDate = dateService.getDateFormatted(date);

  return dates;
};

const showYears = years();

const Tab2: React.FC = () => {
  const [items, setItems] = useState([] as Item[]);
  const [startDate, setStartDate] = useState(1);
  const [endDate, setEndDate] = useState(20);
  const [month, setMonth] = useState(() =>
    dateService.getTodayDate().getMonth()
  );
  const [year, setYear] = useState(showYears[0]);
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

  useEffect(() => {
    setDates({
      startDate: `${year}${month
        .toString()
        .padStart(2, "0")}${startDate.toString().padStart(2, "0")}`,
      endDate: `${year}${month
        .toString()
        .padStart(2, "0")}${endDate.toString().padStart(2, "0")}`,
    });
  }, [startDate, endDate, month, year]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Countr</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow className="ion-justify-content-center on-align-items-center">
          <IonItemDivider>
            Filter:
            <IonSelect
              value={month}
              placeholder="Month"
              onIonChange={(e) => setMonth(e.detail.value)}
            >
              {months.map((month, index) => (
                <IonSelectOption key={index} value={index}>
                  {month}
                </IonSelectOption>
              ))}
            </IonSelect>
            <IonSelect
              value={year}
              placeholder="Year"
              onIonChange={(e) => setYear(e.detail.value)}
            >
              {showYears.map((year) => (
                <IonSelectOption key={year} value={year}>
                  {year}
                </IonSelectOption>
              ))}
            </IonSelect>
            <IonSelect
              value={startDate}
              placeholder="Start"
              onIonChange={(e) => setStartDate(e.detail.value)}
            >
              {Dates.map((d) => (
                <IonSelectOption key={d} value={d}>
                  {d}
                </IonSelectOption>
              ))}
            </IonSelect>
            <IonSelect
              value={endDate}
              placeholder="End"
              onIonChange={(e) => setEndDate(e.detail.value)}
            >
              {Dates.map((d) => (
                <IonSelectOption key={d} value={d}>
                  {d}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItemDivider>
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
