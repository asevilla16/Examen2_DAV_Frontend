import { Router } from '@angular/router';
import { VaccinationControlsService } from './../services/vaccination-controls.service';
import { VaccinationControl } from './../models/vaccination-control';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vaccination-controls',
  templateUrl: './vaccination-controls.component.html',
  styleUrls: ['./vaccination-controls.component.css']
})
export class VaccinationControlsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'vaccine', 'pacient', 'center', 'date', 'actions'];
  dataSource = new MatTableDataSource<VaccinationControl>([]);

  constructor(
    private vaccinationControlsService: VaccinationControlsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getVaccinationControls();
  }

  getVaccinationControls() {
    this.vaccinationControlsService.getVaccinationControls()
      .subscribe(
        res => {
          res && res != null
            ? this.dataSource = new MatTableDataSource<VaccinationControl>(res)
            : this.dataSource = new MatTableDataSource<VaccinationControl>([])
        },
        error => {
          console.log(error);
        }
      )
  }

  editVaccinationControl(id: any) {
    this.router.navigate(["/vaccination-controls/edit", id]);
  }

  deleteVaccinationControl(id: any) {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
