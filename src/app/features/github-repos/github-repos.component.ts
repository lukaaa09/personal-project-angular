import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IUserRepos } from 'src/app/core/interfaces/github-repos-interface';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class GithubReposComponent implements OnInit {

  @Input() githubRepos!: IUserRepos[] | null;
  constructor() { }

  ngOnInit(): void {
  }

}
