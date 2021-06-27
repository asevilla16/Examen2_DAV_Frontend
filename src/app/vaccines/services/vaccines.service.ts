import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vaccine } from '../models/vaccine';

@Injectable({
  providedIn: 'root'
})
export class VaccinesService {

  api_url = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getVaccines(){
    return this.http.get<Vaccine[]>(this.api_url + "vaccines");
  }

  getVaccine(id: any){
    return this.http.get<Vaccine>(this.api_url + "vaccines/" + id);
  }

  saveVaccine(vaccine: Vaccine){
    return this.http.post<Vaccine>(this.api_url + "vaccines", vaccine);
  }

  putVaccine(vaccine: Vaccine){
    return this.http.put<Vaccine>(this.api_url + "vaccines/" + vaccine.id, vaccine);
  }

  deleteVaccine(id: any){
    return this.http.delete(this.api_url + "vaccines/" + id);
  }
}
