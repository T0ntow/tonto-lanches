import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  userName: any;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
  ) {}
  
  isLoggedIn = false;

  ngOnInit() {
    this.afAuth.user.subscribe(user => {
      if(user){
          this.fireAuth.currentUser.then((user) => {
          this.userName = user?.displayName
          this.isLoggedIn = true;
        });
      }
      else{
        this.isLoggedIn = false;
      }
    });
  }

  logout() {
    this.afAuth.signOut();
    this.router.navigate(['/login']);
    console.log("Sair?");
  }
}
