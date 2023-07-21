import { Component } from '@angular/core';
import { SvgIconService } from './services/svg-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private svgIconService: SvgIconService) {
    this.svgIconService.init();
  }
}
