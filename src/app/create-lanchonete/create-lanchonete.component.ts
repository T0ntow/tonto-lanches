import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { copyFile } from 'fs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-lanchonete',
  templateUrl: './create-lanchonete.component.html',
  styleUrls: ['./create-lanchonete.component.scss'],
})
export class CreateLanchoneteComponent implements OnInit {
  criarLojaForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,

  ) { }

  ngOnInit() {
    this.criarLojaForm = this.formBuilder.group({
      //Dados principais
      userNameLoja: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      lojaName: ['', [Validators.required]],
      tel: ['', [Validators.required]],

      //End. da loja
      cep: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      end: ['', [Validators.required]],
      num: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (this.criarLojaForm.valid) {
      console.log(this.criarLojaForm.value);

      this.afAuth.user.subscribe(user => {
        if (user) {
          this.firestore.collection('lojas').doc(user?.uid).set({
            userNameLoja: this.criarLojaForm.value.userNameLoja,
            cpf: this.criarLojaForm.value.cpf,
            lojaName: this.criarLojaForm.value.lojaName,
            tel: this.criarLojaForm.value.tel,


            cep: this.criarLojaForm.value.cep,
            estado: this.criarLojaForm.value.estado,
            cidade: this.criarLojaForm.value.cidade,
            bairro: this.criarLojaForm.value.bairro,
            end: this.criarLojaForm.value.end,
            num: this.criarLojaForm.value.num,
            complemento: this.criarLojaForm.value.complemento,

            userID: user?.uid,
          });


          this.router.navigate(['/home']);
        }
      });
    }
    
  }

}
