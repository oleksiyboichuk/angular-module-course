import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //work for this module
  exports: [RouterModule] //work for any other modeles
})
export class AppRoutingModule { }
