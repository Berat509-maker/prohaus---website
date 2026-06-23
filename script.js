const businessWhatsappNumber = "491736249526";
const form = document.querySelector("#whatsappForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const dimensions = formData.get("dimensions")?.toString().trim() || "Не е внесено";
    const message = formData.get("message")?.toString().trim() || "Нема дополнителна порака";
    const whatsappText = ["Здраво, сакам понуда за монтажа на прозорци.", "", `Име: ${name}`, `Телефон: ${phone}`, `Димензии на прозорци: ${dimensions}`, `Порака: ${message}`].join("\n");
    const whatsappUrl = `https://wa.me/${businessWhatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank", "noopener");
  });
}
