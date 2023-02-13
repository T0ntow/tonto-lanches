import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LojasComponent } from './lojas.component';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
   
    RouterModule.forChild([
      {
        path: '',
        component: LojasComponent
      }
    ])
  ],
  declarations: [LojasComponent]
})
export class LojasComponentModule {}