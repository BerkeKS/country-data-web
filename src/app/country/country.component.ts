import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit {
  country: String = ""
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.country = params["country"]
    })
  }
}
