import { VaccinationControl } from './../models/vaccination-control';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VaccinationControlsService {

  api_url = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getVaccinationControls(){
    return this.http.get<VaccinationControl[]>(this.api_url + "vaccinationcontrols");
  }

  getVaccinationControl(id: any){
    return this.http.get<VaccinationControl>(this.api_url + "vaccinationcontrols/" + id);
  }

  saveVaccinationControl(control: VaccinationControl){
    return this.http.post<VaccinationControl>(this.api_url + "vaccinationcontrols", control);
  }

  putVaccinationControl(control: VaccinationControl){
    return this.http.put<VaccinationControl>(this.api_url + "vaccinationcontrols/" + control.id, control);
  }

  deleteVaccinationControl(id: any){
    return this.http.delete(this.api_url + "vaccinationcontrols/" + id);
  }
}
