import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public githubUserQuery: string | undefined;
  public githubProfile: any;
  public githubRepos: any[] | undefined
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  // public singleUser() {
  //   this.searchService.getProfile(this.githubUserQuery).subscribe((data) => {
  //     this.githubUserQuery = data
  //   })
  //   this.searchService.getRepos(this).subscribe((data) => {
  //     this.githubRepos = data
  //   })
  // }


}
