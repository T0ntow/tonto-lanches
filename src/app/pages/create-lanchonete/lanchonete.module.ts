import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CreateLanchoneteComponent } from './create-lanchonete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
  imports: [  
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    ReactiveFormsModule,

    NgxMaskDirective,
    NgxMaskPipe,

    RouterModule.forChild([
      {
        path: '',
        component: CreateLanchoneteComponent
      }
    ])
  ],

  providers: [
    provideNgxMask()
  ],

  declarations: [CreateLanchoneteComponent]
})
export class CreateLanchonetComponenteModule {}
