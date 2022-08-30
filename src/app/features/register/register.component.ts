import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { passwordValidator } from 'src/app/core/password-validator';
import { UserServiceService } from 'src/app/core/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private userservice: UserServiceService) { }
  register = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"), Validators.minLength(7)]),
    confirmPassword: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.minLength(5), Validators.required]),

  }, {validators: passwordValidator})
  ngOnInit(): void {
  }
  public navigatelogin() {
    this.router.navigateByUrl('/login').then()
  }
  
  public registerMethod() {
    this.userservice.registerUser(this.register.value).pipe(
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
