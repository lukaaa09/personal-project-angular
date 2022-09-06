import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  public get isUserLoggedIn() {
    return this.userservice.isLoggedIn
  }
  public logOut() {
    this.userservice.logOutUser()
  }
}
