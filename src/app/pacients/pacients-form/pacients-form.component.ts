import { PacientService } from './../services/pacient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pacient } from '../models/pacient';

@Component({
  selector: 'app-pacients-form',
  templateUrl: './pacients-form.component.html',
  styleUrls: ['./pacients-form.component.css']
})
export class PacientsFormComponent implements OnInit {

  form: FormGroup = this.buildForm();

  title: string = '';
  pacientId: string | null = '';

  constructor(
    private _pacientsService: PacientService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getTitle();
    this.getPacientInfo();
  }

  getTitle(){
    this.pacientId = this._route.snapshot.paramMap.get('id');
    this.pacientId 
    ? this.title = "Editar Paciente"
    : this.title = "Crear paciente"
  }

  buildForm() {
    return this._formBuilder.group({
      id: 0,
      name: '',
      lastName: '',
      identity: '',
      carnet: '',
      age: '',
      birthDate: new Date,
      sex: '',
      nationality: '',
      address: '',
      phoneNumber: '',
      email: ''
    })
  }

  getPacientInfo(){
    if(this.pacientId){
      this._pacientsService.getPacient(this.pacientId)
        .subscribe(
          res => {
            this.setPacientInfo(res)
          }
        )
    }
  }

  setPacientInfo(pacient: Pacient){
    this.form.patchValue(
      pacient
    )
  }

  onSubmit(){
    const pacient = this.form.value;
    this.pacientId
    ? this.edit(pacient)
    : this.save(pacient)
  }

  save(pacient: Pacient){
    this._pacientsService.savePacient(pacient)
      .subscribe(
        res => {
          this._matSnackBar.open('Se ha creado un nuevo paciente', 'OK', {
            verticalPosition: 'top',
            duration: 6000
          });
          this.returnToList();
        }
      )
  }

  edit(pacient: Pacient){
    this._pacientsService.putPacient(pacient)
      .subscribe(
        res => {
          this._matSnackBar.open('Se ha editado el paciente', 'OK', {
            verticalPosition: 'top',
            duration: 6000
          });
          this.returnToList();
        }
      )
  }

  returnToList(){
    this._router.navigate(["/pacients"])
  }

}
