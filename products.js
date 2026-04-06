/**
 * MAISON — Product Catalog
 * ═══════════════════════════════════════════════════════════
 *
 * Jedes Produkt hat jetzt einen vollständigen PFAD:
 *   gender   → "damen" | "herren" | "kinder" | "unisex"
 *   category → z.B. "Jacken & Mäntel"  (muss mit Taxonomy übereinstimmen)
 *   sub      → z.B. "Strickjacke"      (muss mit Taxonomy übereinstimmen)
 *
 * Damit wird das Produkt exakt in der Mega-Menü-Navigation gefunden
 * und korrekt gefiltert (Herren → Strickwaren → Weste usw.)
 *
 * Weitere Felder:
 *   id          – eindeutiger Slug (für ?id=...)
 *   name        – Anzeigename
 *   price       – Preis in EUR (Zahl)
 *   image       – Bild-URL
 *   hoverImage  – (optional) zweites Bild auf der Karte
 *   description – Produktbeschreibung auf der Detailseite
 *   details     – Array mit Bullet-Points
 *   sizes       – Array mit Größen-Strings
 *   featured    – true → erscheint in der Featured-Section auf der Startseite
 *   collab      – (optional) ID einer Kooperation aus `collaborations` (collabs.js)
 *
 * ═══════════════════════════════════════════════════════════
 * NEUES PRODUKT HINZUFÜGEN:
 *   1. gender, category, sub aus der Taxonomy in shop.html wählen
 *   2. Objekt hier eintragen
 *   3. Fertig — es erscheint automatisch im Shop + auf der Detailseite
 * ═══════════════════════════════════════════════════════════
 */

const products = [

  /* ───────────────────────────────────────────────────────
     DAMEN
  ─────────────────────────────────────────────────────── */

  // Damen → Kleider → Abendkleider
  {
    id: "d-kleid-abend-01",
    name: "Kleid aus Mikado-Seide mit Umriss-Motiv",
    price: 4200,
    gender: "damen",
    category: "Kleider",
    sub: "Abendkleider",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-kleid-aus-mikado-seide-mit-umriss-motiv--FUDS33V86001_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-kleid-aus-mikado-seide-mit-umriss-motiv--FUDS33V86001_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Ein raffiniertes Statement: Dieses Kleid aus einem strukturiertem Woll-Mikado-Seidengemisch zeigt sich in einer schlichten, A-linienförmigen Silhouette. Auf der Rückseite ist es mit einem eleganten, goldfarbenen Reißverschluss versehen. Als Hommage an die Pop-Art-Bewegung wird es durch grafische schwarze Linien akzentuiert. Diese zeichnen auf verspielte Weise den Umriss der berühmten Schlaufen aus Leder mit Druckknopf nach, welche für das Haus Maison charakteristisch sind, und kreieren so einen unverkennbaren Effekt im Trompe-l’Œil-Stil.",
    details: [
      "Zusammensetzung: 85 % Wolle, 15 % Seide",
      "Weiß",
      "Made in France"
    ],
    sizes: ["34", "36", "38", "40", "42"],
    featured: false
  },

  // Damen → Kleider → Tageskleider
  {
    id: "d-kleid-tag-01",
    name: "Kleid aus zwei Materialien mit Gürtel",
    price: 2650,
    gender: "damen",
    category: "Kleider",
    sub: "Tageskleider",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-kleid-aus-zwei-materialien-mit-gurtel--FUDS10NCB110_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-kleid-aus-zwei-materialien-mit-gurtel--FUDS10NCB110_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Dieses Kleid aus strukturierter Baumwoll-Gabardine ist mit glänzenden Akzenten aus Nylon versehen und spielt gekonnt mit unterschiedlichen Strukturen. Bei dem Modell im Tapered Fit betont ein schmaler Gürtel aus Lammleder die Taille. Ein subtiles, Ton in Ton gehaltenes Monogram-Motiv ziert als Signatur den Saum. Abgerundet wird das Design durch einen freiliegenden Reißverschluss auf der Rückseite.",
    details: [
      "Zusammensetzung: 70 % Baumwolle, 30 % Polyamid",
      "Camel / Hellbraun",
      "Made in Italy"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false
  },

    // Damen → Kleider → Minikleider
  {
    id: "d-kleid-mini-01",
    name: "Linen Wrap Day Dress",
    price: 790,
    gender: "damen",
    category: "Kleider",
    sub: "Minikleider",
    image: "images/step 20/2026-01-13_16-00-48_8157.png",
    hoverImage: "images/step 20/2026-01-13_15-59-54_3876.png",
    description: "Strukturiertes Leinen in einem zeitlosen Wickelschnitt. Leicht, atmungsaktiv und von morgens bis abends tragbar.",
    details: [
      "100% belgisches Leinen",
      "Adjustierbarer Bindegürtel",
      "V-Ausschnitt, A-Linie",
      "Maschinenwäsche 30°",
      "Made in Portugal"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    collab: "collab-sofia-01"
  },

  // Damen → Jacken & Mäntel → Wollmantel
  {
    id: "d-mantel-wolle-01",
    name: "Signature Wool Coat",
    price: 1290,
    gender: "damen",
    category: "Jacken & Mäntel",
    sub: "Wollmantel",
    image: "images/step 7/2026-01-12_11-12-42_7213.png",
    hoverImage: "images/step 7/2026-01-12_11-13-40_2348.png",
    description: "Ein Meisterstück der Schneiderkunst. Doppellagiger Kaschmir-Woll-Mix mit sauberen, länglichen Linien für eine Silhouette, die Aufmerksamkeit auf sich zieht.",
    details: [
      "70% Kaschmir / 30% Wolle",
      "Vollständig in Seide gefüttert",
      "Versteckte Druckknopfleiste",
      "Nur chemische Reinigung",
      "Made in England"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    collab: "collab-sofia-01"
  },

  // Damen → Jacken & Mäntel → Lederjacke
  {
    id: "d-jacke-leder-01",
    name: "Jacke im Utility-Stil mit sich farblich abhebenden Ziernähten",
    price: 1800,
    gender: "damen",
    category: "Jacken & Mäntel",
    sub: "Lederjacke",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-jacke-im-utility-stil-mit-sich-farblich-abhebenden-ziernahten--FVJA13BT9001_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-jacke-im-utility-stil-mit-sich-farblich-abhebenden-ziernahten--FVJA13BT9001_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Sich farblich abhebende Ziernähte setzen die Konstruktion dieser legeren Jacke aus Baumwoll-Gabardine eindrucksvoll in Szene und verleihen ihr eine elegante Utility-Note. Zwei Pattentaschen auf der Brust unterstreichen die strukturierte Silhouette. Maison Circle Knöpfe aus Metall und ein Maison 1854 Patch aus Leder an der Taille runden das Modell als subtile Signaturen aus der Nautical Kollektion ab.",
    details: [
      "100 % Baumwollgarbadine",
      "Patch aus Kalbsleder mit Signatur",
      "Knopfverschlüsse",
      "2 Pattentaschen",
      "2 Taschen an den Seiten",
      "Made in Italy"
    ],
    sizes: ["XS", "S", "M", "L"],
    featured: false
  },

  // Damen → Bademode → Bikini
  {
    id: "d-bademode-bikini-01",
    name: "Bikini",
    price: 300,
    gender: "damen",
    category: "Bademode",
    sub: "Bikini",
    image: "images/step 43/2026-03-29_15-17-55_2773.png",
    hoverImage: "images/step 43/2026-03-29_15-29-56_1478.png",
    description: "Red Bikni",
    details: [
      "Nappa Lammlederleder",
      "Viskose-Futter",
      "Einzel-Knopf in Gold",
      "Paspeltaschen",
      "Made in Italy"
    ],
    sizes: ["XS", "S", "M", "L"],
    featured: false,
    collab: "collab-sofia-01"
  },
  {
    id: "d-bademode-bikini-02",
    name: "Bikini",
    price: 300,
    gender: "damen",
    category: "Bademode",
    sub: "Bikini",
    image: "images/step 48/2026-03-31_07-46-44_4748.png",
    hoverImage: "images/step 48/2026-03-31_07-45-37_1179.png",
    description: "Beige Bikni",
    details: [
      "Nappa Lammlederleder",
      "Viskose-Futter",
      "Einzel-Knopf in Gold",
      "Paspeltaschen",
      "Made in Italy"
    ],
    sizes: ["XS", "S", "M", "L"],
    featured: false,
    collab: "collab-sofia-01"
  },

  // Damen → Schuhe → Pumps
  {
    id: "d-schuh-pump-01",
    name: "Urban Twist Slingback Pumps",
    price: 990,
    gender: "damen",
    category: "Schuhe",
    sub: "Pumps",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-urban-twist-slingback-pumps--AVE04ETC02_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-urban-twist-slingback-pumps--AVE04ETC02_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Glänzendes Kalbslackleder unterstreicht die klaren Linien des Urban Twist Slingback Pumps. Einzigartig an diesem Modell mit hohem Absatz ist seine sich abhebende, silberfarbene Zehenkappe, die mit einem Maison Circle signiert ist. Das tief ausgeschnittene, V-förmige Dekolleté verleiht diesem Design einen ausdrucksstarken, modischen Look, während ein elastischer Fersenriemen ein müheloses Anziehen ermöglicht.",
    details: [
      "Kalbslackleder",
      "8,5 cm hoher Absatz",
      "Außensohle aus Leder",
      "Elastischer Riemen",
      "Made in Italy"
    ],
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
    featured: false
  },

  // Damen → Schuhe → Loafers
  {
    id: "d-schuh-loafer-01",
    name: "Odeon Loafer",
    price: 990,
    gender: "damen",
    category: "Schuhe",
    sub: "Loafers",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-odeon-loafer--AVL00IGZ02_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-odeon-loafer--AVL00IGZ02_PM1_Side%20view.png?wid=1440&hei=1440",
    description: "Der schlanke Odeon Loafer ist aus glänzendem Kalbsleder gearbeitet. Den Schaft zieren raffinierte Signaturen: sternförmige Monogram-Blüten als Perforationen rund um das Oberleder sowie ein Detail aus goldfarbenem Metall in der Form einer halben Monogram-Blüte auf dem Riemen. Eine feine Außensohle aus Leder rundet dieses elegante Modell ab.",
    details: [
      "Glänzendes Kalbsleder",
      "Außensohle aus Leder",
      "Schwarz",
      "Charakteristische Details",
      "Made in Italy"
    ],
    sizes: ["36", "37", "38", "39", "40", "41"],
    featured: false
  },

  // Damen → Accessoires → Schals
  {
    id: "d-acc-schal-01",
    name: "My Neverfull Schal",
    price: 790,
    gender: "damen",
    category: "Accessoires",
    sub: "Schals",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-my-neverfull-schal--M96621_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-my-neverfull-schal--M96621_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Der ebenso vielseitige wie auch modische My Neverfull Schal verleiht jedem Winter-Outfit einen Hauch von klassischer Raffinesse. Das Modell aus einem warmen, weichen Kaschmirgemisch vereint das unverkennbare Monogram-Motiv mit den ikonischen Neverfull-Streifen aus der Ready to Wear Kollektion. Ein Aufnäher mit der „Articles de Voyage“ Signatur erinnert an das Erbe des Hauses Maison als Hersteller für außergewöhnliche Reiseaccessoires.",
    details: [
      "95 % Wolle, 5 Kaschmir",
      "240 x 35 cm",
      "Gewebter Aufnäher mit Signatur",
      "Monogram-Motiv",
      "Neverfull-Streifen",
      "Dune / Beige",
      "Fransenabschluss"
    ],
    sizes: ["One Size"],
    featured: false
  },

  // Damen → Accessoires → Gürtel
  {
    id: "d-acc-guertel-01",
    name: "Trench Gürtel 65 mm",
    price: 750,
    gender: "damen",
    category: "Accessoires",
    sub: "Gürtel",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-trench-gurtel-65-mm--M4531Z_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-trench-gurtel-65-mm--M4531Z_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Der auf der Herbst Winter 2025 Fashion Show vorgestellte Trench Gürtel interpretiert einen Klassiker auf eine zeitlose und zugleich modische Weise neu. Sein breiter Riemen aus Leder zeichnet sich durch ein raffiniertes Crinkle-Finish aus. Goldfarbene Ösen setzten modische Akzente und ermöglichen einen individuell anpassbaren, perfekten Sitz. Dieses Accessoire rundet elegante, modische Ensembles für besondere Anlässe sowie Outfits für jeden Tag gleichermaßen perfekt ab.",
    details: [
      "Leder mit Crinkle-Finish",
      "65 cm",
      "Goldfarbene Schließe mit Pin und Maison Signatur",
      "Schhwarz",
      "Goldfarbene Beschläge"
    ],
    sizes: ["70", "75", "80", "85", "90"],
    featured: false
  },

  /* ───────────────────────────────────────────────────────
     HERREN
  ─────────────────────────────────────────────────────── */

  // Herren → Hemden → Formalhemd
  {
    id: "h-hemd-formal-01",
    name: "Langarm-Hemd mit Monogram",
    price: 950,
    gender: "herren",
    category: "Hemden",
    sub: "Formalhemd",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-langarm-hemd-mit-monogram--HUS15WIK6602_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-langarm-hemd-mit-monogram--HUS15WIK6602_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Dieses klassische Hemd aus Baumwoll-Popeline ziert ein Monogram Surplus-Motiv als Jaquardgewebe in einem hellen Grau-Blau. Die feinen, Ton in Ton gehaltenen Nuancen der ikonischen Signaturen erinnern an das wolkenverhangene britische Wetter, welches ein charakteristisches Thema der Kollektion ist. Dieses Modell ist eine perfekte Wahl für ein elegantes Ensemble und verleiht auch Looks für jeden Tag eine stilvolle Note.",
    details: [
      "100 % Baumwolle",
      "Knopfverschluss",
      "Durchgängiges Signatur-Motiv aus Jacquard",
      "Einfache Manschetten",
      "Made in Italy"
    ],
    sizes: ["37", "38", "39", "40", "41", "42", "43", "44"],
    featured: false,
    collab: "collab-marcus-01"
  },

  {
    id: "h-hemd-formal-02",
    name: "Langarm-Hemd für den Abend mit Monogram-Motiv",
    price: 790,
    gender: "herren",
    category: "Hemden",
    sub: "Formalhemd",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-langarm-hemd-fur-den-abend-mit-monogram-motiv--HVFS9WCL1001_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-langarm-hemd-fur-den-abend-mit-monogram-motiv--HVFS9WCL1001_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Dieses elegante, weiße Hemd für den Abend ist aus feiner Bio-Baumwolle gefertigt. Die schlichte Silhouette mit einer verdeckten Knopfleiste zeigt ein Ton in Ton gehaltenes Spaced Mini Monogram-Motiv als Jacquardgewebe. Ein Maison Knopf schließt den Kragen und die Knopfleiste ist mit einer ein Ton in Ton gehaltenen Signatur versehen. Dieses stilvolle Modell lässt sich hervorragend mit einem Anzug im gleichen Design kombinieren.",
    details: [
      "100 % Baumwolle",
      "Charakteristische Köpfe am Kragen und an den Manschetten",
      "Gewebte Signatur unterhalb der Knopfleiste",
      "Signatur-Motiv aus Jacquard",
      "Made in Italy"
    ],
    sizes: ["37", "38", "39", "40", "41", "42", "43", "44"],
    featured: false,
    collab: "collab-marcus-01"
  },

  {
    id: "h-hemd-formal-03",
    name: "Langarm-Hemd für den Abend mit Monogram-Motiv",
    price: 1900,
    gender: "herren",
    category: "Hemden",
    sub: "Formalhemd",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-gestreiftes-langarm-hemd-mit-perlenstickerei--HUS78WW72R60_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-gestreiftes-langarm-hemd-mit-perlenstickerei--HUS78WW72R60_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Dieses langärmelige Hemd ist inspiriert von der indischen Dandy-Ästhetik der Frühjahr Sommer 2026 Fashion Show. Das Design aus Bio-Baumwolle präsentiert ein traditionelles, gestreiftes Jacquardmuster in frischen Blautönen. Am Kragen und an den Manschetten sorgen detailgenau aufgestickte Perlen für einen juwelenartigen Effekt. Dieses Modell ist perfekt für den Lagen-Look und verleiht jedem Ensemble eine raffinierte Note.",
    details: [
      "100 % Baumwolle",
      "Aufgestickte Perlen am Kragen und an den Manschetten",
      "Knöpfe mit Perlmutt-Finish",
      "Streifen aus Jacquard",
      "Made in Italy"
    ],
    sizes: ["37", "38", "39", "40", "41", "42", "43", "44"],
    featured: true,
    collab: "collab-marcus-01"
  },

  // Herren → Hemden → Poloshirt
  {
    id: "h-hemd-polo-01",
    name: "Bedrucktes Kurzarmhemd",
    price: 1.100,
    gender: "herren",
    category: "Hemden",
    sub: "Poloshirt",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bedrucktes-kurzarmhemd--HVS37WSS16E5_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bedrucktes-kurzarmhemd--HVS37WSS16E5_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Dieses modische, luftige Hemd mit kurzen Ärmeln ist aus einem leichten Baumwollstoff gefertigt und mit einem gedruckten Flower X-Ray-Motiv in zarten Blau- und Weißtönen versehen. Das über einem Damier-Motiv gearbeitete grafische Blumen-Motiv integriert dezente Maison- und Monogram-Blüten-Elemente. Dieses charakteristische Modell lässt sich unter einer kragenlosen Jacke mit demselben Motiv tragen.",
    details: [
      "100% Baumwolle",
      "Knopfverschluss mit perlenartigem Finish",
      "Patch aus Leder mit Signatur am Rücken",
      "Grafisch überdruckte Signatur",
      "Made in France"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    featured: true
  },

   {
    id: "h-hemd-polo-02",
    name: "Gestreiftes Kurzarm-Hemd mit Majson x The Darjeeling Limited Stickerei",
    price: 1.800,
    gender: "herren",
    category: "Hemden",
    sub: "Poloshirt",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-gestreiftes-kurzarm-hemd-mit-lv-x-the-darjeeling-limited-stickerei--HUS80WXX1MU1_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-gestreiftes-kurzarm-hemd-mit-lv-x-the-darjeeling-limited-stickerei--HUS80WXX1MU1_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Dieses hellblau und weiß gestreifte, kurzärmelige Hemd ist mit dem Maison x The Darjeeling Limited-Motiv aus der Frühjahr Sommer 2026 Show veredelt. Nostalgische, durchgehende Stickereien von Flora und Fauna begrüßen die Kunst des Reisens, während ein aufgestickter Maison Paris Schriftzug die Vorderseite dezent akzentuiert. Passende Shorts komplettieren dieses sommerliche Ensemble.",
    details: [
      "85 % Viskose, 15 % Polyester",
      "Knöpfe mit Perlmutt-Finish",
      "Gestickte Signatur links auf der Vorderseite",
      "Gestreiftes Jacquardgewebe mit durchgängig aufgesticktem Motiv",
      "Made in Italy"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    featured: true
  },

  // Herren → Anzüge & Sakkos → Zweiteiliger Anzug
  {
    id: "h-anzug-zwei-01",
    name: "Zweireihige Smoking Jacke",
    price: 3200,
    gender: "herren",
    category: "Anzüge & Sakkos",
    sub: "Zweiteiliger Anzug",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zweireihige-smoking-jacke--HUFJ6EFZC609_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zweireihige-smoking-jacke--HUFJ6EFZC609_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Diese exakt geschnittene Smoking Jacke ist aus eleganter, navyblauer Grain-de-Poudre-Wolle gefertigt und mit einem schwarzen, steigenden Revers aus Satin versehen. Charakteristische Knöpfe mit Akzenten aus Strass in goldfarbenen Metallfassungen zieren die Vorderseite, eine dezente, gewebte Maison Signatur die Rückseite. Die passende Hose vervollständigt ein stilvolles und zeitloses Ensemble für den Abend.",
    details: [
      "100 % Wolle",
      "Gaston-Passform",
      "Gewebte Signatur auf der Rückseite",
      "6 charakteristische Knöpfe als Verschluss",
      "Steigendes Revers aus Satin",
      "Made in Italy"
    ],
    sizes: ["44", "46", "48", "50", "52", "54"],
    featured: true,
    collab: "collab-marcus-01"
  },

  // Herren → Anzüge & Sakkos → Sakko
  {
    id: "h-sakko-01",
    name: "Einreihiges Pont Neuf Jackett aus Woll-Seiden-Jacquard",
    price: 2600,
    gender: "herren",
    category: "Anzüge & Sakkos",
    sub: "Sakko",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-einreihiges-pont-neuf-jackett-aus-woll-seiden-jacquard--HVFJ8ECU1900_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-einreihiges-pont-neuf-jackett-aus-woll-seiden-jacquard--HVFJ8ECU1900_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Dieses zeitlose, einreihige Jackett in Schwarz besticht durch seine elegante Pont Neuf Silhouette. Es ist mit einem schmeichelnden Pinstripe Micro Flower-Motiv als Jacquardgewebe verziert, das Ketten von Monogram-Blüten zeigt, und erhält durch den Seidenanteil im Garn einen subtilen Schimmer. Die dazu passende Zigarettenhose vervollständigt einen stilvollen Business-Anzug.",
    details: [
      "89 % Wolle, 11 % Seide",
      "Pont Neuf Passform",
      "Steigendes Revers",
      "Signatur-Motiv aus Jacquard",
      "Gewebte Signatur auf der Rückseite",
      "Made in Italy"
    ],
    sizes: ["44", "46", "48", "50", "52"],
    featured: false,
    collab: "collab-marcus-01"
  },

  // Herren → Strickwaren → Pullover
  {
    id: "h-strick-pull-01",
    name: "Langarm-Pullover aus Woller",
    price: 1600,
    gender: "herren",
    category: "Strickwaren",
    sub: "Pullover",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-langarm-pullover-aus-wolle--HUN85WNOM62X_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-langarm-pullover-aus-wolle--HUN85WNOM62X_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Dieser Pullover aus Wolle bildet eine mühelos elegante und zugleich unverkennbare Lage. Er zeigt sich in den violett-indigofarbenen Nuancen der Frühjahr Sommer 2026 Fashion Show. Der Strick erinnert an Häkelarbeiten und bildet melierten Tweed nach. Sich abhebende, dunkle Details aus Rippstrick am Kragen, an den Bündchen sowie am Saum sorgen für ein stilvolles Finish. Die Rückseite ziert ein braunes Marque Maison Déposée Patch aus Leder.",
    details: [
      "100 % Wolle",
      "Reguläre Passform",
      "Violett / Indigo / Blau",
      "Kragen, unterer Saum und Bündchen aus Rippstrick",
      "Grobe Maschen in Tweed-Optik",
      "Patch aus Leder mit Signatur auf der Rückseite",
      "Dieses Produkt wird in Italien gefertigt."
    ],
    sizes: ["S", "M", "L", "XL"],
    featured: true
  },

  // Herren → Jacken & Mäntel → Mantel
  {
    id: "h-mantel-01",
    name: "Blouson aus Double Face Wolle",
    price: 3100,
    gender: "herren",
    category: "Jacken & Mäntel",
    sub: "Mantel",
    image: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-blouson-aus-double-face-wolle--HUB84EXX9867_PM2_Front%20view.png?wid=1440&hei=1440",
    hoverImage: "https://de.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-blouson-aus-double-face-wolle--HUB84EXX9867_PM1_Worn%20view.png?wid=1440&hei=1440",
    description: "Dieser elegante Blouson aus der Frühling Sommer 2026 Fashion Show präsentiert sich in einem warmen Karamellton. Das hochwertige Double Face-Gewebe aus einem Woll-Seidengemisch sorgt für eine geschmeidige Silhouette, die innen mit dem Monogram Overlap-Motiv dieser Saison im gleichfarbigen Jacquardmuster verziert ist. Die dezente Maison Paris-Stickerei auf der Brust verleiht dieser stilvollen und zeitlosen Optik eine raffinierte Note.",
    details: [
      "99 % Wolle, 1 % Seide",
      "Lockere Passform",
      "Karamell",
      "Double Face-Gewebe mit charakteristischem Jacquard auf der Innenseite",
      "Reißverschluss",
      "Rippstrick am Saum und an den Bündchen",
      "2 Paspeltaschen",
      "Gestickte Signatur auf der Brust",
      "Made in Italy"
    ],
    sizes: ["44", "46", "48", "50", "52", "54"],
    featured: false
  },

  // Herren → Hosen → Anzughosen
  {
    id: "h-hose-anzug-01",
    name: "Pleated Wool Dress Trouser",
    price: 680,
    gender: "herren",
    category: "Hosen",
    sub: "Anzughosen",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    description: "Doppelte Bundfalten und ein hoher Taillenbund — die Rückkehr der klassischen Herrenhose in ihrer elegantesten Form.",
    details: [
      "Super 100s Wollstoff",
      "Doppelte Bundfalten",
      "Seitenverstellung am Bund",
      "Gekürzt auf Wunsch",
      "Made in Italy"
    ],
    sizes: ["44", "46", "48", "50", "52", "54"],
    featured: false
  },

  // Herren → Schuhe → Oxford
  {
    id: "h-schuh-oxford-01",
    name: "Cap-Toe Oxford",
    price: 980,
    gender: "herren",
    category: "Schuhe",
    sub: "Oxford",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    description: "Der Inbegriff des formellen Schuhs. Welted construction, Boxcalf-Leder, handpoliert auf Spiegelglanz.",
    details: [
      "Boxcalf-Leder",
      "Goodyear-Welt-Konstruktion",
      "Ledersohle",
      "Handpolitur",
      "Made in Northampton, England"
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    featured: false
  },

  // Herren → Accessoires → Gürtel
  {
    id: "h-acc-guertel-01",
    name: "Reversible Logo Belt",
    price: 420,
    gender: "herren",
    category: "Accessoires",
    sub: "Gürtel",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    description: "Wendegürtel in Schwarz/Braun mit abnehmbarer Logo-Schnalle. Zwei Looks — ein Gürtel.",
    details: [
      "Doppelseitiges Kalbsleder",
      "Abnehmbare Logo-Schnalle",
      "Breite: 3,5 cm",
      "Made in Italy"
    ],
    sizes: ["85", "90", "95", "100", "105"],
    featured: false
  },

  // Herren → Accessoires → Krawatten
  {
    id: "h-acc-krawatte-01",
    name: "Seven-Fold Silk Tie",
    price: 290,
    gender: "herren",
    category: "Accessoires",
    sub: "Krawatten",
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    description: "Siebenfaltig gefaltete Seide aus Como — der Goldstandard der Krawatte. Handgenäht, unvergleichlicher Griff.",
    details: [
      "100% Seide, 7-fach gefaltet",
      "Gewebt in Como, Italien",
      "Breite: 8 cm",
      "Handgenäht",
      "Made in Italy"
    ],
    sizes: ["One Size"],
    featured: false
  },

  /* ───────────────────────────────────────────────────────
     KINDER
  ─────────────────────────────────────────────────────── */

  // Kinder → Mädchen (2–14J) → Kleider
  {
    id: "k-maedchen-kleid-01",
    name: "Tulle Party Dress",
    price: 380,
    gender: "kinder",
    category: "Mädchen (2–14J)",
    sub: "Kleider",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    description: "Elfenhaftes Tüllkleid mit Satinoberteil. Für besondere Momente gemacht.",
    details: [
      "Oberteile: 100% Seide Satin",
      "Rock: mehrlagiger Tüll",
      "Verdeckter Reißverschluss",
      "Handwäsche",
      "Made in France"
    ],
    sizes: ["2J", "3J", "4J", "5J", "6J", "7J", "8J"],
    featured: false
  },

  // Kinder → Jungen (2–14J) → Hemden
  {
    id: "k-jungen-hemd-01",
    name: "Oxford Cotton School Shirt",
    price: 120,
    gender: "kinder",
    category: "Jungen (2–14J)",
    sub: "Hemden",
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    description: "Klassisches Oxford-Hemd für den Schulalltag und mehr. Bügelfrei, langlebig, zeitlos.",
    details: [
      "100% Oxford-Baumwolle",
      "Bügelfrei-Ausrüstung",
      "Button-Down-Kragen",
      "Maschinenwäsche 40°",
      "Made in Portugal"
    ],
    sizes: ["3J", "4J", "5J", "6J", "7J", "8J", "10J", "12J", "14J"],
    featured: false
  }

];

/* ═══════════════════════════════════════════════════════════
   KOLLABORATIONEN
   ─────────────────────────────────────────────────────────
   Jede Kooperation hat eine ID, die bei Produkten als
   `collab: "id"` referenziert werden kann.

   Felder:
     id          – eindeutiger Slug
     name        – Name der Person / des Labels
     title       – kurzer Titel (z.B. "Designer × MAISON")
     tagline     – einzeiliger Slogan
     description – Fließtext über die Kooperation (2–3 Sätze)
     quote       – Zitat der Person
     image       – Portrait oder Editorial-Bild
     heroImage   – breites Hero-Bild für die Section
     instagram   – @handle (ohne @)
     instagramUrl– voller Link
     website     – optional
     season      – z.B. "SS 2025"
     featured    – true → große Hero-Karte auf der Startseite
     accentColor – CSS-Farbwert für den Akzentstreifen
═══════════════════════════════════════════════════════════ */

const collaborations = [
  {
    id: "collab-sofia-01",
    name: "Claire Chevalier",
    title: "Claire Chevalier × MAISON",
    tagline: "Stille Kraft. Weiche Linien.",
    description: "Die dänische Stylistin und Autorin Sofia Andersen ist bekannt für ihren unverwechselbaren Nordik-Luxus-Stil. Gemeinsam mit MAISON hat sie eine Kapselkollektion aus acht Stücken kuratiert, die Understatement mit Handwerkskunst verbindet.",
    quote: "Ich wollte Kleidung, die man trägt, ohne darüber nachzudenken — und die trotzdem jeden Raum verändert.",
    image: "images/step 48/9b8qmfdpa1rmr0cx8bj9797394_02.png",
    heroImage: "images/step 7/2026-01-12_11-13-40_2348.png",
    instagram: "_clairechevalier",
    instagramUrl: "https://www.instagram.com/_clairechevalier",
    website: "https://example.com",
    season: "SS 2025",
    featured: true,
    accentColor: "#b8a98a"
  },
  {
    id: "collab-marcus-01",
    name: "Marcus Veil",
    title: "Marcus Veil × MAISON",
    tagline: "Precision. Power. Presence.",
    description: "Der Londoner Architekt und Menswear-Connoisseur Marcus Veil hat mit MAISON eine exklusive Herren-Kollektion entworfen. Architektonische Schnittführung trifft auf jahrhundertealte Sasori-Schneiderkunst.",
    quote: "Ein Anzug ist keine Kleidung. Er ist eine Haltung.",
    image: "images/cooperation/2026-04-06_12-48-24_3517.png",
    heroImage: "images/cooperation/2026-04-06_12-52-20_4538.png",
    instagram: "marcusveil",
    instagramUrl: "https://www.instagram.com/",
    website: "https://example.com",
    season: "SS 2025",
    featured: true,
    accentColor: "#2a2a2a"
  },
  {
    id: "collab-yuki-01",
    name: "Yuki Tanaka",
    title: "Yuki Tanaka × MAISON",
    tagline: "Wabi-Sabi trifft Haute Couture.",
    description: "Die japanische Keramikkünstlerin und Lifestyle-Influencerin Yuki Tanaka bringt ihre Philosophie der unvollkommenen Schönheit in eine limitierte Accessoires-Linie für MAISON ein. Handgefertigte Details, erdige Töne, meditative Eleganz.",
    quote: "Schönheit liegt im Unvollendeten. Mode kann das spüren lassen.",
    image: "images/cooperation/jassir-jonis-QWa0TIUW638-unsplash-2-2.jpg",
    heroImage: "https://images.unsplash.com/photo-1621447847111-ea24b4267bce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBtYW4lMjBjaXR5fGVufDB8fDB8fHww",
    instagram: "yukitanaka.studio",
    instagramUrl: "https://www.instagram.com/",
    website: "https://example.com",
    season: "SS 2025",
    featured: false,
    accentColor: "#8a7b6a"
  }
];

// Export für Node / global für Browser
if (typeof module !== "undefined") {
  module.exports = { products, collaborations };
}
