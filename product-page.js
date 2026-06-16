const productUi = {
  vi: {
    titleSuffix: " | YEASN Vietnam | NEOSEE",
    navLabel: "Điều hướng chính",
    navProducts: "Sản phẩm",
    navAbout: "Về YEASN",
    navApplications: "Ứng dụng",
    navContact: "Liên hệ",
    backHome: "Trang chủ",
    highlights: "Điểm nổi bật",
    specs: "Thông số tóm tắt",
    applications: "Ứng dụng phù hợp",
    quote: "Liên hệ báo giá",
    call: "Gọi ngay",
    zalo: "Zalo",
    ctaTitle: "Cần cấu hình thiết bị phù hợp?",
    ctaText:
      "NEOSEE hỗ trợ tư vấn cấu hình, lắp đặt, đào tạo sử dụng và bảo hành theo chính sách phân phối chính hãng.",
    companyName: "CÔNG TY TNHH NEOSEE",
    footerMst: "<strong>MST:</strong> 3604059682",
    footerHotline:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z" /></svg><span>0862 362 682</span>',
    footerEmail:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="m22 7-10 6L2 7" /></svg><span>info@neosee.vn</span>',
    footerRole: "Đơn vị phân phối độc quyền sản phẩm YEASN tại Việt Nam",
    switchLabel: "Switch to English",
  },
  en: {
    titleSuffix: " | YEASN Vietnam | NEOSEE",
    navLabel: "Main navigation",
    navProducts: "Products",
    navAbout: "About YEASN",
    navApplications: "Applications",
    navContact: "Contact",
    backHome: "Home",
    highlights: "Highlights",
    specs: "Key Specifications",
    applications: "Recommended Applications",
    quote: "Request a Quote",
    call: "Call now",
    zalo: "Zalo",
    ctaTitle: "Need the right equipment configuration?",
    ctaText:
      "NEOSEE supports configuration consulting, installation, user training, and warranty service under the official distribution policy.",
    companyName: "NEOSEE COMPANY LIMITED",
    footerMst: "<strong>Tax code:</strong> 3604059682",
    footerHotline:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z" /></svg><span>0862 362 682</span>',
    footerEmail:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="m22 7-10 6L2 7" /></svg><span>info@neosee.vn</span>',
    footerRole: "Exclusive distributor of YEASN products in Vietnam",
    switchLabel: "Chuyển sang tiếng Việt",
  },
};

const langStorage = {
  get() {
    try {
      return localStorage.getItem("neosee-lang");
    } catch {
      return null;
    }
  },
  set(lang) {
    try {
      localStorage.setItem("neosee-lang", lang);
    } catch {
      // Page-level switching still works even if browser storage is unavailable.
    }
  },
};

const slug = document.body.dataset.product;
const product = window.YEASN_PRODUCTS[slug];
const langToggle = document.querySelector("[data-lang-toggle]");
const currentLang = document.querySelector("[data-lang-current]");
const nextLang = document.querySelector("[data-lang-next]");
let activeLang = langStorage.get() === "en" ? "en" : "vi";

function iconPhone() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z"/>
    </svg>`;
}

function quotePanel(ui) {
  return `
    <div class="quote-panel">
      <div class="quote-label">${ui.quote}</div>
      <a class="quote-link" href="tel:+84862362682">${iconPhone()}<span>${ui.call}</span></a>
      <a class="quote-link zalo" href="https://zalo.me/0862362682">
        <span class="zalo-mark">Zalo</span><span>${ui.zalo}</span>
      </a>
    </div>`;
}

function render(lang) {
  if (!product) {
    document.querySelector("main").innerHTML = "<section class='detail-section'><h1>Product not found</h1></section>";
    return;
  }

  const ui = productUi[lang];
  const data = product[lang];
  document.documentElement.lang = lang;
  document.title = data.name + ui.titleSuffix;

  document.querySelector("[data-nav-products]").textContent = ui.navProducts;
  document.querySelector("[data-nav-about]").textContent = ui.navAbout;
  document.querySelector("[data-nav-applications]").textContent = ui.navApplications;
  document.querySelector("[data-nav-contact]").textContent = ui.navContact;
  document.querySelector("[data-nav]").setAttribute("aria-label", ui.navLabel);

  document.querySelector("[data-product-category]").textContent = data.category;
  document.querySelectorAll("[data-product-name]").forEach((element) => {
    element.textContent = data.name;
  });
  document.querySelector("[data-product-intro]").textContent = data.intro;
  document.querySelector("[data-product-image]").src = product.image;
  document.querySelector("[data-product-image]").alt = data.name;
  document.querySelector("[data-back-home]").textContent = ui.backHome;
  document.querySelector("[data-quote-top]").innerHTML = quotePanel(ui);

  document.querySelector("[data-highlights-title]").textContent = ui.highlights;
  document.querySelector("[data-product-lead]").textContent = data.lead;
  document.querySelector("[data-feature-grid]").innerHTML = data.highlights
    .map(
      (item, index) => `
        <article class="feature-card">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>`
    )
    .join("");

  document.querySelector("[data-specs-title]").textContent = ui.specs;
  document.querySelector("[data-spec-list]").innerHTML = data.specs
    .map(
      ([label, value]) => `
        <div class="spec-card">
          <strong>${label}</strong>
          <span>${value}</span>
        </div>`
    )
    .join("");

  document.querySelector("[data-app-title]").textContent = ui.applications;
  document.querySelector("[data-app-list]").innerHTML = data.applications.map((item) => `<li>${item}</li>`).join("");

  document.querySelector("[data-final-title]").textContent = ui.ctaTitle;
  document.querySelector("[data-final-text]").textContent = ui.ctaText;
  document.querySelector("[data-quote-bottom]").innerHTML = quotePanel(ui);
  document.querySelector("[data-footer-company]").textContent = ui.companyName;
  document.querySelector("[data-footer-mst]").innerHTML = ui.footerMst;
  document.querySelector("[data-footer-hotline]").innerHTML = ui.footerHotline;
  document.querySelector("[data-footer-email]").innerHTML = ui.footerEmail;
  document.querySelector("[data-footer-role]").innerHTML = ui.footerRole;

  currentLang.textContent = lang === "vi" ? "VI" : "EN";
  nextLang.textContent = lang === "vi" ? "EN" : "VI";
  langToggle.setAttribute("aria-label", ui.switchLabel);
  langStorage.set(lang);
}

langToggle.addEventListener("click", () => {
  activeLang = activeLang === "vi" ? "en" : "vi";
  render(activeLang);
});

render(activeLang);
