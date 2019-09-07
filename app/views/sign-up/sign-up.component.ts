import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  first  = true;
  second  = false;
  third = false;
  fourth = false;
  constructor(private router :Router) { }

  ngOnInit() {
  }
  First(){
    this.first = false;
    this.second = true;
  }
  Second()
  {
    this.second = false;
    this.third = true;
  }
  Third()
  {
    this.third = false;
    this.fourth = true;
  }
  Fourth()
  {
    this.router.navigate(['profile'])
  }
  

}
