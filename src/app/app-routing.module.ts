import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { ImgComponent } from './images/img/img.component';
import { ListComponent } from './images/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'image/upload', pathMatch: 'full'},
  { path: 'image', component: ImagesComponent,
    children: [
      { path: 'upload', component: ImgComponent },
      { path: 'list',   component: ListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
