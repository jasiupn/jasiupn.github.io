import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent implements OnInit {
  showConsent = false;

  ngOnInit(): void {
    // Sprawdź czy użytkownik już zaakceptował cookies
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      // Pokaż banner po małym opóźnieniu dla lepszego UX
      setTimeout(() => {
        this.showConsent = true;
      }, 500);
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookieConsent', 'true');
    this.showConsent = false;
  }

  declineCookies(): void {
    localStorage.setItem('cookieConsent', 'false');
    this.showConsent = false;
  }
}

