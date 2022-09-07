import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UserComponent } from './features/user/user.component';
import { SearchComponent } from './features/search/search.component';
import { GithubProfileComponent } from './features/github-profile/github-profile.component';
import { GithubReposComponent } from './features/github-repos/github-repos.component';
import { GithubProfileCardComponent } from './features/github-profile-card/github-profile-card.component';
import { GithubProfileDataComponent } from './features/github-profile-data/github-profile-data.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
// import { FavouriteListComponent } from './features/favourite/favourite-list/favourite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UserComponent,
    SearchComponent,
    GithubProfileComponent,
    GithubReposComponent,
    GithubProfileCardComponent,
    GithubProfileDataComponent,
    // FavouriteListComponent,
    TopBarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
