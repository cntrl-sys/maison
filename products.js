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
    featured: true,
    collab: "collab-sofia-01"
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

  {
    id: "d-kleid-tag-02",
    name: "Langarm-Kleid aus technischem Jersey mit gerüschtem Besatz",
    price: 1900,
    gender: "damen",
    category: "Kleider",
    sub: "Tageskleider",
    image: "images/lv-products/d-kleid-01.png",
    hoverImage: "images/lv-products/d-kleid-02.png",
    description: "Dieses Kleid präsentiert sich in einem klaren, zeitgemäßen Look aus dem charakteristischen technischen Jersey des Hauses Maison. Es ist in einer eleganten Silhouette mit langen Ärmeln und einer dezent taillierten Taille gehalten. Der Kragen mit Druckknopf und der beschichtete Reißverschlussschieber am Halsausschnitt verleihen dem Modell eine sportive Note, die durch romantische, gerüschte Besätze an Brust und Manschetten harmonisch ausgeglichen wird.",
    details: [
      "Zusammensetzung: 72 % Polyamid, 28 % Elasthan",
      "Schwarz",
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
      "Made in Italy"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    collab: "collab-sofia-01"
  },


    // Damen → Blusen & Tops → Seidenbluse
  {
    id: "d-bluse-01",
    name: "Bluse mit Monogram-Kragen",
    price: 2900,
    gender: "damen",
    category: "Blusen & Tops",
    sub: "Seidenblusen",
    image: "images/lv-products/d-bluse-01.png",
    hoverImage: "images/lv-products/d-bluse-02.png",
    description: "Diese Bluse ist aus einem fließend fallenden Seiden-Krepp in einer subtilen Nuance gefertigt, von der sich Ziernähte an den Manschetten ebenso abheben wie das grafische, zweifarbige Monogram-Motiv im Miniaturformat, welches den abgerundeten Kragen und die voluminösen Lavallière-Bänder hervorhebt. Das angenehme Modell in einer gerade geschnittenen Form lässt sich in stilvollen Looks kombinieren.",
    details: [
      "100 % Seide",
      "Milky White / Weiß",
      "Made in Italy"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    collab: "collab-sofia-01"
  },

    // Damen → Hosen → Weite Hosen
  {
    id: "d-hose-01",
    name: "Ausgestellte Hose aus Monogram-Jacquardgewebe",
    price: 1800,
    gender: "damen",
    category: "Hosen",
    sub: "Weite Hosen",
    image: "images/lv-products/d-hosen-01.png",
    hoverImage: "images/lv-products/d-hosen-02.png",
    description: "Diese elegante Hose aus Baumwoll-Gabardine präsentiert sich mit einem durchgängigen, Ton in Ton gehaltenen Monogram-Motiv als Jacquardgewebe. Sie zeichnet sich durch eine schlichte, ausgestellte Passform aus. Exakte Bügelfalten auf der Vorder- und Rückseite betonen die Struktur. Details aus goldfarbenem Metall wie ein kuppelförmiger Ankerknopf am Verschluss verweisen auf maritime Attribute.",
    details: [
      "100 % Baumwollgarbadine",
      "Indigoblau",
      "Reißverschluss mit Knopf",
      "5 Taschen",
      "Gürtelschlaufen",
      "Jacquardgewebe mit Signaturen",
      "Goldfarbene Elemente aus Metall",
      "Made in Italy"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false
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
    featured: false,
    collab: "collab-sofia-01"
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
  
  // Damen → Unterwäsche & Nacht → Nachtwäsche
  {
    id: "d-hose-01",
    name: "Schlafanzughose aus Seide",
    price: 1900,
    gender: "damen",
    category: "Unterwäsche & Nacht",
    sub: "Nachtwäsche",
    image: "images/lv-products/d-hose-03.png",
    hoverImage: "images/lv-products/d-hosen-04.png",
    description: "Diese klassische, mühelos elegante Schlafanzughose aus luftigem Seiden-Krepp zeigt sich in einer fließenden, gerade geschnittenen Passform. Bügelfalten an Vorder- und Rückseite verleihen der Silhouette Struktur, während ein Taillenbund mit Zugband und goldfarbenen Elementen aus Metall das angenehm zu tragende Modell abrundet.",
    details: [
      "Seidencady-Krepp aus 100 % Seide",
      "Off White / Weiß",
      "Zugband-Verschluss an der Taille",
      "2 Taschen an den Seiten",
      "Goldfarbene Elemente aus Metall",
      "Made in Italy"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
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
    image: "images/lv-products/d-schuhe-03.png",
    hoverImage: "images/lv-products/d-schuhe-04.png",
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
    image: "images/lv-products/d-schuhe-01.png",
    hoverImage: "images/lv-products/d-schuhe-02-01.png",
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
    image: "images/lv-products/d-schal-01.png",
    hoverImage: "images/lv-products/d-schal-02.png",
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
    featured: true,
    collab: "collab-sofia-01"
  },

  // Damen → Accessoires → Gürtel
  {
    id: "d-acc-guertel-01",
    name: "Trench Gürtel 65 mm",
    price: 750,
    gender: "damen",
    category: "Accessoires",
    sub: "Gürtel",
    image: "images/lv-products/d-belt-01.png",
    hoverImage: "images/lv-products/d-belt-02.png",
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
    image: "images/lv-products/h-hemd-03.png",
    hoverImage: "images/lv-products/h-hemd-04.png",
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
    image: "images/lv-products/h-hemd-05.png",
    hoverImage: "images/lv-products/h-hemd-06.png",
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
    image: "images/lv-products/h-hemd-07.png",
    hoverImage: "images/lv-products/h-hemd-08.png",
    description: "Dieses langärmelige Hemd ist inspiriert von der indischen Dandy-Ästhetik der Frühjahr Sommer 2026 Fashion Show. Das Design aus Bio-Baumwolle präsentiert ein traditionelles, gestreiftes Jacquardmuster in frischen Blautönen. Am Kragen und an den Manschetten sorgen detailgenau aufgestickte Perlen für einen juwelenartigen Effekt. Dieses Modell ist perfekt für den Lagen-Look und verleiht jedem Ensemble eine raffinierte Note.",
    details: [
      "100 % Baumwolle",
      "Aufgestickte Perlen am Kragen und an den Manschetten",
      "Knöpfe mit Perlmutt-Finish",
      "Streifen aus Jacquard",
      "Made in Italy"
    ],
    sizes: ["37", "38", "39", "40", "41", "42", "43", "44"],
    featured: false,
    collab: "collab-marcus-01"
  },

  // Herren → Hemden → Poloshirt
  {
    id: "h-hemd-polo-01",
    name: "Bedrucktes Kurzarmhemd",
    price: 1100,
    gender: "herren",
    category: "Hemden",
    sub: "Poloshirt",
    image: "images/lv-products/h-hemd-01.png",
    hoverImage: "images/lv-products/h-hemd-02.png",
    description: "Dieses modische, luftige Hemd mit kurzen Ärmeln ist aus einem leichten Baumwollstoff gefertigt und mit einem gedruckten Flower X-Ray-Motiv in zarten Blau- und Weißtönen versehen. Das über einem Damier-Motiv gearbeitete grafische Blumen-Motiv integriert dezente Maison- und Monogram-Blüten-Elemente. Dieses charakteristische Modell lässt sich unter einer kragenlosen Jacke mit demselben Motiv tragen.",
    details: [
      "100% Baumwolle",
      "Knopfverschluss mit perlenartigem Finish",
      "Patch aus Leder mit Signatur am Rücken",
      "Grafisch überdruckte Signatur",
      "Made in France"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    featured: false
  },

   {
    id: "h-hemd-polo-02",
    name: "Gestreiftes Kurzarm-Hemd mit Majson x The Darjeeling Limited Stickerei",
    price: 1800,
    gender: "herren",
    category: "Hemden",
    sub: "Poloshirt",
    image: "images/lv-products/h-hemd-09.png",
    hoverImage: "images/lv-products/h-hemd-10.png",
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
    category: "Anüge & Sakkos",
    sub: "Zweiteiliger Anzug",
    image: "images/lv-products/h-anzueg-01.png",
    hoverImage: "images/lv-products/h-anzueg-02.png",
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
    featured: false,
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
    image: "images/lv-products/h-anzueg-03.png",
    hoverImage: "images/lv-products/h-anzueg-04.png",
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
    image: "images/lv-products/h-pulli-01.png",
    hoverImage: "images/lv-products/h-pulli-02.png",
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
    sub: "Blouson",
    image: "images/lv-products/h-jacke-01.png",
    hoverImage: "images/lv-products/h-jacke-02.png",
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

  {
    id: "h-mantel-012",
    name: "Langärmeliges Hemd aus Coffee Indigo Denim",
    price: 2200,
    gender: "herren",
    category: "Jacken & Mäntel",
    sub: "Lederjacke",
    image: "images/lv-products/h-jacke-03.png",
    hoverImage: "images/lv-products/h-jacke-04.png",
    description: "Dieses kurze Hemd aus Denim ist eine vielseitige Layering-Option mit einer von Trucker-Jacken inspirierten Silhouette. Der ikonische Coffee Indigo Denim der Frühjahr Sommer 2026 Show erinnert durch gelbe Absteppnähte, patinierte goldfarbene Knöpfe und ein charakteristisches Patch aus natürlich gegerbtem Leder an das Erbe des Hauses Maison als Kofferhersteller. Das aus Bio-Baumwolle mit einem weichen Vintage-Finish gefertigte Modell lässt sich perfekt mit der passenden Hose kombinieren.",
    details: [
      "100 % Baumwolle",
      "Kurze Passform",
      "Coffee Bean / Braun",
      "Gewaschener Denim mit Harzbehandlung",
      "Patinierte, goldfarbene Knöpfe und Nieten",
      "Gelbe Absteppnähte",
      "Knopfverschluss",
      "2 geknöpfte Pattentaschen auf der Brust",
      "1 aufgesetzte Tasche auf der Rückseite mit Signatur-Stickerei",
      "Geprägtes Patch aus natürlich gegerbtem Leder mit Signatur auf dem rückseitigen Einsatz",
      "Made in Italy"
    ],
    sizes: ["44", "46", "48", "50", "52", "54"],
    featured: false
  },

  // Herren → Hosen → Anzughosen
  {
    id: "h-hose-anzug-01",
    name: "Hose im Skater-Stil aus Coffee Indigo Denim",
    price: 1400,
    gender: "herren",
    category: "Hosen",
    sub: "jeans",
    image: "images/lv-products/h-jeans-01.png",
    hoverImage: "images/lv-products/h-jeans-02.png",
    description: "Diese legere Hose im Skater-Stil präsentiert das ikonische Coffee Indigo Denim der Frühjahr Sommer 2026 Fashion Show in einer verwaschenen Vintage-Note. Gelbe Ziernähte, altgoldfarbene Nieten und eine Gürtel­schlaufe aus natürlich gegerbtem Rindsleder erinnern an die Tradition des Hauses Maison als Kofferhersteller. Eine charakteristische Stickerei auf der Gesäßtasche vollendet diese vielseitige Optik, die die dezenten Farben dieser Saison perfekt ergänzt.",
    details: [
      "100 % Baumwolle",
      "Passform im Skater-Stil",
      "Coffee Bean / Braun",
      "Stonewashed-Denim mit Harzbehandlung",
      "Sich farblich abhebende, gelbe Absteppnaht",
      "Knopf und Nieten aus altgoldfarbenem Metall",
      "Klassisches 5-Pocket-Design",
      "Gürtelschlaufe aus natürlich gegerbtem Rindsleder mit geprägter Signatur an der Rückseite",
      "Gestickte Signatur auf der rechten Gesäßtasche",
      "Made in Italy"
    ],
    sizes: ["44", "46", "48", "50", "52", "54"],
    featured: false
  },

  // Herren → Schuhe → loafer
  {
    id: "h-schuh-oxford-01",
    name: "Croisette Loafer",
    price: 850,
    gender: "herren",
    category: "Schuhe",
    sub: "Loafer",
    image: "images/lv-products/h-loafer-01.png",
    hoverImage: "images/lv-products/h-loafer-02.png",
    description: "Der entspannte und zugleich stilvolle Croisette Loafer aus Velours-Kalbsleder ist von der Französischen Riviera inspiriert und perfekt für wärmere Tage geeignet. Der Riemen auf dem Schaft ist mit einem Ton in Ton gehaltenen Detail einer halben Monogram-Blüte versehen, während die geschmeidige und leicht Außensohle aus Gummi die Maison Initialen zeigt.",
    details: [
      "Velours-Kalbsleder",
      "Braun",
      "Charakteristische Details",
      "Außensohle aus Gummi mit den Maison Initialen am Absatz und dem Damier-Motiv auf dem Profil",
      "Made in Italy"
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    featured: false
  },

  // Herren → Accessoires → Sonnenbrillen
  {
    id: "h-acc-brille-01",
    name: "Maison Attitude Sonnenbrille",
    price: 510,
    gender: "herren",
    category: "Accessoires",
    sub: "Sonnenbrillen",
    image: "images/lv-products/h-brille-01.png",
    hoverImage: "images/lv-products/h-brille-02.png",
    description: "Die Maison Attitude Sonnenbrille ist in der aktuellen Saison zurück - mit einer zeitgemäßen Neuinterpretation. Die quadratischen grauen Gläser sind in silberfarbenes Metall gefasst, das sich an den mit Damier-Motiv gravierten Bügeln fortsetzt. Verstellbare Nasenblättchen und Bügelenden sorgen für Komfort und einen modischen Look.",
    details: [
      "Rechteckige Form",
      "Silberfarben",
      "Rahmen aus Metall",
      "Schwarze Gläser",
      "Charakteristische Elemente aus Metall",
      "Lichtdurchlässigkeit:11%",
      "UV-Schutz:100%",
      "Filter-Kategorie:3",
      "Made in Italy"
    ],
    sizes: ["85", "90", "95", "100", "105"],
    featured: false
  },

  {
    id: "h-acc-brille-02",
    name: "Maison Attitude Square Sonnenbrille",
    price: 510,
    gender: "herren",
    category: "Accessoires",
    sub: "Sonnenbrillen",
    image: "images/lv-products/h-brille-03.png",
    hoverImage: "images/lv-products/h-brille-04-01.png",
    description: "In dieser Saison präsentiert sich die Maison Attitude Square Sonnenbrille mit einem Design, welches erstmalig für die Frühjahr Sommer 2026 Fashion Show entworfen wurde. Auf der Brücke sowie auf den Bügeln ist ein Damier-Motiv eingraviert. Dunkle schwarze Gläser und Bügel mit einem Ruthenium-Finish sorgen für einen unverkennbar maskulinen Look. Das Modell ist mit Nasenplättchen aus Kunstharz und anpassbaren Bügeln ausgestattet, um optimalen Komfort sowie eine individuelle Passform zu gewährleisten.",
    details: [
      "Rechteckige Form",
      "Silberfarben",
      "Rahmen aus Metall",
      "Schwarze Gläser",
      "Bügel mit Damier-Motiv",
      "Lichtdurchlässigkeit:11%",
      "UV-Schutz:100%",
      "Filter-Kategorie:3",
      "Made in Italy"
    ],
    sizes: ["85", "90", "95", "100", "105"],
    featured: false
  },

  {
    id: "h-acc-brille-02",
    name: "Attitude",
    price: 510,
    gender: "herren",
    category: "Accessoires",
    sub: "Sonnenbrillen",
    image: "images/lv-products/h-brille-05.png",
    hoverImage: "images/lv-products/h-brille-06.png",
    description: "Diese Sonnenbrille im Pilotenstil mit quadratischer Form zeichnet sich durch Maison historisches Damier Muster aus mattem und glänzendem Finish auf dem Rahmen aus. Ein zeitloses und klassisches Model.",
    details: [
      "Rahmen aus Metall und Azetat",
      "Auf den Bügeln eingravierte Maison Signatur",
      "Eingravierte Maison Signatur auf dem Glas",
      "Lichtdurchlässigkeit:15%",
      "UV-Schutz:100%",
      "Filter-Kategorie:3"
    ],
    sizes: ["85", "90", "95", "100", "105"],
    featured: false
  },
  {
    id: "h-acc-brille-02",
    name: "Attitude",
    price: 510,
    gender: "herren",
    category: "Accessoires",
    sub: "Sonnenbrillen",
    image: "images/lv-products/h-brille-07.png",
    hoverImage: "images/lv-products/h-brille-08.png",
    description: "IDiese Sonnenbrille im Pilotenstil mit quadratischer Form zeichnet sich durch Maison historisches Damier Muster aus mattem und glänzendem Finish auf dem Rahmen aus. Ein zeitloses und klassisches Model.",
    details: [
      "Rahmen aus Metall und Azetat",
      "Auf den Bügeln eingravierte Maison Signatur",
      "Eingravierte Maison Signatur auf dem Glas",
      "Lichtdurchlässigkeit:16%",
      "UV-Schutz:100%",
      "Filter-Kategorie:3"
    ],
    sizes: ["85", "90", "95", "100", "105"],
    featured: false
  },

  // Herren → Accessoires → Gürtel
  {
    id: "h-acc-guertel-01",
    name: "Frog Wendegürtel 30 mm",
    price: 580,
    gender: "herren",
    category: "Accessoires",
    sub: "Gürtel",
    image: "images/lv-products/h-belt-01.png",
    hoverImage: "images/lv-products/h-belt-02.png",
    description: "Zeitlos modisch und ausgesprochen elegant: Der 30 mm breite Frog Wendegürtel aus Leder zeigt ein geprägtes Damier-Motiv auf der Außenseite, indes ist die Wendeseite glatt und einfarbig gehalten. Mit ihren klassischen Details erinnert die Schließe an das Erbe des Hauses Maison als Koffermacher sowie dessen Exzellenz in der Handwerkskunst.",
    details: [
      "100 x 30 cm",
      "Schwarz",
      "Riemen aus genarbtem Leder, Rückseite aus geprägtem Damier Leder",
      "Patinierte, silberfarbene Frog Schließe",
      "Made in Spain"
    ],
    sizes: ["85", "90", "95", "100", "105"],
    featured: false
  },

  // Herren → Accessoires → Krawatten
  {
    id: "h-acc-krawatte-01",
    name: "Pinstripes Micro Flower Krawatte",
    price: 220,
    gender: "herren",
    category: "Accessoires",
    sub: "Krawatten",
    image: "images/lv-products/h-krawatte-01.png",
    hoverImage: "images/lv-products/h-krawatte-02.png",
    description: "Die in Italien zu 100 % aus Seide gearbeitete Pinstripes Micro Flower Krawatte verkörpert einen dezent raffinierten Stil, der jeden Anzug auf ein neues Niveau hebt. Schlanke, diagonal verlaufende Linien aus wiederkehrenden Initialen und der charakteristischen Monogram-Blüte sind die einzigen Verzierungen auf dem einfarbigen Hintergrund und hinterlassen dennoch einen bleibenden Eindruck.",
    details: [
      "100% Seide",
      "148 x 8 cm",
      "Pinstripes Micro Flower-Jacquardgewebe",
      "Schwarz",
      "Made in Italy"
    ],
    sizes: ["One Size"],
    featured: false
  },

  /* ───────────────────────────────────────────────────────
     KINDER
  ─────────────────────────────────────────────────────── */

  // Kinder → Mädchen (2–14J) → Krawatten
  {
    id: "h-acc-krawatte-01",
    name: "Lace Dress",
    price: 2250,
    gender: "herren",
    category: "Mädchen (2–14J)",
    sub: "Kleider",
    image: "images/lv-products/k-kleid-01-02.png",
    hoverImage: "images/lv-products/k-kleid-01-01.png",
    description: "Dieses kurzärmelige Spitzenkleid ist ein elegantes und raffiniertes Kleidungsstück, perfekt für jeden besonderen Anlass. Das raffinierte Design und die Spitzendetails verleihen einem Hauch von Weiblichkeit und Anmut.",
    details: [
      "69% Polyamide, 16% Cotton, 15% Viscose",
      "Weiß",
      "Kurze Ärmel mit überbackenen Kanten",
      "Geraffter Rock mit überbackenem Saum",
      "Made in Italy"
    ],
    sizes: ["One Size"],
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
    description: "Claire Chevalier steht für zeitlose Eleganz und unaufdringliche Präsenz. Gemeinsam mit MAISON entstand eine Capsule-Kollektion aus acht Stücken, die Minimalismus mit feiner Handwerkskunst vereint. Jedes Teil ist dafür geschaffen, getragen zu werden, ohne darüber nachzudenken — und trotzdem Eindruck zu hinterlassen.",
    quote: "Ich wollte Kleidung, die man trägt, ohne darüber nachzudenken — und die trotzdem jeden Raum verändert.",
    image: "images/step 48/9b8qmfdpa1rmr0cx8bj9797394_02.png",
    heroImage: "images/step 7/2026-01-12_11-12-42_7213.png",
    instagram: "_clairechevalier",
    instagramUrl: "https://www.instagram.com/_clairechevalier",
    website: "https://cntrl-sys.github.io/maison",
    season: "SS 2026",
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
