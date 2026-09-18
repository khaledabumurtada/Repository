/* ============ i18n strings ============ */
const STRINGS = {
  ar: {
    title: "دليلي",
    tagline: "دليل عربي/إنجليزي لأفضل تطبيقات وأدوات الذكاء الاصطناعي والإنتاجية — مُصنّفة وجاهزة لتجربتها مباشرة.",
    introTitle: "دليل شامل ومحدَّث لأدوات الذكاء الاصطناعي",
    introBody: "\"دليلي\" مكتبة عربية/إنجليزية مجانية تجمع أفضل تطبيقات وأدوات الذكاء الاصطناعي والإنتاجية والتسويق في مكان واحد، مصنّفة حسب نوع الاستخدام حتى تلاقي الأداة المناسبة بسرعة بدل ما تضيع وقتك بالبحث بين عشرات الروابط المتفرقة. سواء كنت تدوّر على أداة لتوليد الفيديو والصور، مساعد ذكاء اصطناعي للكتابة والمحادثة، أداة لبناء تطبيق بدون كود، أو حلول لتحويل النص إلى صوت — بتلاقيها هون مع شرح مختصر وواضح لكل أداة ورابط مباشر لتجربتها. نحدّث القائمة بشكل مستمر بإضافة أدوات جديدة وإزالة أي رابط ما عاد شغّال، عشان الدليل يضل مصدر موثوق ومفيد لأي حد بيدوّر يواكب عالم الذكاء الاصطناعي المتسارع.",
    searchPlaceholder: "ابحث عن أداة أو تطبيق...",
    allCategories: "كل التطبيقات",
    categoriesLabel: "التصنيفات",
    resultsFor: "النتائج في",
    resultsCount: (n) => `${n} أداة`,
    openApp: "افتح التطبيق",
    copyPrompt: "نسخ البرومبت",
    copied: "تم النسخ ✓",
    emptyTitle: "ما لقينا نتائج",
    emptyDesc: "جرّب كلمة بحث ثانية أو اختر تصنيف مختلف.",
    searchResultsTitle: "نتائج البحث",
    homeTilesTitle: "التصنيفات",
    footerAbout: "من نحن",
    footerPrivacy: "سياسة الخصوصية",
    footerContact: "تواصل معنا",
    footerRights: "جميع الحقوق محفوظة",
  },
  en: {
    title: "Daleeli",
    tagline: "A bilingual directory of AI and productivity apps, organized by category and ready to try.",
    introTitle: "A comprehensive, regularly updated AI tools directory",
    introBody: "Daleeli is a free bilingual (Arabic/English) library that brings together the best AI, productivity and marketing apps in one place, organized by use case so you can find the right tool quickly instead of digging through scattered links. Whether you're looking for video or image generation, an AI writing and chat assistant, a no-code app builder, or text-to-speech tools, you'll find it here with a short, clear description and a direct link to try it. We continuously update the list by adding new tools and removing dead links, so the directory stays a reliable, useful resource for anyone keeping up with the fast-moving world of AI.",
    searchPlaceholder: "Search for a tool or app...",
    allCategories: "All Apps",
    categoriesLabel: "Categories",
    resultsFor: "Results in",
    resultsCount: (n) => `${n} apps`,
    openApp: "Open App",
    copyPrompt: "Copy Prompt",
    copied: "Copied ✓",
    emptyTitle: "No results found",
    emptyDesc: "Try a different search term or category.",
    searchResultsTitle: "Search Results",
    homeTilesTitle: "Categories",
    footerAbout: "About",
    footerPrivacy: "Privacy Policy",
    footerContact: "Contact",
    footerRights: "All rights reserved",
  }
};

let currentLang = localStorage.getItem("site_lang") || "ar";
let currentCat = "all";
let currentQuery = "";

/* ============ Language handling ============ */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("site_lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll(".lang-toggle button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  const s = STRINGS[lang];
  document.title = s.title + (lang === "ar" ? " — دليل التطبيقات" : " — App Directory");
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.placeholder = s.searchPlaceholder;
  document.querySelectorAll("[data-t]").forEach(el => {
    const key = el.dataset.t;
    if (s[key]) el.textContent = typeof s[key] === "function" ? "" : s[key];
  });
  renderCategories();
  renderApps();
  if (typeof renderMobile === "function") renderMobile();
}

/* ============ Rendering ============ */
function faviconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

function copyToClipboard(text, triggerEl, s) {
  const done = () => {
    if (!triggerEl) return;
    const original = triggerEl.textContent;
    triggerEl.textContent = s.copied;
    triggerEl.classList.add("copied");
    setTimeout(() => {
      triggerEl.textContent = original;
      triggerEl.classList.remove("copied");
    }, 1500);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, cb) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand("copy"); } catch (e) { /* ignore */ }
  document.body.removeChild(ta);
  if (cb) cb();
}

function getCategoryCount(slug) {
  if (slug === "all") return APPS.length;
  return APPS.filter(a => a.category === slug).length;
}

function renderCategories() {
  const list = document.getElementById("cat-list");
  if (!list || typeof APPS === "undefined") return;
  const s = STRINGS[currentLang];
  list.innerHTML = "";

  const allBtn = document.createElement("li");
  allBtn.innerHTML = `
    <button data-cat="all" class="${currentCat === "all" ? "active" : ""}">
      <span class="name"><span class="icon">🗂️</span>${s.allCategories}</span>
      <span class="count">${getCategoryCount("all")}</span>
    </button>`;
  list.appendChild(allBtn);

  CATEGORIES.forEach(cat => {
    const count = getCategoryCount(cat.slug);
    if (count === 0) return;
    const li = document.createElement("li");
    const name = currentLang === "ar" ? cat.name_ar : cat.name_en;
    li.innerHTML = `
      <button data-cat="${cat.slug}" class="${currentCat === cat.slug ? "active" : ""}">
        <span class="name"><span class="icon">${cat.icon}</span>${name}</span>
        <span class="count">${count}</span>
      </button>`;
    list.appendChild(li);
  });

  list.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      currentCat = btn.dataset.cat;
      renderCategories();
      renderApps();
      window.scrollTo({ top: document.getElementById("results-head").offsetTop - 90, behavior: "smooth" });
    });
  });
}

function filteredApps() {
  const q = currentQuery.trim().toLowerCase();
  return APPS.filter(a => {
    const matchesCat = currentCat === "all" || a.category === currentCat;
    if (!matchesCat) return false;
    if (!q) return true;
    const hay = [a.name_ar, a.name_en, a.desc_ar, a.desc_en, a.domain].join(" ").toLowerCase();
    return hay.includes(q);
  });
}

function renderApps() {
  const grid = document.getElementById("app-grid");
  if (typeof APPS === "undefined") return;
  const s = STRINGS[currentLang];
  const items = filteredApps();

  const headTitle = document.getElementById("results-title");
  const headCount = document.getElementById("results-count");
  if (headTitle) {
    if (currentCat === "all") {
      headTitle.textContent = s.allCategories;
    } else {
      const cat = CATEGORIES.find(c => c.slug === currentCat);
      headTitle.textContent = cat ? (currentLang === "ar" ? cat.name_ar : cat.name_en) : s.allCategories;
    }
  }
  if (headCount) headCount.textContent = s.resultsCount(items.length);

  if (!grid) return;
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>${s.emptyTitle}</h3>
        <p>${s.emptyDesc}</p>
      </div>`;
    return;
  }

  items.forEach((app, i) => {
    const name = currentLang === "ar" ? app.name_ar : app.name_en;
    const desc = currentLang === "ar" ? app.desc_ar : app.desc_en;
    const card = document.createElement("article");
    card.className = "app-card";

    if (app.type === "prompt") {
      const promptText = currentLang === "ar" ? app.prompt_ar : app.prompt_en;
      card.innerHTML = `
        <div class="app-card-top">
          <div class="app-icon app-icon--prompt">💬</div>
          <div>
            <div class="app-title">${name}</div>
          </div>
        </div>
        <p class="app-desc">${desc}</p>
        <div class="prompt-box">${promptText}</div>
        <button type="button" class="app-open app-open--copy">${s.copyPrompt}</button>
      `;
      const btn = card.querySelector(".app-open--copy");
      btn.addEventListener("click", () => copyToClipboard(promptText, btn, s));
    } else {
      card.innerHTML = `
        <div class="app-card-top">
          <div class="app-icon"><img src="${faviconUrl(app.domain)}" alt="" loading="lazy" onerror="this.style.display='none'"></div>
          <div>
            <div class="app-title">${name}</div>
            <div class="app-domain">${app.domain}</div>
          </div>
        </div>
        <p class="app-desc">${desc}</p>
        <a class="app-open" href="${app.url}" target="_blank" rel="noopener noreferrer nofollow">${s.openApp}</a>
      `;
    }
    grid.appendChild(card);

    // In-feed ad slot every 8 cards (placeholder)
    if ((i + 1) % 8 === 0 && i !== items.length - 1) {
      const ad = document.createElement("div");
      ad.className = "ad-slot ad-slot--infeed";
      ad.innerHTML = `
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="0000000000"
             data-ad-format="fluid"
             data-ad-layout-key="-6t+ed+2i-1n-4w"></ins>
      `;
      grid.appendChild(ad);
    }
  });

  // Re-run adsbygoogle push for any new ad slots (safe no-op if adsense script isn't loaded yet)
  try {
    document.querySelectorAll(".adsbygoogle:not([data-ad-status])").forEach(() => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
  } catch (e) { /* AdSense script not loaded in this environment yet */ }
}

/* ============ Mobile "iPhone-style" home screen ============ */
let mobileScreen = "home"; // "home" | "category" | "search"
let mobileCat = null;

function renderMobileHomeTiles() {
  const grid = document.getElementById("mobile-cat-tiles");
  if (!grid || typeof APPS === "undefined") return;
  const s = STRINGS[currentLang];
  grid.innerHTML = "";

  const allTile = document.createElement("button");
  allTile.className = "mobile-tile is-category";
  allTile.innerHTML = `
    <span class="mobile-tile-icon">🗂️</span>
    <span class="mobile-tile-label">${s.allCategories}</span>
    <span class="mobile-tile-count">${getCategoryCount("all")}</span>
  `;
  allTile.addEventListener("click", () => {
    mobileCat = "all";
    renderMobileAppTiles(APPS);
    setMobileScreen("category", s.allCategories);
  });
  grid.appendChild(allTile);

  CATEGORIES.forEach(cat => {
    const count = getCategoryCount(cat.slug);
    if (count === 0) return;
    const name = currentLang === "ar" ? cat.name_ar : cat.name_en;
    const tile = document.createElement("button");
    tile.className = "mobile-tile is-category";
    tile.innerHTML = `
      <span class="mobile-tile-icon">${cat.icon}</span>
      <span class="mobile-tile-label">${name}</span>
      <span class="mobile-tile-count">${count}</span>
    `;
    tile.addEventListener("click", () => openMobileCategory(cat.slug, name));
    grid.appendChild(tile);
  });
}

function renderMobileAppTiles(list) {
  const grid = document.getElementById("mobile-app-tiles");
  if (!grid) return;
  const s = STRINGS[currentLang];
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `<div class="mobile-empty">${s.emptyTitle}<br><small>${s.emptyDesc}</small></div>`;
    return;
  }

  list.forEach(app => {
    const name = currentLang === "ar" ? app.name_ar : app.name_en;
    let tile;
    if (app.type === "prompt") {
      tile = document.createElement("button");
      tile.className = "mobile-tile";
      tile.type = "button";
      tile.innerHTML = `
        <span class="mobile-tile-icon mobile-tile-icon--prompt">💬</span>
        <span class="mobile-tile-label">${name}</span>
      `;
      const promptText = currentLang === "ar" ? app.prompt_ar : app.prompt_en;
      tile.addEventListener("click", () => {
        copyToClipboard(promptText, null, s);
        showMobileToast(s.copied);
      });
    } else {
      tile = document.createElement("a");
      tile.className = "mobile-tile";
      tile.href = app.url;
      tile.target = "_blank";
      tile.rel = "noopener noreferrer nofollow";
      tile.innerHTML = `
        <span class="mobile-tile-icon"><img src="${faviconUrl(app.domain)}" alt="" loading="lazy" onerror="this.style.display='none'"></span>
        <span class="mobile-tile-label">${name}</span>
      `;
    }
    grid.appendChild(tile);
  });
}

function showMobileToast(msg) {
  let toast = document.getElementById("mobile-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "mobile-toast";
    toast.className = "mobile-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showMobileToast._t);
  showMobileToast._t = setTimeout(() => toast.classList.remove("show"), 1500);
}

function setMobileScreen(screen, title) {
  mobileScreen = screen;
  const topbar = document.getElementById("mobile-topbar");
  const titleEl = document.getElementById("mobile-screen-title");
  const catGrid = document.getElementById("mobile-cat-tiles");
  const appGrid = document.getElementById("mobile-app-tiles");

  if (screen === "home") {
    topbar.classList.remove("show");
    catGrid.classList.add("show");
    appGrid.classList.remove("show");
  } else {
    topbar.classList.add("show");
    titleEl.textContent = title || "";
    catGrid.classList.remove("show");
    appGrid.classList.add("show");
  }
}

function openMobileCategory(slug, name) {
  mobileCat = slug;
  const list = APPS.filter(a => a.category === slug);
  renderMobileAppTiles(list);
  setMobileScreen("category", name);
}

function openMobileSearch(query) {
  const s = STRINGS[currentLang];
  const list = filteredApps();
  renderMobileAppTiles(list);
  setMobileScreen("search", s.searchResultsTitle);
}

function goMobileHome() {
  mobileCat = null;
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  currentQuery = "";
  renderApps();
  setMobileScreen("home");
}

function renderMobile() {
  renderMobileHomeTiles();
  const s = STRINGS[currentLang];
  if (currentQuery.trim()) {
    openMobileSearch(currentQuery);
  } else if (mobileScreen === "category" && mobileCat === "all") {
    renderMobileAppTiles(APPS);
    setMobileScreen("category", s.allCategories);
  } else if (mobileScreen === "category" && mobileCat) {
    const cat = CATEGORIES.find(c => c.slug === mobileCat);
    openMobileCategory(mobileCat, cat ? (currentLang === "ar" ? cat.name_ar : cat.name_en) : "");
  } else {
    setMobileScreen("home");
  }
}

/* ============ Init ============ */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentQuery = e.target.value;
      renderApps();
      if (currentQuery.trim()) {
        openMobileSearch(currentQuery);
      } else if (mobileScreen !== "category") {
        setMobileScreen("home");
      }
    });
  }

  const backBtn = document.getElementById("mobile-back-btn");
  if (backBtn) backBtn.addEventListener("click", goMobileHome);

  applyLang(currentLang);
});
