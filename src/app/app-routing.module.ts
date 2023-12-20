import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'chat', component: ChatboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
