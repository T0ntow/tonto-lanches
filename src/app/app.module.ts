import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: 
  [
    BrowserModule, 
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC0_Q-9LUdYl-79eE7A-npl4JxQBNupFSk",
      authDomain: "tonto-lanches.firebaseapp.com",
      projectId: "tonto-lanches",
      storageBucket: "tonto-lanches.appspot.com",
      messagingSenderId: "771729409927",
      appId: "1:771729409927:web:d1560b2e3cc930ef0ff522",
      measurementId: "G-80XR8CVLV6"
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

