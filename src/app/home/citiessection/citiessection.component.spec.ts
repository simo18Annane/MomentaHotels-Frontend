import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiessectionComponent } from './citiessection.component';

describe('CitiessectionComponent', () => {
  let component: CitiessectionComponent;
  let fixture: ComponentFixture<CitiessectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitiessectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiessectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
