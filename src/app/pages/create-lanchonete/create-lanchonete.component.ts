import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-lanchonete',
  templateUrl: './create-lanchonete.component.html',
  styleUrls: ['./create-lanchonete.component.scss'],
})
export class CreateLanchoneteComponent implements OnInit {
  criarLojaForm: FormGroup = new FormGroup({});
  formVarification = true;
  constructor(
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,

  ) { }

  ngOnInit() {
    this.criarLojaForm = this.formBuilder.group({
      //Dados principais
      userNameLoja: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      lojaName: ['', [Validators.required]],
      tel: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],

      //End. da loja
      cep: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      end: ['', [Validators.required]],
      num: ['', [Validators.required]],
      complemento: ['', []],
    });
  }
  get errorControl() {
    return this.criarLojaForm.controls;
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

            frete: 'Grátis',
            avaliacao: 0.0,

            userID: user?.uid,
          });

          this.firestore.collection('users').doc(user?.uid).update({
            lojaExists: true,
          });
          
          this.formVarification = true;
          this.router.navigate(['/home']);
        }
        else {
          alert("Certifique-se que esteja logado em uma conta para continuar")
        }
      });
    }
    else {
      this.formVarification = false
    }
  }
}