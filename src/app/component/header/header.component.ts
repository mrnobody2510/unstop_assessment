import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobileView: boolean = false;

  showMobileView(): void {
    this.isMobileView = true;
  }
}
