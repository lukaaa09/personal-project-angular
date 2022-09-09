import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouriteListComponent implements OnInit {

  list: number = 0
  arr: any
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('favorite')) {
      this.arr = JSON.parse(localStorage.getItem('favorite')!)
      this.list++
    }
  }
  deleteUser(id: string) {
    let z = confirm("Are you Sure?");
    if (z) {
      this.arr = this.arr.filter((user: any) => user.id !== id)
      this.list--
    }
    localStorage.setItem('favorite', JSON.stringify(this.arr))
  }


}
