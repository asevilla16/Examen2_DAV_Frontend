import { VaccinationControlsFormComponent } from './vaccination-controls-form/vaccination-controls-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationControlsComponent } from './vaccination-controls/vaccination-controls.component';

const routes: Routes = [
  {
    path: '',
    component: VaccinationControlsComponent
  },
  {
    path: 'create',
    component: VaccinationControlsFormComponent
  },
  {
    path: 'edit/:id',
    component: VaccinationControlsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccinationControlsRoutingModule { }
