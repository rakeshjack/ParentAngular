import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Input() count: number = 0;

  @Input() userName: any;
 
  @Output() userNameChanged: EventEmitter<any> =  new EventEmitter();
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  FirstName = "";
  LastName = "";
  errorMessage = "";
  constructor() { }

  ngOnInit(): void {
  }

  onInput(firstName: string) {
    this.FirstName = firstName;
  }

  onInputLastName(lastName: string) {
    this.LastName = lastName;
  }

  getUserName(firstName:string, lastName:string) {
    if(!firstName || !lastName) {
      this.errorMessage = "Please add first or last name";
      return;
    }
    this.userName = firstName  + ' ' + lastName;
    this.userNameChanged.emit(this.userName);
    this.errorMessage = '';
    this.FirstName = '';
    this.LastName = "";
  }

}
