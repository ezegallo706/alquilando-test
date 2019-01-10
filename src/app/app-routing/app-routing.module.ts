import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
RouterModule
import { UsersComponent } from '../components/users/users.component';
import { UserComponent } from '../components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users', component: UsersComponent},
  { path: 'user/:id', component: UserComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
