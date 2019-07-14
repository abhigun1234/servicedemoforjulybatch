import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngiffor',
  templateUrl: './ngiffor.component.html',
  styleUrls: ['./ngiffor.component.css']
})
export class NgifforComponent implements OnInit {
   togle=false
   empInfo=[{"id":"1","name":"ravi",address:"hinjewadi"},
  
   {"id":"2","name":"raj",address:"wakad"}]
  constructor() { }

  ngOnInit() {
  }

}
