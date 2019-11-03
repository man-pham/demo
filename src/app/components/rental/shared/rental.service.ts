import { Injectable } from '@angular/core';
import {Rental} from './rental.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentals: Rental[] = [{
    id: "1",
    title: "Ngôi nhà 1",
    city: "Hồ Chí Minh",
    street: "Quận thủ đức",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Căn hộ này đẹp",
    dailyRate: 900000,
    shared: false,
    createdAt: "3/11/2019"
  },
  {
    id: "2",
    title: "Ngôi nhà 2",
    city: "Hà Nội",
    street: "Ba vì",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Căn hộ rất đẹp",
    dailyRate: 1200000,
    shared: true,
    createdAt: "25/10/2019"
  },
  {
    id: "3",
    title: "Ngôi nhà 3",
    city: "Khánh hòa",
    street: "Nha trang",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Căn hộ rất xinh",
    dailyRate: 3000000,
    shared: true,
    createdAt: "29/10/2019"
  },
  {
    id: "4",
    title: "Ngôi nhà 4",
    city: "Đà nẵng",
    street: "Hội An",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 9,
    description: "Căn hộ tuyệt đẹp",
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
