const defaultMachines = [
  {
    id: 1,
    type: "Ciągniki",
    condition: "Używana",
    name: "John Deere 6155M",
    description:
      "Komfortowy ciągnik do intensywnej pracy polowej i transportowej, gotowy do oględzin.",
    power: "155 KM",
    year: "2021",
    hours: "2 140 mth",
    location: "Mazowieckie",
    price: "349 000 PLN",
  },
  {
    id: 2,
    type: "Ciągniki",
    condition: "Używana",
    name: "Fendt 718 Vario",
    description:
      "Wydajny model premium z przekładnią bezstopniową, sprawdzony w gospodarstwach towarowych.",
    power: "180 KM",
    year: "2020",
    hours: "3 020 mth",
    location: "Wielkopolskie",
    price: "429 000 PLN",
  },
  {
    id: 3,
    type: "Ładowarki",
    condition: "Używana",
    name: "JCB 538-60 Agri",
    description:
      "Zwrotna ładowarka teleskopowa do codziennej obsługi gospodarstwa i pracy przy załadunku.",
    power: "130 KM",
    year: "2019",
    hours: "4 850 mth",
    location: "Kujawsko-pomorskie",
    price: "239 000 PLN",
  },
  {
    id: 4,
    type: "Prasy",
    condition: "Używana",
    name: "Krone Comprima V150 XC",
    description:
      "Prasa zmiennokomorowa dla gospodarstw nastawionych na wydajny zbiór słomy i sianokiszonki.",
    power: "Min. 90 KM",
    year: "2022",
    hours: "620 bel",
    location: "Lubelskie",
    price: "158 000 PLN",
  },
  {
    id: 5,
    type: "Opryskiwacze",
    condition: "Nowa",
    name: "Hardi Commander 3200",
    description:
      "Opryskiwacz polowy z belką 24 m i pełną dokumentacją, gotowy do pracy w sezonie.",
    power: "3200 l",
    year: "2024",
    hours: "0 mth",
    location: "Podlaskie",
    price: "214 000 PLN",
  },
  {
    id: 6,
    type: "Ciągniki",
    condition: "Używana",
    name: "New Holland T7.210",
    description:
      "Uniwersalny ciągnik do cięższych prac, wyposażony w amortyzowaną oś i bogatą hydraulikę.",
    power: "210 KM",
    year: "2018",
    hours: "5 430 mth",
    location: "Łódzkie",
    price: "298 000 PLN",
  },
  {
    id: 7,
    type: "Ładowarki",
    condition: "Nowa",
    name: "Weidemann 3080 T",
    description:
      "Kompaktowa maszyna do pracy w budynkach inwentarskich i przy transporcie materiałów.",
    power: "75 KM",
    year: "2024",
    hours: "0 mth",
    location: "Opolskie",
    price: "189 000 PLN",
  },
  {
    id: 8,
    type: "Prasy",
    condition: "Używana",
    name: "Claas Variant 465 RC",
    description:
      "Model do belowania kiszonki i słomy z rozbudowanym systemem cięcia i prostą obsługą.",
    power: "Min. 100 KM",
    year: "2021",
    hours: "1 180 bel",
    location: "Pomorskie",
    price: "172 000 PLN",
  },
  {
    id: 9,
    type: "Opryskiwacze",
    condition: "Używana",
    name: "Amazone UX 4200",
    description:
      "Zawieszany opryskiwacz z komputerem sterującym, sekcjami GPS i stabilną belką.",
    power: "4200 l",
    year: "2020",
    hours: "780 ha",
    location: "Dolnośląskie",
    price: "196 000 PLN",
  },
  {
    id: 10,
    type: "Ciągniki",
    condition: "Używana",
    name: "Case Puma 165 CVX",
    description:
      "Wszechstronny model klasy średniej do transportu, siewu i uprawy pożniwnej.",
    power: "165 KM",
    year: "2019",
    hours: "4 210 mth",
    location: "Małopolskie",
    price: "312 000 PLN",
  },
  {
    id: 11,
    type: "Ładowarki",
    condition: "Używana",
    name: "Manitou MLT 737-130 PS+",
    description:
      "Popularna ładowarka do gospodarstw mlecznych, z dobrą widocznością i prostą obsługą serwisową.",
    power: "129 KM",
    year: "2021",
    hours: "2 360 mth",
    location: "Warmińsko-mazurskie",
    price: "255 000 PLN",
  },
  {
    id: 12,
    type: "Prasy",
    condition: "Nowa",
    name: "McHale Fusion 3 Plus",
    description:
      "Zintegrowana prasoowijarka dla gospodarstw szukających wydajności i powtarzalnej jakości bel.",
    power: "Min. 120 KM",
    year: "2024",
    hours: "0 bel",
    location: "Śląskie",
    price: "389 000 PLN",
  },
];

const STORAGE_KEY = "agro-maszyny-katalog";
const IMAGE_MAX_WIDTH = 1400;
const IMAGE_MAX_HEIGHT = 1000;
const IMAGE_QUALITY = 0.82;

function getTypePalette(type) {
  const palettes = {
    Ciągniki: {
      primary: "#2f5b2f",
      secondary: "#8d5b2a",
      accent: "#f4e2c3",
    },
    Ładowarki: {
      primary: "#374151",
      secondary: "#b76b15",
      accent: "#f5e7cd",
    },
    Prasy: {
      primary: "#28544b",
      secondary: "#8f5b24",
      accent: "#e2f2ec",
    },
    Opryskiwacze: {
      primary: "#1f4e79",
      secondary: "#4f7d39",
      accent: "#dce8f5",
    },
  };

  return palettes[type] || palettes.Ciągniki;
}

function escapeSvgText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function createPlaceholderImage(machine) {
  const palette = getTypePalette(machine.type);
  const safeName = escapeSvgText((machine.name || "Nowa oferta").slice(0, 26));
  const safeType = escapeSvgText(machine.type || "Maszyna rolnicza");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" role="img" aria-label="${safeName}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${palette.primary}" />
          <stop offset="100%" stop-color="${palette.secondary}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="760" fill="url(#bg)" />
      <circle cx="990" cy="120" r="130" fill="rgba(255,255,255,0.14)" />
      <circle cx="1060" cy="640" r="190" fill="rgba(255,255,255,0.12)" />
      <rect x="78" y="84" width="260" height="48" rx="24" fill="rgba(255,255,255,0.14)" />
      <text x="108" y="116" font-family="Arial, sans-serif" font-size="26" fill="${palette.accent}">${safeType}</text>
      <text x="78" y="520" font-family="Arial, sans-serif" font-size="76" font-weight="700" fill="#ffffff">${safeName}</text>
      <text x="78" y="586" font-family="Arial, sans-serif" font-size="32" fill="rgba(255,255,255,0.82)">Zdjęcie oferty można dodać w formularzu poniżej</text>
      <rect x="78" y="622" width="360" height="16" rx="8" fill="rgba(255,255,255,0.18)" />
      <rect x="78" y="658" width="240" height="16" rx="8" fill="rgba(255,255,255,0.12)" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function cloneMachines(machineList) {
  return machineList.map((machine, index) => normalizeMachine(machine, index));
}

function isValidMachine(machine) {
  if (!machine || typeof machine !== "object") {
    return false;
  }

  const requiredFields = [
    "type",
    "condition",
    "name",
    "description",
    "power",
    "year",
    "hours",
    "location",
    "price",
  ];

  return requiredFields.every(
    (field) =>
      typeof machine[field] === "string" && machine[field].trim().length > 0
  );
}

function normalizeMachine(machine, index = 0) {
  const normalizedMachine = {
    ...machine,
    id: Number(machine.id) || index + 1,
  };

  if (
    typeof normalizedMachine.image !== "string" ||
    !normalizedMachine.image.trim().length
  ) {
    normalizedMachine.image = createPlaceholderImage(normalizedMachine);
  }

  return normalizedMachine;
}

function loadMachines() {
  try {
    const storedMachines = localStorage.getItem(STORAGE_KEY);

    if (!storedMachines) {
      return cloneMachines(defaultMachines);
    }

    const parsedMachines = JSON.parse(storedMachines);

    if (
      !Array.isArray(parsedMachines) ||
      !parsedMachines.length ||
      !parsedMachines.every(isValidMachine)
    ) {
      return cloneMachines(defaultMachines);
    }

    return parsedMachines.map((machine, index) => normalizeMachine(machine, index));
  } catch (error) {
    return cloneMachines(defaultMachines);
  }
}

let machines = loadMachines();
let activeFilter = "all";

const machinesGrid = document.querySelector("#machinesGrid");
const filterBar = document.querySelector("#filterBar");
const template = document.querySelector("#machineCardTemplate");
const inventoryCount = document.querySelector("#inventoryCount");
const statsInventoryCount = document.querySelector("#statsInventoryCount");
const machineInput = document.querySelector("#machineName");
const featuredInquiry = document.querySelector("#featuredInquiry");
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");
const addMachineForm = document.querySelector("#addMachineForm");
const addMachineNote = document.querySelector("#addMachineNote");
const resetMachinesButton = document.querySelector("#resetMachinesButton");
const featuredImage = document.querySelector("#featuredImage");
const newMachineImage = document.querySelector("#newMachineImage");
const imagePreview = document.querySelector("#imagePreview");
const imagePreviewNote = document.querySelector("#imagePreviewNote");
let draftImageData = "";

function saveMachines() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(machines));
    return true;
  } catch (error) {
    return false;
  }
}

function getFeaturedMachine() {
  return machines[0];
}

function formatMachineCount(count) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (count === 1) {
    return "1 maszyna";
  }

  if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    !(lastTwoDigits >= 12 && lastTwoDigits <= 14)
  ) {
    return `${count} maszyny`;
  }

  return `${count} maszyn`;
}

function updateFeaturedMachine() {
  const featuredMachine = getFeaturedMachine();

  document.querySelector("#featuredName").textContent = featuredMachine.name;
  document.querySelector("#featuredDescription").textContent =
    featuredMachine.description;
  document.querySelector("#featuredPower").textContent = featuredMachine.power;
  document.querySelector("#featuredYear").textContent = featuredMachine.year;
  document.querySelector("#featuredHours").textContent = featuredMachine.hours;
  document.querySelector("#featuredPrice").textContent = featuredMachine.price;
  featuredImage.src = featuredMachine.image;
  featuredImage.alt = `Zdjęcie maszyny ${featuredMachine.name}`;
}

function updateInventorySummary() {
  inventoryCount.textContent = formatMachineCount(machines.length);
  statsInventoryCount.textContent = String(machines.length);
}

function createMetaItem(label, value) {
  const wrapper = document.createElement("div");
  wrapper.className = "meta-item";

  const labelEl = document.createElement("span");
  labelEl.className = "meta-label";
  labelEl.textContent = label;

  const valueEl = document.createElement("span");
  valueEl.className = "meta-value";
  valueEl.textContent = value;

  wrapper.append(labelEl, valueEl);
  return wrapper;
}

function updateDraftPreview(src, note) {
  imagePreview.src = src;
  imagePreview.alt = note;
  imagePreviewNote.textContent = note;
}

function resetDraftPreview() {
  draftImageData = "";
  updateDraftPreview(
    createPlaceholderImage({
      name: "Twoje zdjęcie",
      type: "Nowa oferta",
    }),
    "Najlepiej dodać jedno wyraźne zdjęcie z boku lub z przodu."
  );
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Nie udało się odczytać pliku."));
    reader.readAsDataURL(file);
  });
}

function loadImageSource(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Nie udało się wczytać obrazu."));
    image.src = src;
  });
}

async function prepareImageForStorage(file) {
  if (!file) {
    return "";
  }

  const dataUrl = await readFileAsDataUrl(file);
  const image = await loadImageSource(dataUrl);
  const scale = Math.min(
    IMAGE_MAX_WIDTH / image.width,
    IMAGE_MAX_HEIGHT / image.height,
    1
  );

  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));

  const context = canvas.getContext("2d");

  if (!context) {
    return dataUrl;
  }

  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", IMAGE_QUALITY);
}

function selectMachine(machineName) {
  machineInput.value = machineName;
  formNote.textContent = `Wybrana maszyna: ${machineName}. Uzupełnij dane kontaktowe i przygotuj wiadomość.`;
  document.querySelector("#kontakt").scrollIntoView({ behavior: "smooth" });
}

function renderMachines() {
  machinesGrid.innerHTML = "";

  const visibleMachines =
    activeFilter === "all"
      ? machines
      : machines.filter((machine) => machine.type === activeFilter);

  visibleMachines.forEach((machine, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".machine-card");

    fragment.querySelector(".machine-image").src = machine.image;
    fragment.querySelector(".machine-image").alt = `Zdjęcie maszyny ${machine.name}`;
    fragment.querySelector(".machine-type").textContent = machine.type;
    fragment.querySelector(".machine-condition").textContent = machine.condition;
    fragment.querySelector(".machine-name").textContent = machine.name;
    fragment.querySelector(".machine-description").textContent =
      machine.description;
    fragment.querySelector(".machine-price").textContent = machine.price;

    const meta = fragment.querySelector(".machine-meta");
    meta.append(
      createMetaItem("Moc / parametr", machine.power),
      createMetaItem("Rok", machine.year),
      createMetaItem("Przebieg", machine.hours),
      createMetaItem("Lokalizacja", machine.location)
    );

    const button = fragment.querySelector(".machine-button");
    button.addEventListener("click", () => selectMachine(machine.name));

    card.style.animationDelay = `${index * 40}ms`;
    card.style.animation = "rise-in 0.5s ease both";

    machinesGrid.append(fragment);
  });
}

function setActiveFilter(filter) {
  activeFilter = filter;

  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.filter === filter);
  });

  renderMachines();
}

function getNextMachineId() {
  return (
    machines.reduce(
      (highestId, machine) => Math.max(highestId, machine.id),
      0
    ) + 1
  );
}

filterBar.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  const filter = target.dataset.filter;

  if (!filter) {
    return;
  }

  setActiveFilter(filter);
});

featuredInquiry.addEventListener("click", () => {
  selectMachine(getFeaturedMachine().name);
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#customerName").value.trim();
  const phone = document.querySelector("#customerPhone").value.trim();
  const machine = document.querySelector("#machineName").value.trim();
  const message = document.querySelector("#customerMessage").value.trim();

  const subject = encodeURIComponent(`Zapytanie o maszynę: ${machine}`);
  const body = encodeURIComponent(
    [
      `Dzień dobry,`,
      ``,
      `proszę o kontakt w sprawie maszyny: ${machine}.`,
      `Imię i nazwisko: ${name}`,
      `Telefon: ${phone}`,
      message ? `Dodatkowe informacje: ${message}` : "",
      ``,
      `Pozdrawiam,`,
      name,
    ]
      .filter(Boolean)
      .join("\n")
  );

  window.location.href = `mailto:sprzedaz@twojadomena.pl?subject=${subject}&body=${body}`;
  formNote.textContent =
    "Wiadomość została przygotowana w programie pocztowym. Jeśli chcesz, mogę też pomóc podpiąć prawdziwy formularz.";
});

newMachineImage.addEventListener("change", async () => {
  const [file] = Array.from(newMachineImage.files || []);

  if (!file) {
    resetDraftPreview();
    return;
  }

  updateDraftPreview(
    createPlaceholderImage({
      name: "Trwa przygotowanie",
      type: "Nowa oferta",
    }),
    "Przygotowuję zdjęcie do zapisania..."
  );

  try {
    draftImageData = await prepareImageForStorage(file);
    updateDraftPreview(
      draftImageData,
      `Wczytano zdjęcie: ${file.name}`
    );
  } catch (error) {
    draftImageData = "";
    updateDraftPreview(
      createPlaceholderImage({
        name: "Błąd zdjęcia",
        type: "Nowa oferta",
      }),
      "Nie udało się wczytać zdjęcia. Spróbuj wybrać inny plik."
    );
  }
});

addMachineForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newMachine = {
    id: getNextMachineId(),
    type: document.querySelector("#newMachineType").value.trim(),
    condition: document.querySelector("#newMachineCondition").value.trim(),
    name: document.querySelector("#newMachineName").value.trim(),
    description: document.querySelector("#newMachineDescription").value.trim(),
    power: document.querySelector("#newMachinePower").value.trim(),
    year: document.querySelector("#newMachineYear").value.trim(),
    hours: document.querySelector("#newMachineHours").value.trim(),
    location: document.querySelector("#newMachineLocation").value.trim(),
    price: document.querySelector("#newMachinePrice").value.trim(),
    image: "",
  };

  if (draftImageData) {
    newMachine.image = draftImageData;
  } else {
    const [file] = Array.from(newMachineImage.files || []);

    if (file) {
      try {
        newMachine.image = await prepareImageForStorage(file);
      } catch (error) {
        newMachine.image = createPlaceholderImage(newMachine);
      }
    } else {
      newMachine.image = createPlaceholderImage(newMachine);
    }
  }

  machines = [newMachine, ...machines];
  const persisted = saveMachines();

  updateFeaturedMachine();
  updateInventorySummary();
  setActiveFilter("all");
  machineInput.value = newMachine.name;
  formNote.textContent = `Wybrana maszyna: ${newMachine.name}. Uzupełnij dane kontaktowe i przygotuj wiadomość.`;
  addMachineForm.reset();
  resetDraftPreview();
  addMachineNote.textContent = persisted
    ? `Dodano ofertę: ${newMachine.name}. Maszyna jest już widoczna w katalogu razem ze zdjęciem.`
    : `Dodano ofertę: ${newMachine.name}. Oferta jest widoczna teraz, ale zdjęcie może być zbyt duże do trwałego zapisu w przeglądarce.`;
  document.querySelector("#oferta").scrollIntoView({ behavior: "smooth" });
});

resetMachinesButton.addEventListener("click", () => {
  const shouldReset = window.confirm(
    "Przywrócić przykładowe oferty i usunąć to, co zostało dodane lokalnie?"
  );

  if (!shouldReset) {
    return;
  }

  machines = cloneMachines(defaultMachines);
  const persisted = saveMachines();

  updateFeaturedMachine();
  updateInventorySummary();
  setActiveFilter("all");
  machineInput.value = getFeaturedMachine().name;
  formNote.textContent =
    "Wybierz maszynę z katalogu albo skorzystaj z wyróżnionej oferty, aby przygotować wiadomość.";
  addMachineForm.reset();
  resetDraftPreview();
  addMachineNote.textContent = persisted
    ? "Przywrócono przykładowe oferty."
    : "Przywrócono przykładowe oferty tylko do czasu odświeżenia strony.";
});

updateFeaturedMachine();
updateInventorySummary();
machineInput.value = getFeaturedMachine().name;
resetDraftPreview();
renderMachines();
