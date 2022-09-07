import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FavouriteListComponent } from './features/favourite/favourite-list/favourite-list.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { SearchComponent } from './features/search/search.component';
import { UserComponent } from './features/user/user.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent  
  },
  {
    path: 'user/:username',
    component: UserComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'favourite',
    loadChildren: () => import('./features/favourite/favourite.module').then(m => m.FavouriteModule)
  },
  // {
  //   path: 'favourtie',
  //   component: FavouriteListComponent
  // },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
