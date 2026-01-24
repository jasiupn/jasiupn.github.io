import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  @Input() heroClass = 'hero';
  @Input() headline!: string;
  @Input() subtext!: string;
  @Input() buttonLabel = 'Zobacz więcej';
  @Input() targetElement!: HTMLElement;
  @Input() buttonAriaLabel = 'Przewiń do treści';
  @Input() backgroundImageDesktop!: string;
  @Input() backgroundImageMobile!: string;

  // Zrezygnowano z logiki widoczności w TypeScript — sterowanie przez SCSS

  getBackgroundStyles(): { [key: string]: string } {
    const isMobile = window.innerWidth < 768;
    const bgImage = isMobile ? this.backgroundImageMobile : this.backgroundImageDesktop;

    // Mocniejszy gradient od lewej dla lepszej czytelności nagłówków
    return {
      'background-image': `linear-gradient(to right,
        rgba(255,255,255,.88) 0%,
        rgba(255,255,255,.55) 35%,
        rgba(255,255,255,.18) 60%,
        rgba(255,255,255,0) 78%), url('${bgImage}')`
    };
  }
}
