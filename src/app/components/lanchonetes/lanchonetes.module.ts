import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LanchonetesComponent } from './lanchonetes.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFirestoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: LanchonetesComponent
      }
    ])
  ],
  declarations: [
    LanchonetesComponent,
  ]
})
export class LanchonetesComponentModule {}