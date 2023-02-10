import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {
  }
  isLoggedIn = false;
  ngOnInit() {
    this.afAuth.user.subscribe(isLoggedIn => {

      if(isLoggedIn){
        console.log("conta logada");
        this.isLoggedIn = true;
      }
      else{
        console.log("deslog1ado");
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
