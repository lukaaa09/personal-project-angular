import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit(): void {
  }
  public navigateToDashboard() {
    this.router.navigateByUrl('/dashboard').then()
  }
  public getUser() {
    // this.userservice.getUser().pipe()
  }

}


