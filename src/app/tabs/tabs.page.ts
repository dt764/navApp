import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel} from '@ionic/angular/standalone';
import { people, calendar, cube, colorPalette } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class TabsPage {

  constructor() {
    addIcons({ people, calendar, cube, colorPalette });
   }

}
