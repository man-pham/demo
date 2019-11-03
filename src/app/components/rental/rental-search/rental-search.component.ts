import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-search',
  templateUrl: './rental-search.component.html',
  styleUrls: ['./rental-search.component.css']
})
export class RentalSearchComponent implements OnInit {
  city: string;
  rentals: Rental[] = [];
  errors: any[] = [];
  constructor(private route: ActivatedRoute,
    private rentalService: RentalService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.city = params['city'];
      this.getRentals();

    })
  }
  getRentals() {
    this.errors = [];
    this.rentals = [];

    this.rentalService.getRentalsByCity(this.city).subscribe(
      (rentals: Rental[]) => {
        console.log(this.city)
        this.rentals = rentals;
      })
      
  }
}
