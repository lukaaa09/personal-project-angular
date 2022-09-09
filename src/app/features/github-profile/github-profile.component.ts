import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class GithubProfileComponent implements OnInit {
  @Input()  githubProfile!: IUser | null

  constructor() { }

  ngOnInit(): void {
  }

}
