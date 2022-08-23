import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IdentifyDialogComponent } from './identify-dialog/identify-dialog.component';
import { IdentifyComponent } from './identify/identify.component';
import { TrainComponent } from './train/train.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'identify', component:IdentifyComponent},
  {path:'train' ,component:TrainComponent},
  // {path:'dialog',component:IdentifyDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
