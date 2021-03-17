import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list.component';
import { EmployeeComponent } from './components/employee.component';

const routes: Routes = [
  {
    path:'employees', component: EmployeeListComponent
  },
  {
    path:'employee/:id', component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
