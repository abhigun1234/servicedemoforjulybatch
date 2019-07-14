import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributedComponent } from './attributed.component';

describe('AttributedComponent', () => {
  let component: AttributedComponent;
  let fixture: ComponentFixture<AttributedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
