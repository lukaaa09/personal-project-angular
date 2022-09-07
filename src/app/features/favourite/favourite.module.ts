import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FavouriteListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FavouriteListComponent }])
  ],
  exports: [FavouriteListComponent]

})
export class FavouriteModule { }
