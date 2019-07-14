import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyattributeComponent } from './myattribute.component';

describe('MyattributeComponent', () => {
  let component: MyattributeComponent;
  let fixture: ComponentFixture<MyattributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyattributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyattributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
