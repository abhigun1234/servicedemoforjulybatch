import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StructuralComponent } from './structural/structural.component';
import { HighlightDirective } from './highlight.directive';
import { MydirDirective } from './mydir.directive';
import { NewComponent } from './new/new.component';
import { AttributedComponent } from './attributed/attributed.component';
import { EventsComponent } from './events/events.component';
import { NgifforComponent } from './ngiffor/ngiffor.component';
import { MycustumDirective } from './mycustum.directive';
import { AttriburdirectiveComponent } from './attriburdirective/attriburdirective.component';
import { MyattributeComponent } from './myattribute/myattribute.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ComponentnotfoundComponent } from './componentnotfound/componentnotfound.component';
import { DemostructrulComponent } from './demostructrul/demostructrul.component';
import { DemoattributeComponent } from './demoattribute/demoattribute.component';
import { PropertyComponent } from './property/property.component';
import { MydireDirective } from './mydire.directive';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MyComponent } from './my/my.component'
@NgModule({
  declarations: [
    AppComponent,
    StructuralComponent,
    HighlightDirective,
    MydirDirective,
    NewComponent,
    AttributedComponent,
    EventsComponent,
    NgifforComponent,
    MycustumDirective,
    AttriburdirectiveComponent,
    MyattributeComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ComponentnotfoundComponent,
    DemostructrulComponent,
    DemoattributeComponent,
    PropertyComponent,
    MydireDirective,
    ProductComponent,
    ProductdetailsComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:'',component:HomeComponent},

      
      {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent}
  ,{
    path:'home',component:HomeComponent

  },
  {path:'**',component:ComponentnotfoundComponent},
  ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
