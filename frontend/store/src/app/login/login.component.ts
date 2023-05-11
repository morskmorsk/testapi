// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // Logout the user if already logged in
    this.authService.logout();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    // this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
    this.authService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
    .subscribe(
        data => {
          this.router.navigate(['/']); // Navigate to the desired route after a successful login
        },
        error => {
          console.error(error);
          // Handle login errors here, e.g., displaying a message or updating the UI
        });
  }
}

