import { Injectable } from '@angular/core';
import {Rental} from './rental.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentals: Rental[] = [{
    id: "1",
    title: "Central Apartment",
    city: "Ho Chi Minh",
    street: "Times Sqaure",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 900000,
    shared: false,
    createdAt: "24/11/2017"
  },
  {
    id: "2",
    title: "Nice Apartment 2",
    city: "Ha Noi",
    street: "Main street",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 1200000,
    shared: true,
    createdAt: "25/10/2019"
  },
  {
    id: "3",
    title: "Nice House 3",
    city: "Nha Trang",
    street: "Hlavna",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 3000000,
    shared: true,
    createdAt: "29/10/2019"
  },
  {
    id: "4",
    title: "Nice House 4",
    city: "Da Nang",
    street: "Haupt strasse",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 9,
    description: "Very nice apartment",
    dailyRate: 2000000,
    shared: true,
    createdAt: "31/10/2019"
  }];

constructor() { }
public getRentals(): Observable<Rental[]> {
  return of(this.rentals);
  }
  public getRentalById(rentalId: string): Observable<Rental> {

    return new Observable<Rental>((observer) => {

      setTimeout(() => {
        const foundRental = this.rentals.find((rental) => {
          return rental.id == rentalId;
        });

        observer.next(foundRental);
      }, 500);
    });
  }


}
