import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginGoogleComponent } from './login-google/login-google.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'profile-form', component: ProfileEditComponent },
  { path: 'login-google', component: LoginGoogleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
