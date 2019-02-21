import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UpdateInfoComponent} from './update-info/update-info.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {UserPageComponent} from './user-page/user-page.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {NotFoundComponent} from './not-found/not-found.component';

import {AuthGuard} from './guards/auth-guard.service';
import {CreateNewPasswordComponent} from './create-new-password/create-new-password.component';
import {UpdatePasswordGuard} from './guards/update-password-guard.service';


const userPageRoutes: Routes = [
  {path: 'update-info', component: UpdateInfoComponent},
  {path: 'user-info', component: UserInfoComponent},
  {path: '', redirectTo: '/user-page/user-info', pathMatch: 'full'},
];

// const restorePasswordRoutes: Routes = [
//   {path: 'create-new-password', component: CreateNewPasswordComponent},
// ];

const appRoutes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'user-page', component: UserPageComponent, children: userPageRoutes, canActivate: [AuthGuard]},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'create-new-password', component: CreateNewPasswordComponent, canActivate: [UpdatePasswordGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard, UpdatePasswordGuard]
})

export class AppRoutingModule {
}
