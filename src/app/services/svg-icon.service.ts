import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root',
})
export class SvgIconService {
  iconList = [
    { name: 'add_new_icon', fileName: 'add-new.svg' },
    { name: 'suitcase_icon', fileName: 'suitcase.svg' },
    { name: 'menu_icon', fileName: 'menu.svg' },
    { name: 'share_icon', fileName: 'share.svg' },
    { name: 'number_user_icon', fileName: 'number-user.svg' },
    { name: 'calender_icon', fileName: 'calender.svg' },
    { name: 'rectangle_icon', fileName: 'rectangle.svg' },
    { name: 'profile_icon', fileName: 'profile.svg' },
    { name: 'browser_icon', fileName: 'browser.svg' },
    { name: 'link_icon', fileName: 'link.svg' },
    { name: 'phone_icon', fileName: 'phone.svg' },
    { name: 'dashboard_icon', fileName: 'dashboard.svg' },
    { name: 'edit_icon', fileName: 'edit.svg' },
    { name: 'info_icon', fileName: 'info.svg' },
    { name: 'clipboard_link_icon', fileName: 'clipboard-link.svg' },
    { name: 'cancel_icon', fileName: 'cancel.svg' },
    { name: 'single_user_icon', fileName: 'single-user.svg' },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  init(): void {
    this.iconList.forEach((i) => {
      this.matIconRegistry.addSvgIcon(
        i.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/svg/${i.fileName}`
        )
      );
    });
  }
}
