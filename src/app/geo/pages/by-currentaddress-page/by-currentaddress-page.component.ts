import { Component} from '@angular/core';
import { StandardizationService } from '../../services/standardization.service';
import { Address } from '../../interfaces/addressStandar';

@Component({
  selector: 'app-by-currentaddress-page',
  templateUrl: './by-currentaddress-page.component.html',
  styles: [
  ]
})
export class ByCurrentaddressPageComponent {
  public address: Address[] = [];

  constructor(private standardizationService: StandardizationService) { }


  standardizationByCurrentAddress(city: string, address: string):void {
    this.standardizationService.getStandardization(city, address)
      .subscribe(addressResponse => {
        this.address = addressResponse;
        console.log(this.address)
      });
  }



}
