import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from '../../shared/booking.model';
import { Rental } from '../../shared/rental.model';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-rental-detail-booking',
  templateUrl: './rental-detail-booking.component.html',
  styleUrls: ['./rental-detail-booking.component.css']
})
export class RentalDetailBookingComponent implements OnInit {
  @Input() rental:Rental;
  constructor(private modalService: NgbModal,
               public toastr: ToastrManager,) {}
  
  newBooking: Booking;
  ngOnInit() {
    this.newBooking = new Booking();
  }
  public daterange: any = {};
 
  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
      opens:'left'
  };

  public selectedDate(value: any, datepicker?: any) {
      // this is the date the iser selected
      console.log(value);

      // any object can be passed to the selected event and it will be passed back here
      //datepicker.start = value.start;
      //datepicker.end = value.end;
      
      // or manupulat your own internal property
      
      this.newBooking.startAt = value.start;
      this.newBooking.endAt = value.end;
      this.newBooking.days = -(value.start.diff(value.end, 'days'));
      this.newBooking.totalPrice = this.newBooking.days * this.rental.dailyRate;
  }
  openConfirmModal(content) {
    
   this.modalService.open(content);
  }
  showSuccess() {
    this.toastr.successToastr('Bạn đã book thành công, chúc bạn có kì nghỉ vui vẻ. :D', 'Success!');
  }
}
