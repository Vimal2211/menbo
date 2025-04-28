import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItConsultantComponent } from './it-consultant.component';

describe('ItConsultantComponent', () => {
  let component: ItConsultantComponent;
  let fixture: ComponentFixture<ItConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
