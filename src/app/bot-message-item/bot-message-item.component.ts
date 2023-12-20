import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-bot-message-item',
  templateUrl: './bot-message-item.component.html',
  styleUrls: ['./bot-message-item.component.css'],
})
export class BotMessageItemComponent {
  // @HostBinding('class') class = 'col-start-1 col-end-8 p-3 rounded-lg';

  @Input() content: String = 'Hey How are you today?';
}
