import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  constructor(
    private countriesService: CountriesService,
  ) {  }
  public countries: Country [] = [];

  searchByRegion (term: string): void {
  this.countriesService.searchRegion(term).subscribe( countries =>{
    this.countries = countries;})
}

}
