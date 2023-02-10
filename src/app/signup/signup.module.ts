import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC0_Q-9LUdYl-79eE7A-npl4JxQBNupFSk",
      authDomain: "tonto-lanches.firebaseapp.com",
      projectId: "tonto-lanches",
      storageBucket: "tonto-lanches.appspot.com",
      messagingSenderId: "771729409927",
      appId: "1:771729409927:web:d1560b2e3cc930ef0ff522",
      measurementId: "G-80XR8CVLV6"
    }),
    RouterModule.forChild([
      {
        path: '',
        component: SignupComponent
      }
    ])
  ],
  declarations: [SignupComponent]
})

export class SignupComponentModule {}