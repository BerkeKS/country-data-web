import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-africa',
  standalone: true,
  imports: [],
  templateUrl: './africa.component.html',
  styleUrl: './africa.component.css'
})
export class AfricaComponent implements OnInit {
  private http = inject(HttpClient)
  countries1: any = []
  countries2: any = []

  ngOnInit(): void {
    this.getCountries()
  }

  getCountries() {
    this.http.get("https://restcountries.com/v3.1/region/africa")
    .subscribe((country: any) => {
      this.countries1 = country
      this.countries1.sort((a : any, b: any) => a.name.common.localeCompare(b.name.common));
      if (this.countries1.length % 2 == 0) {
        this.countries2 = this.countries1.slice((this.countries1.length / 2), this.countries1.length);
        this.countries1 = this.countries1.slice(0, (this.countries1.length / 2));
      } else {
        this.countries2 = this.countries1.slice((this.countries1.length / 2 + 1), this.countries1.length);
        this.countries1 = this.countries1.slice(0, (this.countries1.length / 2 + 1));
      }
    })
  }
}
