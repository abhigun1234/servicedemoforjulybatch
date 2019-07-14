import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttriburdirectiveComponent } from './attriburdirective.component';

describe('AttriburdirectiveComponent', () => {
  let component: AttriburdirectiveComponent;
  let fixture: ComponentFixture<AttriburdirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttriburdirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttriburdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
