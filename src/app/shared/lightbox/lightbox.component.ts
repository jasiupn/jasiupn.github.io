import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit, OnChanges {

  @Input() images: string[] = [];
  @Input() thumbs: string[] = [];
  @Input() descriptions: string[] = [];
  @Input() title = '';
  @Input() visible = false;

  @Output() closed = new EventEmitter<void>();

  current = 0;

  private touchStartX = 0;
  private touchStartY = 0;
  private readonly SWIPE_THRESHOLD = 40;

  ngOnInit() {
    this.current = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible']) {
      if (this.visible) {
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
      } else {
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
      }
    }
  }

  get prevIndex() {
    return (this.current - 1 + this.images.length) % this.images.length;
  }

  get nextIndex() {
    return (this.current + 1) % this.images.length;
  }

  prev() {
    this.current = this.prevIndex;
  }

  next() {
    this.current = this.nextIndex;
  }

  select(index: number) {
    this.current = index;
  }

  closeAll() {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.visible) this.closeAll();
  }

  @HostListener('document:keydown.arrowLeft')
  onArrowLeft() {
    if (this.visible) this.prev();
  }

  @HostListener('document:keydown.arrowRight')
  onArrowRight() {
    if (this.visible) this.next();
  }

  onTouchStart(event: TouchEvent) {
    if (!this.visible) return;
    const t = event.touches[0];
    this.touchStartX = t.clientX;
    this.touchStartY = t.clientY;
  }

  onTouchEnd(event: TouchEvent) {
    if (!this.visible) return;

    const t = event.changedTouches[0];

    const dx = t.clientX - this.touchStartX;
    const dy = t.clientY - this.touchStartY;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > this.SWIPE_THRESHOLD) {
      dx < 0 ? this.next() : this.prev();
    }
  }


  onImageTap(event: MouseEvent | TouchEvent) {
    if (!this.visible) return;

    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    let x = 0;
    if (event instanceof MouseEvent) {
      x = event.clientX - rect.left;
    } else {
      x = event.changedTouches[0].clientX - rect.left;
    }

    if (x > rect.width / 2) {
      this.next();
    } else {
      this.prev();
    }
  }
}
