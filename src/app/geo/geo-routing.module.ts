import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ByCurrentaddressPageComponent } from './pages/by-currentaddress-page/by-currentaddress-page.component';
import { ByCurrentlocationPageComponent } from './pages/by-currentlocation-page/by-currentlocation-page.component';
import { ByOtheraddressPageComponent } from './pages/by-otheraddress-page/by-otheraddress-page.component';

const routes: Routes = [
  {
    path: 'direccion-actual',
    component: ByCurrentaddressPageComponent
  },
  {
    path: 'ubicacion-actual',
    component: ByCurrentlocationPageComponent
  },
  {
    path: 'otra-direción',
    component: ByOtheraddressPageComponent
  },
  {
    path: '**',
    redirectTo: 'direccion-actual'
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class GeoRoutingModule { }
