import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-parent',
  templateUrl: './initial-parent.component.html',
  styleUrls: ['./initial-parent.component.css']
})
export class InitialParentComponent implements OnInit {

  userNameParent:any[] = [];
  userAddressParent:any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  userNameChangedHandler(userName: string) {
    this.userNameParent.push(userName);
  }

  addressUpdatedHandler(address: string) {
    this.userAddressParent.push(address);
  }

}
