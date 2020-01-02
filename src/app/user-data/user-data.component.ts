import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input()email:String;
  @Input()id:String;
  @Input()_token:String;
  @Input()_tokenExpirationDate:Date;

  constructor() { }

  ngOnInit() {
  }

}
