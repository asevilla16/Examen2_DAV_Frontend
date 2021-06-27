import { SharedModule } from './../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientsRoutingModule } from './pacients-routing.module';
import { PacientsComponent } from './pacients/pacients.component';
import { PacientsFormComponent } from './pacients-form/pacients-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PacientsComponent,
    PacientsFormComponent
  ],
  imports: [
    CommonModule,
    PacientsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PacientsModule { }
