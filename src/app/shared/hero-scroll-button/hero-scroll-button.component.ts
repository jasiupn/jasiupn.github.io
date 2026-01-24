import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero-scroll-button',
  templateUrl: './hero-scroll-button.component.html',
  styleUrls: ['./hero-scroll-button.component.scss']
})
export class HeroScrollButtonComponent implements OnInit, OnDestroy {
  @Input() label = 'Zobacz więcej';
  @Input() targetElement!: HTMLElement;
  @Input() ariaLabel = 'Przewiń do treści';

  ngOnInit() {}
  ngOnDestroy() {}

  scrollToTarget() {
    if (!this.targetElement) return;

    const start = window.scrollY;
    const end = this.targetElement.getBoundingClientRect().top + window.scrollY;
    const duration = 900; // 👈 WOLNIEJSZY SCROLL (ms)

    let startTime: number | null = null;

    const easeInOut = (t: number) =>
        t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const eased = easeInOut(progress);

      window.scrollTo(0, start + (end - start) * eased);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
}
