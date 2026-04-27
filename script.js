const fruits = [
  { id: "mango", name: "Mango", icon: "Mango", category: "Tropikal Klasikler", taste: "Tatlı", use: "Tatlılar", season: "Yaz", popular: 98, storage: "Oda sıcaklığında olgunlaştır, kesildikten sonra buzdolabında sakla.", desc: "Yoğun aromalı, lifli ve güneşli bir tropikal lezzet." },
  { id: "dragon-fruit", name: "Dragon Fruit", icon: "Dragon Fruit", category: "Egzotik", taste: "Hafif", use: "Sunum", season: "Yıl boyu", popular: 91, storage: "Buzdolabında 4-5 gün taze kalır.", desc: "Canlı görüntüsü ve ferah aromasıyla tabaklara premium bir dokunuş katar." },
  { id: "papaya", name: "Papaya", icon: "Papaya", category: "Tropikal Klasikler", taste: "Tatlı", use: "Kahvaltı", season: "Yaz", popular: 86, storage: "Olgunlaşana kadar dışarıda, sonra buzdolabında.", desc: "Yumuşak dokulu, aromatik ve sindirimi destekleyen zarif bir meyve." },
  { id: "passion-fruit", name: "Passion Fruit", icon: "Passion Fruit", category: "Aromatik", taste: "Ekşi", use: "İçecek", season: "İlkbahar", popular: 93, storage: "Kırışık kabuk aromanın yoğunlaştığını gösterir.", desc: "Keskin kokulu, tatlı-ekşi dengesi yüksek bir aroma kaynağı." },
  { id: "guava", name: "Guava", icon: "Guava", category: "Aromatik", taste: "Tatlı", use: "Atıştırmalık", season: "Sonbahar", popular: 78, storage: "Olgun guava buzdolabında kısa süre saklanmalıdır.", desc: "Çiçeksi kokusu ve pembe iç dokusuyla farklı bir deneyim sunar." },
  { id: "ananas", name: "Ananas", icon: "Ananas", category: "Tropikal Klasikler", taste: "Tatlı", use: "Smoothie", season: "Yıl boyu", popular: 96, storage: "Bütün halde serin yerde, dilimlenmiş halde kapalı kapta.", desc: "Sulu, parlak ve ferahlatıcı tropikal meyve standardı." },
  { id: "avokado", name: "Avokado", icon: "Avokado", category: "Besleyici", taste: "Kremamsı", use: "Salata", season: "Kış", popular: 88, storage: "Olgunlaşınca buzdolabına alın, limonla kararmayı yavaşlatın.", desc: "Kremamsı dokusu ve sağlıklı yağ profiliyle sofraların dengeli üyesi." },
  { id: "rambutan", name: "Rambutan", icon: "Rambutan", category: "Egzotik", taste: "Tatlı", use: "Sunum", season: "Yaz", popular: 74, storage: "Nemini koruyarak buzdolabında saklayın.", desc: "Dışı gösterişli, içi sulu ve litchi benzeri zarif aromalı." },
  { id: "mangosteen", name: "Mangosteen", icon: "Mangosteen", category: "Premium", taste: "Tatlı", use: "Atıştırmalık", season: "Yaz", popular: 82, storage: "Serin ve kuru yerde kısa süre bekletilebilir.", desc: "Beyaz dilimli iç yapısı ve dengeli aromasıyla premium seçki meyvesi." },
  { id: "hindistan-cevizi", name: "Hindistan Cevizi", icon: "Hindistan Cevizi", category: "Besleyici", taste: "Hafif", use: "İçecek", season: "Yıl boyu", popular: 85, storage: "Açıldıktan sonra suyu ve eti soğukta tutulmalıdır.", desc: "Doğal suyu ve dokulu etiyle ferah ve doyurucu." },
  { id: "star-fruit", name: "Star Fruit", icon: "Star Fruit", category: "Egzotik", taste: "Ekşi", use: "Sunum", season: "Kış", popular: 70, storage: "Sarılaştığında tüketin, buzdolabında kısa süre saklayın.", desc: "Yıldız formu sayesinde tabaklarda güçlü görsel etki yaratır." },
  { id: "durian", name: "Durian", icon: "Durian", category: "Premium", taste: "Yoğun", use: "Deneyim", season: "Yaz", popular: 67, storage: "Kokusu yoğun olduğu için kapalı kapta ve soğukta saklayın.", desc: "Cesur aromasıyla gerçek tropikal keşif sevenlere özel." },
  { id: "soursop", name: "Soursop", icon: "Soursop", category: "Aromatik", taste: "Ekşi", use: "Smoothie", season: "İlkbahar", popular: 76, storage: "Yumuşadığında tüketin, kesildikten sonra soğukta saklayın.", desc: "Kremamsı, ekşi ve smoothie tariflerinde öne çıkan zengin bir meyve." }
];

const boxes = [
  ["Başlangıç", "Tropikal dünyaya nazik giriş.", "Mango, ananas, guava", "Keşif"],
  ["Premium", "Nadir ve etkileyici seçkiler.", "Mangosteen, rambutan, dragon fruit", "Özel"],
  ["Smoothie", "Blender dostu aromatik set.", "Papaya, soursop, passion fruit", "Enerjik"],
  ["Aile", "Paylaşım için dengeli kutu.", "Ananas, mango, avokado", "Bol"],
  ["Sürpriz", "Haftanın taze keşfi.", "Mevsime göre değişir", "Merak"]
];

const posts = [
  ["Tropikal Meyveler Nasıl Olgunlaştırılır?", "Mango, avokado ve papaya için doğru bekletme ritmi.", "Rehber"],
  ["Dragon Fruit ile Premium Sunum Fikirleri", "Renk, doku ve tabak düzeninde sade ama etkili öneriler.", "Sunum"],
  ["Smoothie İçin En Uyumlu Tropikal Meyveler", "Tatlılık, asidite ve kıvam dengesini kuran kombinasyonlar.", "Tarif"],
  ["Passion Fruit Neden Bu Kadar Aromatik?", "Koku yoğunluğu ve kullanım alanlarını sade bir dille anlatıyoruz.", "Bilgi"]
];

const recipes = [
  ["Mango & Passion Smoothie", "Mango, passion fruit, ananas suyu ve buz."],
  ["Papaya Kahvaltı Kasesi", "Papaya, yoğurt, granola ve guava dilimleri."],
  ["Avokado Tropikal Salata", "Avokado, star fruit, limon, yeşillik ve zeytinyağı."],
  ["Soursop Ferahlığı", "Soursop püresi, Hindistan cevizi suyu ve nane."]
];

const brandDescription = "Biçer Tropikal, toprağın cömertliğini, güneşin sıcaklığını ve eşsiz lezzetleri sofralarınıza taşıma misyonuyla yola çıkmış bir firmadır. Kuruluşumuzdan bu yana, dünyanın dört bir yanındaki en kaliteli ve en taze tropikal meyveleri titizlikle seçerek, modern ve hijyenik koşullarda işleyip sizlere ulaştırmanın gururunu yaşıyoruz.";
const localAdminPassword = "BT-local-panel-2026";
const localAdminHosts = ["", "localhost", "127.0.0.1", "::1"];

const app = document.querySelector("#main");
const navLinks = document.querySelectorAll(".nav-links a");
let state = {
  lang: localStorage.getItem("bt-lang") || "tr",
  products: JSON.parse(localStorage.getItem("bt-products") || "null") || fruits,
  messages: JSON.parse(localStorage.getItem("bt-messages") || "[]")
};

function t(tr, en) {
  return state.lang === "tr" ? tr : en;
}

function slugPath() {
  return location.hash.replace("#", "") || "/";
}

function breadcrumb(items) {
  return `<div class="breadcrumb"><a href="#/">Biçer Tropikal</a> / ${items.join(" / ")}</div>`;
}

function pageHero(title, text, crumb = title) {
  document.title = `${title} | Biçer Tropikal`;
  return `<section class="page-hero">${breadcrumb([crumb])}<p class="eyebrow">Biçer Tropikal</p><h1>${title}</h1><p>${text}</p></section>`;
}

function fruitCard(fruit) {
  return `
    <article class="fruit-card">
      <div class="fruit-art" aria-hidden="true"><span>${fruit.icon}</span></div>
      <h3>${fruit.name}</h3>
      <p>${fruit.desc}</p>
      <div class="tags">
        <span class="tag">${fruit.taste}</span>
        <span class="tag">${fruit.use}</span>
      </div>
      <p><strong>Saklama:</strong> ${fruit.storage}</p>
      <a class="small-link" href="#/product/${fruit.id}">Detay</a>
    </article>
  `;
}

function home() {
  document.title = "Biçer Tropikal | Premium Tropikal Meyve Platformu";
  return `
    <section class="hero">
      <div>
        <p class="eyebrow">Tayfun Biçer'in tropikal seçkisi</p>
        <h1>Biçer Tropikal</h1>
        <p>${brandDescription}</p>
        <div class="hero-actions">
          <a class="btn primary" href="#/catalog">Kataloğu Keşfet</a>
          <a class="btn ghost" href="#/guide">Saklama Rehberi</a>
        </div>
        <div class="stats" aria-label="Marka öne çıkanları">
          <div class="stat"><strong>13</strong><span>Meyve</span></div>
          <div class="stat"><strong>5</strong><span>Kutu</span></div>
          <div class="stat"><strong>TR/EN</strong><span>Hazır</span></div>
        </div>
      </div>
      <div class="hero-visual" aria-label="Tropikal meyve görsel alanı">
        <div class="fruit-bowl"></div>
        <div class="hero-card">
          <h2>Haftanın Seçkisi</h2>
          <p>Mango, passion fruit ve dragon fruit ile dengeli, aromatik ve renkli bir keşif.</p>
          <a class="small-link" href="#/product/mango">Mangoyu incele</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <div><p class="eyebrow">Öne çıkan ürünler</p><h2>En çok merak edilen tropikal lezzetler</h2></div>
        <a class="btn ghost" href="#/catalog">Tümünü gör</a>
      </div>
      <div class="grid four">${state.products.slice(0, 4).map(fruitCard).join("")}</div>
    </section>
    <section class="band"><div class="section founder">
      <div class="founder-portrait" aria-hidden="true">TB</div>
      <div>
        <p class="eyebrow">Kurucu mesajı</p>
        <h2>“Her meyvenin bir hikayesi, doğru zamanı ve sofraya kattığı ayrı bir değer var.”</h2>
        <p>${brandDescription}</p>
      </div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Meyve kutuları</p><h2>Satış değil, seçki fikri</h2></div></div>
      <div class="grid five grid three">${boxes.map(boxCard).join("")}</div>
    </section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Yorumlar</p><h2>Marka hissi</h2></div></div>
      <div class="grid three">
        ${["Bilgilendirici, sade ve güven veren bir platform.", "Tropikal meyveleri ilk kez bu kadar anlaşılır keşfettim.", "Premium hissi abartısız ve doğal."].map((q) => `<article class="quote-card"><div class="stars">★★★★★</div><p>${q}</p></article>`).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Sosyal medya</p><h2>Galeri alanı</h2></div><div class="socials"><a href="https://instagram.com/" target="_blank" rel="noreferrer">IG</a><a href="https://tiktok.com/" target="_blank" rel="noreferrer">TK</a><a href="https://facebook.com/" target="_blank" rel="noreferrer">FB</a></div></div>
      <div class="social-gallery"><span>Mango</span><span>Ananas</span><span>Hindistan Cevizi</span><span>Star Fruit</span><span>Passion Fruit</span></div>
    </section>
  `;
}

function boxCard(box) {
  return `<article class="box-card"><span class="tag">${box[3]}</span><h3>${box[0]}</h3><p>${box[1]}</p><p><strong>İçerik:</strong> ${box[2]}</p><a class="small-link" href="#/boxes">${t("Detay", "Details")}</a></article>`;
}

function catalog() {
  return `
    ${pageHero("Katalog", "Tat profili, kullanım amacı, mevsim ve popülerliğe göre filtrelenebilen tropikal meyve kataloğu.")}
    <section class="section">
      <div class="toolbar">
        <div class="field"><label for="catalogSearch">Canlı katalog araması</label><input id="catalogSearch" type="search" placeholder="Meyve adı veya kullanım..." /></div>
        <div class="field"><label for="tasteFilter">Tat profili</label><select id="tasteFilter"><option value="">Tümü</option><option>Tatlı</option><option>Ekşi</option><option>Hafif</option><option>Kremamsı</option><option>Yoğun</option></select></div>
        <div class="field"><label for="useFilter">Kullanım amacı</label><select id="useFilter"><option value="">Tümü</option><option>Tatlılar</option><option>Sunum</option><option>Kahvaltı</option><option>İçecek</option><option>Smoothie</option><option>Salata</option><option>Atıştırmalık</option><option>Deneyim</option></select></div>
        <div class="field"><label for="seasonFilter">Mevsim</label><select id="seasonFilter"><option value="">Tümü</option><option>Yıl boyu</option><option>Yaz</option><option>Kış</option><option>İlkbahar</option><option>Sonbahar</option></select></div>
        <div class="field"><label for="sortFilter">Popülerlik</label><select id="sortFilter"><option value="popular">Popüler</option><option value="az">A-Z</option></select></div>
      </div>
      <div class="grid four" id="catalogGrid"></div>
    </section>
  `;
}

function renderCatalog() {
  const grid = document.querySelector("#catalogGrid");
  if (!grid) return;
  const q = document.querySelector("#catalogSearch").value.toLowerCase();
  const taste = document.querySelector("#tasteFilter").value;
  const use = document.querySelector("#useFilter").value;
  const season = document.querySelector("#seasonFilter").value;
  const sort = document.querySelector("#sortFilter").value;
  let list = state.products.filter((fruit) =>
    [fruit.name, fruit.desc, fruit.use, fruit.category].join(" ").toLowerCase().includes(q) &&
    (!taste || fruit.taste === taste) &&
    (!use || fruit.use === use) &&
    (!season || fruit.season === season)
  );
  list = list.sort((a, b) => sort === "az" ? a.name.localeCompare(b.name, "tr") : b.popular - a.popular);
  grid.innerHTML = list.length ? list.map(fruitCard).join("") : emptySearch();
}

function productDetail(id) {
  const fruit = state.products.find((item) => item.id === id) || state.products[0];
  const similar = state.products.filter((item) => item.id !== fruit.id && (item.taste === fruit.taste || item.use === fruit.use)).slice(0, 3);
  return `
    ${pageHero(fruit.name, fruit.desc, `Katalog / ${fruit.name}`)}
    <section class="section detail-layout">
      <div class="detail-panel">
        <div class="fruit-art"><span>${fruit.icon}</span></div>
        <h2>${fruit.name}</h2>
        <p>${fruit.desc}</p>
        <div class="tags"><span class="tag">${fruit.category}</span><span class="tag">${fruit.taste}</span><span class="tag">${fruit.use}</span></div>
      </div>
      <div class="detail-panel">
        <h2>Ürün Detayı</h2>
        ${infoBlock("Nasıl yenir?", "Yıkanır, uygun olgunlukta kesilir ve çekirdek/kabuk yapısına göre sade, salata ya da içecek içinde tüketilir.")}
        ${infoBlock("Nasıl saklanır?", fruit.storage)}
        ${infoBlock("Olgunlaşma süreci", "Koku yoğunluğu, kabuk rengi ve hafif yumuşama olgunluğun ana işaretleridir.")}
        ${infoBlock("Tarif önerileri", `${fruit.name} smoothie, kahvaltı kasesi ve ferah tatlılarda kullanılabilir.`)}
        <h3>Besin bilgisi</h3>
        <div class="nutrition"><div><strong>Enerji</strong><br>Orta</div><div><strong>Lif</strong><br>Yüksek</div><div><strong>Aroma</strong><br>${fruit.taste}</div></div>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Benzer ürünler</p><h2>Yakın aromalar</h2></div></div>
      <div class="grid three">${similar.map(fruitCard).join("")}</div>
    </section>
    ${faqSection()}
  `;
}

function infoBlock(title, text) {
  return `<div class="info-card"><h3>${title}</h3><p>${text}</p></div>`;
}

function about() {
  return `
    ${pageHero("Hakkımızda", brandDescription)}
    <section class="section founder">
      <div class="founder-portrait">TB</div>
      <div><p class="eyebrow">Marka hikayesi</p><h2>Doğallık, güven ve kalite.</h2><p>${brandDescription}</p><p>Biçer Tropikal samimi ama premium, bilgilendirici ama sade bir marka tonu benimser.</p></div>
    </section>
  `;
}

function boxesPage() {
  return `${pageHero("Meyve Kutuları", "Başlangıçtan premium keşiflere uzanan, satış amacı taşımayan örnek tropikal seçkiler.")}<section class="section"><div class="grid three">${boxes.map(boxCard).join("")}</div></section>`;
}

function guidePage() {
  return `${pageHero("Saklama Rehberi", "Meyveleri doğru zamanda tüketmek için pratik ve sade saklama önerileri.")}<section class="section grid">${state.products.map((f) => `<article class="guide-row"><div class="fruit-art"><span>${f.icon}</span></div><div><h3>${f.name}</h3><p>${f.storage}</p></div><span class="tag">${f.season}</span></article>`).join("")}</section>`;
}

function recipesPage() {
  return `${pageHero("Tarifler", "Tropikal meyvelerle sade, uygulanabilir ve aroması dengeli tarif fikirleri.")}<section class="section"><div class="grid four">${recipes.map((r) => `<article class="blog-card"><span class="tag">Tarif</span><h3>${r[0]}</h3><p>${r[1]}</p></article>`).join("")}</div></section>`;
}

function blogPage() {
  return `${pageHero("Blog", "SEO uyumlu, bilgilendirici ve sade tropikal meyve içerikleri.")}<section class="section"><div class="grid four">${posts.map((p) => `<article class="blog-card"><span class="tag">${p[2]}</span><h3>${p[0]}</h3><p>${p[1]}</p><a class="small-link" href="#/blog">Oku</a></article>`).join("")}</div></section>`;
}

function faqSection() {
  const faqs = [
    ["Bu site satış yapıyor mu?", "Hayır. Biçer Tropikal bir tanıtım, katalog ve bilgi platformudur."],
    ["Ödeme veya üyelik var mı?", "Hayır. Ödeme, üyelik, kargo, adres veya kart bilgisi alınmaz."],
    ["Meyveler nasıl seçilmeli?", "Koku, kabuk durumu, hafif yumuşama ve kullanım amacına göre seçim yapılmalıdır."],
    ["Görseller değiştirilebilir mi?", "Evet. Tüm görsel alanları sonradan gerçek ürün fotoğraflarıyla güncellenebilir."]
  ];
  return `<section class="section"><div class="section-head"><div><p class="eyebrow">SSS</p><h2>Sık sorulan sorular</h2></div></div>${faqs.map((f) => `<div class="faq-item"><button type="button">${f[0]} <span>+</span></button><p>${f[1]}</p></div>`).join("")}</section>`;
}

function galleryPage() {
  return `${pageHero("Galeri", "Gerçek ürün görselleri sonradan eklenecek şekilde hazırlanmış premium galeri alanı.")}<section class="section"><div class="grid four">${state.products.slice(0, 8).map((f) => `<div class="gallery-tile">${f.icon}<span class="sr-only">${f.name}</span></div>`).join("")}</div></section>`;
}

function contactPage(corporate = false) {
  return `
    ${pageHero(corporate ? "Kurumsal Talep" : "İletişim", corporate ? "Otel, restoran, kafe ve kurumsal iş birlikleri için talep formu." : "Sorularınız ve iş birliği talepleriniz için bize yazın.")}
    <section class="section contact-grid">
      <div>${infoBlock("Güvenli iletişim", "Bu form adres, ödeme, kart veya üyelik bilgisi istemez.")}${infoBlock("Sosyal medya", "Instagram, TikTok ve Facebook profil linkleri footer alanından güncellenebilir.")}</div>
      <form class="form-card" id="contactForm">
        <div class="field"><label for="name">Ad Soyad</label><input id="name" name="name" required /></div>
        <div class="field"><label for="email">E-posta</label><input id="email" name="email" type="email" required /></div>
        <div class="field"><label for="phone">Telefon</label><input id="phone" name="phone" inputmode="tel" /></div>
        <div class="field"><label for="message">Mesaj</label><textarea id="message" name="message" required></textarea></div>
        <button class="btn primary" type="submit">Mesaj Gönder</button>
        <p id="formStatus" role="status"></p>
      </form>
    </section>
  `;
}

function legalPage(type) {
  const titles = { privacy: "Gizlilik Politikası", kvkk: "KVKK Aydınlatma Metni", cookies: "Çerez Politikası", terms: "Kullanım Koşulları" };
  return `${pageHero(titles[type] || "Hukuki", "Biçer Tropikal bilgi platformu için sade hukuki bilgilendirme metni.")}<section class="section"><article class="info-card"><h2>${titles[type]}</h2><p>Bu demo metin, yayına alınmadan önce marka danışmanı veya hukuk danışmanı tarafından kontrol edilmelidir. Site ödeme, üyelik, kargo, adres veya kart bilgisi toplamaz. İletişim formu yalnızca ad soyad, e-posta, telefon ve mesaj alanlarından oluşur.</p><p>Çerez tercihleri kullanıcı tarafından kabul veya ret seçenekleriyle yönetilebilir.</p></article></section>`;
}

function emptySearch() {
  return `<article class="info-card"><h2>Sonuç bulunamadı</h2><p>Aradığınız kriterlere uygun içerik yok. Filtreleri temizleyerek tekrar deneyin.</p><a class="btn primary" href="#/catalog">Kataloğa dön</a></article>`;
}

function notFound() {
  return `${pageHero("404", "Aradığınız sayfa bulunamadı.")}<section class="section"><a class="btn primary" href="#/">Ana sayfaya dön</a></section>`;
}

function adminPage() {
  if (!localAdminHosts.includes(location.hostname)) return notFound();
  const isAdmin = localStorage.getItem("bt-admin") === "ok";
  if (!isAdmin) {
    return `${pageHero("Admin Paneli", "Sadece yerel geliştirme ortamında kullanılabilen yönetim alanı.")}<section class="section"><form class="form-card" id="adminLogin"><div class="field"><label for="adminPass">Admin şifresi</label><input id="adminPass" type="password" autocomplete="current-password" /></div><button class="btn primary" type="submit">Giriş</button><p id="adminStatus"></p></form></section>`;
  }
  return `
    ${pageHero("Yönetim Paneli", "Ürün, kategori, blog, galeri ve form mesajları için admin görünümü.")}
    <section class="section admin-shell">
      <aside class="admin-menu">
        ${["Ürün yönetimi", "Kategori yönetimi", "Blog yönetimi", "Galeri yönetimi", "Form mesajları"].map((item, i) => `<button class="${i === 0 ? "active" : ""}" data-admin-tab="${i}">${item}</button>`).join("")}
        <button id="adminLogout">Çıkış</button>
      </aside>
      <div class="admin-card" id="adminContent"></div>
    </section>
  `;
}

function renderAdmin(tab = 0) {
  const content = document.querySelector("#adminContent");
  if (!content) return;
  const views = [
    `<table><thead><tr><th>Ürün</th><th>Kategori</th><th>Tat</th><th>Kullanım</th></tr></thead><tbody>${state.products.map((f) => `<tr><td>${f.name}</td><td>${f.category}</td><td>${f.taste}</td><td>${f.use}</td></tr>`).join("")}</tbody></table>`,
    `<table><thead><tr><th>Kategori</th><th>Ürün sayısı</th></tr></thead><tbody>${[...new Set(state.products.map((f) => f.category))].map((c) => `<tr><td>${c}</td><td>${state.products.filter((f) => f.category === c).length}</td></tr>`).join("")}</tbody></table>`,
    `<table><thead><tr><th>Başlık</th><th>Etiket</th></tr></thead><tbody>${posts.map((p) => `<tr><td>${p[0]}</td><td>${p[2]}</td></tr>`).join("")}</tbody></table>`,
    `<div class="grid four">${state.products.slice(0, 8).map((f) => `<div class="gallery-tile">${f.icon}</div>`).join("")}</div>`,
    `<table><thead><tr><th>Ad</th><th>E-posta</th><th>Telefon</th><th>Mesaj</th></tr></thead><tbody>${state.messages.map((m) => `<tr><td>${m.name}</td><td>${m.email}</td><td>${m.phone}</td><td>${m.message}</td></tr>`).join("") || `<tr><td colspan="4">Henüz mesaj yok.</td></tr>`}</tbody></table>`
  ];
  content.innerHTML = views[tab];
}

function route() {
  document.querySelector("#loading").classList.add("show");
  setTimeout(() => document.querySelector("#loading").classList.remove("show"), 240);
  const path = slugPath();
  const parts = path.split("/").filter(Boolean);
  const first = parts[0] || "";
  const routes = {
    "": home,
    about,
    catalog,
    boxes: boxesPage,
    guide: guidePage,
    recipes: recipesPage,
    blog: blogPage,
    faq: () => pageHero("SSS", "Biçer Tropikal hakkında sık sorulan sorular.") + faqSection(),
    gallery: galleryPage,
    contact: () => contactPage(false),
    corporate: () => contactPage(true),
    admin: adminPage
  };
  if (first === "product") app.innerHTML = productDetail(parts[1]);
  else if (first === "legal") app.innerHTML = legalPage(parts[1]);
  else app.innerHTML = (routes[first] || notFound)();
  window.scrollTo({ top: 0, behavior: "smooth" });
  navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#/${first}` || (!first && link.getAttribute("href") === "#/")));
  bindPageEvents();
}

function bindPageEvents() {
  if (document.querySelector("#catalogGrid")) {
    renderCatalog();
    ["catalogSearch", "tasteFilter", "useFilter", "seasonFilter", "sortFilter"].forEach((id) => document.querySelector(`#${id}`).addEventListener("input", renderCatalog));
  }
  document.querySelectorAll(".faq-item button").forEach((button) => button.addEventListener("click", () => button.parentElement.classList.toggle("open")));
  const form = document.querySelector("#contactForm");
  if (form) form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    state.messages.push(data);
    localStorage.setItem("bt-messages", JSON.stringify(state.messages));
    form.reset();
    document.querySelector("#formStatus").textContent = "Mesajınız kaydedildi. Teşekkürler.";
  });
  const adminLogin = document.querySelector("#adminLogin");
  if (adminLogin) adminLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    if (document.querySelector("#adminPass").value === localAdminPassword) {
      localStorage.setItem("bt-admin", "ok");
      route();
    } else document.querySelector("#adminStatus").textContent = "Şifre hatalı.";
  });
  renderAdmin();
  document.querySelectorAll("[data-admin-tab]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-admin-tab]").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    renderAdmin(Number(button.dataset.adminTab));
  }));
  document.querySelector("#adminLogout")?.addEventListener("click", () => {
    localStorage.removeItem("bt-admin");
    route();
  });
}

function bindGlobalEvents() {
  document.querySelector(".menu-toggle").addEventListener("click", (event) => {
    const open = document.querySelector("#navLinks").classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });
  document.querySelector("#themeToggle").addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = dark ? "" : "dark";
    localStorage.setItem("bt-theme", dark ? "light" : "dark");
  });
  document.querySelector("#langToggle").addEventListener("click", () => {
    state.lang = state.lang === "tr" ? "en" : "tr";
    localStorage.setItem("bt-lang", state.lang);
    document.querySelector("#langToggle").textContent = state.lang.toUpperCase();
  });
  const searchPanel = document.querySelector("#searchPanel");
  document.querySelector("#searchOpen").addEventListener("click", () => {
    searchPanel.classList.add("open");
    document.body.classList.add("search-active");
    document.querySelector("#liveSearch").focus();
    renderSearch("");
  });
  document.querySelector("#searchClose").addEventListener("click", closeSearch);
  searchPanel.addEventListener("click", (event) => {
    if (event.target === searchPanel) closeSearch();
  });
  document.querySelector("#liveSearch").addEventListener("input", (event) => renderSearch(event.target.value));
  document.querySelector("#scrollTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => document.querySelector("#scrollTop").classList.toggle("show", scrollY > 420));
  document.querySelector("#cookieAccept").addEventListener("click", () => setCookieChoice("accepted"));
  document.querySelector("#cookieReject").addEventListener("click", () => setCookieChoice("rejected"));
}

function renderSearch(query) {
  const q = query.toLowerCase();
  const results = [...state.products.map((f) => ({ title: f.name, text: f.desc, url: `#/product/${f.id}` })), ...posts.map((p) => ({ title: p[0], text: p[1], url: "#/blog" }))].filter((item) => `${item.title} ${item.text}`.toLowerCase().includes(q)).slice(0, 8);
  document.querySelector("#searchResults").innerHTML = results.length ? results.map((r) => `<a class="search-result" href="${r.url}"><strong>${r.title}</strong><p>${r.text}</p></a>`).join("") : emptySearch();
}

function closeSearch() {
  document.querySelector("#searchPanel").classList.remove("open");
  document.body.classList.remove("search-active");
}

function setCookieChoice(choice) {
  localStorage.setItem("bt-cookie", choice);
  document.querySelector("#cookieBanner").classList.remove("show");
}

if (localStorage.getItem("bt-theme") === "dark") document.documentElement.dataset.theme = "dark";
document.querySelector("#langToggle").textContent = state.lang.toUpperCase();
if (!localStorage.getItem("bt-cookie")) document.querySelector("#cookieBanner").classList.add("show");
bindGlobalEvents();
window.addEventListener("hashchange", route);
route();
