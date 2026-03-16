import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButtons, IonButton,
  IonSearchbar, IonInput, IonAvatar, IonLabel, IonFab, IonFabButton

} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    RouterLink,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCard,
    IonIcon,
    IonButtons,
    IonButton,
    IonSearchbar,
    IonLabel,
    IonInput,
    IonAvatar,
    IonFab,
    IonFabButton
  ]
})
export class ClientsPage {

  clients = [
  { id: 1, name: "John Doe", lastContact: "Oct 24, 2023" },
  { id: 2, name: "Alice Smith", lastContact: "Oct 22, 2023" },
  { id: 3, name: "Michael Wong", lastContact: "Oct 15, 2023" },
  { id: 4, name: "Emma Richards", lastContact: "Oct 12, 2023" },
  { id: 5, name: "Lucas Brown", lastContact: "Sep 30, 2023" },
  { id: 6, name: "Sarah Thompson", lastContact: "Sep 28, 2023" }
];

}