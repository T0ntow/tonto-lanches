import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFirestoreModule,
    
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  declarations: [
    HomeComponent,
    NavBarComponent
  ]
})
export class HomeComponentModule {}