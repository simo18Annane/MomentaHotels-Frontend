import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicessectionComponent } from './servicessection.component';

describe('ServicessectionComponent', () => {
  let component: ServicessectionComponent;
  let fixture: ComponentFixture<ServicessectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicessectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicessectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
