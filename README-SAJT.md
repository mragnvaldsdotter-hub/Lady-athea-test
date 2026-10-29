# Lady Athena Sailing – hemsidan, version 1 (utkast)

Byggd 2026-10-28 med profilens logotyp, färger och typsnitt. Sex sidor på engelska.

## Så öppnar du sidan
Dubbelklicka på `index.html` i den här mappen. Sidan öppnas i webbläsaren.

## Filer
- `index.html` Förstasidan (stor bild, knapp "Book your voyage", sju etappkort)
- `voyages.html` Alla etapper, tidslinje och hur bokningen går till
- `life-aboard.html` Hytter, en dag ombord, säkerhet, vad man tar med
- `captain.html` Alfs text (variant utan kändisnamn)
- `faq.html` Vanliga frågor
- `enquire.html` Bokningsförfrågan (öppnar mejlprogrammet, lagrar inget)
- `css/styles.css` Utseende. `js/site.js` Meny och formulär
- `assets/` Logotyper, typsnitt (SIL OFL) och förminskade bilder

## Att ändra text
Öppna en `.html`-fil i en texteditor (till exempel VS Code eller Anteckningar) och ändra texten mellan taggarna. Ändra inte tecknen inom `< >`. Skicka gärna en rad till Claude om du vill att jag gör ändringen.

## Öppet innan sidan kan publiceras
1. Mejladress: sidan använder alf.grell@me.com (enligt dig, utan g i mitten; domänen är hämtad från gamla sidan och bör bekräftas).
2. Pris: sidan säger "ask for the current price". Alf beslutar.
3. Kravnivå för nybörjare: står som "tell us your experience".
4. Kända personer: texten använder variant B (utan namn).
5. "Söderhavet"-stycket är utelämnat (sidan säljer Karibien).
6. Hamnar och flygplatser står inte på sidan (skickas vid bokning).
7. Antal bokade platser: 1 av 5 på etapp 1 och 2 av 5 på etapp 5. Måste hållas aktuellt.
8. Omdömen: tio omdömen från Alfs gamla sida (2019–2024) ligger nu på förstasidan (tre stycken) och på reviews.html (alla). De är skrivna av gästerna och publicerade med deras namn på gamla sidan. Jag har rättat uppenbara stavfel och fyllt i "Florence" och "Maine" där gamla sidan hade "Florens" och "Main". Fråga gärna gästerna om de vill att omdömet står kvar, och be dem lägga ett omdöme på Google.
9. Hosting och domän: sail-athena-the-arc.com ligger idag hos Yola. Den nya sidan behöver ny hosting och att domänen pekas om.
10. Formuläret är ett mejlformulär utan server. Byts mot en formulärtjänst om man vill ha automatiska svar.
11. Sekretessinformation och villkor ska granskas av Alf eller en jurist.

## Formuläret och Netlify (gratis)
Formuläret är förberett för Netlify Forms. Det fungerar så här:
- På sail-athena-the-arc.com eller en adress som slutar på .netlify.app skickas förfrågan till Netlify, och besökaren kommer till sidan thanks.html.
- På alla andra platser (din dator, testsidan på claude.ai) öppnas mejlprogrammet som tidigare, så att inget går förlorat under tiden.

Så sätter ni upp det (görs av dig eller Alf, jag kan inte skapa konton):
1. Skapa ett gratiskonto på netlify.com.
2. Välj "Add new site" och dra in mappen `sajt` (det kallas "Deploy manually").
3. Gå till Forms och slå på formulärhanteringen. Formuläret heter "booking".
4. Under Forms, Notifications: lägg till ett mejl till alf.grell@me.com, så att varje förfrågan skickas till Alf.
5. Testa på adressen som slutar på .netlify.app innan domänen kopplas.
6. Koppla domänen sail-athena-the-arc.com under Domain management. Det kräver inloggning hos den som har domänen idag.

Kontrollera Netlifys gratisgräns för antal formulär per månad när kontot skapas. Integritetssidan nämner nu att Netlify tar emot förfrågningarna.

## Statistik: hur många besöker och hur många går vidare
Platsen för ett statistikskript finns redan i varje sida (se kommentaren "STATISTICS" i head). Det som behövs är ett konto hos en tjänst utan cookies, så att ingen cookie-banner krävs. Alternativ, att kontrollera när ni väljer:
- Cloudflare Web Analytics (gratis, om sidan ligger hos Cloudflare).
- Plausible eller Fathom (betalda, enkla, GDPR-vänliga).
- Google Search Console (gratis) visar hur ofta sidan syns i Googles sökresultat och vilka sökord som ger besök.

Det som går att mäta:
1. Antal besökare per dag och var de kommer ifrån.
2. Antal klick på "Book your voyage" och "Book this leg".
3. Vilken annons som ger besök. Lägg då en spårningsparameter på länken i Crewseekers-annonsen, till exempel ?utm_source=crewseekers&utm_campaign=leg1.

Formuläret öppnar mejlprogrammet, så antalet skickade förfrågningar syns bara i Alfs inkorg. Räkna dem där, och jämför med klicken.
