import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoattributeComponent } from './demoattribute.component';

describe('DemoattributeComponent', () => {
  let component: DemoattributeComponent;
  let fixture: ComponentFixture<DemoattributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoattributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoattributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
