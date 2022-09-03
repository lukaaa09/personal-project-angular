import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/register-service.service';
import { SearchService } from 'src/app/core/services/search.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardComponent implements OnInit {
  users: any;
  public githubUserQuery: string | undefined;
  public githubProfile: any;
  public githubRepos: any[] | undefined

  constructor(private userservice: UserService,
    private router: Router,
    private searchService: SearchService,
    private register: UserServiceService
  ) { }
  ngOnInit(): void {
    this.users = this.userservice.getAllUsers()
    console.log(this.users)

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
  public singleUser() {
    this.searchService.getProfile(this.githubUserQuery).subscribe((data) => {
      this.githubProfile = data
      console.log(this.githubProfile)
    })
    this.searchService.getRepos(this.githubUserQuery).subscribe((data) => {
      this.githubRepos = data
      console.log(this.githubRepos)
    })
  }

  public logOut() {
    this.register.logOutUser()
  }
}
