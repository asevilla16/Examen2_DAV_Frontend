import { DistributorsService } from './../services/distributors.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Distributor } from '../models/Distributor';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<Distributor>([]);

  constructor(
    private distributorService: DistributorsService
  ) { }

  ngOnInit(): void {
    this.getDistributors();
  }

  getDistributors() {
    this.distributorService.getDistributors()
      .subscribe(
        res => {
          res && res != null 
          ? this.dataSource = new MatTableDataSource<Distributor>(res) 
          : this.dataSource = new MatTableDataSource<Distributor>([])
        },
        error => {
          console.log(error);
        }
      )
  }

  editDistributor(id: any){

  }

  deleteDistributor(id: any){

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
