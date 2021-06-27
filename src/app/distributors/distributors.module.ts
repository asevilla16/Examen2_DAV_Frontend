import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorsRoutingModule } from './distributors-routing.module';
import { DistributorsComponent } from './distributors/distributors.component';
import { DistributorsFormComponent } from './distributors-form/distributors-form.component';


@NgModule({
  declarations: [
    DistributorsComponent,
    DistributorsFormComponent
  ],
  imports: [
    CommonModule,
    DistributorsRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DistributorsModule { }
