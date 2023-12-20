import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-guest-message-item',
  templateUrl: './guest-message-item.component.html',
  styleUrls: ['./guest-message-item.component.css'],
})
export class GuestMessageItemComponent {
  // @HostBinding('class') class = '';

  @Input() content: String = "I'm ok what about you?";
}
