import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { GithubProfileCardComponent } from '../github-profile-card/github-profile-card.component';
import { GithubProfileComponent } from '../github-profile/github-profile.component';
import { GithubReposComponent } from '../github-repos/github-repos.component';
import { GithubProfileDataComponent } from '../github-profile-data/github-profile-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchComponent,
    GithubProfileCardComponent,
    GithubProfileComponent,
    GithubReposComponent,
    GithubProfileDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SearchComponent }])
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
