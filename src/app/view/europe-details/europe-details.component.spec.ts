import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeDetailsComponent } from './europe-details.component';

describe('EuropeDetailsComponent', () => {
  let component: EuropeDetailsComponent;
  let fixture: ComponentFixture<EuropeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuropeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
