import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navLinks;
  activeLinkIndex = -1;
  constructor(private router:Router) { 
    this.navLinks = [
      {
          label: 'login',
          link: './login',
          index: 0
      }, {
          label: 'signUp',
          link: './signup',
          index: 1
      }, {
          label: 'profile',
          link: './profile',
          index: 2
      }, 
  ];
  }

  
  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

}
