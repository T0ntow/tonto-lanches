import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

interface CheckboxItem {
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});
  // selectedType = '';

  constructor(
    private formBuilder: FormBuilder,
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // checkbox: [false, [this.onCheckboxChange]]
    });
  }
  signup() {
    if (this.signupForm.valid) {
      this.fireAuth.createUserWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password)
        .then((userCredential) => {
        if (userCredential.user) {
          const userId = userCredential.user.uid;
  
          this.firestore.collection('users').doc(userId).set({
            email: this.signupForm.value.email,
            userName: this.signupForm.value.user
          });

          this.router.navigate(['/home'])
        }
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
}
