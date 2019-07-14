import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myattribute',
  templateUrl: './myattribute.component.html',
  styleUrls: ['./myattribute.component.css']
})

export class MyattributeComponent implements OnInit {
  cone=true
  ctwo=true
  style='italic'
  size='30px'
  constructor() { }

  ngOnInit() {
  }
   toggle()
   {

    this.cone=false;
    this.ctwo=false;
   }


}
