import { Component,} from '@angular/core';
import {NavController} from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonIcon} from '@ionic/angular/standalone';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton]
})
export class ProductsPage{

  constructor(private navCtrl: NavController) { }

  logout(){

    console.log("Clearing session");

    this.navCtrl.navigateRoot(['/login']);

  }

}
