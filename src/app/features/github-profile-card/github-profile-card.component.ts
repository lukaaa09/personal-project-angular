import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrls: ['./github-profile-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class GithubProfileCardComponent implements OnInit {
  @Input() githubProfile!: IUser 

  constructor() { }

  ngOnInit(): void {
  }

}
