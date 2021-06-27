import { VaccinationCenter } from './../models/vaccination-center';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VaccinationCentersService {

  api_url = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getVaccinationCenters(){
    return this.http.get<VaccinationCenter[]>(this.api_url + "vaccinationcenters");
  }

  getVaccinationCenter(id: any){
    return this.http.get<VaccinationCenter>(this.api_url + "vaccinationcenters/" + id);
  }

  saveVaccinationCenter(center: VaccinationCenter){
    return this.http.post<VaccinationCenter>(this.api_url + "vaccinationcenters", center);
  }

  putVaccinationCenter(center: VaccinationCenter){
    return this.http.put<VaccinationCenter>(this.api_url + "vaccinationcenters/" + center.id, center);
  }

  deleteVaccinationCenter(id: any){
    return this.http.delete(this.api_url + "vaccinationcenters/" + id);
  }
}
