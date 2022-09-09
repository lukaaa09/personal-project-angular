import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { ILogin } from 'src/app/core/interfaces/login.interfaces';
import { IUserPayload } from 'src/app/core/interfaces/user-payload.interface';
import { UserServiceService } from 'src/app/core/services/register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userservice: UserServiceService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.minLength(5), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"), Validators.minLength(7)])
  })
  ngOnInit(): void {

  }
  public navigateRegister() {
    this.router.navigateByUrl('/register').then()
  }
  public loginUser() {
    this.userservice.loginuser(this.loginForm.value as IUserPayload).pipe(
      tap((response: ILogin) => {
        console.log(response)
        localStorage.setItem('token', response.accessToken!)
        localStorage.setItem('username', response.user.username as string)
        this.userservice.isLoggedIn.next(true)
        this.router.navigateByUrl('/dashboard').then()

      }),
      catchError(() => {
        alert('error while trying to log in')
        return of({})
      })
    ).subscribe()
  }

}
