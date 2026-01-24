# Struktura projektu Rowerowe Rękodzieło

## 📁 Organizacja katalogów

```
src/app/
├── core/                          # Komponenty rdzeniowe (używane raz w aplikacji)
│   ├── header/                    # Nagłówek z nawigacją
│   └── footer/                    # Stopka
│
├── pages/                         # Komponenty stron (routing)
│   ├── home/                      # Strona główna
│   ├── about/                     # O nas
│   ├── offer/                     # Oferta
│   ├── gallery/                   # Galeria
│   └── contact/                   # Kontakt z formularzem
│
└── shared/                        # Współdzielone komponenty, modele i dane
    ├── categories/                # Komponent wyświetlający kafelki kategorii
    ├── lightbox/                  # Komponent galerii zdjęć (lightbox)
    ├── scroll-to-top/             # Floating button "przewiń do góry" (mobile)
    ├── models/                    # Interfejsy TypeScript
    │   └── gallery-item.model.ts  # Model GalleryItem
    └── data/                      # Dane statyczne
        ├── categories.ts          # Dane kategorii (kaski, buty, etc.)
        └── projects.ts     # Dane galerii dla strony About
```

## 🧩 Komponenty

### Core (Rdzeń)
- **HeaderComponent** - Nawigacja z menu mobilnym
- **FooterComponent** - Stopka z rokiem

### Pages (Strony)
- **HomeComponent** - Strona główna z hero i kategoriami
- **AboutComponent** - Strona o nas z galeriami
- **OfferComponent** - Szczegółowa oferta z infografiką
- **GalleryComponent** - Pełna galeria wszystkich kategorii
- **ContactComponent** - Formularz kontaktowy z załącznikami

### Shared (Współdzielone)
- **CategoriesComponent** - Grid kategorii z lightboxem
- **LightboxComponent** - Galeria zdjęć z nawigacją (klawiatura + touch)
- **ScrollToTopComponent** - Floating button "scroll to top" (tylko mobile)

## 📦 Modele danych

### GalleryItem
```typescript
interface GalleryItem {
  id?: string;
  title: string;
  thumbnail: string;     // Miniaturka dla grid
  images: string[];      // Pełne obrazy
  thumbs: string[];      // Miniatury dla lightboxa
  descriptions?: string[];
}
```

### ContactModel
```typescript
interface ContactModel {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
```

## 🎨 Style

- **styles.scss** - Globalne zmienne, czcionki, kolory
- Każdy komponent ma własny plik SCSS
- Mobile-first approach
- Responsywne breakpointy: 600px, 768px, 900px

## 🛠️ Technologie

- **Angular 15+**
- **TypeScript**
- **SCSS**
- **FormsModule** - Formularze reaktywne
- **RouterModule** - Routing z scroll restoration

## 📝 Konwencje

1. **Nazewnictwo plików**: `kebab-case.component.ts`
2. **Interfejsy**: PascalCase (np. `GalleryItem`)
3. **Komponenty**: PascalCase (np. `ContactComponent`)
4. **Zmienne**: camelCase
5. **Stałe**: UPPER_SNAKE_CASE

## 🚀 Uruchomienie

```bash
npm install
ng serve
```

## 🏗️ Build

```bash
ng build --configuration production
```

## 📊 Rozmiar bundles
- **main.js**: ~337 KB (raw) / ~80 KB (gzip)
- **Total**: ~372 KB (raw) / ~92 KB (gzip)

