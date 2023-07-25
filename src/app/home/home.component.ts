import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeButton: string = 'button1'


  activateButton(buttonId: string) {
    this.activeButton = buttonId;
  }

}
