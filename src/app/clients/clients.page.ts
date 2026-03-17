import { Component } from '@angular/core';
import {

  IonHeader, IonToolbar, IonTitle,
  IonContent, IonCard, IonIcon,
  IonButtons, IonButton,IonAvatar,

} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle,
    IonContent,RouterLink,
    IonCard,IonIcon,IonButtons,IonButton
    ,IonAvatar,
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