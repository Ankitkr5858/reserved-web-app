import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SplashComponent } from './splash/splash.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';

const routes: Routes = [
  {
    path: 'explore', 
    component:ExploreComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'sign-up',
    component:SignUpComponent
  },
  {
    path: 'splash', 
    component:SplashComponent
  },

  // {
  //   path: 'upload', 
  //   component:GetContentComponent
  // },

  {
    path: 'image',
    component: ImagesComponent,
    children: [
      {
        path:'upload',
        component: ImageComponent //image/upload
      },
      {
        path: 'list',
        component: ImageListComponent //image/list
      }
    ]
  },
  
  {
    path: '', 
    redirectTo: '/splash',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
