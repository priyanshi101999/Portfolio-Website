import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent {
activeButton: string = 'button1'

  activateButton(buttonId: string) {
    this.activeButton = buttonId;
  }
}
