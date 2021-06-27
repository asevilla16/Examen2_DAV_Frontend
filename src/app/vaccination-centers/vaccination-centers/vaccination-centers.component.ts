import { VaccinationCentersService } from './../services/vaccination-centers.service';
import { VaccinationCenter } from './../models/vaccination-center';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vaccination-centers',
  templateUrl: './vaccination-centers.component.html',
  styleUrls: ['./vaccination-centers.component.css']
})
export class VaccinationCentersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'municipality', 'department', 'address', 'actions'];
  dataSource = new MatTableDataSource<VaccinationCenter>([]);

  constructor(
    private vaccinationCentersService: VaccinationCentersService
  ) { }

  ngOnInit(): void {
    this.getVaccinationCenters();
  }

  getVaccinationCenters(){
    this.vaccinationCentersService.getVaccinationCenters()
      .subscribe(
        res => {
          res && res != null 
          ? this.dataSource = new MatTableDataSource<VaccinationCenter>(res) 
          : this.dataSource = new MatTableDataSource<VaccinationCenter>([])
        },
        error => {
          console.log(error);
        }
      )
  }

  editVaccinationCenter(id: any){

  }

  deleteVaccinationCenter(id: any){
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
