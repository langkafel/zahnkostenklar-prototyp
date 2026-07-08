window.ZKK_DEMO_DATA = {
  invoice: {
    type: "Zahnarztrechnung",
    total: "2.847,60 EUR",
    period: "Demo Juni 2026",
    positions: 8,
    labShare: "39 %",
    status: "Demo-Daten"
  },
  positions: [
    {
      date: "04.06.2026",
      area: "Diagnostik",
      code: "0010",
      description: "Untersuchung",
      factor: "2,3",
      amount: "12,94 EUR",
      hint: "nachvollziehbar",
      level: "ok"
    },
    {
      date: "04.06.2026",
      area: "Konservierend",
      code: "2060",
      description: "Kompositfuellung",
      factor: "3,5",
      amount: "122,40 EUR",
      hint: "Begruendung pruefen",
      level: "review"
    },
    {
      date: "04.06.2026",
      area: "Begleitleistung",
      code: "2197",
      description: "Adhaesive Befestigung",
      factor: "2,3",
      amount: "38,80 EUR",
      hint: "Kontext pruefen",
      level: "question"
    },
    {
      date: "05.06.2026",
      area: "Diagnostik",
      code: "5000",
      description: "Roentgenaufnahme",
      factor: "1,8",
      amount: "18,20 EUR",
      hint: "nachvollziehbar",
      level: "ok"
    },
    {
      date: "12.06.2026",
      area: "Zahnersatz",
      code: "2210",
      description: "Krone",
      factor: "3,0",
      amount: "430,00 EUR",
      hint: "erhoehter Faktor",
      level: "review"
    },
    {
      date: "12.06.2026",
      area: "Labor",
      code: "L-101",
      description: "Labor Modellherstellung",
      factor: "Menge 1",
      amount: "84,00 EUR",
      hint: "Laborposition",
      level: "question"
    },
    {
      date: "12.06.2026",
      area: "Labor",
      code: "L-430",
      description: "Labor Keramik",
      factor: "Menge 1",
      amount: "780,00 EUR",
      hint: "hoher Kostenanteil",
      level: "expert"
    },
    {
      date: "12.06.2026",
      area: "Material",
      code: "M-050",
      description: "Materialkosten",
      factor: "-",
      amount: "95,00 EUR",
      hint: "Bezeichnung klaeren",
      level: "question"
    }
  ],
  observations: [
    {
      title: "Erhoehter Faktor",
      text: "Eine Position wurde mit Faktor 3,5 dargestellt. Das kann begruendbar sein, sollte aber nachvollziehbar erlaeutert werden."
    },
    {
      title: "Allgemeine Begruendung",
      text: "Die Demo-Begruendung wirkt kurz und allgemein. Eine konkrete Erlaeuterung kann hilfreich sein."
    },
    {
      title: "Hoher Laboranteil",
      text: "Der Laboranteil ist bei Zahnersatz nicht ungewoehnlich, sollte aber mit dem Heil- und Kostenplan abgeglichen werden."
    },
    {
      title: "Unklare Materialposition",
      text: "Die Materialposition ist nicht eindeutig beschrieben. Eine kurze Aufschluesselung kann sinnvoll sein."
    }
  ],
  letter: `Sehr geehrte Damen und Herren,

vielen Dank fuer die Uebersendung der Rechnung.

Bei der Durchsicht der Rechnung sind mir einige Punkte aufgefallen, die ich gerne besser nachvollziehen moechte. Koennten Sie mir bitte zu den folgenden Punkten eine kurze Erlaeuterung geben?

1. Bei einer Position wurde ein erhoehter Faktor angesetzt. Bitte erlaeutern Sie mir, worin der besondere Zeitaufwand oder die besondere Schwierigkeit im konkreten Fall bestand.
2. Der Laboranteil ist fuer mich nicht vollstaendig nachvollziehbar. Koennten Sie mir bitte kurz aufschluesseln, welche Labor- und Materialleistungen darin enthalten sind?
3. Eine Materialposition ist sehr allgemein beschrieben. Koennten Sie mir bitte mitteilen, worauf sich diese Position konkret bezieht?

Vielen Dank fuer Ihre Unterstuetzung.

Mit freundlichen Gruessen`
  ,
  ruleCatalog: {
    gozPointValue: 0.0562421,
    goz: {
      "0010": { label: "Eingehende Untersuchung", points: 100, source: "GOZ Anlage 1" },
      "0030": { label: "Heil- und Kostenplan", points: 200, source: "GOZ Anlage 1" },
      "0060": { label: "Abformung beider Kiefer", points: 260, source: "GOZ Anlage 1" },
      "0090": { label: "Infiltrationsanaesthesie", points: 60, source: "GOZ Anlage 1" },
      "0100": { label: "Leitungsanaesthesie", points: 70, source: "GOZ Anlage 1" },
      "1040": { label: "Professionelle Zahnreinigung", points: 28, source: "GOZ Anlage 1" },
      "2030": { label: "Besondere Massnahmen beim Praeparieren oder Fuellen", points: 65, source: "GOZ Anlage 1" },
      "2060": { label: "Kompositrestauration, einflächig", points: 527, source: "GOZ Anlage 1" },
      "2197": { label: "Adhaesive Befestigung", points: 130, source: "GOZ Anlage 1" },
      "2210": { label: "Vollkrone", points: 1683, source: "GOZ Anlage 1" },
      "5000": { label: "Roentgenaufnahme", points: 50, source: "GOZ/GOAe-Kontext pruefen" }
    },
    bel: {
      "001 0": { label: "Modell", source: "BEL II Laborpreisverzeichnis Berlin ab 01.02.2026", praxisLabor: 8.07, gewerblich: 8.49 },
      "001 5": { label: "Modell UKPS", source: "BEL II Laborpreisverzeichnis Berlin ab 01.02.2026", praxisLabor: 8.07, gewerblich: 8.49 },
      "001 8": { label: "Modell bei Implantatversorgung", source: "BEL II Laborpreisverzeichnis Berlin ab 01.02.2026", praxisLabor: 7.30, gewerblich: 7.68 },
      "005 5": { label: "Fraesmodell", source: "BEL II" },
      "006 0": { label: "Zahnkranz", source: "BEL II" },
      "007 0": { label: "Zahnkranz sockeln", source: "BEL II" },
      "011 1": { label: "Modellpaar trimmen", source: "BEL II" },
      "012 0": { label: "Mittelwertartikulator", source: "BEL II" },
      "103 1": { label: "Vorbereiten Krone", source: "BEL II Laborpreisverzeichnis Berlin ab 01.02.2026", praxisLabor: 16.97, gewerblich: 17.86 },
      "105 0": { label: "Stiftaufbau", source: "BEL II Laborpreisverzeichnis Berlin ab 01.02.2026", praxisLabor: 66.83, gewerblich: 70.35 },
      "110 0": { label: "Brueckenglied", source: "BEL II Laborpreisverzeichnis Berlin ab 01.02.2026", praxisLabor: 72.71, gewerblich: 76.54 },
      "120 0": { label: "Teleskopierende Krone", source: "BEL II Laborpreisverzeichnis Berlin ab 01.02.2026", praxisLabor: 310.25, gewerblich: 326.58 },
      "933 0": { label: "Versandkosten", source: "BEL II" }
    },
    sampleOcrText: `Demo-Rechnung Zahnarztpraxis Muster
Behandlungszeitraum Juni 2026
GOZ 0010 Eingehende Untersuchung Faktor 2,3 Betrag 12,94 EUR
GOZ 2060 Kompositfuellung Faktor 3,5 Betrag 103,74 EUR Begruendung: erhoehter Zeitaufwand
GOZ 2197 Adhaesive Befestigung Faktor 2,3 Betrag 16,81 EUR
GOZ 2210 Vollkrone Faktor 3,0 Betrag 284,00 EUR
Labor BEL 001 0 Modell Betrag 8,49 EUR
Labor BEL 120 0 Teleskopierende Krone Betrag 326,58 EUR
Labor BEL 933 0 Versandkosten Betrag 12,00 EUR
Materialkosten pauschal 95,00 EUR`
  }
};
