import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: '*', redirectTo: 'dashboard/index', pathMatch: 'full'},
  { path: 'dashboard/index', component: IndexComponent },
  { path: 'dashboard/create', component: CreateComponent },
  { path: 'dashboard/:postId/create', component:  CreateComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
