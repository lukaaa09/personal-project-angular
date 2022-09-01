import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardComponent implements OnInit {
  users: any;

  constructor(private userservice: UserService, private router: Router) { }
  ngOnInit(): void {
    this.users = this.userservice.getAllUsers()

  }
  public getAll() {
    this.users = this.userservice.getAllUsers()
  }

  public shouldShowMore() {
    this.userservice.pageLimit += 10;
    this.getAll()
  }

  public getUserPage() {
    this.router.navigateByUrl('/user').then()

  }

  public navigateToSearch() {
    this.router.navigateByUrl('/search').then()

  }
}
