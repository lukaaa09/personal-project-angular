import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogOutGuard } from './core/guards/log-out.guard';
import { LoginGuard } from './core/guards/login.guard';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [LoginGuard],
    component: RegisterComponent  
  },
  {
    path: 'dashboard',
    canActivate: [LogOutGuard],
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)  
  },
  {
    path: 'user/:username',
    canActivate: [LogOutGuard],
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)  
  },
  {
    path: 'search',
    canActivate: [LogOutGuard],
    loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'favourite',
    canActivate: [LogOutGuard],
    loadChildren: () => import('./features/favourite/favourite.module').then(m => m.FavouriteModule)
  },
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
