import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
  {
    path:'',
    component:ShowproductComponent
  },
  {
    path:'show',
    component:ShowproductComponent
  },
  {
    path:'add',
    component:AddproductComponent
  },
  {
    path:'**',
    component:ShowproductComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
