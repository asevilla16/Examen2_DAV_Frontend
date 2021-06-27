import { VaccinationControl } from './../models/vaccination-control';
import { VaccinationControlsService } from './../services/vaccination-controls.service';
import { Vaccine } from './../../vaccines/models/vaccine';
import { VaccinationCentersService } from './../../vaccination-centers/services/vaccination-centers.service';
import { VaccinationCenter } from './../../vaccination-centers/models/vaccination-center';
import { VaccinesService } from './../../vaccines/services/vaccines.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientService } from 'src/app/pacients/services/pacient.service';
import { Pacient } from 'src/app/pacients/models/pacient';

@Component({
  selector: 'app-vaccination-controls-form',
  templateUrl: './vaccination-controls-form.component.html',
  styleUrls: ['./vaccination-controls-form.component.css']
})
export class VaccinationControlsFormComponent implements OnInit {

  pacients: Pacient[] = [];
  vaccines: Vaccine[] = [];
  centers: VaccinationCenter[] = [];

  form: FormGroup = this.buildForm();

  title: string = '';
  controlId: string | null = '';

  constructor(
    private _pacientsService: PacientService,
    private _vaccineService: VaccinesService,
    private _vaccinationCenterService: VaccinationCentersService,
    private _vaccinationControlService: VaccinationControlsService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getTitle();
    this.getPacients();
    this.getVaccines();
    this.getCenters();
    this.getControlInfo();
  }

  buildForm() {
    return this._formBuilder.group({
      id: 0,
      vaccineId: 0,
      pacientId: 0,
      vaccinationCenterId: 0,
      vaccinationDate: new Date(),
      dose: 0
    });
  }

  getTitle() {
    this.controlId = this._route.snapshot.paramMap.get('id');
    this.controlId
      ? this.title = "Editar Control de vacunacion"
      : this.title = "Crear Control de vacunacion"
  }

  getPacients() {
    this._pacientsService.getPacients()
      .subscribe(
        res => {
          this.pacients = res;
        }
      )
  }

  getVaccines() {
    this._vaccineService.getVaccines()
      .subscribe(
        res => {
          this.vaccines = res;
        }
      )
  }
  
  getCenters() {
    this._vaccinationCenterService.getVaccinationCenters()
      .subscribe(
        res => {
          this.centers = res;
        }
      )
  }

  getControlInfo(){
    if(this.controlId){
      this._vaccinationControlService.getVaccinationControl(this.controlId)
        .subscribe(
          res => {
            this.setControlInfo(res)
          }
        )
    }
  }

  setControlInfo(control: VaccinationControl){
    this.form.patchValue(
      control
    )
  }

  
  onSubmit(){
    const control = this.form.value;
    this.controlId
    ? this.edit(control)
    : this.save(control)
  }

  save(control: VaccinationControl){
    this._vaccinationControlService.saveVaccinationControl(control)
      .subscribe(
        res => {
          this._matSnackBar.open('Se ha creado un nuevo registro de vacunacion', 'OK', {
            verticalPosition: 'top',
            duration: 6000
          });
          this.returnToList();
        }
      )
  }

  edit(control: VaccinationControl){
    this._vaccinationControlService.putVaccinationControl(control)
      .subscribe(
        res => {
          this._matSnackBar.open('Se ha editado el registro', 'OK', {
            verticalPosition: 'top',
            duration: 6000
          });
          this.returnToList();
        }
      )
  }

  returnToList(){
    this._router.navigate(["/vaccination-controls"])
  }

}
