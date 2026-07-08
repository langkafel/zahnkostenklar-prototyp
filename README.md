# zahnkostenklar.de HTML-Prototyp

## Zweck des Prototyps

Dieser statische Prototyp zeigt, wie zahnkostenklar.de als digitaler Rechnungsnavigator fuer Zahnarztkosten funktionieren koennte. Er dient dazu, Positionierung, Nutzenversprechen, Nutzerfuehrung, Tonalitaet, Ergebnislogik und Datenschutzleitplanken mit IT-Expert:innen, Abrechnungsexpert:innen, Datenschutz-/RDG-Expert:innen und potenziellen Nutzer:innen zu testen.

## Wichtiger Hinweis

Der Prototyp verarbeitet keine echten Gesundheitsdaten.

- Kein echter Datei-Upload
- Kein Backend
- Keine Datenbank
- Keine Cookies
- Kein Tracking
- Keine Speicherung personenbezogener Daten
- Nur synthetische Demo-Daten

Bitte keine echten Zahnarztrechnungen, Heil- und Kostenplaene, Laborrechnungen, Erstattungsbescheide oder sonstige Gesundheitsdaten verwenden.

## Lokales Starten

Die Website ist statisch. Oeffnen Sie `index.html` direkt im Browser oder starten Sie optional einen lokalen Webserver im Projektordner.

## Deployment ueber Coolify als statische Website

1. Repository mit diesen Dateien verbinden.
2. Als statische Website konfigurieren.
3. Kein Build Command erforderlich.
4. Publish Directory auf den Projektordner beziehungsweise Repository-Root setzen.
5. Deploy starten.

## Dateiuebersicht

- `index.html`: Struktur der Landingpage, Demo-Sektion, Pakete, FAQ und Footer
- `styles.css`: Design Tokens, responsives Layout und Komponenten-Styling
- `app.js`: Klickbarer Demo-Flow, Checkbox-Logik, Tabellen- und Berichtsdarstellung
- `demo-data.js`: Ausschliesslich synthetische Beispielrechnung und Ergebnisdaten
- `README.md`: Projektbeschreibung, Betriebshinweise und Leitplanken

## Naechste Ausbaustufen

1. Nutzer-Feedback-Test
2. Abrechnungsexperten-Review
3. RDG-juristische Pruefung
4. Datenschutzkonzept / DSFA
5. Supabase Auth
6. Echter Upload mit ausdruecklicher Einwilligung
7. OCR
8. Strukturierte Extraktion
9. Regel-Engine
10. PDF-Bericht
11. Optionaler Expert Review

## Rechtliche und Datenschutz-Leitplanken

zahnkostenklar.de soll Orientierung, Kostenverstaendnis und Rueckfragehilfe bieten. Das Produkt darf keine Rechtsberatung, keine zahnaerztliche Zweitmeinung und keine verbindliche gebuehrenrechtliche Begutachtung ersetzen.

Fuer ein spaeteres MVP sind insbesondere Datenminimierung, kurze Speicherfristen, transparente Einwilligungen, EU-/Deutschland-Hosting, klare Loeschkonzepte, keine automatische Weitergabe an Praxis, PKV oder Beihilfe und keine Nutzung von Rechnungsdaten zum Training von KI-Modellen als Zielarchitektur zu pruefen.
