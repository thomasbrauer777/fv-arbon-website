# Fischer-Verein Arbon – Website Projekt

## Übersicht

Website für den Fischer-Verein Arbon, einen Fischereiverein am Bodensee seit 1899.

- **Live-URL:** https://new.fv-arbon.ch
- **Repository:** https://github.com/thomasbrauer777/fv-arbon-website
- **Hosting:** Netlify
- **CMS:** Netlify CMS

---

## Technologie-Stack

| Komponente | Technologie |
|------------|-------------|
| Frontend | HTML, CSS, JavaScript (Vanilla) |
| CMS | Netlify CMS |
| Hosting | Netlify |
| Forms | Netlify Forms |
| Kalender | Google Calendar (eingebettet) |
| Galerie-Bilder | GitHub API |
| Newsletter | Fairgate |

---

## Seitenstruktur

```
fv-arbon-website/
│
├── index.html              # Startseite
├── verein.html             # Verein-Übersicht
├── beitritt.html           # Mitglied werden
├── leitsatz.html           # Vereins-Leitsatz
├── vorstand.html           # Vorstandsmitglieder
├── fischerhaus.html        # Fischerhaus & Reservation
├── jungfischer.html        # Jungfischer-Programm
├── sana.html               # SANA-Kurs
├── galerie.html            # Bildergalerie
├── news.html               # News & Aktuelles
├── kontakt.html            # Kontaktformular
├── kontakt-danke.html      # Danke-Seite nach Formular
├── mitglieder.html         # Login für Mitgliederbereich
├── datenschutz.html        # Datenschutzerklärung
├── impressum.html          # Impressum
├── 404.html                # Fehlerseite
│
├── intern/
│   ├── index.html          # Geschützter Mitgliederbereich
│   └── dokumente/          # Interne PDFs
│       └── GV_Broschüre_2025 - Broschüre.pdf
│
├── admin/
│   ├── index.html          # Netlify CMS Admin
│   └── config.yml          # CMS-Konfiguration
│
├── content/
│   ├── news/               # News-Beiträge (Markdown)
│   └── galerien/           # Galerie-Einträge (Markdown)
│
├── assets/
│   ├── css/
│   │   └── styles.css      # Haupt-Stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript
│   ├── img/
│   │   ├── logo-fv-arbon.png
│   │   ├── hero-lake.jpg
│   │   ├── background-water.jpg
│   │   ├── vorstand/       # Vorstandsfotos
│   │   └── sponsoren/      # Sponsoren-Logos
│   ├── uploads/            # CMS-Uploads
│   │   └── galerie/        # Galerie-Bilder
│   └── docs/               # Öffentliche PDFs
│       ├── VEREINSSTATUTEN_FV_Arbon.pdf
│       └── Benutzungsreglement-Fischerhaus.pdf
│
├── _headers                # Netlify Headers
└── _redirects              # Netlify Redirects
```

---

## Hauptfunktionen

### 1. News-System
- Verwaltung über Netlify CMS
- Kategorien: Vereinsanlass, Wettbewerb, Wichtig, Sonstiges
- Unterstützt mehrere Bilder pro Beitrag
- Modal-Ansicht mit Bildergalerie
- Filter nach Kategorie

### 2. Galerie
- Verwaltung über Netlify CMS
- Kategorien: Vereinsanlass, Jungfischer, Fischerhaus, Wettbewerb, Sonstiges
- Bilder mit optionalen Bildunterschriften
- Lightbox mit Navigation
- Massen-Upload via GitHub möglich

### 3. Kalender
- Google Calendar Integration
- Drei separate Kalender:
  - Vereinskalender (Hauptkalender)
  - Fischerhaus-Kalender
  - Jungfischer-Kalender

### 4. Kontaktformular
- Netlify Forms
- Kategorien: Allgemeine Anfrage, Mitgliedschaft, Fischerhaus, Jungfischer, SANA-Kurs, Sonstiges
- Spam-Schutz (Honeypot)
- E-Mail-Benachrichtigung an vorstand@fv-arbon.ch

### 5. Mitgliederbereich
- Passwortgeschützt (JavaScript-basiert)
- Passwort: `fvarbon1899`
- Session läuft nach 2 Stunden ab
- Interne Dokumente (PDFs)

---

## Navigation

```
Startseite
Verein ▼
  ├── Beitritt
  ├── Leitsatz
  └── Vorstand
Fischerhaus
Jungfischer
SANA-Kurs
Galerie
News
Mitglieder
```

---

## Wichtige Kontakte / E-Mail-Adressen

| Funktion | E-Mail |
|----------|--------|
| Vorstand (allgemein) | vorstand@fv-arbon.ch |
| Fischerhaus | fischerhaus@fv-arbon.ch |
| Jungfischer | jungfischer@fv-arbon.ch |
| SANA-Kurs | sana@fv-arbon.ch |
| Webmaster | webmaster@fv-arbon.ch |

---

## Netlify CMS

### Zugang
- URL: https://new.fv-arbon.ch/admin/
- Login via Netlify Identity

### Collections
1. **News** (`content/news/`)
   - Titel, Datum, Kategorie, Teaser, Text
   - Titelbild + weitere Bilder (Galerie)
   - Externer Link (optional)
   - Veröffentlicht ja/nein

2. **Galerien** (`content/galerien/`)
   - Titel, Datum, Kategorie, Beschreibung
   - Titelbild (Cover)
   - Bilder mit optionalen Bildunterschriften
   - Veröffentlicht ja/nein

---

## Google Kalender IDs

| Kalender | ID |
|----------|-----|
| Vereinskalender | `b75aafd9ae1ba92fba28783e163e141d7a180adea6161538d03fb67284f83fe3@group.calendar.google.com` |
| Fischerhaus | `gbsmb65pgvs7p3nlu4u7mdhmeo@group.calendar.google.com` |
| Jungfischer | `54e1a459397ff508ddb60fb978be2a14a8d23aae9ce5eeac00f34c2585469607@group.calendar.google.com` |

**API Key:** `AIzaSyAuZ9yzq2xzQK8HtWYil1HyyJDvYykxkso`

---

## Design / Farbschema

```css
:root {
  --color-primary: #0f4c81;        /* Tiefes Wasserblau */
  --color-primary-light: #3b7aba;  /* Helleres Blau */
  --color-secondary: #1b8ea6;      /* Türkis */
  --color-bg: #050b16;             /* Sehr dunkles Blau */
  --color-surface: rgba(15, 23, 42, 0.9);
  --color-text: #e2e8f0;           /* Hellgrauer Text */
  --color-muted: #94a3b8;          /* Dezentes Grau */
}
```

---

## Offene Punkte / TODO

- [ ] Favicon erstellen und einbinden
- [ ] Meta-Tags für SEO & Social Media
- [ ] Navigation auf allen Seiten aktualisieren (SANA-Kurs, Mitglieder, Kontakt)
- [ ] Sitemap.xml erstellen
- [ ] Kontaktformular E-Mail-Benachrichtigung in Netlify einrichten
- [ ] Footer auf allen Seiten aktualisieren (Impressum-Link)

---

## Verantwortlich

**Website & Datenschutz:**
Thomas Bräuer
Bahnhofstrasse 11
9320 Arbon
vorstand@fv-arbon.ch

---

## Änderungshistorie

| Datum | Änderung |
|-------|----------|
| 2024 | Initiale Website-Erstellung |
| 2025 | Jungfischer-Seite überarbeitet |
| 2025 | SANA-Kurs als eigene Seite |
| 2025 | Datenschutzerklärung erstellt |
| 2025 | Impressum erstellt |
| 2025 | 404-Fehlerseite erstellt |
| 2025 | Mitgliederbereich mit Passwortschutz |
| 2025 | Kontaktformular mit Netlify Forms |
| 2025 | Galerie-System mit CMS |
| 2025 | News mit Mehrfachbildern |
