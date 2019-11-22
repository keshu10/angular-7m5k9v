import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //h1Style: boolean = false;
  users: Object;


  constructor(public dataService : DataService) { }

  ngOnInit() {
  }

  firstClick() {
    //this.h1Style = true;
    //console.log('clicked');
    //this.dataService.firstClick();
    // <h1 [ngStyle]="{
    // 'color': h1Style ? 'gray' : 'black',
    // 'font-size': !h1Style ? '1em' : '4em'
    // }">Home</h1>
    // <button (click)="firstClick()">Click me</button>


    //call api from data.service page to getting data
    this.dataService.getUsers().subscribe(data => {
        this.users = data
        console.log(data);
        console.log("data");
        console.log(this.users);
      }
    ); 
  }

}