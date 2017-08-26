import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleableComponent } from './toggleable.component';

describe('ToggleableComponent', () => {
  let component: ToggleableComponent;
  let fixture: ComponentFixture<ToggleableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
