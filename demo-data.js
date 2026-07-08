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
};
