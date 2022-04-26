import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'To Do List';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("Adding Task...")
  }

}
