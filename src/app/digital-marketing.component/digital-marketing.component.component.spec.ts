import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingComponentComponent } from './digital-marketing.component.component';

describe('DigitalMarketingComponentComponent', () => {
  let component: DigitalMarketingComponentComponent;
  let fixture: ComponentFixture<DigitalMarketingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalMarketingComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalMarketingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
