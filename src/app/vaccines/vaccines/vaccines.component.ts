import { VaccinesService } from './../services/vaccines.service';
import { Vaccine } from './../models/vaccine';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.css']
})
export class VaccinesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'distributor', 'dosequantity', 'actions'];
  dataSource = new MatTableDataSource<Vaccine>([]);

  constructor(
    private vaccineService: VaccinesService
  ) { }

  ngOnInit(): void {
    this.getVaccines();
  }

  getVaccines(){
    this.vaccineService.getVaccines()
      .subscribe(
        res => {
          res && res != null 
          ? this.dataSource = new MatTableDataSource<Vaccine>(res) 
          : this.dataSource = new MatTableDataSource<Vaccine>([])
        },
        error => {
          console.log(error);
        }
      )
  }

  editVaccine(id: any){

  }

  deleteVaccine(id: any){

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
