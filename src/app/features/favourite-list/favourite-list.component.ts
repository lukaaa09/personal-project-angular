import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouriteListComponent implements OnInit {

  arr: any 
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token')) {
      this.arr = JSON.parse(localStorage.getItem('token')!)
    }
  }
  deleteUser(index: any) {
    let z = confirm("Are you Sure?");
    if (z) {
      this.arr.splice(index, 1);
    }
    localStorage.clear()
  }
  

}
