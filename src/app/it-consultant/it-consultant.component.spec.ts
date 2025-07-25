import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITConsultantComponent } from './it-consultant.component';

describe('ITConsultantComponent', () => {
  let component: ITConsultantComponent;
  let fixture: ComponentFixture<ITConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ITConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
