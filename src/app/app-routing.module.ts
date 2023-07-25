import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [

  {
    path: '',
    component:HomeComponent
  },
  {
  path: 'home' ,
  component: HomeComponent
  },

  {
    path: 'my-work' ,
    component: MyWorkComponent
    },
    {
      path: 'contact-me' ,
      component: ContactMeComponent
      }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
