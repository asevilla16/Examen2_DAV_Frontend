import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccinationCentersRoutingModule } from './vaccination-centers-routing.module';
import { VaccinationCentersComponent } from './vaccination-centers/vaccination-centers.component';
import { VaccinationCentersFormComponent } from './vaccination-centers-form/vaccination-centers-form.component';


@NgModule({
  declarations: [
    VaccinationCentersComponent,
    VaccinationCentersFormComponent
  ],
  imports: [
    CommonModule,
    VaccinationCentersRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class VaccinationCentersModule { }
