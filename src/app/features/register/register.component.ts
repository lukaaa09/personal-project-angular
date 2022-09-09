import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { login } from 'src/app/core/interfaces/login.interfaces';
import { passwordValidator } from 'src/app/core/password-validator';
import { UserServiceService } from 'src/app/core/services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private userservice: UserServiceService) { }
  register = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"), Validators.minLength(7)]),
    confirmPassword: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.minLength(5), Validators.required]),

  }, {validators: passwordValidator})
  ngOnInit(): void {
  }
  get name() {
    return this.register.get('name') as FormControl;
  }
  get lastName() {
    return this.register.get('lastName')  as FormControl;
  }
  get email() {
    return this.register.get('email')  as FormControl;
  }
  get password() {
    return this.register.get('password')  as FormControl;
  }
  get confirmPassword() {
    return this.register.get('confirmPassword')  as FormControl;
  }
  get username() {
    return this.register.get('username')  as FormControl;
  }
  public navigatelogin() {
    this.router.navigateByUrl('/login').then()
  }
  
  public registerMethod() {
    this.userservice.registerUser(this.register.value as login).pipe(
      tap(() => {
        alert('succesfully registered')
        this.register.reset()
        this.router.navigateByUrl('/login').then()
      }),
      catchError(() => {
        alert('error while registering')
        return of({})
      })
    ).subscribe()
  }


}
