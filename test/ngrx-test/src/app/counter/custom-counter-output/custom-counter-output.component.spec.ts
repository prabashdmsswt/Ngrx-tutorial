import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCounterOutputComponent } from './custom-counter-output.component';

describe('CustomCounterOutputComponent', () => {
  let component: CustomCounterOutputComponent;
  let fixture: ComponentFixture<CustomCounterOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCounterOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCounterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
