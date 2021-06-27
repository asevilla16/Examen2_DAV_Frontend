import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccinesRoutingModule } from './vaccines-routing.module';
import { VaccinesComponent } from './vaccines/vaccines.component';
import { VaccinesFormComponent } from './vaccines-form/vaccines-form.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    VaccinesComponent,
    VaccinesFormComponent
  ],
  imports: [
    CommonModule,
    VaccinesRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class VaccinesModule { }
