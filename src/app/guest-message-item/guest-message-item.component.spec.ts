import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestMessageItemComponent } from './guest-message-item.component';

describe('GuestMessageItemComponent', () => {
  let component: GuestMessageItemComponent;
  let fixture: ComponentFixture<GuestMessageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestMessageItemComponent]
    });
    fixture = TestBed.createComponent(GuestMessageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
