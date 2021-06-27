import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pacients',
    loadChildren: () => import('./pacients/pacients.module').then(m => m.PacientsModule)
  },
  {
    path: 'vaccines',
    loadChildren: () => import('./vaccines/vaccines.module').then(m => m.VaccinesModule)
  },
  {
    path: 'distributors',
    loadChildren: () => import('./distributors/distributors.module').then(m => m.DistributorsModule)
  },
  {
    path: 'vaccination-centers',
    loadChildren: () => import('./vaccination-centers/vaccination-centers.module').then(m => m.VaccinationCentersModule)
  },
  {
    path: 'vaccination-controls',
    loadChildren: () => import('./vaccination-controls/vaccination-controls.module').then(m => m.VaccinationControlsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
