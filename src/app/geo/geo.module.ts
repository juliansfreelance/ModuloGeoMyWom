import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoRoutingModule } from './geo-routing.module';
import { AgmCoreModule } from "@agm/core";

import { ByCurrentaddressPageComponent } from './pages/by-currentaddress-page/by-currentaddress-page.component';
import { ByCurrentlocationPageComponent } from './pages/by-currentlocation-page/by-currentlocation-page.component';
import { ByOtheraddressPageComponent } from './pages/by-otheraddress-page/by-otheraddress-page.component';



@NgModule({
  declarations: [
    ByCurrentaddressPageComponent,
    ByCurrentlocationPageComponent,
    ByOtheraddressPageComponent
  ],
  imports: [
    CommonModule,
    GeoRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8nKLGKI5JeJiudYyx4n0d4keGR8LsfBs'
    })
  ]
})
export class GeoModule { }
