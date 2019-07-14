import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demostructrul',
  templateUrl: './demostructrul.component.html',
  styleUrls: ['./demostructrul.component.css']
})
export class DemostructrulComponent implements OnInit {
  sports=['cricket','football','badminton','volyball']
  persons=[{id:'1',name:'ravi',address:'pune'},
  {id:'2',name:'dilip',address:'hydrabad'},
  {id:'3',name:'manoj',address:'mumbai'}
]
  constructor() { }

  ngOnInit() {
  }

}
