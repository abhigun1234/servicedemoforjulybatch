import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
 showcontent=true
 color='blue'
 fruits=["banana","orange","pinaple","watermilean"]
  constructor() { }

  ngOnInit() {
  }

}
