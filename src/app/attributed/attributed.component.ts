import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributed',
  templateUrl: './attributed.component.html',
  styleUrls: ['./attributed.component.css']
})
export class AttributedComponent implements OnInit {
 public cone =true;
 public ctwo=true;
  constructor() { }

  ngOnInit() {
  }
  toggle()
  {

   
        this.cone=!this.cone
        this.ctwo=!this.ctwo
      
  }

}
