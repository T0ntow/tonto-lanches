import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private fireAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signup() {
    if (this.signupForm.valid) {
      this.fireAuth.createUserWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password)
        .then((userCredential) => {
          if (userCredential.user) {
            userCredential.user.updateProfile({
              displayName: this.signupForm.value.user
            });
            this.router.navigate(['/home']);

            console.log('name: ' + this.signupForm.value.user);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  
}