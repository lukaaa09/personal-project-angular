import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  public currentUserName: string | null = ''
  public currentGithubUser: BehaviorSubject<any> = new BehaviorSubject<{}>({});
  public user: any
  public arr: any[] = []
  constructor(private userservice: UserService, private actevatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUserName = this.actevatedroute.snapshot.paramMap.get('username')
    this.singleUser()
    if (localStorage.getItem('token')) {
      this.arr = JSON.parse(localStorage.getItem('token')!)
    }
  }
  public singleUser() {
    this.userservice.getUsers(this.currentUserName).subscribe((data) => {
      this.currentGithubUser.next(data)
    })
  }
  public saveData() {
    this.arr.push(this.currentGithubUser.getValue())
    localStorage.setItem('token', JSON.stringify(this.arr))
  }

}
