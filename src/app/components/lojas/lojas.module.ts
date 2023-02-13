import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LojasComponent } from './lojas.component';

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LojasComponent
      }
    ])
  ],
  declarations: [
    LojasComponent,
  ],
})
export class LojasComponentModule {}