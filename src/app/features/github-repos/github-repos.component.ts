import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class GithubReposComponent implements OnInit {

  @Input() githubRepos: any[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
