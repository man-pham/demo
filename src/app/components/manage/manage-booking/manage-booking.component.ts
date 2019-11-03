import { Component, OnInit } from '@angular/core';
//import { Booking } from '../../rental/shared/booking.model';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.css']
})
export class ManageBookingComponent implements OnInit {
  bookings =  [
    {
      rental:{
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
      startAt:"Mon Nov 04 2019 00:00:00 GMT+0700",
      endAt:"Tue Nov 12 2019 23:59:59 GMT+0700",
      totalPrice:7200000,
      days:8,
      guests:2,
      createdAt:"Mon Nov 04 2019 00:00:00 GMT+0700"
      
    },
    {
      rental:{
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
      startAt:"Mon Nov 04 2019 00:00:00 GMT+0700",
      endAt:"Thu Nov 14 2019 23:59:59 GMT+0700",
      totalPrice:9000000,
      days:10,
      guests:3,
      createdAt:"Mon Nov 04 2019 00:00:00 GMT+0700"
    },
    {
      rental:{
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
      },
    startAt:"Tue Nov 05 2019 00:00:00 GMT+0700",
    endAt:"Wed Nov 20 2019 23:59:59 GMT+0700",
    totalPrice:30000000,
    days:15,
    guests:4,
    createdAt:"Tue Nov 05 2019 00:00:00 GMT+0700"
  
  }
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
