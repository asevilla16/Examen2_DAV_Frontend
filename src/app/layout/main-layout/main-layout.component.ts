import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  opened: boolean = true;

  mobileQuery: MediaQueryList;

  fillerNav = [
    { route: 'pacients', title: 'Gestionar Pacientes', icon: 'person'},
    { route: 'vaccines', title: 'Gestionar Vacunas', icon: 'vaccines'},
    { route: 'distributors', title: 'Gestionar Distribuidores', icon: 'local_shipping'},
    { route: 'vaccination-centers', title: 'Centros de Vacunacion', icon: 'local_pharmacy'},
    { route: 'vaccination-controls', title: 'Control de Vacunacion', icon: 'inventory'}
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(){
    
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
