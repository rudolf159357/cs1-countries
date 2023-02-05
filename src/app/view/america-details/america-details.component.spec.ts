import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaDetailsComponent } from './america-details.component';

describe('AmericaDetailsComponent', () => {
  let component: AmericaDetailsComponent;
  let fixture: ComponentFixture<AmericaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmericaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
