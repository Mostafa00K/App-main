import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { FileComponent } from './file/file.component';
import { HomeComponent } from './home/home.component';
import { FileDocComponent } from './file-doc/file-doc.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'file/:id/:id2',component:FileComponent},
    {path:'filed/:id/:id2/:mon/:bas/:var',component:FileDocComponent}
];
