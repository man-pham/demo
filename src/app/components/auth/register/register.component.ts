import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData: any = {};
  //errors: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  register() {
    this.router.navigate(['/login',{registered: 'success'}]);
  }
}
