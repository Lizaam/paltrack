import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public passwordRegex = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&]).*$";

  public LoginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.passwordRegex)
    ]),
  })

  constructor(private router: Router) { }

  public get email(): any {
    return this.LoginForm.get('email');
  } 

  public get password(): any {
    return this.LoginForm.get('password');
  } 

  public onFormSubmit(): void {
    if (this.LoginForm.valid) {
      this.router.navigate(['/home']);
    }
  }
}
