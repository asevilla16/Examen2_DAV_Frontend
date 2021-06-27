import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccinationControlsRoutingModule } from './vaccination-controls-routing.module';
import { VaccinationControlsComponent } from './vaccination-controls/vaccination-controls.component';
import { VaccinationControlsFormComponent } from './vaccination-controls-form/vaccination-controls-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VaccinationControlsComponent,
    VaccinationControlsFormComponent
  ],
  imports: [
    CommonModule,
    VaccinationControlsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VaccinationControlsModule { }
