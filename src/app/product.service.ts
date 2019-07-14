import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDetails=[{id:"1",name:"addidas",price:"3000",description:"addidas sports"}
  
  ,{id:"2",name:"nike",price:"3000",description:"nike sports"},
  
  {id:"3",name:"rebook",price:"3000",description:"rebook sports"}]
  constructor() { }

  public getProductDetails()
  {

   return this.productDetails
  }
}
