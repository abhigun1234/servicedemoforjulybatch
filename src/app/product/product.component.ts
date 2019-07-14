import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productDetails
//   productDetails=[{id:"1",name:"addidas",price:"3000",description:"addidas sports"}

// ,{id:"2",name:"nike",price:"3000",description:"nike sports"},

// {id:"3",name:"rebook",price:"3000",description:"rebook sports"}]
  constructor(public product :ProductService) { }

  ngOnInit() {
  }

  getProduct()
  {
   this.productDetails=this.product.getProductDetails()

  }

}
