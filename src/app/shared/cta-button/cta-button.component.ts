import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.component.scss']
})
export class CtaButtonComponent {
  @Input() label = 'Sprawdź więcej';
  @Input() routerLink?: string;
  @Input() onClick?: () => void;
  @Input() ariaLabel?: string;

  handleClick() {
    if (this.onClick) {
      this.onClick();
    }
  }

  get isExternalLink(): boolean {
    return !!this.routerLink;
  }

  get effectiveAriaLabel(): string {
    return this.ariaLabel || this.label;
  }
}

