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
    id: "d-kleid-maison-architecture-mini-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Mini-Kleid",
    price: 1850,
    gender: "damen",
    category: "Kleider",
    sub: "Abendkleider",

    // Produktbild / Packshot
    image: "images/001.png",

    // Modelbild / Hover
    hoverImage: "images/002.png",

    description:
      "Ein präzise geschnittenes Mini-Kleid aus luxuriösem weißem Stoff, interpretiert mit dem charakteristischen MAISON ARCHITECTURE Muster. Abstrakte architektonische Symbole verbinden sich zu einem geometrischen Signature-Print, der die moderne Identität des Hauses widerspiegelt. Die klar definierte Silhouette und die reduzierte Farbgebung verleihen dem Kleid eine zeitlose, skulpturale Eleganz.",

    details: [
      "100 % Baumwolle",
      "MAISON ARCHITECTURE Signature Pattern",
      "Weiß mit schwarzem Muster",
      "Strukturierte Mini-Silhouette",
      "Ärmellos",
      "Hoher Rundhalsausschnitt",
      "Made in France"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: true
  },
  // Damen → Kleider → Abendkleider
  {
    id: "d-kleid-maison-architecture-evening-mini-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Evening Mini Dress",
    price: 1650,
    gender: "damen",
    category: "Kleider",
    sub: "Abendkleider",

    image: "images/031.png",
    hoverImage: "images/032.png",

    description:
      "Ein architektonisch geschnittenes Abendkleid in tiefem Midnight Navy. Die klare, ärmellose Silhouette wird durch das charakteristische MAISON ARCHITECTURE Muster als schwarzer Jacquard strukturiert. Die vertikale Anordnung der Motive betont Taille und Linienführung und verleiht dem kurzen Kleid eine moderne, unverwechselbare Präsenz.",

    details: [
      "Premium Evening Fabric",
      "MAISON ARCHITECTURE Signature Jacquard",
      "Midnight Navy mit schwarzem Muster",
      "Ärmellose Silhouette",
      "Hoher Ausschnitt",
      "Skulpturierte Taille",
      "Strukturierte Schultern",
      "Verdeckter Rückenverschluss",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: true
  },

  // Damen → Kleider → Abendkleider
  {
    id: "d-kleid-maison-architecture-cutout-evening-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Cut-Out Evening Dress",
    price: 2100,
    gender: "damen",
    category: "Kleider",
    sub: "Abendkleider",

    image: "images/037.png",
    hoverImage: "images/038.png",

    description:
      "Ein markantes Abendkleid mit skulpturalem Charakter. Der tiefe V-Ausschnitt und der außergewöhnlich großzügige Cut-out im Taillen- und Bauchbereich bilden die zentrale Konstruktion des Designs. Midnight Blue trifft auf das charakteristische schwarze MAISON ARCHITECTURE Jacquard, das die langen, klar definierten Stoffbahnen des Kleides strukturiert.",

    details: [
      "Premium Evening Fabric",
      "MAISON ARCHITECTURE Signature Jacquard",
      "Midnight Navy mit schwarzem Muster",
      "Dramatischer V-Ausschnitt",
      "Großzügiger abdominaler Cut-out",
      "Skulpturierte Taillenkonstruktion",
      "Floor-Length-Silhouette",
      "Verdeckter Rückenverschluss",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: false
  },

  // Damen → Kleider → Minikleider
  {
    id: "d-kleid-maison-architecture-baby-blue-mini-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Baby Blue Mini Dress",
    price: 2150,
    gender: "damen",
    category: "Kleider",
    sub: "Minikleider",

    // Produktbild
    image: "images/013.png",

    // Model-/Hoverbild
    hoverImage: "images/014.png",

    description:
      "Ein elegantes Mini-Kleid in zartem Babyblau, interpretiert mit dem charakteristischen MAISON ARCHITECTURE Signature Pattern in tiefem Dunkelblau. Feine weiße Paspelierungen rahmen Ausschnitt, Taille und Saum und verleihen der klaren Silhouette eine präzise coutureartige Definition. Ein feminines Statement mit moderner architektonischer Formsprache.",

    details: [
      "100 % Baumwolle",
      "MAISON ARCHITECTURE Signature Pattern",
      "Babyblau mit dunkelblauem Muster",
      "Weiße Paspelierungen",
      "Taillierte Silhouette",
      "Ärmellos",
      "Leicht ausgestellter Minirock",
      "Made in France"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: true
  },
  {
  id: "d-kleid-maison-architecture-ultra-micro-couture-01",
  collection: "architecture-ss27",
  name: "MAISON ARCHITECTURE Ultra Micro Couture Dress",
  price: 2490,
  gender: "damen",
  category: "Kleider",
  sub: "Minikleider",

  image: "images/051.png",
  hoverImage: "images/052.png",

  description:
    "Ein außergewöhnliches MAISON Statement-Piece mit einer skulpturalen Ultra-Micro-Silhouette. Die tief ausgeschnittene Konstruktion verbindet präzise Couture-Panels, architektonische Cut-outs und eine klar definierte Taille. Midnight-Blue verleiht dem Kleid seine intensive Tiefe, während ausgewählte weiße Jacquard-Panels mit dem charakteristischen MAISON ARCHITECTURE Motiv die komplexe Konstruktion betonen.",

  details: [
    "Premium Couture Fabric",
    "MAISON ARCHITECTURE Signature Pattern",
    "Midnight Blue mit White Pattern Details",
    "Ultra-Micro Silhouette",
    "Dramatisch tiefer Ausschnitt",
    "Architektonische Cut-outs",
    "Strukturierter Couture-Bodice",
    "Mehrlagige Konstruktionspanels",
    "Verdeckter Rückenverschluss",
    "Made in Italy"
  ],

  sizes: [
    "34",
    "36",
    "38",
    "40",
    "42"
  ],

  featured: true
},
{
  id: "d-kleid-maison-architecture-deep-round-neck-01",
  collection: "architecture-ss27",
  name: "MAISON ARCHITECTURE Deep Round Neck Micro Dress",
  price: 2290,
  gender: "damen",
  category: "Kleider",
  sub: "Minikleider",

  image: "images/053.png",
  hoverImage: "images/054.png",

  description:
    "Ein radikal reduziertes High-Fashion-Statement mit einer skulptural tiefen, perfekt runden Halsöffnung. Die klare weiße Silhouette wird durch präzise gesetzte Midnight-Blue-Panels mit dem MAISON ARCHITECTURE Signature Pattern akzentuiert. Eine architektonisch konstruierte Couture-Silhouette, bei der der außergewöhnliche Ausschnitt zum zentralen Designelement wird.",

  details: [
    "Premium Structured Couture Fabric",
    "MAISON ARCHITECTURE Signature Pattern",
    "Pure White mit Midnight-Blue Details",
    "Ultra-Micro Silhouette",
    "Extrem tiefer runder Ausschnitt",
    "Geometrisch präzise Halsöffnung",
    "Strukturierter Couture-Bodice",
    "Architektonische Panel-Konstruktion",
    "Verdeckter Rückenverschluss",
    "Made in Italy"
  ],

  sizes: [
    "34",
    "36",
    "38",
    "40",
    "42"
  ],

  featured: true
},
{
  id: "d-kleid-maison-architecture-cutout-couture-01",
  collection: "architecture-ss27",
  name: "MAISON ARCHITECTURE Cut-Out Couture Micro Dress",
  price: 2690,
  gender: "damen",
  category: "Kleider",
  sub: "Minikleider",

  image: "images/055.png",
  hoverImage: "images/056.png",

  description:
    "Ein avantgardistisches Couture-Statement, dessen Silhouette vollständig um präzise konstruierte Cut-outs aufgebaut ist. Tiefes Midnight Blue trifft auf ausgewählte weiße ARCHITECTURE-Panels, deren geometrisches Muster die negativen Räume des Designs rahmt. Jede Öffnung ist als Teil der architektonischen Konstruktion des Kleides präzise ausgearbeitet.",

  details: [
    "Premium Structured Couture Fabric",
    "MAISON ARCHITECTURE Signature Pattern",
    "Midnight Blue mit White Pattern Panels",
    "Ultra-Micro Silhouette",
    "Architektonische Cut-outs",
    "Strukturelle Stoffstege",
    "Verstärkte Cut-out-Kanten",
    "Mehrlagige Couture-Konstruktion",
    "Verdeckter Rückenverschluss",
    "Made in Italy"
  ],

  sizes: [
    "34",
    "36",
    "38",
    "40",
    "42"
  ],

  featured: true
},
{
  id: "d-kleid-maison-architecture-draped-couture-01",
  collection: "architecture-ss27",
  name: "MAISON ARCHITECTURE Draped Couture Micro Dress",
  price: 2890,
  gender: "damen",
  category: "Kleider",
  sub: "Minikleider",

  image: "images/057.png",
  hoverImage: "images/058.png",

  description:
    "Ein skulpturales Couture-Kleid, dessen gesamte Silhouette aus diagonal verlaufenden, ineinandergreifenden Stoffbahnen entwickelt wurde. Zartes Babyblau trifft auf Midnight Blue und präzise weiße ARCHITECTURE-Panels. Die asymmetrische Konstruktion, der seitliche architektonische Freiraum und die fließenden Linien verleihen dem Kleid eine unverwechselbare MAISON Runway-Silhouette.",

  details: [
    "Premium Stretch Couture Fabric",
    "MAISON ARCHITECTURE Signature Pattern",
    "Baby Blue mit Midnight-Blue und White Details",
    "Ultra-Micro Silhouette",
    "Asymmetrische Drapierung",
    "Diagonal verlaufende Couture-Panels",
    "Architektonischer Waist Cut-out",
    "Sculptural Shoulder Construction",
    "Verdeckter Rückenverschluss",
    "Made in Italy"
  ],

  sizes: [
    "34",
    "36",
    "38",
    "40",
    "42"
  ],

  featured: true
},
{
  id: "d-kleid-maison-noir-sculptural-micro-01",
  name: "MAISON NOIR Sculptural Micro Dress",
  price: 2790,
  gender: "damen",
  category: "Kleider",
  sub: "Minikleider",

  collection: "maison-noir",

  image: "images/059.png",
  hoverImage: "images/060.png",

  description:
    "Ein markantes Eröffnungsstück der MAISON NOIR Collection. Das tiefschwarze Couture-Minikleid folgt einer streng körpernahen, skulpturalen Silhouette und verbindet eine dramatisch definierte Taille mit einer asymmetrischen Schulter- und Ausschnittkonstruktion. Reduzierte Farbgebung und präzise Couture-Panels lassen die Architektur des Kleidungsstücks selbst zum Ausdruck werden.",

  details: [
    "Premium Structured Couture Fabric",
    "MAISON NOIR Collection",
    "Deep Architectural Black",
    "Ultra-Micro Silhouette",
    "Dramatisch definierte Taille",
    "Asymmetrische Schulterkonstruktion",
    "Tiefe asymmetrische Halsöffnung",
    "Subtile Corsetry-Struktur",
    "Verdeckter Rückenverschluss",
    "Made in Italy"
  ],

  sizes: [
    "34",
    "36",
    "38",
    "40",
    "42"
  ],

  featured: true
},
{
  id: "d-kleid-maison-noir-sculptural-corset-01",
  name: "MAISON NOIR Sculptural Corset Micro Dress",
  price: 3150,
  gender: "damen",
  category: "Kleider",
  sub: "Minikleider",

  collection: "maison-noir",

  image: "images/061.png",
  hoverImage: "images/062.png",

  description:
    "Ein skulpturales Couture-Minikleid aus der MAISON NOIR Collection. Die streng körpernahe Silhouette wird durch eine präzise Corset-Konstruktion, eine schmal definierte Taille und subtil modellierte Hüften geformt. Der tief geschwungene runde Ausschnitt bildet den zentralen Ausdruck des Designs, während die vollständig schwarze Farbgebung die architektonische Konstruktion in den Mittelpunkt stellt.",

  details: [
    "Premium Structured Couture Fabric",
    "MAISON NOIR Collection",
    "Deep Architectural Black",
    "Ultra-Micro Silhouette",
    "Structured Corset Bodice",
    "Deep Rounded Neckline",
    "Sculpted Waist Construction",
    "Subtly Shaped Hip Structure",
    "Concealed Rear Fastening",
    "Made in Italy"
  ],

  sizes: [
    "34",
    "36",
    "38",
    "40",
    "42"
  ],

  featured: true
},
{
  id: "d-kleid-maison-noir-sculptural-draped-01",
  name: "MAISON NOIR Sculptural Draped Micro Dress",
  price: 2950,
  gender: "damen",
  category: "Kleider",
  sub: "Minikleider",

  collection: "maison-noir",

  image: "images/063.png",
  hoverImage: "images/064.png",

  description:
    "Ein außergewöhnlich schmales Couture-Minikleid aus der MAISON NOIR Collection. Eine präzise diagonale Drapierung zieht sich über den Körper und formt gemeinsam mit der tief geschwungenen Halslinie und dem asymmetrischen Micro-Hem eine fließende, architektonische Silhouette. Das vollständig schwarze Design konzentriert sich auf Bewegung, Proportion und die außergewöhnliche Konstruktion des Kleidungsstücks.",

  details: [
    "Premium Silk-Blend Couture Fabric",
    "MAISON NOIR Collection",
    "Deep Architectural Black",
    "Ultra-Slim Micro Silhouette",
    "Deep Curved Neckline",
    "Sculptural Diagonal Draping",
    "Asymmetric Micro Hem",
    "Precision Couture Construction",
    "Concealed Rear Fastening",
    "Made in Italy"
  ],

  sizes: [
    "34",
    "36",
    "38",
    "40",
    "42"
  ],

  featured: true
},
{
  id: "d-kleid-maison-noir-architectural-lace-01",
  name: "MAISON NOIR Architectural Lace Micro Dress",
  price: 3290,
  gender: "damen",
  category: "Kleider",
  sub: "Minikleider",

  collection: "maison-noir",

  image: "images/065.png",
  hoverImage: "images/066.png",

  description:
    "Ein außergewöhnlich fein gearbeitetes Couture-Minikleid aus der MAISON NOIR Collection. Geometrische schwarze Spitze trifft auf eine streng körpernahe Silhouette, einen tief geschwungenen runden Ausschnitt und präzise architektonische Konstruktion. Unter der Spitze liegt das MAISON ARCHITECTURE Signature Pattern als subtiler Ton-in-Ton-Jacquard und wird erst aus nächster Nähe sichtbar.",

  details: [
    "Premium Couture Lace",
    "Tonal MAISON ARCHITECTURE Jacquard",
    "MAISON NOIR Collection",
    "Deep Architectural Black",
    "Ultra-Micro Silhouette",
    "Deep Rounded Neckline",
    "Geometric Couture Lace",
    "Sculpted Waist Construction",
    "Concealed Rear Fastening",
    "Made in Italy"
  ],

  sizes: [
    "34",
    "36",
    "38",
    "40",
    "42"
  ],

  featured: true
},
{
  id: "d-kleid-maison-noir-sculptural-halter-01",
  name: "MAISON NOIR Sculptural Halter Micro Dress",
  price: 3050,
  gender: "damen",
  category: "Kleider",
  sub: "Minikleider",

  collection: "maison-noir",

  image: "images/067.png",
  hoverImage: "images/068.png",

  description:
    "Ein skulpturales Couture-Minikleid aus der MAISON NOIR Collection. Die extrem schmale Silhouette verbindet eine präzise definierte Taille und modellierte Hüften mit einer architektonischen Halter-Konstruktion. Ein tief geschwungener ovaler Ausschnitt bildet den Mittelpunkt des Designs, während lange vertikale Nähte die Silhouette optisch verlängern.",

  details: [
    "Premium Structured Couture Fabric",
    "MAISON NOIR Collection",
    "Deep Architectural Black",
    "Ultra-Slim Micro Silhouette",
    "Sculptural Halter Construction",
    "Deep Oval Neckline",
    "Architectural Vertical Seams",
    "Sculpted Waist and Hip Construction",
    "Asymmetric Micro Hem",
    "Made in Italy"
  ],

  sizes: [
    "34",
    "36",
    "38",
    "40",
    "42"
  ],

  featured: true
},
{
  id: "d-kleid-maison-noir-asymmetric-one-shoulder-01",
  name: "MAISON NOIR Asymmetric One-Shoulder Micro Dress",
  price: 3180,
  gender: "damen",
  category: "Kleider",
  sub: "Minikleider",

  collection: "maison-noir",

  image: "images/071.png",
  hoverImage: "images/072.png",

  description:
    "Ein asymmetrisches Couture-Minikleid aus der MAISON NOIR Collection. Die einseitige Schulterkonstruktion trifft auf eine tief geschwungene diagonale Halslinie und eine präzise Drapierung, die sich über den Körper zieht. Ein subtiler Ton-in-Ton-Jacquard des MAISON ARCHITECTURE Signature Patterns ist in die Drapierung integriert und wird erst bei genauer Betrachtung sichtbar.",

  details: [
    "Premium Silk-Blend Couture Fabric",
    "MAISON NOIR Collection",
    "Deep Architectural Black",
    "Ultra-Micro Silhouette",
    "Asymmetric One-Shoulder Construction",
    "Deep Diagonal Neckline",
    "Sculptural Draping",
    "Tonal MAISON ARCHITECTURE Jacquard",
    "Asymmetric Micro Hem",
    "Concealed Rear Fastening",
    "Made in Italy"
  ],

  sizes: [
    "34",
    "36",
    "38",
    "40",
    "42"
  ],

  featured: true
},
  // Damen → Kleider → Minikleider
  {
    id: "d-kleid-maison-architecture-micro-dress-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Micro Dress",
    price: 1490,
    gender: "damen",
    category: "Kleider",
    sub: "Minikleider",

    image: "images/049.png",
    hoverImage: "images/050.png",

    description:
      "Ein skulpturales Micro Dress in zartem Babyblau. Die präzise geschnittene Silhouette wird durch integrierte weiße ARCHITECTURE-Panelflächen und kontrastierende Midnight-Blue-Kanten strukturiert. Ein ausdrucksstarkes MAISON Statement-Piece, das geometrische Präzision mit moderner femininer Eleganz verbindet.",

    details: [
      "Premium Structured Luxury Fabric",
      "MAISON ARCHITECTURE Signature Panels",
      "Baby Blue mit White und Midnight-Blue-Details",
      "Extrem kurze Micro-Dress-Silhouette",
      "Strukturierter Body",
      "Square Neckline",
      "Präzise Taillenkonstruktion",
      "Verdeckter Rückenverschluss",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: true
  },

  // Damen → Kleider → Cocktailkleider
  {
    id: "d-kleid-maison-architecture-asymmetric-mini-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Asymmetric Mini Dress",
    price: 1390,
    gender: "damen",
    category: "Kleider",
    sub: "Cocktailkleider",

    image: "images/045.png",
    hoverImage: "images/046.png",

    description:
      "Ein skulpturales Mini-Kleid aus reinem Weiß mit asymmetrischem One-Shoulder-Schnitt. Eine präzise Midnight-Blue-Bordüre mit dem charakteristischen MAISON ARCHITECTURE Motiv rahmt Ausschnitt, Taille und Saum und verbindet die klare Silhouette mit der unverwechselbaren Formsprache des Hauses.",

    details: [
      "Premium Silk Blend",
      "MAISON ARCHITECTURE Signature Border",
      "Pure White mit Midnight-Blue-Details",
      "Asymmetrischer One-Shoulder-Schnitt",
      "Skulpturierte Taille",
      "Leicht ausgestellte Mini-Silhouette",
      "Architektonische Nahtführung",
      "Verdeckter Seitenverschluss",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: false
  },
   // Damen → Kleider → Cocktailkleider
  {
    id: "d-kleid-maison-architecture-baby-blue-column-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Baby Blue Column Dress",
    price: 1450,
    gender: "damen",
    category: "Kleider",
    sub: "Cocktailkleider",

    image: "images/035.png",
    hoverImage: "images/036.png",

    description:
      "Ein elegant verlängertes Column Dress in zartem Babyblau mit einer körpernahen, fließenden Silhouette. Das MAISON ARCHITECTURE Signature Pattern zieht sich als fein gewebter Midnight-Blue-Jacquard in einer präzisen vertikalen Komposition über das Kleid und unterstreicht dessen klare, architektonische Linien.",

    details: [
      "Premium Silk Blend",
      "MAISON ARCHITECTURE Signature Jacquard",
      "Baby Blue mit Midnight-Blue-Muster",
      "Sleeveless Design",
      "Eleganter Rundhalsausschnitt",
      "Körpernahe Column-Silhouette",
      "Subtiler Seitenschlitz",
      "Verdeckter Rückenverschluss",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: true
  },

  // Damen → Jacken & Mäntel → Jacken
  {
    id: "d-jacke-maison-architecture-cropped-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Cropped Wool Jacket",
    price: 2950,
    gender: "damen",
    category: "Jacken & Mäntel",
    sub: "Jacken",

    // Produktbild
    image: "images/003.png",

    // Model-/Hoverbild
    hoverImage: "images/004.png",

    description:
      "Eine skulpturale Interpretation moderner französischer Schneiderkunst. Die taillierte Cropped-Jacke aus hochwertigem Woll-Twill verbindet eine präzise architektonische Silhouette mit dem charakteristischen MAISON ARCHITECTURE Muster. Die monochrome Jacquard-Struktur verleiht dem schwarzen Stoff eine subtile Tiefe und macht das Signature Pattern erst bei näherer Betrachtung sichtbar.",

    details: [
      "100 % Schurwolle",
      "MAISON ARCHITECTURE Jacquard-Muster",
      "Schwarz",
      "Strukturierte Schultern",
      "Taillierte Silhouette",
      "Cropped Length",
      "Verdeckter Verschluss",
      "Made in France"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: true
  },
  // Damen → Jacken & Mäntel → Mäntel
  {
    id: "d-mantel-maison-architectural-wool-01",
    name: "MAISON Architectural Wool Coat",
    price: 4200,
    gender: "damen",
    category: "Jacken & Mäntel",
    sub: "Mäntel",

    // Produktbild
    image: "images/011.png",

    // Model-/Hoverbild
    hoverImage: "images/012.png",

    description:
      "Ein Ausdruck zurückhaltender Stärke. Der MAISON Architectural Wool Coat verbindet eine präzise, architektonische Silhouette mit luxuriöser schwarzer Schurwolle. Im Inneren offenbart sich das charakteristische MAISON ARCHITECTURE Muster auf einem seidigen weißen Futter und setzt einen unerwarteten grafischen Akzent.",

    details: [
      "100 % Schurwolle",
      "100 % Seidenfutter",
      "MAISON ARCHITECTURE Signature Lining",
      "Schwarz",
      "Strukturierte Schultern",
      "Taillierte Silhouette",
      "Verdeckter Verschluss",
      "Made in France"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: true
  },

  // Damen → Jacken & Mäntel → Blazer
  {
    id: "d-blazer-maison-architecture-longline-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Longline Blazer",
    price: 1850,
    gender: "damen",
    category: "Jacken & Mäntel",
    sub: "Blazer",

    image: "images/023.png",
    hoverImage: "images/024.png",

    description:
      "Ein präzise geschnittener Longline-Blazer aus tiefdunklem Navy mit dem charakteristischen MAISON ARCHITECTURE Muster als fein gearbeitetem schwarzem Jacquard. Die verlängerte Silhouette, klar definierten Schultern und schmalen Revers verleihen dem Piece eine moderne architektonische Präsenz.",

    details: [
      "Premium Tailoring Fabric",
      "MAISON ARCHITECTURE Signature Jacquard",
      "Midnight Navy mit schwarzem Muster",
      "Verlängerte Longline-Silhouette",
      "Strukturierte Schultern",
      "Schmales Peak Revers",
      "Zwei dezente Knöpfe",
      "Welt-Taschen",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: true
  },
  {
  id: "d-jacke-maison-noir-sculptural-cropped-01",
  name: "MAISON NOIR Sculptural Cropped Couture Jacket",
  price: 3450,
  gender: "damen",
  category: "Jacken & Mäntel",
  sub: "Jacken",

  collection: "maison-noir",

  image: "images/069.png",
  hoverImage: "images/070.png",

  description:
    "Eine skulpturale Couture-Jacke aus der MAISON NOIR Collection. Die außergewöhnlich kurze Silhouette wird durch präzise Tailoring-Techniken, eine stark definierte Taille und subtil architektonisch geformte Schultern bestimmt. Ein kaum sichtbares MAISON ARCHITECTURE Detail im Inneren des Kragens setzt eine zurückhaltende Signatur.",

  details: [
    "Premium Wool-Silk Couture Blend",
    "MAISON NOIR Collection",
    "Deep Architectural Black",
    "Ultra-Cropped Silhouette",
    "Sculptural Shoulder Construction",
    "Precision Tailoring",
    "Corsetry-Inspired Waist Structure",
    "Fitted Long Sleeves",
    "Concealed Front Fastening",
    "Hidden MAISON ARCHITECTURE Detail",
    "Made in Italy"
  ],

  sizes: [
    "34",
    "36",
    "38",
    "40",
    "42"
  ],

  featured: true
},

  // Damen → Tops & Shirts → Crop Tops
  {
    id: "d-top-maison-architecture-ultra-crop-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Ultra-Cropped Top",
    price: 890,
    gender: "damen",
    category: "Tops & Shirts",
    sub: "Crop Tops",

    // Produktbild
    image: "images/005.png",

    // Model-/Hoverbild
    hoverImage: "images/006.png",

    description:
      "Ein kompromisslos reduziertes Statement-Piece: Das ultrakurze MAISON ARCHITECTURE Crop Top verbindet eine präzise, körpernahe Silhouette mit dem charakteristischen Signature Pattern des Hauses. Schwarze architektonische Symbole treffen auf reines Weiß und schaffen einen grafischen Kontrast, der moderne Eleganz mit der klaren Formsprache von MAISON verbindet.",

    details: [
      "100 % Baumwolle",
      "MAISON ARCHITECTURE Signature Pattern",
      "Weiß mit schwarzem Muster",
      "Ultra-Cropped Silhouette",
      "Ärmellos",
      "Hoher Rundhalsausschnitt",
      "Körpernahe Passform",
      "Made in France"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: true
  },
  // Damen → Tops → Crop Tops
  {
    id: "d-top-maison-architecture-baby-blue-one-shoulder-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Baby Blue One-Shoulder Top",
    price: 590,
    gender: "damen",
    category: "Tops",
    sub: "Crop Tops",

    image: "images/039.png",
    hoverImage: "images/040.png",

    description:
      "Ein skulpturales One-Shoulder-Top in zartem Babyblau. Die asymmetrische Silhouette wird durch das charakteristische MAISON ARCHITECTURE Muster als tiefblauer Jacquard akzentuiert. Die präzise Linienführung und der körpernahe Schnitt verbinden moderne Weiblichkeit mit der architektonischen Formsprache des Hauses.",

    details: [
      "Premium Silk Blend",
      "MAISON ARCHITECTURE Signature Jacquard",
      "Baby Blue mit Midnight-Blue-Muster",
      "Asymmetrischer One-Shoulder-Schnitt",
      "Breiter Schulterträger",
      "Fitted Silhouette",
      "Architektonische Panel-Konstruktion",
      "Verdeckter Seitenverschluss",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: false
  },
  // Damen → Tops → Crop Tops
  {
    id: "d-top-maison-architecture-ultra-cropped-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Ultra-Cropped Top",
    price: 520,
    gender: "damen",
    category: "Tops",
    sub: "Crop Tops",

    image: "images/041.png",
    hoverImage: "images/042.png",

    description:
      "Ein kompromisslos kurzes Statement-Top mit architektonischer Silhouette. Die strukturierte Form endet direkt unterhalb der Brust und lässt den gesamten Bauchbereich frei. Midnight Blue, schwarzer ARCHITECTURE-Jacquard und präzise geschnittene Linien verbinden eine moderne, selbstbewusste Ästhetik mit der charakteristischen Formsprache von MAISON.",

    details: [
      "Premium Jacquard Fabric",
      "MAISON ARCHITECTURE Signature Pattern",
      "Midnight Blue mit schwarzem Muster",
      "Ultra-Cropped-Silhouette",
      "Strukturierte Bandeau-Form",
      "Gerader Ausschnitt",
      "Schmale architektonische Träger",
      "Verdeckter Rückenverschluss",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: false
  },

  // Damen → Hosen → Stoffhosen
  {
    id: "d-hose-maison-architecture-wide-leg-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Wide-Leg Trousers",
    price: 890,
    gender: "damen",
    category: "Hosen",
    sub: "Stoffhosen",

    image: "images/025.png",
    hoverImage: "images/026.png",

    description:
      "Eine elegant geschnittene High-Waist-Hose mit langer, weiter Silhouette und klarer vertikaler Linienführung. Das tiefe Midnight Navy wird durch ein fein gearbeitetes schwarzes MAISON ARCHITECTURE Jacquard ergänzt, das sich präzise über die gesamte Konstruktion zieht.",

    details: [
      "Premium Tailoring Fabric",
      "MAISON ARCHITECTURE Signature Jacquard",
      "Midnight Navy mit schwarzem Muster",
      "High-Waist-Schnitt",
      "Weite Full-Length-Silhouette",
      "Subtile Frontfalten",
      "Verdeckter Verschluss",
      "Dezente Eingrifftaschen",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: false
  },
   // Damen → Hosen → Shorts
  {
    id: "d-hose-maison-architecture-tailored-mini-shorts-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Tailored Mini Shorts",
    price: 650,
    gender: "damen",
    category: "Hosen",
    sub: "Shorts",

    image: "images/043.png",
    hoverImage: "images/044.png",

    description:
      "Eine präzise geschnittene Tailored Mini Shorts aus hochwertigem weißem Sommerstoff. Die hohe Taille und die klaren Linien werden durch eine schmale Midnight-Blue-Bordüre mit dem charakteristischen MAISON ARCHITECTURE Muster akzentuiert. Ein minimalistisches Signature-Piece für die moderne Sommergarderobe.",

    details: [
      "Premium Summer Tailoring Fabric",
      "MAISON ARCHITECTURE Signature Detail",
      "Pure White mit Midnight-Blue-Bordüre",
      "High-Waist-Schnitt",
      "Sehr kurze Tailored-Silhouette",
      "Subtile Frontfalten",
      "Strukturierter Bund",
      "Verdeckter Frontverschluss",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: false
  },

  // Damen → Hosen → Stoffhosen
  {
    id: "d-hose-maison-architecture-baby-blue-low-rise-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Baby Blue Low-Rise Trousers",
    price: 890,
    gender: "damen",
    category: "Hosen",
    sub: "Stoffhosen",

    image: "images/047.png",
    hoverImage: "images/048.png",

    description:
      "Eine elegant verlängerte Low-Rise-Hose in zartem Babyblau. Die schmale, nahezu bodenlange Silhouette wird durch eine präzise Midnight-Blue-Bordüre mit dem charakteristischen MAISON ARCHITECTURE Motiv an den Außenseiten der Beine betont. Ein minimalistisches Tailoring-Piece mit klarer vertikaler Linienführung.",

    details: [
      "Premium Lightweight Tailoring Fabric",
      "MAISON ARCHITECTURE Signature Stripe",
      "Baby Blue mit Midnight-Blue-Details",
      "Low-Rise-Waist",
      "Extra Long Silhouette",
      "Schmaler gerader bis leicht ausgestellter Beinverlauf",
      "Verdeckter Frontverschluss",
      "Diskrete Seitentaschen",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: false
  },

  // Damen → Röcke → Miniröcke
  {
    id: "d-rock-maison-architecture-mini-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Mini Skirt",
    price: 690,
    gender: "damen",
    category: "Röcke",
    sub: "Miniröcke",

    image: "images/027.png",
    hoverImage: "images/028.png",

    description:
      "Ein präzise geschnittener Minirock mit hoher Taille und klarer, gerader Silhouette. Tiefes Midnight Navy trifft auf das charakteristische MAISON ARCHITECTURE Muster als fein gearbeitetes schwarzes Jacquard. Die reduzierte Konstruktion verleiht dem kurzen Signature-Piece eine moderne, architektonische Eleganz.",

    details: [
      "Premium Tailoring Fabric",
      "MAISON ARCHITECTURE Signature Jacquard",
      "Midnight Navy mit schwarzem Muster",
      "High-Waist-Schnitt",
      "Sehr kurze Silhouette",
      "Schmaler Bund",
      "Gerade Linienführung",
      "Verdeckter Seitenverschluss",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: false
  },
  // Damen → Röcke → Miniröcke
  {
    id: "d-rock-maison-architecture-baby-blue-satin-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Baby Blue Satin Mini Skirt",
    price: 720,
    gender: "damen",
    category: "Röcke",
    sub: "Miniröcke",

    image: "images/033.png",
    hoverImage: "images/034.png",

    description:
      "Ein moderner Minirock aus luxuriösem Satin in zartem Babyblau. Das charakteristische MAISON ARCHITECTURE Muster erscheint als fein gewebter Midnight-Blue-Jacquard und kontrastiert elegant mit der hellen Farbgebung. Die hohe Taille und die leicht ausgestellte Silhouette verleihen dem Piece eine klare, feminine Linienführung.",

    details: [
      "Premium Satin",
      "MAISON ARCHITECTURE Signature Jacquard",
      "Baby Blue mit Midnight-Blue-Muster",
      "High-Waist-Schnitt",
      "Sehr kurze Mini-Silhouette",
      "Leicht ausgestellte Form",
      "Schmaler Bund",
      "Verdeckter Seitenverschluss",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: false
  },

  // Damen → Blusen → Seidenblusen
  {
    id: "d-bluse-maison-architecture-silk-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Silk Blouse",
    price: 790,
    gender: "damen",
    category: "Blusen",
    sub: "Seidenblusen",

    image: "images/029.png",
    hoverImage: "images/030.png",

    description:
      "Eine minimalistische Seidenbluse aus reinem Weiß mit einer subtilen Interpretation des MAISON ARCHITECTURE Signature Patterns. Die dunkelblaue architektonische Bordüre erscheint gezielt an Kragen, Manschetten, Knopfleiste und Saum und verleiht der klaren Silhouette eine unverwechselbare Maison-Identität.",

    details: [
      "100 % Premium Seide",
      "MAISON ARCHITECTURE Signature Detail",
      "Reines Weiß mit Navy-Details",
      "Spitzer Kragen",
      "Verdeckte Knopfleiste",
      "Lange Ärmel",
      "Elegante Manschetten",
      "Sanft geschwungener Saum",
      "Made in Italy"
    ],

    sizes: [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],

    featured: true
  },

  // Damen → Bademode → Badeanzüge
  {
    id: "d-bademode-maison-architecture-sculptural-one-piece-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Sculptural One-Piece",
    price: 890,
    gender: "damen",
    category: "Bademode",
    sub: "Badeanzüge",

    // Produktbild
    image: "images/015.png",

    // Model-/Hoverbild
    hoverImage: "images/016.png",

    description:
      "Ein skulpturaler One-Piece mit asymmetrischer Silhouette und charakteristischem MAISON ARCHITECTURE Muster. Das tiefschwarze Stretchmaterial wird von präzisen weißen Architekturmotiven durchzogen und verbindet eine kraftvolle grafische Ästhetik mit einer eleganten, körpernahen Form.",

    details: [
      "Premium Swim Fabric",
      "MAISON ARCHITECTURE Signature Pattern",
      "Schwarz mit weißem Muster",
      "Asymmetrischer One-Shoulder-Schnitt",
      "Skulpturierte Taille",
      "High-Cut-Beinausschnitt",
      "Gefüttertes Innenleben",
      "Made in Italy"
    ],

    sizes: [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],

    featured: true
  },
  // Damen → Bademode → Badeanzüge
  {
    id: "d-bademode-maison-architecture-asymmetric-one-piece-02",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Asymmetric One-Piece",
    price: 950,
    gender: "damen",
    category: "Bademode",
    sub: "Badeanzüge",

    image: "images/019.png",
    hoverImage: "images/020.png",

    description:
      "Ein skulpturaler One-Piece mit asymmetrischer Silhouette und dem charakteristischen MAISON ARCHITECTURE Muster. Tiefschwarzes Swimwear-Material trifft auf präzise weiße Architekturmotivik und feine weiße Paspelierungen, die die klare Konstruktion des Designs hervorheben.",

    details: [
      "Premium Swim Fabric",
      "MAISON ARCHITECTURE Signature Pattern",
      "Schwarz mit weißem Muster",
      "Asymmetrischer One-Shoulder-Schnitt",
      "Skulpturierte Taille",
      "High-Leg-Silhouette",
      "Weiße Kontrastpaspelierung",
      "Made in Italy"
    ],

    sizes: [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],

    featured: false
  },

  // Damen → Bademode → Bikinis
  {
    id: "d-bikini-maison-architecture-baby-blue-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Sculptural Bikini",
    price: 790,
    gender: "damen",
    category: "Bademode",
    sub: "Bikinis",

    image: "images/017.png",
    hoverImage: "images/018.png",

    description:
      "Ein präzise geschnittener zweiteiliger Designer-Bikini in zartem Babyblau. Das charakteristische MAISON ARCHITECTURE Muster in tiefem Dunkelblau wird von feinen weißen Paspelierungen eingerahmt und verbindet grafische Präzision mit einer eleganten, modernen Silhouette.",

    details: [
      "Premium Swim Fabric",
      "MAISON ARCHITECTURE Signature Pattern",
      "Babyblau mit dunkelblauem Muster",
      "Weiße Paspelierungen",
      "Strukturiertes Bandeau-Oberteil",
      "High-Waist-Bikinihose",
      "Gefüttertes Innenleben",
      "Made in Italy"
    ],

    sizes: [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],

    featured: true
  },

  // Damen → Bademode → Bikinis
  {
    id: "d-bikini-maison-architecture-slim-ivory-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Slim Ivory Bikini",
    price: 760,
    gender: "damen",
    category: "Bademode",
    sub: "Bikinis",

    image: "images/021.png",
    hoverImage: "images/022.png",

    description:
      "Ein präzise konstruierter Designer-Bikini mit bewusst schmaler und länglicher Silhouette. Das weiche Ivory der hochwertigen Swimwear bildet den Hintergrund für das charakteristische MAISON ARCHITECTURE Muster in tiefem Dunkelblau. Feine navyfarbene Einfassungen unterstreichen die vertikale, architektonische Linienführung.",

    details: [
      "Premium Swim Fabric",
      "MAISON ARCHITECTURE Signature Pattern",
      "Ivory mit dunkelblauem Muster",
      "Schmale, verlängerte Silhouette",
      "Geometrisches Oberteil",
      "High-Rise-Bikinihose",
      "Feine Navy-Paspelierung",
      "Made in Italy"
    ],

    sizes: [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],

    featured: false
  },
  {
  id: "d-bikini-maison-ete-architecture-01",
  collection: "ete-ss27",
  name: "MAISON ÉTÉ Architecture Bikini",
  price: 490,
  gender: "damen",
  category: "Bademode",
  sub: "Bikinis",

  // Produktbild / Packshot
  image: "images/079.png",

  // Modelbild / Hover
  hoverImage: "images/080.png",

  description:
    "Ein skulptural geschnittener Designer-Bikini aus der MAISON ÉTÉ Collection. Die asymmetrische Konstruktion verbindet eine präzise geformte Silhouette mit dem charakteristischen MAISON ARCHITECTURE Signature Pattern. Tiefes architektonisches Navy trifft auf eine luxuriöse elfenbeinfarbene Basis und verleiht dem sommerlichen Design eine unverwechselbare Maison-Signatur.",

  details: [
    "Premium Italian Swimwear Fabric",
    "MAISON ÉTÉ Collection",
    "Ivory White",
    "Deep Architectural Navy",
    "MAISON ARCHITECTURE Signature Pattern",
    "Asymmetric Sculpted Top",
    "High-Cut Bikini Bottom",
    "Architectural Panel Construction",
    "Precision Couture Finishing",
    "Made in Italy"
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ],

  featured: false
},

  // Damen → Accessoires → Schals & Tücher
  {
    id: "d-accessoire-maison-architecture-silk-scarf-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Silk Twill Scarf",
    price: 690,
    gender: "damen",
    category: "Accessoires",
    sub: "Schals & Tücher",

    // Produktbild
    image: "images/007.png",

    // Model-/Hoverbild
    hoverImage: "images/008.png",

    description:
      "Ein quadratischer Seidenschal aus luxuriösem Silk Twill, interpretiert mit dem charakteristischen MAISON ARCHITECTURE Muster. Abstrakte architektonische Symbole verbinden sich zu einer präzisen grafischen Komposition mit fein ausgearbeitetem Rand. Die monochrome Gestaltung und der handgerollte Abschluss verleihen dem Design eine zeitlose, unverwechselbare Eleganz.",

    details: [
      "100 % Seide",
      "70 × 70 cm",
      "MAISON ARCHITECTURE Signature Pattern",
      "Schwarz und Weiß",
      "Handgerollter Rand",
      "Silk Twill",
      "Made in Italy"
    ],

    sizes: [
      "70 × 70 cm"
    ],

    featured: true
  },
  // Damen → Taschen → Handtaschen
  {
    id: "d-tasche-maison-architecture-top-handle-01",
    collection: "architecture-ss27",
    name: "MAISON ARCHITECTURE Structured Top-Handle Bag",
    price: 2950,
    gender: "damen",
    category: "Taschen",
    sub: "Handtaschen",

    // Produktbild
    image: "images/009.png",

    // Model-/Hoverbild
    hoverImage: "images/010.png",

    description:
      "Eine skulpturale Interpretation der modernen MAISON Handwerkskunst. Die strukturierte Top-Handle-Tasche aus hochwertigem schwarzem Leder verbindet eine klare architektonische Silhouette mit dem charakteristischen MAISON ARCHITECTURE Muster. Die fein geprägten Symbole treten subtil aus der Lederoberfläche hervor und verleihen der Tasche eine unverwechselbare Tiefe.",

    details: [
      "100 % Kalbsleder",
      "MAISON ARCHITECTURE Blind Embossing",
      "Schwarz",
      "Strukturierte Silhouette",
      "Top Handle",
      "Abnehmbarer Schulterriemen",
      "Dunkel polierte Metallbeschläge",
      "Made in Italy"
    ],

    sizes: [
      "One Size"
    ],

    featured: true
  },
  {
  id: "d-lingerie-maison-signature-lace-set-01",
  name: "MAISON Signature Lace Set",
  price: 690,
  gender: "damen",
  category: "Lingerie",
  sub: "Sets",

  image: "images/075.png",
  hoverImage: "images/076.png",

  description:
    "Ein elegantes zweiteiliges Couture-Lingerie-Set aus feiner weißer Spitze und luxuriösem Silk-Blend. Präzise architektonische Linien treffen auf dezente dunkelblaue Details und eine subtile Interpretation des MAISON ARCHITECTURE Signature Patterns.",

  details: [
    "Premium Silk-Blend",
    "Fine Geometric Lace",
    "MAISON Signature Collection",
    "Ivory White",
    "Deep Architectural Navy Details",
    "Structured Balconette-Inspired Top",
    "Matching High-Waisted Brief",
    "Tonal MAISON ARCHITECTURE Jacquard",
    "Precision Couture Finishing",
    "Made in Italy"
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ],

  featured: false
},
// Damen → Lingerie → Sets
{
  id: "d-lingerie-maison-ete-signature-lace-silk-01",
  collection: "ete-ss27",
  name: "MAISON ÉTÉ Signature Lace & Silk Set",
  price: 720,
  gender: "damen",
  category: "Lingerie",
  sub: "Sets",

  // Produktbild / Packshot
  image: "images/077.png",

  // Modelbild / Hover
  hoverImage: "images/078.png",

  description:
    "Ein elegantes zweiteiliges Couture-Lingerie-Set aus der MAISON ÉTÉ Collection. Feine elfenbeinfarbene Spitze trifft auf luxuriöse Seide und dezente babyblaue Details. Das MAISON ARCHITECTURE Signature Pattern erscheint als subtiler Jacquard und verleiht dem Set eine charakteristische Maison-Signatur.",

  details: [
    "Premium Ivory Silk",
    "Fine European Lace",
    "MAISON ÉTÉ Collection",
    "Ivory White",
    "Baby Blue Jacquard Details",
    "Structured Balconette-Inspired Top",
    "Matching High-Waisted Brief",
    "MAISON ARCHITECTURE Signature Pattern",
    "Scalloped Lace Edges",
    "Precision Couture Finishing",
    "Made in Italy"
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ],

  featured: false
},,
  {
  id: "d-lingerie-maison-noir-couture-lace-01",
  name: "MAISON NOIR Couture Lace Bodysuit",
  price: 890,
  gender: "damen",
  category: "Lingerie",
  sub: "Bodys",

  collection: "maison-noir",

  image: "images/073.png",
  hoverImage: "images/074.png",

  description:
    "Ein architektonisch interpretiertes Couture-Bodysuit aus der MAISON NOIR Collection. Feinste geometrische Spitze trifft auf präzise geschnittene, blickdichte Partien und eine subtile Ton-in-Ton-Version des MAISON ARCHITECTURE Signature Patterns. Die Konstruktion verbindet die Leichtigkeit hochwertiger Lingerie mit der Präzision eines Couture-Stücks.",

  details: [
    "Premium Couture Lace",
    "Silk-Blend Fabric",
    "MAISON NOIR Collection",
    "Deep Architectural Black",
    "Geometric Lace Construction",
    "Structured Bodice",
    "Tonal MAISON ARCHITECTURE Jacquard",
    "High-Cut Silhouette",
    "Adjustable Shoulder Straps",
    "Precision Couture Finishing",
    "Made in Italy"
  ],

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ],

  featured: false
},
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

/* ═══════════════════════════════════════════════════════════
   MAISON — Collections (Editorial)
   ───────────────────────────────────────────────────────────
   Jede Collection ist ein eigenständiger editorialer Bereich,
   der auf collections.html dargestellt wird und optional mit
   Produkten aus `products` verknüpft ist (über product.collection).

   Felder:
     id          – eindeutiger Slug, referenziert von product.collection
                   und von shop.html?collection=<id>
     name        – Kollektionsname (z. B. "MAISON ARCHITECTURE")
     season      – z. B. "SPRING / SUMMER 2027"
     tagline     – kurzer, editorialer Satz
     description – längerer Editorial-Text
     heroImage   – großes Kampagnenbild für den Hero-Bereich
     heroVideo   – (optional) Kampagnenvideo für den Hero-Bereich
     images      – Array zusätzlicher Editorial-/Kampagnenbilder
                   (bewusst NICHT identisch mit Produktbildern)
     patternImage– Pattern-Grafik für den "THE ARCHITECTURE" Tunnel
                   (optional — fällt auf images[0] zurück, wenn leer)
     colors      – Farbwelt der Kollektion (Anzeige als kleine Punkte)
     featured    – true → aktuell aktive Hauptkollektion (Standardansicht)
     available   – false → Platzhalter für kommende Kollektion

   NEUE COLLECTION HINZUFÜGEN:
     Einfach ein weiteres Objekt in dieses Array einfügen und
     bei den betroffenen Produkten `collection: "<id>"` setzen.
   ═══════════════════════════════════════════════════════════ */

const collections = [
  {
    id: "architecture-ss27",
    name: "MAISON ARCHITECTURE",
    season: "SPRING / SUMMER 2027",
    tagline: "An exploration of form, proportion and the space between the body and architecture.",
    description:
      "MAISON ARCHITECTURE übersetzt die Sprache moderner Baukunst in Couture-Konstruktion. Extrem kurze Silhouetten treffen auf präzise Cut-outs, asymmetrische Linienführung und tiefe Ausschnitte — jedes Stück ein architektonisches Statement, reduziert auf White, Baby Blue und Midnight Blue, verbunden durch das MAISON ARCHITECTURE Signature Pattern.",
    heroImage: "Collections/001.png",
    images: [
      "Collections/002.png",
      "Collections/003.png",
      "Collections/004.png",
      "Collections/005.png",
      "Collections/006.png",
      "Collections/007.png",
      "Collections/008.png"
    ],
    patternImage: "images/pattern_neu.png",
    colors: ["#dceeff", "#102a43", "#ffffff"],
    featured: true,
    available: true
  },
  {
    id: "maison-noir",
    name: "MAISON NOIR",
    season: "AUTUMN / WINTER 2027",
    tagline: "Sculptural darkness, cast in shadow and silk.",
    description:
      "MAISON NOIR nimmt die architektonische Sprache des Hauses mit in die Nacht: skulpturale Silhouetten, drapierte Konstruktionen und präzise Korsagen-Schnitte, ausschließlich in Schwarz gehalten. Wo ARCHITECTURE Klarheit und Licht sucht, sucht NOIR Kontur und Schatten — eine dunklere, dramatischere Interpretation derselben Couture-Handschrift.",
    heroImage: "Collections/noir/01.png",
    images: [
      "Collections/noir/02.png",
      "Collections/noir/03.png",
      "Collections/noir/04.png",
      "Collections/noir/05.png",
      "Collections/noir/06.png",
      "Collections/noir/07.png",
      "Collections/noir/08.png",
      "Collections/noir/09.png"
    ],
    colors: ["#000000", "#1a1a1a", "#ffffff"],
    featured: false,
    available: true
  },
  {
    id: "ss28-placeholder",
    name: "MAISON — TBA",
    season: "SPRING / SUMMER 2028",
    tagline: "Coming soon.",
    description: "Die nächste MAISON Kollektion befindet sich in der Entwicklung.",
    heroImage: "Collections/001.png",
    images: [],
    patternImage: "images/pattern.png",
    colors: ["#dceeff", "#ffffff"],
    featured: false,
    available: false
  }
];

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
  module.exports = { products, collections, collaborations };
}
