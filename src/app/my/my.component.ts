import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
 flag=false
 fruits=['banana','apple','orange','pinapple']

  constructor() { }

  ngOnInit() {
  }
  toggle()
  {
    this.flag=true;
  }
}
