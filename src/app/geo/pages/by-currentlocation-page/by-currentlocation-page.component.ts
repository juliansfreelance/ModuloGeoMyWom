import { Component } from '@angular/core';
import { AgmMarker } from '@agm/core';
import { MapsService } from '../../services';
import { Address } from '../../interfaces/addressStandar';
import { InverseService } from '../../services/inverse.service';

@Component({
  selector: 'app-by-currentlocation-page',
  templateUrl: './by-currentlocation-page.component.html',
  styleUrls: ['./by-currentlocation-page.component.css']
})
export class ByCurrentlocationPageComponent {

  public address: Address[] = [];

  public mapLocation?: [number, number];
  public userLocation?: [number, number];
  public zoom:number = 18;
  public disableUI: boolean = true;
  public marker: AgmMarker | undefined;


  constructor(private mapsService: MapsService, private inverseService: InverseService ) { }

  get isUserLocationReady() {
    this.mapLocation = this.mapsService.userLocation;
    this.userLocation = this.mapsService.userLocation;
    console.log(this.userLocation);
    return this.mapsService.isUserLocationReady;
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.latitude, coords.longitude];
          resolve(this.userLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalización');
          console.log(err);
          reject();
        }
      );
    });
  }


  InverseByCurrentLocation(lat: number, log: number): void {
    this.inverseService.getInverse(lat.toString(), log.toString())
      .subscribe(addressResponse => {
        this.address = addressResponse;
        console.log(this.address)
      });
  }

}
