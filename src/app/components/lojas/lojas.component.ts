import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.scss'],
})

export class LojasComponent implements OnInit {
  lojas: Observable<any[]> | undefined;

  constructor(
    private firestore: AngularFirestore,

  ) { 
    this.lojas = this.firestore.collection('lojas').valueChanges();
  }

  ngOnInit() {
   
  }
      
}  
