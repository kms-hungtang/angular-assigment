import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-left-nav',
  templateUrl: './side-left-nav.component.html',
  styleUrls: ['./side-left-nav.component.css']
})
export class SideLeftNavComponent implements OnInit {
  @Input() leftNavItems : String[];
  constructor() { }

  ngOnInit() {
  }

}
