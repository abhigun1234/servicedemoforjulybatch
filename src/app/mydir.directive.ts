import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor(e1:ElementRef) { 
    e1.nativeElement.style.background='blue'
  }

}
