import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { OfferComponent } from './pages/offer/offer.component';
import { OrderComponent } from './pages/order/order.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LightboxComponent } from './shared/lightbox/lightbox.component';
import { CategoriesComponent } from './shared/categories/categories.component';
import { AboutComponent } from './pages/about/about.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';
import { HeroScrollButtonComponent } from './shared/hero-scroll-button/hero-scroll-button.component';
import { CtaButtonComponent } from './shared/cta-button/cta-button.component';
import { HeroSectionComponent } from './shared/hero-section/hero-section.component';
import { CookieConsentComponent } from './shared/cookie-consent/cookie-consent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full' },
  { path:'offer', component: OfferComponent },
  { path:'order', component: OrderComponent },
  { path:'about', component: AboutComponent },
  { path:'gallery', component: GalleryComponent },
  { path:'contact', component: ContactComponent },
  { path:'**', redirectTo:'' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OfferComponent,
    OrderComponent,
    GalleryComponent,
    ContactComponent,
    LightboxComponent,
    CategoriesComponent,
    AboutComponent,
    ScrollToTopComponent,
    HeroScrollButtonComponent,
    CtaButtonComponent,
    HeroSectionComponent,
    CookieConsentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restores scroll on back button
      anchorScrolling: 'enabled'            // Helps with # IDs
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
