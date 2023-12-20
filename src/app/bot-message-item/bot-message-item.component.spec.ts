import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotMessageItemComponent } from './bot-message-item.component';

describe('BotMessageItemComponent', () => {
  let component: BotMessageItemComponent;
  let fixture: ComponentFixture<BotMessageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotMessageItemComponent]
    });
    fixture = TestBed.createComponent(BotMessageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
