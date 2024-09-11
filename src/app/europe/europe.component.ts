import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-europe',
  standalone: true,
  imports: [],
  templateUrl: './europe.component.html',
  styleUrl: './europe.component.css'
})
export class EuropeComponent implements OnInit{
  http = inject(HttpClient);
  countries1 : any = [];
  countries2 : any  = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get("https://restcountries.com/v3.1/region/europe")
    .subscribe((country: any) => {
      this.countries1 = country;
      this.countries1.sort((a : any, b: any) => a.name.common.localeCompare(b.name.common));
      if (this.countries1.length % 2 == 0) {
        this.countries2 = this.countries1.slice((this.countries1.length / 2), this.countries1.length);
        this.countries1 = this.countries1.slice(0, (this.countries1.length / 2));
      } else {
        this.countries2 = this.countries1.slice((this.countries1.length / 2 + 1), this.countries1.length);
        this.countries1 = this.countries1.slice(0, (this.countries1.length / 2 + 1));
      }
    });
  }
}
