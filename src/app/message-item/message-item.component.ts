import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css'],
})
export class MessageItemComponent {
  @Input() name: String = 'guest';
  @Input() content: String = '';
  @HostBinding('class') get iclass() {
    return this.name === 'guest'
      ? 'col-start-6 col-end-13 p-3 rounded-lg'
      : 'col-start-1 col-end-8 p-3 rounded-lg';
  }
  constructor() {}
}
