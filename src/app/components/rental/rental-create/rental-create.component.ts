import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.css']
})
export class RentalCreateComponent implements OnInit {
  newRental: Rental;
  //errors: any[] = [];
  
  constructor( private router: Router) { }

  ngOnInit() {
    this.newRental = new Rental();
  }
  
  handleImageChange() {
    this.newRental.image = "http://via.placeholder.com/350x250";
  }
  createRental() {
   console.log(this.newRental);
   this.router.navigate([`/rentals`]);
  } 

}
