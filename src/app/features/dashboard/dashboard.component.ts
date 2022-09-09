import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardComponent implements OnInit {
  public githubUsers: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);

  constructor(private userservice: UserService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe((users: IUser[]) => {
      this.githubUsers.next(users)
    })

  }
  public getUserPage(username: string) {
    this.router.navigateByUrl(`/user/${username}`).then()

  }
  public shouldShowMore() {
    this.userservice.pageLimit += 10;
    this.userservice.getAllUsers().subscribe((users: IUser[]) => {
      this.githubUsers.next(users)
    })
  }
  public navigateToSearch() {
    this.router.navigateByUrl('/search').then()
  }
  public navigateToFav() {
    this.router.navigateByUrl('/favourite').then()
  }
}
