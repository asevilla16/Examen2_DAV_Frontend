import { PacientsFormComponent } from './pacients-form/pacients-form.component';
import { PacientsComponent } from './pacients/pacients.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PacientsComponent
  },
  {
    path: 'create',
    component: PacientsFormComponent
  },
  {
    path: 'edit/:id',
    component: PacientsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientsRoutingModule { }
