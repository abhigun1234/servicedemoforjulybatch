import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemostructrulComponent } from './demostructrul.component';

describe('DemostructrulComponent', () => {
  let component: DemostructrulComponent;
  let fixture: ComponentFixture<DemostructrulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemostructrulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemostructrulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
