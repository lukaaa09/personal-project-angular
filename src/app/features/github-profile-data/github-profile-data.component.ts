import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-github-profile-data',
  templateUrl: './github-profile-data.component.html',
  styleUrls: ['./github-profile-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class GithubProfileDataComponent implements OnInit {
  @Input() githubProfile!: IUser

  constructor() { }

  ngOnInit(): void {
  }

}
