import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attriburdirective',
  templateUrl: './attriburdirective.component.html',
  styleUrls: ['./attriburdirective.component.css']
})
export class AttriburdirectiveComponent implements OnInit {
 public cone=true;
 public ctwo=true;
 style='italic'
 size='20px'
  constructor() { }

  ngOnInit() {
  }
  toggle()
  {
    this.cone=false;
    this.ctwo=false;

  }

}
