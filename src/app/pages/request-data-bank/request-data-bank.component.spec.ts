import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDataBankComponent } from './request-data-bank.component';

describe('RequestDataBankComponent', () => {
  let component: RequestDataBankComponent;
  let fixture: ComponentFixture<RequestDataBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestDataBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestDataBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
