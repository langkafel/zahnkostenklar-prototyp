const data = window.ZKK_DEMO_DATA;
const screen = document.querySelector("#demo-screen");
const stepperItems = [...document.querySelectorAll(".demo-stepper span")];
let demoStep = 0;
let highestDemoStep = 0;

const chipLabels = {
  ok: "nachvollziehbar",
  review: "klaerungsbeduerftig",
  question: "Rueckfrage sinnvoll",
  expert: "fachlich pruefen lassen"
};

function setStep(step) {
  demoStep = step;
  highestDemoStep = Math.max(highestDemoStep, step);
  stepperItems.forEach((item, index) => {
    item.classList.toggle("active", index === step);
    item.classList.toggle("available", index <= highestDemoStep);
    item.setAttribute("aria-disabled", index <= highestDemoStep ? "false" : "true");
  });
  renderStep();
  document.querySelector("#demo").scrollIntoView({ behavior: "smooth", block: "start" });
}

function button(label, className, onClick, disabled = false) {
  const node = document.createElement("button");
  node.type = "button";
  node.className = `button ${className}`;
  node.textContent = label;
  node.disabled = disabled;
  node.addEventListener("click", onClick);
  return node;
}

function renderStep() {
  const renderers = [startScreen, consentScreen, detectionScreen, positionsScreen, reportScreen, letterScreen, feedbackScreen];
  screen.replaceChildren(renderers[demoStep]());
}

function startScreen() {
  const wrap = document.createElement("div");
  wrap.className = "demo-card centered";
  wrap.innerHTML = `
    <p class="eyebrow">Demo-Start</p>
    <h3>Demo: So koennte zahnkostenklar.de funktionieren</h3>
    <p>Diese Demo verwendet ausschliesslich synthetische Beispieldaten. Bitte laden Sie keine echten Dokumente hoch.</p>
    <div class="upload-simulation">
      <strong>Demo-Prototyp - bitte keine echten Dokumente hochladen.</strong>
      <span>Statt eines Uploads nutzen Sie eine vorbereitete Beispielrechnung.</span>
    </div>
  `;
  wrap.append(button("Demo-Rechnung verwenden", "primary", () => setStep(1)));
  return wrap;
}

function consentScreen() {
  const wrap = document.createElement("div");
  wrap.className = "demo-card";
  wrap.innerHTML = `
    <h3>Wichtiger Hinweis</h3>
    <p>zahnkostenklar.de soll Zahnarztrechnungen verstaendlicher machen und moegliche Auffaelligkeiten sichtbar machen. Die Analyse ersetzt keine Rechtsberatung, keine zahnaerztliche Zweitmeinung und keine verbindliche gebuehrenrechtliche Begutachtung.</p>
    <div class="checklist">
      <label><input type="checkbox"> Ich verstehe, dass diese Demo keine echten Dokumente verarbeitet.</label>
      <label><input type="checkbox"> Ich verstehe, dass die Hinweise nur der Orientierung dienen.</label>
      <label><input type="checkbox"> Ich moechte die Demo mit synthetischen Beispieldaten fortsetzen.</label>
    </div>
  `;
  const cta = button("Demo starten", "primary", () => setStep(2), true);
  wrap.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      cta.disabled = ![...wrap.querySelectorAll("input")].every((box) => box.checked);
    });
  });
  wrap.append(cta);
  return wrap;
}

function detectionScreen() {
  const wrap = document.createElement("div");
  wrap.className = "demo-grid";
  wrap.innerHTML = `
    <article class="invoice-card">
      <p class="eyebrow">Simulierte Dokumentenerkennung</p>
      <h3>Demo-Rechnung</h3>
      <dl>
        <div><dt>Dokumenttyp</dt><dd>${data.invoice.type}</dd></div>
        <div><dt>Rechnungssumme</dt><dd>${data.invoice.total}</dd></div>
        <div><dt>Behandlungszeitraum</dt><dd>${data.invoice.period}</dd></div>
        <div><dt>Positionen erkannt</dt><dd>${data.invoice.positions}</dd></div>
        <div><dt>Laboranteil erkannt</dt><dd>${data.invoice.labShare}</dd></div>
        <div><dt>Status</dt><dd>${data.invoice.status}</dd></div>
      </dl>
    </article>
    <article class="progress-card">
      <h3>Analysefortschritt</h3>
      <ol class="progress-list">
        <li>Dokument erkannt</li>
        <li>Positionen strukturiert</li>
        <li>Faktoren gelesen</li>
        <li>Betraege berechnet</li>
        <li>Hinweise vorbereitet</li>
      </ol>
    </article>
  `;
  wrap.querySelector(".progress-card").append(button("Erkannte Positionen ansehen", "primary", () => setStep(3)));
  return wrap;
}

function positionsScreen() {
  const wrap = document.createElement("div");
  wrap.className = "demo-card wide";
  wrap.innerHTML = `
    <div class="screen-title"><div><p class="eyebrow">Erkannte Positionen</p><h3>Synthetische Beispielrechnung</h3></div></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Datum</th><th>Bereich</th><th>Position</th><th>Beschreibung</th><th>Faktor / Menge</th><th>Betrag</th><th>Hinweis</th></tr></thead>
        <tbody>
          ${data.positions.map((position) => `
            <tr>
              <td>${position.date}</td>
              <td>${position.area}</td>
              <td>${position.code}</td>
              <td>${position.description}</td>
              <td>${position.factor}</td>
              <td>${position.amount}</td>
              <td><span class="chip ${position.level}">${chipLabels[position.level]}</span></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
  wrap.append(button("Ergebnisbericht anzeigen", "primary", () => setStep(4)));
  return wrap;
}

function reportScreen() {
  const wrap = document.createElement("div");
  wrap.className = "demo-card wide";
  wrap.innerHTML = `
    <p class="eyebrow">Ergebnisbericht</p>
    <div class="status-banner"><span>Gesamteindruck: Klaerungsbedarf</span></div>
    <p>Die Demo-Rechnung ist rechnerisch ueberwiegend nachvollziehbar. Einige Positionen sind erklaerungsbeduerftig, insbesondere erhoehte Faktoren, eine allgemein formulierte Begruendung und ein hoher Laboranteil. Eine sachliche Rueckfrage an die Praxis kann sinnvoll sein.</p>
    <div class="metric-grid">
      <article><span>Rechnungssumme</span><strong>${data.invoice.total}</strong></article>
      <article><span>Positionen erkannt</span><strong>${data.invoice.positions}</strong></article>
      <article><span>Hinweise</span><strong>4</strong></article>
      <article><span>Empfohlener naechster Schritt</span><strong>Rueckfrage vorbereiten</strong></article>
    </div>
    <div class="observation-grid">
      ${data.observations.map((item) => `<article><h4>${item.title}</h4><p>${item.text}</p></article>`).join("")}
    </div>
  `;
  const actions = document.createElement("div");
  actions.className = "button-row";
  actions.append(button("Sachliche Rueckfrage erstellen", "primary", () => setStep(5)));
  actions.append(button("Zurueck zu Positionen", "secondary", () => setStep(3)));
  wrap.append(actions);
  return wrap;
}

function letterScreen() {
  const wrap = document.createElement("div");
  wrap.className = "demo-card wide";
  wrap.innerHTML = `
    <p class="eyebrow">Rueckfrageentwurf</p>
    <h3>Sachliche Rueckfrage an die Zahnarztpraxis</h3>
    <textarea class="letter" spellcheck="false">${data.letter}</textarea>
    <p class="micro-note">Dieser Entwurf ist eine sachliche Rueckfragehilfe und keine Rechtsberatung. Bitte passen Sie den Text an Ihren konkreten Fall an.</p>
    <p class="copy-status" hidden>Text wurde in die Zwischenablage kopiert.</p>
  `;
  const actions = document.createElement("div");
  actions.className = "button-row";
  actions.append(button("Text kopieren", "primary", async () => {
    await navigator.clipboard.writeText(wrap.querySelector("textarea").value);
    wrap.querySelector(".copy-status").hidden = false;
  }));
  actions.append(button("Demo neu starten", "secondary", () => setStep(0)));
  actions.append(button("Interesse vormerken", "secondary", () => setStep(6)));
  wrap.append(actions);
  return wrap;
}

function feedbackScreen() {
  const wrap = document.createElement("div");
  wrap.className = "demo-card wide";
  wrap.innerHTML = `
    <p class="eyebrow">Feedback</p>
    <h3>Waere zahnkostenklar.de fuer Sie hilfreich?</h3>
    <div class="persona-grid">
      ${["Ich bin Privatpatient:in", "Ich bin beihilfeberechtigt", "Ich bin gesetzlich versichert mit Zahnzusatzversicherung", "Ich bin Selbstzahler", "Ich bin Abrechnungsexpert:in", "Ich bin IT-/Datenschutzexperte"].map((label) => `<label><input type="checkbox"> ${label}</label>`).join("")}
    </div>
    <label class="feedback-label">Was muesste zahnkostenklar.de koennen, damit Sie dem Dienst vertrauen?
      <textarea rows="5" placeholder="Ihre Gedanken fuer die Demo..."></textarea>
    </label>
    <p class="demo-confirmation" hidden>Danke! In einem echten MVP wuerde Ihr Feedback jetzt sicher uebertragen. Dieser Prototyp speichert keine Daten.</p>
  `;
  wrap.append(button("Feedback lokal anzeigen", "primary", () => {
    wrap.querySelector(".demo-confirmation").hidden = false;
  }));
  return wrap;
}

document.querySelectorAll("[data-demo-jump='report']").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setStep(4);
  });
});

stepperItems.forEach((item, index) => {
  item.setAttribute("role", "button");
  item.setAttribute("tabindex", "0");
  item.addEventListener("click", () => {
    if (index <= highestDemoStep) {
      setStep(index);
    }
  });
  item.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && index <= highestDemoStep) {
      event.preventDefault();
      setStep(index);
    }
  });
});

renderStep();
