import { Component } from '@angular/core';
import { UserServiceService } from './core/services/register-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-project-angular';
  constructor(private userService: UserServiceService) {}
 
  get isUserLoggedIn(){
    return this.userService.isLoggedIn;
  }
}
