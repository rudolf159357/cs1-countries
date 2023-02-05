import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaDetailsComponent } from './asia-details.component';

describe('AsiaDetailsComponent', () => {
  let component: AsiaDetailsComponent;
  let fixture: ComponentFixture<AsiaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsiaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
