import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {BeersComponent} from './beers/beers.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
    {
      path: '',
      component: NavbarComponent,
      outlet: 'navbar'
    },
    {
      path: '',
      component: BeersComponent,
    },
    {
      path: 'favorite-beers',
      component: UserComponent
    },
    {
      path: '**', redirectTo: ''
    }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
