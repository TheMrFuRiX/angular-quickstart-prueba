import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsentService } from '../consent/consent.service';

@Component({
  selector: 'ffooter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public consent: ConsentService) {}
}
