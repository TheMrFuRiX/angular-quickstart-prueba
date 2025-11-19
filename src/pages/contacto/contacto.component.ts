import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsentService } from '../../shared/consent/consent.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, OnDestroy {
  private sub?: Subscription;

  constructor(public consent: ConsentService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.sub = this.consent.decisions$.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  get mapsGranted() {
    return this.consent.isGranted('maps');
  }

  acceptMaps() {
    this.consent.grant('maps');
  }

  denyMaps() {
    this.consent.deny('maps');
  }
}
