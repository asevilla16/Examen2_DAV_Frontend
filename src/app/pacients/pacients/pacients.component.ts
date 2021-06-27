import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PacientService } from './../services/pacient.service';
import { Pacient } from './../models/pacient';
import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-pacients',
  templateUrl: './pacients.component.html',
  styleUrls: ['./pacients.component.css']
})
export class PacientsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'identity', 'fullname', 'birthDate', 'carnet', 'nationality', 'actions'];
  dataSource = new MatTableDataSource<Pacient>([]);

  constructor(
    private pacientService: PacientService,
    private router: Router,
    private dialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getPacients();
  }

  getPacients(){
    this.pacientService.getPacients()
      .subscribe(
        res => {
          res && res != null 
          ? this.dataSource = new MatTableDataSource<Pacient>(res) 
          : this.dataSource = new MatTableDataSource<Pacient>([]);
        },
        error => {
          console.log(error);
        }
      )
  }

  editPacient(id: any){
    this.router.navigate(["/pacients/edit", id]);
  }

  deletePacient(id: any){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
        if(result){
          this.pacientService.deletePacient(id)
          .subscribe(
            (res: any) => {
              this.matSnackBar.open('Se ha eliminado el paciente', 'OK', {
                verticalPosition: 'top',
                duration: 6000
              });
            }
          )
        }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
