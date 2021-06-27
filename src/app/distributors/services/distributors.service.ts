import { Distributor } from './../models/Distributor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistributorsService {

  api_url = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getDistributors(){
    return this.http.get<Distributor[]>(this.api_url + "distributors");
  }

  getDistributor(id: any){
    return this.http.get<Distributor>(this.api_url + "distributors/" + id);
  }

  saveDistributor(distributor: Distributor){
    return this.http.post<Distributor>(this.api_url + "distributors", distributor);
  }

  putDistributor(distributor: Distributor){
    return this.http.put<Distributor>(this.api_url + "distributors/" + distributor.id, distributor);
  }

  deleteDistributor(id: any){
    return this.http.delete(this.api_url + "distributors/" + id);
  }
}
