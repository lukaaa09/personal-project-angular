import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
// import { NgxSpinnerService } from 'ngx-spinner/public_api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SearchComponent implements OnInit {
  public githubUserQuery: string | undefined;
  public githubProfile: Subject<any> = new Subject<any>()
  public githubRepos: Subject <any> = new Subject<any>()
  public errorMessage: string | undefined;



  constructor(private router: Router, private userservice: SearchService,
      ) { }

  ngOnInit(): void {
  }
  public navigateToDashboard() {
    this.router.navigateByUrl('/dashboard').then()
  }
  public searchUser() {
    // this.NgxSpinner.show()
    this.userservice.getProfile(this.githubUserQuery).subscribe((data) => {
      this.githubProfile.next(data)
    }, (error) => {
      this.errorMessage = error
      console.log(error)
    }
    );
    this.userservice.getRepos(this.githubUserQuery).subscribe((data) => {
      this.githubRepos.next(data)
      // this.NgxSpinner.hide()
      console.log(this.githubRepos)
    }, (error) => {
      this.errorMessage = error
      // console.log(error)
    }
    )
  }

}


