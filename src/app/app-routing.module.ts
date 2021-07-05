import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
// import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: '/app', pathMatch: 'full'},
  // { path: 'app', component: AppComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  // { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
