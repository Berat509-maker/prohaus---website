const businessWhatsappNumber = "491736249526";
const form = document.querySelector("#whatsappForm");
const privacyError = document.querySelector("#privacyError");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    if (!formData.get("privacy")) {
      if (privacyError) {
        privacyError.textContent = "Bitte stimmen Sie der Datenschutzerklärung zu, bevor Sie die Anfrage senden.";
      }
      return;
    }

    if (privacyError) {
      privacyError.textContent = "";
    }

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const dimensions = formData.get("dimensions")?.toString().trim() || "Nicht angegeben";
    const message = formData.get("message")?.toString().trim() || "Keine zusätzliche Nachricht";
    const whatsappText = [
      "Hallo, ich möchte ein Angebot für Fenster oder Türen.",
      "",
      `Name: ${name}`,
      `Telefon: ${phone}`,
      `Maße / Projekt: ${dimensions}`,
      `Nachricht: ${message}`
    ].join("\n");
    const whatsappUrl = `https://wa.me/${businessWhatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank", "noopener");
  });
}

const cookieBanner = document.querySelector("#cookieBanner");
const acceptCookies = document.querySelector("#acceptCookies");
const cookieSettings = document.querySelector("#cookieSettings");
const cookieConsentKey = "prohausCookieNoticeAccepted";

function showCookieBanner() {
  if (cookieBanner) {
    cookieBanner.hidden = false;
  }
}

if (cookieBanner && localStorage.getItem(cookieConsentKey) !== "true") {
  showCookieBanner();
}

if (acceptCookies) {
  acceptCookies.addEventListener("click", () => {
    localStorage.setItem(cookieConsentKey, "true");
    if (cookieBanner) {
      cookieBanner.hidden = true;
    }
  });
}

if (cookieSettings) {
  cookieSettings.addEventListener("click", showCookieBanner);
}
