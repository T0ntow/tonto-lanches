import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  userName: any;
  isLoggedIn = false;

  constructor(
    private afAuth: AngularFireAuth,
    private fireAuth: AngularFireAuth,
    private router: Router,
  ) { }

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
