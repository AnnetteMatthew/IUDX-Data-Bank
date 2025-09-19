import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectTgdexComponent } from './connect-tgdex.component';

describe('ConnectTgdexComponent', () => {
  let component: ConnectTgdexComponent;
  let fixture: ComponentFixture<ConnectTgdexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectTgdexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectTgdexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
