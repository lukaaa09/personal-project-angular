import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class SearchComponent implements OnInit {
  public githubUserQuery: string | undefined;
  public githubProfile: any;
  public githubRepos: any[] | undefined;
  public errorMessage: string | undefined;



  constructor(private router: Router, private userservice: SearchService) { }

  ngOnInit(): void {
  }
  public navigateToDashboard() {
    this.router.navigateByUrl('/dashboard').then()
  }
  public searchUser() {
    this.userservice.getProfile(this.githubUserQuery).subscribe((data) => {
      this.githubProfile = data
    });
    this.userservice.getRepos(this.githubUserQuery).subscribe((data) => {
      this.githubRepos = data
      console.log(this.githubRepos)

    })
  }

}


