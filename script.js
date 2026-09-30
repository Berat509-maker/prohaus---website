const t = value => window.PROHAUS_I18N?.t(value) || value;
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', t(open ? 'Menü schließen' : 'Menü öffnen'));
    menuButton.textContent = open ? '×' : '☰';
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', t('Menü öffnen'));
    menuButton.textContent = '☰';
  }));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const quoteForm = document.querySelector('#quote-form');
if (quoteForm) quoteForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const services = form.getAll('service').map(value => t(value));
  const files = form.getAll('photos').filter(file => file instanceof File && file.size > 0);
  const body = [
    `${t('Name')}: ${form.get('name')}`,
    `${t('Telefon')}: ${form.get('phone')}`,
    `${t('E-Mail')}: ${form.get('email')}`,
    `${t('Ort')}: ${form.get('place') || '—'}`,
    `${t('Was benötigen Sie?')}: ${services.length ? services.join(', ') : '—'}`,
    `${t('Fotos zum Anhängen')}: ${files.length ? files.map(file => file.name).join(', ') : t('keine')}`,
    '',
    `${t('Nachricht')}:`,
    form.get('message') || '—'
  ].join('\n');
  const subject = encodeURIComponent(t('Anfrage für ein kostenloses Angebot'));
  window.location.href = `mailto:prohaus.service@hotmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
});
