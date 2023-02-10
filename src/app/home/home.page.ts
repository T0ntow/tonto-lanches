import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { auth } from 'firebase/app';
export class MyClass {
  constructor(private afAuth: AngularFireAuth) {}
  
  checkLoginStatus() {
    this.afAuth.user.subscribe(user => {
      if (user) {
        console.log("Usuário está logado");
      } else {
        console.log("Usuário não está logado");
      }
    });
  }
}