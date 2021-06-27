import { Pacient } from './../models/pacient';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  api_url = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getPacients(){
    return this.http.get<Pacient[]>(this.api_url + "pacients");
  }

  getPacient(id: any){
    return this.http.get<Pacient>(this.api_url + "pacients/" + id);
  }

  savePacient(pacient: Pacient){
    return this.http.post<Pacient>(this.api_url + "pacients", pacient);
  }

  putPacient(pacient: Pacient){
    return this.http.put<Pacient>(this.api_url + "pacients/" + pacient.id, pacient);
  }

  deletePacient(id: any){
    return this.http.delete(this.api_url + "pacients/" + id);
  }
}
