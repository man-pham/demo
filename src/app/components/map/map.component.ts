import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() location: string;
  //10.7752187,106.6808529,14
  lat: number = 10.7752187;
  lng: number = 106.6808529;
  constructor() { }

  ngOnInit() {
  }

}
