import { Rental } from './rental.model';

export class Booking {
  id: string;
  startAt: string;
  endAt: string;
  totalPrice: number;
  guests: number;
  days: number;
  createdAt: string;
  rental: Rental;
}
