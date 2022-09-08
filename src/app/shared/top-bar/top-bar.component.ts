import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/register-service.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {
  public getUser = localStorage.getItem('username')
  
  constructor(private userservice: UserServiceService) { }

  ngOnInit(): void {
  }

  public get isUserLoggedIn() {
    return this.userservice.isLoggedIn
  }
  public logOut() {
    this.userservice.logOutUser()
  }
}
