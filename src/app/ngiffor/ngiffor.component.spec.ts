import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifforComponent } from './ngiffor.component';

describe('NgifforComponent', () => {
  let component: NgifforComponent;
  let fixture: ComponentFixture<NgifforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
