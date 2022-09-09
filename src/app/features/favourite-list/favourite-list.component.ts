import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouriteListComponent implements OnInit {

  arr!:  IUser[] 
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('favorite')) {
      this.arr = JSON.parse(localStorage.getItem('favorite')!)
    }
  }
  deleteUser(id: number | undefined) {
    let z = confirm("Are you Sure?");
    if (z) {
      this.arr = this.arr.filter((user: IUser) => user.id !== id)
    }
    localStorage.setItem('favorite', JSON.stringify(this.arr))
  }


}
