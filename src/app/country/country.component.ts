import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit {
  http = inject(HttpClient)
  countryParam: String = ""
  country: any = {}
  private route = inject(ActivatedRoute)
  private countryApiUrl = "https://restcountries.com/v3.1/name/"

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryParam = params["country"]
    })
    this.getCountry()
  }

  getCountry() {
    this.http.get(this.countryApiUrl + this.countryParam).subscribe((country: any) => {
      this.country = country[0]
    })
  }
}
