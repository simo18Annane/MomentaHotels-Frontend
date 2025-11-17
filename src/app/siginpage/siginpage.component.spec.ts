import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginpageComponent } from './siginpage.component';

describe('SiginpageComponent', () => {
  let component: SiginpageComponent;
  let fixture: ComponentFixture<SiginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiginpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
