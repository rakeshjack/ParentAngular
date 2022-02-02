import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialParentComponent } from './initial-parent/initial-parent.component';

const routes: Routes = [
  { path: '',component:InitialParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
