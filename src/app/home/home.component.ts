import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showChatBox:boolean = false;
  showChatBoxBubble:boolean = true;

  closeChatBox(){
    this.showChatBox=!this.showChatBox;
    this.showChatBoxBubble=!this.showChatBoxBubble;
  }
}
