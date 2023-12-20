import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AichatService } from '../aichat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
})
export class ChatboxComponent {
  messages: Message[] = [];
  data!: Observable<{ bot: string }>;

  constructor(
    private formBuilder: FormBuilder,
    private aichat: AichatService
  ) {}

  checkoutForm = this.formBuilder.group({
    name: 'guest',
    content: '',
  });

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    console.log(this.checkoutForm.value.content);
    if (this.checkoutForm.value.content?.trim()) {
      this.messages.push({
        name: 'guest',
        content: this.checkoutForm.value.content ?? '',
      });

      this.data = this.aichat.chat(this.checkoutForm.value.content);

      this.data.subscribe((databot) => {
        console.log(databot);
        this.messages.push({ name: 'bot', content: databot.bot });
      });
    }
    this.checkoutForm.reset();
  }
}

interface Message {
  name: String;
  content: String;
}
