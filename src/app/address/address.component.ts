import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() userAddress: any;
  @Output() addressUpdated: EventEmitter<any> = new EventEmitter();
  

  addressValue = "";
  defaultValue: string = '';
  errorMessage = "";
  constructor() {}

  ngOnInit(): void {
  }

  addAddress(address: string) {
    if(!address) {
      this.errorMessage = "Please add address";
      return;
    }
    this.addressValue = address;
    this.addressUpdated.emit(address);
    this.defaultValue = ''; 
    this.errorMessage = '';
  }

}
