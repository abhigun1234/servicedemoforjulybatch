import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentnotfoundComponent } from './componentnotfound.component';

describe('ComponentnotfoundComponent', () => {
  let component: ComponentnotfoundComponent;
  let fixture: ComponentFixture<ComponentnotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentnotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
