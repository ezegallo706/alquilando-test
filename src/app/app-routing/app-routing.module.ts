import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from '../components/users/users.component';
import { UserComponent } from '../components/user/user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users'},
  { path: 'users', component: UsersComponent},
  { path: 'user/:id', component: UserComponent},
  { path: 'user', component: UserComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
