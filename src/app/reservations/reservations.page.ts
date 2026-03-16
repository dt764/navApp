import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

import {

  IonContent, IonHeader, IonTitle, IonToolbar,
  IonList, IonItem, IonButton

} from '@ionic/angular/standalone';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton]
})
export class ReservationsPage {

  constructor(private navCtrl: NavController) { }

  createReservation(){
    this.navCtrl.navigateForward('/tabs/reservations/create');
  }

}
