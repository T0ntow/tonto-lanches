import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.afAuth.signOut();
  }

}