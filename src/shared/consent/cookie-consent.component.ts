import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsentService } from './consent.service';

@Component({
  selector: 'cookie-consent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css']
})
export class CookieConsentComponent {
  private category = 'maps';

  constructor(public consent: ConsentService) {}

  accept() {
    this.consent.grant(this.category);
  }

  reject() {
    this.consent.deny(this.category);
  }
}
