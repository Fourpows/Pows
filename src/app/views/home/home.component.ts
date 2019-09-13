import { Component, OnInit, Input } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Subject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
 parentSubject:Subject<string> = new Subject();
  constructor(private http:HttpClient) {}
  ngOnInit() {
  }
  
  cardAnimation(value) {
    this.parentSubject.next(value);
    console.log(value)
  }
}
