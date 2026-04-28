const fruits = [
  {
    id: "avokado",
    name: "Avokado",
    icon: "Avokado",
    image: "assets/avokado.jpeg",
    category: "Tropikal Klasikler",
    taste: "Kremamsı",
    use: "Salata",
    season: "Yıl boyu",
    popular: 110,
    storage: "Sertse oda sıcaklığında olgunlaştırın. Olgunlaştıktan sonra buzdolabında 2-3 gün saklayın. Kesildikten sonra limon sürüp kapalı kapta 1-2 gün içinde tüketin.",
    desc: "Kremamsı dokusu, dengeli yağ profili ve çok yönlü kullanımıyla sofraların güçlü ürünü."
  },
  {
    id: "carkifelek",
    name: "Çarkıfelek",
    icon: "Çarkıfelek",
    image: "assets/carkifelek.jpeg",
    category: "Egzotik Seçki",
    taste: "Ekşi",
    use: "İçecek",
    season: "İlkbahar",
    popular: 109,
    storage: "Oda sıcaklığında 3-5 gün olgunlaşabilir. Buzdolabında 1-2 hafta saklayın. Kesildikten sonra kapalı kapta 2-3 gün içinde tüketin.",
    desc: "Keskin kokusu ve tatlı-ekşi dengesiyle içecek, tatlı ve soslarda güçlü aroma verir."
  },
  {
    id: "altin-cilek",
    name: "Altın Çilek",
    icon: "Altın Çilek",
    image: "assets/altin-cilek.jpeg",
    category: "Egzotik Seçki",
    taste: "Ekşi",
    use: "Atıştırmalık",
    season: "Sonbahar",
    popular: 108,
    storage: "Kendi zarında serin ve kuru yerde kısa süre, buzdolabında daha uzun süre korunabilir.",
    desc: "Tatlı-ekşi dengesi ve zarif görüntüsüyle doğal ürün vitrinlerinde dikkat çeker."
  },
  {
    id: "kirmizi-ejder-meyvesi",
    name: "Kırmızı Ejder Meyvesi",
    icon: "Kırmızı Ejder",
    image: "assets/kirmizi-ejder-meyvesi.jpeg",
    category: "Ejder Meyveleri",
    taste: "Tatlı",
    use: "Sunum",
    season: "Yıl boyu",
    popular: 107,
    storage: "Olgunlaşmamışsa oda sıcaklığında bekletin. Olgunlaştıktan sonra buzdolabında 3-7 gün saklayın. Kesildikten sonra kapalı kapta 1-2 gün içinde tüketin.",
    desc: "Canlı rengi, yumuşak dokusu ve ferah aromasıyla premium tabaklarda öne çıkar."
  },
  {
    id: "mango",
    name: "Mango",
    icon: "Mango",
    image: "assets/mango.jpeg",
    category: "Tropikal Klasikler",
    taste: "Tatlı",
    use: "Tatlılar",
    season: "Yaz",
    popular: 106,
    storage: "Olgunlaşmamışsa oda sıcaklığında bekletin. Olgunlaştıktan sonra buzdolabında 3-5 gün saklayın. Kesildikten sonra kapalı kapta 1-2 gün içinde tüketin.",
    desc: "Yoğun aroması, sulu dokusu ve güneşli lezzetiyle tropikal seçkinin vazgeçilmezidir."
  },
  {
    id: "yildiz-meyvesi",
    name: "Yıldız Meyvesi",
    icon: "Yıldız Meyvesi",
    image: "assets/yildiz-meyvesi.jpeg",
    category: "Egzotik Seçki",
    taste: "Hafif",
    use: "Sunum",
    season: "Kış",
    popular: 105,
    storage: "Oda sıcaklığında kısa süre bekleyebilir. Buzdolabında 5-7 gün saklayın; tüketmeden önce yıkayın.",
    desc: "Yıldız formu, ince aroması ve dekoratif duruşuyla premium sunumların imzasıdır."
  },
  {
    id: "pamelo",
    name: "Pamelo",
    icon: "Pamelo",
    image: "assets/pamelo.jpeg",
    category: "Tropikal Klasikler",
    taste: "Hafif",
    use: "Salata",
    season: "Kış",
    popular: 104,
    storage: "Bütün halde serin yerde saklanabilir; soyulduktan sonra kapalı kapta tutulmalıdır.",
    desc: "Narenciye ailesinin iri, aromatik ve ferahlatıcı premium üyelerindendir."
  },
  {
    id: "beyaz-ejder-meyvesi",
    name: "Beyaz Ejder Meyvesi",
    icon: "Beyaz Ejder",
    image: "assets/beyaz-ejder-meyvesi.jpeg",
    category: "Ejder Meyveleri",
    taste: "Hafif",
    use: "Sunum",
    season: "Yıl boyu",
    popular: 103,
    storage: "Olgunlaşmamışsa oda sıcaklığında bekletin. Olgunlaştıktan sonra buzdolabında 3-7 gün saklayın. Kesildikten sonra kapalı kapta 1-2 gün içinde tüketin.",
    desc: "Dengeli, sade ve ferah lezzetiyle tropikal meyve deneyimine zarif bir giriş sunar."
  },
  {
    id: "sari-ejder-meyvesi",
    name: "Sarı Ejder Meyvesi",
    icon: "Sarı Ejder",
    image: "assets/sari-ejder-meyvesi.jpeg",
    category: "Ejder Meyveleri",
    taste: "Tatlı",
    use: "Atıştırmalık",
    season: "Yıl boyu",
    popular: 102,
    storage: "Olgunlaşmamışsa oda sıcaklığında bekletin. Olgunlaştıktan sonra buzdolabında 3-7 gün saklayın. Kesildikten sonra kapalı kapta 1-2 gün içinde tüketin.",
    desc: "Daha yoğun tatlılığı ve özel kabuk yapısıyla seçkin tropikal ürünler arasındadır."
  },
  {
    id: "kumkat",
    name: "Kumkat",
    icon: "Kumkat",
    image: "assets/kumkat.jpeg",
    category: "Egzotik Seçki",
    taste: "Ekşi",
    use: "Sunum",
    season: "Kış",
    popular: 101,
    storage: "Buzdolabında nemini koruyacak şekilde saklanmalı, kısa sürede tüketilmelidir.",
    desc: "Kabuğuyla tüketilebilen aromatik yapısı sayesinde sunumlarda canlı bir etki oluşturur."
  },
  {
    id: "yaban-mersini",
    name: "Yaban Mersini",
    icon: "Yaban Mersini",
    image: "assets/yaban-mersini.jpeg",
    category: "Taze Meyveler",
    taste: "Tatlı",
    use: "Kahvaltı",
    season: "Yaz",
    popular: 100,
    storage: "Yıkamadan saklayın. Buzdolabında 5-10 gün taze kalabilir; tüketmeden hemen önce yıkayın.",
    desc: "Kahvaltı kaseleri, tatlılar ve ferah tabaklar için güçlü, doğal bir tamamlayıcıdır."
  }
];

const boxes = [
  ["Ekonomik Paket", "Tropikal keşfe dengeli ve pratik başlangıç.", "Kırmızı ejder meyvesi, avokado, altın çilek, yaban mersini", "Ekonomik", "assets/ekonomik-paket-box.jpeg"],
  ["Sevdiğine Gönder", "Hediye hissi güçlü, renkli ve özenli seçki.", "Yaban mersini, altın çilek, kumkat, kırmızı ejder meyvesi, mango, pamelo", "Hediye", "assets/sevdigine-gonder-box.jpeg"],
  ["Geniş Aile", "Kalabalık sofralar için zengin ve paylaşılabilir paket.", "Kırmızı ejder meyvesi, kumkat, mango, altın çilek, yaban mersini, avokado", "Aile", "assets/genis-aile-box.jpeg"],
  ["Bizim Aile", "Günlük tüketim ve aile paylaşımı için dengeli içerik.", "Kumkat, mango, altın çilek, yaban mersini, beyaz ejder meyvesi", "Aile", "assets/bizim-aile-box.jpeg"],
  ["Mega", "Yoğun ürün çeşitliliğiyle premium vitrin paketi.", "Sarı ejder meyvesi, kumkat, mango, altın çilek, yaban mersini, avokado", "Mega", "assets/mega-paket-box.jpeg"],
  ["Vitamin C", "Narenciye ağırlıklı ferah ve canlı seçki.", "Portakal, mandalina, limon, kumkat, greyfurt", "Vitamin", "assets/vitamin-c-box.jpeg"],
  ["Business", "Kurumsal sunumlar için dengeli ve prestijli paket.", "Yaban mersini, altın çilek, kırmızı ejder meyvesi, mango, avokado, kumkat", "Kurumsal", "assets/business-box.jpeg"]
];

const posts = [
  {
    slug: "ejder-meyvesi-cesitleri",
    title: "Ejder Meyvesi Çeşitleri Arasındaki Farklar",
    excerpt: "Kırmızı, beyaz ve sarı ejder meyvesini tat, doku ve kullanım açısından karşılaştırıyoruz.",
    tag: "Rehber",
    image: "assets/blog-ejder.png",
    related: ["kirmizi-ejder-meyvesi", "beyaz-ejder-meyvesi", "sari-ejder-meyvesi"],
    intro: "Ejder meyvesi, pitaya adıyla da bilinir ve kırmızı, beyaz, sarı olmak üzere üç ana çeşitte sunulur. Her çeşit, tat yoğunluğu, doku yapısı ve sofradaki kullanım amacı açısından farklı karakter taşır.",
    sections: [
      {
        title: "Kırmızı Ejder Meyvesi",
        points: [
          "İç rengi kırmızı veya canlı pembedir.",
          "Tat profili daha yoğun ve daha tatlı hissedilir.",
          "Antioksidan değeri daha yüksektir.",
          "Smoothie, tatlı ve premium sunumlarda güçlü bir görsel etki verir."
        ]
      },
      {
        title: "Beyaz Ejder Meyvesi",
        points: [
          "İç rengi beyazdır.",
          "Tat profili daha hafif ve daha nötr kalır.",
          "Günlük tüketim ve salata kullanımında dengeli bir tercih olur."
        ]
      },
      {
        title: "Sarı Ejder Meyvesi",
        points: [
          "Kabuk rengi sarıdır ve dış yüzeyi daha belirgin yapıdadır.",
          "Genelde en tatlı çeşit olarak öne çıkar.",
          "Özel ürün segmentinde olduğu için fiyatı çoğu zaman daha yüksektir."
        ]
      }
    ],
    conclusion: "Daha yoğun tatlılık ve premium deneyim arayanlar için kırmızı veya sarı ejder meyvesi öne çıkar. Daha hafif ve günlük kullanıma uygun bir seçenek isteyenler için beyaz ejder meyvesi dengeli bir seçimdir."
  },
  {
    slug: "avokado-nasil-olgunlastirilir",
    title: "Avokado Nasıl Olgunlaştırılır? (Hızlı ve Doğru Yöntemler)",
    excerpt: "Doğru bekletme, kesim ve saklama adımlarını sade şekilde anlatıyoruz.",
    tag: "Saklama",
    image: "assets/blog-avokado.png",
    related: ["avokado"],
    intro: "Avokado çoğunlukla sert halde satışa sunulur ve doğru yöntemle olgunlaştırıldığında kıvamı, aroması ve kullanım kalitesi belirgin şekilde artar. En iyi sonuç, doğal olgunlaşma sürecine saygı gösteren yöntemlerle alınır.",
    sections: [
      {
        title: "Doğal yöntem",
        points: [
          "Avokadoyu oda sıcaklığında 2 ila 4 gün bekletin.",
          "Direkt güneş görmeyen bir alanda tutun.",
          "Bu yöntem en dengeli kıvamı verir."
        ]
      },
      {
        title: "Hızlı yöntem",
        points: [
          "Avokadoyu muz veya elma ile birlikte kağıt poşete koyun.",
          "Doğal etilen gazı sayesinde 1 ila 2 günde daha hızlı olgunlaşır."
        ]
      },
      {
        title: "Olgun olduğunu nasıl anlarsınız?",
        points: [
          "Hafif bastırıldığında nazikçe yumuşar.",
          "Sap kısmı kolay çıkıyorsa çoğu zaman tüketim olgunluğuna yaklaşmıştır."
        ]
      }
    ],
    conclusion: "Avokadoyu erken buzdolabına koymak olgunlaşma sürecini yavaşlatır hatta durdurabilir. Önce ideal kıvama gelmesini bekleyip sonra kısa süreli soğuk saklama yapmak en doğru yöntemdir."
  },
  {
    slug: "carkifelek-nerelerde-kullanilir",
    title: "Çarkıfelek Meyvesi Nerelerde Kullanılır?",
    excerpt: "İçecek, tatlı ve soslarda güçlü aromayı nasıl dengeleyeceğinizi öğrenin.",
    tag: "Bilgi",
    image: "assets/blog-carkifelek.png",
    related: ["carkifelek", "mango"],
    intro: "Çarkıfelek meyvesi, ekşi-tatlı yapısı ve aromatik yoğunluğu sayesinde az miktarda kullanıldığında bile tarifin karakterini değiştirebilen güçlü bir tropikal meyvedir.",
    sections: [
      {
        title: "İçeceklerde kullanım",
        points: [
          "Smoothie karışımlarında canlı aroma verir.",
          "Kokteyllerde belirgin tropikal karakter oluşturur.",
          "Meyve suyu ve ferah içecek tariflerinde güçlü bir temel olur."
        ]
      },
      {
        title: "Tatlılarda kullanım",
        points: [
          "Cheesecake üzerinde sos olarak kullanılabilir.",
          "Dondurma ile iyi uyum sağlar.",
          "Tatlı soslarında hem renk hem koku dengesi sunar."
        ]
      },
      {
        title: "Yemeklerde kullanım",
        points: [
          "Et yanında kullanılan hafif meyve soslarında değerlendirilebilir.",
          "Salata üzerinde asidite ve aroma katkısı sağlar."
        ]
      }
    ],
    conclusion: "Çarkıfeleğin en büyük avantajı yoğun aroma taşımasıdır. Bu nedenle az kullanımla bile tarifte güçlü ve premium bir etki bırakır."
  },
  {
    slug: "tropikal-sunumda-renk-dengesi",
    title: "Tropikal Meyve Sunumunda Renk Dengesi Nasıl Olmalı?",
    excerpt: "Yıldız meyvesi, kumkat ve altın çilekle premium tabak fikri.",
    tag: "Sunum",
    image: "assets/blog-renk-dengesi.png",
    related: ["mango", "kirmizi-ejder-meyvesi", "altin-cilek"],
    intro: "Tropikal meyve sunumunda görsellik, lezzet kadar önem taşır. Renkler doğru dengelenirse ürünler daha premium görünür, seçki daha düzenli algılanır ve sunum daha iştah açıcı olur.",
    sections: [
      {
        title: "Altın kural",
        points: [
          "Aynı tabakta üç ana renk kullanmak çoğu zaman en dengeli sonucu verir.",
          "Çok fazla renk kullanmak premium hissi zayıflatabilir."
        ]
      },
      {
        title: "Örnek kombinler",
        points: [
          "Sarı mango, kırmızı ejder meyvesi ve yeşil tonlu destek ürünler birlikte güçlü görünür.",
          "Turuncu, mor ve beyaz dengesi daha modern bir sunum hissi verir."
        ]
      },
      {
        title: "Sunum ipuçları",
        points: [
          "Daha büyük parçaları alt kısma yerleştirin.",
          "Küçük ve renkli meyveleri üst katmanlarda kullanın.",
          "Ortaya dikkat çeken bir ürün koyarak göz odağı oluşturun."
        ]
      }
    ],
    conclusion: "Renk dengesi doğru kurulduğunda tropikal meyve sunumu yalnızca daha şık görünmez; aynı zamanda ürünlerin değeri ve seçkinin bütünlüğü de daha güçlü hissedilir."
  }
];

const recipes = [
  ["Mango & Çarkıfelek Smoothie", "Mango, çarkıfelek özü, buz ve ferah narenciye dokunuşu."],
  ["Ejder Meyveli Kahvaltı Kasesi", "Beyaz ejder, yaban mersini, yoğurt ve granola."],
  ["Avokado Tropikal Salata", "Avokado, pamelo, yıldız meyvesi ve zeytinyağı."],
  ["Altın Çilek Sunum Tabağı", "Altın çilek, kumkat, mango ve taze nane."]
];

const brandDescription = "Biçer Tropikal, toprağın cömertliğini, güneşin sıcaklığını ve eşsiz lezzetleri sofralarınıza taşıma misyonuyla yola çıkmış bir firmadır. Kuruluşumuzdan bu yana, dünyanın dört bir yanındaki en kaliteli ve en taze tropikal meyveleri titizlikle seçerek, modern ve hijyenik koşullarda işleyip sizlere ulaştırmanın gururunu yaşıyoruz.";
const aboutHeroDescription = "1957 yılında temelleri atılan Biçer Tropikal, doğallığı ve kaliteyi merkezine alarak tropikal meyve sektöründe köklü bir yolculuğa başlamıştır. Kurulduğu ilk günden bu yana tazelik, güven ve müşteri memnuniyetini ilke edinen firmamız; yılların verdiği tecrübe ile ürün çeşitliliğini ve hizmet kalitesini sürekli geliştirmektedir.\n\nBiçer Tropikal olarak, dünyanın en verimli topraklarında yetişen özenle seçilmiş tropikal meyveleri, en doğal haliyle sofralarınıza ulaştırıyoruz. Üretimden tüketime kadar geçen tüm süreçlerde hijyen, kalite kontrol ve sürdürülebilirlik standartlarına büyük önem veriyoruz.\n\nGelenekten aldığımız güç ile modern teknolojiyi birleştirerek; hem yerel hem de ulusal pazarda güvenilir bir marka olmayı başardık. Müşterilerimize sadece ürün değil, aynı zamanda sağlıklı ve lezzetli bir yaşam deneyimi sunmayı hedefliyoruz.\n\nBugün, 1957'den bu yana süregelen kalite anlayışımızla Biçer Tropikal, doğanın en özel lezzetlerini sizlerle buluşturmaya devam ediyor.";
const localAdminHosts = ["", "localhost", "127.0.0.1", "::1"];

const app = document.querySelector("#main");
const navLinks = document.querySelectorAll(".nav-links a");
let state = {
  lang: localStorage.getItem("bt-lang") || "tr",
  products: fruits
};

function t(tr, en) {
  return state.lang === "tr" ? tr : en;
}

function slugPath() {
  return location.hash.replace("#", "") || "/";
}

function queryValue(name) {
  const hash = location.hash.split("?")[1] || "";
  return new URLSearchParams(hash).get(name) || "";
}

function breadcrumb(items) {
  return `<div class="breadcrumb"><a href="#/">Biçer Tropikal</a> / ${items.join(" / ")}</div>`;
}

function pageHero(title, text, crumb = title, className = "") {
  document.title = `${title} | Biçer Tropikal`;
  return `<section class="page-hero ${className}">${breadcrumb([crumb])}<p class="eyebrow">Biçer Tropikal</p><h1>${title}</h1>${String(text).split("\n\n").map((paragraph) => `<p>${paragraph}</p>`).join("")}</section>`;
}

function stars() {
  return `<div class="stars" aria-label="5 yıldız">★★★★★</div>`;
}

function fruitVisual(fruit, className = "fruit-art") {
  const media = fruit.image
    ? `<img src="${fruit.image}" alt="${fruit.name}" loading="lazy" />`
    : `<span>${fruit.icon}</span>`;
  return `<div class="${className}" aria-hidden="true">${media}</div>`;
}

function fruitCard(fruit) {
  return `
    <article class="fruit-card product-card">
      <a class="quick-view" href="#/product/${fruit.id}">Hızlı İncele</a>
      ${fruitVisual(fruit)}
      <span class="tag">${fruit.category}</span>
      <h3>${fruit.name}</h3>
      ${stars()}
      <p>${fruit.desc}</p>
      <div class="product-meta"><strong>Fiyat:</strong> 0 TL <span>Stokta yok</span></div>
      <div class="tags">
        <span class="tag">${fruit.taste}</span>
        <span class="tag">${fruit.use}</span>
      </div>
      <div class="card-actions">
        <a class="btn ghost card-btn" href="#/product/${fruit.id}">Detaylı İncele</a>
        <a class="btn primary card-btn" href="#/boxes">Kutu Oluştur</a>
      </div>
    </article>
  `;
}

function categoryCard(category, text) {
  const count = state.products.filter((fruit) => fruit.category === category).length;
  return `
    <a class="category-card" href="#/catalog?category=${encodeURIComponent(category)}">
      <span>${count} ürün</span>
      <h3>${category}</h3>
      <p>${text}</p>
    </a>
  `;
}

function home() {
  document.title = "Biçer Tropikal | Tropik Lezzetin Prestij Adresi";
  const categories = [
    ["Ejder Meyveleri", "Ejder meyvesi ve renkli ejder çeşitleri."],
    ["Tropikal Klasikler", "Mango, avokado ve pamelo gibi güçlü lezzetler."],
    ["Egzotik Seçki", "Kumkat, çarkıfelek, altın çilek ve yıldız meyvesi."],
    ["Taze Meyveler", "Yaban mersini gibi günlük tüketime uygun seçkiler."]
  ];
  return `
    <section class="store-hero">
      <div class="hero-copy">
        <p class="eyebrow">Tropik lezzetin prestij adresi</p>
        <h1>Biçer Tropikal</h1>
        <p>${brandDescription}</p>
        <div class="hero-actions">
          <a class="btn primary" href="#/catalog">Ürünleri İncele</a>
          <a class="btn ghost" href="#/contact">İletişim</a>
        </div>
      </div>
      <div class="hero-showcase">
        <img src="assets/tropical-gift-basket.jpeg" alt="Tropikal meyve hediye paketi" loading="eager" />
      </div>
    </section>

    <section class="section compact-section">
      <div class="section-head">
        <div><p class="eyebrow">Öne çıkan ürünler</p><h2>Vitrinin favorileri</h2></div>
      </div>
      <div class="grid four">${state.products.slice(0, 6).map(fruitCard).join("")}</div>
    </section>

    <section class="section compact-section">
      <div class="section-head">
        <div><p class="eyebrow">En popüler kategoriler</p><h2>Kategorilere göre keşfet</h2></div>
        <a class="small-link" href="#/catalog">Tüm ürünler</a>
      </div>
      <div class="category-grid">${categories.map((item) => categoryCard(item[0], item[1])).join("")}</div>
    </section>

    <section class="market-band">
      <div>
        <p class="eyebrow">Toptan ve kurumsal bilgi</p>
        <h2>Otel, restoran, kafe ve özel sunumlar için bilgi talebi alınır.</h2>
        <p>Bu platform satış sitesi değildir; ürün kataloğu, bilgilendirme ve WhatsApp iletişim akışı için hazırlanmıştır.</p>
      </div>
      <a class="btn secondary" href="#/contact">İletişime Geç</a>
    </section>

    <section class="section compact-section">
      <div class="section-head"><div><p class="eyebrow">Tüm ürünlerimiz</p><h2>Biçer Tropikal kataloğu</h2></div></div>
      <div class="grid four">${state.products.map(fruitCard).join("")}</div>
    </section>

    <section class="section compact-section">
      <div class="section-head"><div><h2>Meyve kutuları</h2></div></div>
      <div class="grid three">${boxes.map(boxCard).join("")}</div>
    </section>

    <section class="section compact-section founder">
      <div class="founder-portrait image-portrait"><img src="assets/bicer-tropikal-logo-horizontal.png" alt="Biçer Tropikal" loading="lazy" /></div>
      <div>
        <p class="eyebrow">Hakkımızda</p>
        <h2>Toprağın cömertliği, güneşin sıcaklığı ve seçilmiş tropikal lezzetler.</h2>
        <p>${brandDescription}</p>
        <a class="small-link" href="#/about">Marka hikayesini oku</a>
      </div>
    </section>
  `;
}

function boxCard(box) {
  const image = box[4] ? `<div class="fruit-art box-photo"><img src="${box[4]}" alt="${box[0]} meyve kutusu" loading="lazy" /></div>` : "";
  return `<article class="box-card">${image}<span class="tag">${box[3]}</span><h3>${box[0]}</h3><p>${box[1]}</p><p><strong>İçerik:</strong> ${box[2]}</p><div class="product-meta"><strong>Fiyat:</strong> 0 TL <span>Stokta yok</span></div><a class="small-link" href="https://wa.me/905537230927?text=${encodeURIComponent(`Merhaba, ${box[0]} hakkında bilgi almak istiyorum. İçerik: ${box[2]}`)}" target="_blank" rel="noreferrer">WhatsApp ile Sor</a></article>`;
}

function blogCard(post) {
  return `
    <article class="blog-card rich-blog-card">
      <div class="blog-cover"><img src="${post.image}" alt="${post.title}" loading="lazy" /></div>
      <span class="tag">${post.tag}</span>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <a class="small-link" href="#/blog/${post.slug}">Oku</a>
    </article>
  `;
}

function relatedFruitCard(fruit) {
  return `
    <article class="related-fruit-card">
      <div class="related-fruit-media"><img src="${fruit.image}" alt="${fruit.name}" loading="lazy" /></div>
      <div>
        <span class="tag">${fruit.category}</span>
        <h3>${fruit.name}</h3>
        <p>${fruit.desc}</p>
        <a class="small-link" href="#/product/${fruit.id}">Ürünü İncele</a>
      </div>
    </article>
  `;
}

function catalog() {
  return `
    ${pageHero("Ürünlerimiz", "Kategori, tat profili, kullanım amacı ve mevsime göre filtrelenebilen Biçer Tropikal ürün vitrini.")}
    <section class="section">
      <div class="toolbar">
        <div class="field"><label for="catalogSearch">Canlı ürün araması</label><input id="catalogSearch" type="search" placeholder="Ejder meyvesi, mango, avokado..." /></div>
        <div class="field"><label for="categoryFilter">Kategori</label><select id="categoryFilter"><option value="">Tümü</option><option>Ejder Meyveleri</option><option>Tropikal Klasikler</option><option>Egzotik Seçki</option><option>Taze Meyveler</option></select></div>
        <div class="field"><label for="tasteFilter">Tat profili</label><select id="tasteFilter"><option value="">Tümü</option><option>Tatlı</option><option>Ekşi</option><option>Hafif</option><option>Kremamsı</option></select></div>
        <div class="field"><label for="useFilter">Kullanım amacı</label><select id="useFilter"><option value="">Tümü</option><option>Sunum</option><option>Kahvaltı</option><option>Atıştırmalık</option><option>Salata</option><option>Tatlılar</option><option>İçecek</option></select></div>
        <div class="field"><label for="sortFilter">Sıralama</label><select id="sortFilter"><option value="popular">Popüler</option><option value="az">A-Z</option></select></div>
      </div>
      <div class="grid four" id="catalogGrid"></div>
    </section>
  `;
}

function renderCatalog() {
  const grid = document.querySelector("#catalogGrid");
  if (!grid) return;
  const q = document.querySelector("#catalogSearch").value.toLowerCase();
  const category = document.querySelector("#categoryFilter").value;
  const taste = document.querySelector("#tasteFilter").value;
  const use = document.querySelector("#useFilter").value;
  const sort = document.querySelector("#sortFilter").value;
  let list = state.products.filter((fruit) =>
    [fruit.name, fruit.desc, fruit.use, fruit.category].join(" ").toLowerCase().includes(q) &&
    (!category || fruit.category === category) &&
    (!taste || fruit.taste === taste) &&
    (!use || fruit.use === use)
  );
  list = list.sort((a, b) => sort === "az" ? a.name.localeCompare(b.name, "tr") : b.popular - a.popular);
  grid.innerHTML = list.length ? list.map(fruitCard).join("") : emptySearch();
}

function productDetail(id) {
  const fruit = state.products.find((item) => item.id === id) || state.products[0];
  const similar = state.products.filter((item) => item.id !== fruit.id && (item.category === fruit.category || item.taste === fruit.taste)).slice(0, 3);
  const nutrition = nutritionProfile(fruit);
  return `
    ${pageHero(fruit.name, fruit.desc, `Ürünlerimiz / ${fruit.name}`)}
    <section class="section detail-layout">
      <div class="detail-panel">
        ${fruitVisual(fruit)}
        <span class="tag">${fruit.category}</span>
        <h2>${fruit.name}</h2>
        ${stars()}
        <p>${fruit.desc}</p>
        <div class="product-meta"><strong>Fiyat:</strong> 0 TL <span>Stokta yok</span></div>
        <div class="tags"><span class="tag">${fruit.taste}</span><span class="tag">${fruit.use}</span><span class="tag">${fruit.season}</span></div>
        <a class="btn primary" href="#/boxes">Bu ürünle kutu oluştur</a>
      </div>
      <div class="detail-panel">
        <h2>Ürün Bilgisi</h2>
        ${infoBlock("Nasıl yenir?", "Yıkanır, uygun olgunlukta hazırlanır ve ürün yapısına göre sade, sunum tabağı, salata, içecek veya tatlı içinde tüketilir.")}
        ${infoBlock("Nasıl saklanır?", fruit.storage)}
        ${infoBlock("Olgunlaşma süreci", "Koku, kabuk rengi, parlaklık ve hafif yumuşama olgunluk için takip edilebilir.")}
        ${infoBlock("Tarif önerileri", `${fruit.name} kahvaltı kaseleri, ferah içecekler ve premium sunum tabaklarında değerlendirilebilir.`)}
        <h3>Besin profili</h3>
        <div class="nutrition"><div><strong>Öne çıkan</strong><br>${nutrition.highlight}</div><div><strong>Lif / yapı</strong><br>${nutrition.fiber}</div><div><strong>Kullanım</strong><br>${nutrition.note}</div></div>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Benzer ürünler</p><h2>Aynı seçkiden öneriler</h2></div></div>
      <div class="grid three">${similar.map(fruitCard).join("")}</div>
    </section>
    ${faqSection()}
  `;
}

function nutritionProfile(fruit) {
  if (fruit.name === "Avokado") return { highlight: "Sağlıklı yağ", fiber: "Kremamsı yapı", note: "Salata ve kahvaltı" };
  if (fruit.name.includes("Yaban")) return { highlight: "Antioksidan", fiber: "Küçük taneli", note: "Kase ve tatlı" };
  if (fruit.name.includes("Ejder")) return { highlight: "Su oranı", fiber: "Ferah doku", note: "Sunum ve tabak" };
  return { highlight: "Doğal aroma", fiber: "Dengeli yapı", note: fruit.use };
}

function infoBlock(title, text) {
  return `<div class="info-card"><h3>${title}</h3><p>${text}</p></div>`;
}

function blogDetail(slug) {
  const post = posts.find((item) => item.slug === slug) || posts[0];
  const relatedFruits = post.related.map((id) => state.products.find((item) => item.id === id)).filter(Boolean);
  const message = encodeURIComponent(`Merhaba, "${post.title}" içeriği hakkında bilgi almak istiyorum.`);
  return `
    ${pageHero(post.title, post.excerpt, `Blog / ${post.title}`)}
    <section class="section detail-layout blog-detail-layout">
      <article class="detail-panel blog-article">
        <div class="blog-hero-image"><img src="${post.image}" alt="${post.title}" loading="eager" /></div>
        <span class="tag">${post.tag}</span>
        <p class="blog-intro">${post.intro}</p>
        ${post.sections.map((section) => `
          <section class="blog-section">
            <h3>${section.title}</h3>
            <ul class="blog-points">${section.points.map((point) => `<li>${point}</li>`).join("")}</ul>
          </section>
        `).join("")}
        <div class="info-card blog-summary">
          <h3>Sonuç</h3>
          <p>${post.conclusion}</p>
        </div>
      </article>
      <aside class="detail-panel blog-sidebar">
        <h2>İlgili ürünler</h2>
        <div class="grid">${relatedFruits.map(relatedFruitCard).join("")}</div>
        <article class="info-card blog-cta">
          <h3>Bilgi alın</h3>
          <p>Bu içerikte geçen ürünler ve sunumlar hakkında detaylı bilgi için bize doğrudan WhatsApp üzerinden ulaşabilirsiniz.</p>
          <a class="btn primary" href="https://wa.me/905537230927?text=${message}" target="_blank" rel="noreferrer">WhatsApp ile Sor</a>
        </article>
      </aside>
    </section>
  `;
}

function about() {
  return `
    ${pageHero("Hakkımızda", aboutHeroDescription, "Hakkımızda", "about-page-hero")}
    <section class="section founder">
      <div class="founder-portrait image-portrait"><img src="assets/bicer-tropikal-logo-horizontal.png" alt="Biçer Tropikal" loading="lazy" /></div>
      <div><p class="eyebrow">Marka hikayesi</p><h2>Doğallık, güven ve kalite.</h2><p>${brandDescription}</p><p>Biçer Tropikal samimi ama premium, bilgilendirici ama sade bir marka tonu benimser.</p></div>
    </section>
  `;
}

function boxesPage() {
  return `
    ${pageHero("Meyve Kutuları", "Tekli satış yerine meyve kutusu oluşturma mantığıyla hazırlanan Biçer Tropikal seçkileri. Fiyatlar şimdilik 0 TL ve stok durumu stokta yok olarak gösterilir.")}
    <section class="section">
      <div class="section-head"><div><h2>Meyve kutuları</h2></div></div>
      <div class="grid three">${boxes.map(boxCard).join("")}</div>
    </section>
    <section class="section box-builder-section">
      <div class="section-head"><div><p class="eyebrow">Kendi seçkini hazırla</p><h2>Meyve kutusu oluştur</h2></div></div>
      <form class="form-card box-builder" id="boxBuilderForm">
        <div class="builder-products">
          ${state.products.map((fruit) => `<label class="builder-option"><input type="checkbox" name="fruits" value="${fruit.name}" /><span>${fruit.name}</span><small>0 TL · Stokta yok</small></label>`).join("")}
        </div>
        <div class="field"><label for="boxNote">Notunuz</label><textarea id="boxNote" name="note" placeholder="Özel istek, adet veya teslimat dışı notunuzu yazabilirsiniz."></textarea></div>
        <button class="btn primary" type="submit">WhatsApp ile Kutu Talebi Gönder</button>
        <p id="boxBuilderStatus" role="status"></p>
      </form>
    </section>
  `;
}

function guidePage() {
  return `${pageHero("Saklama Rehberi", "Meyveleri doğru zamanda tüketmek için pratik ve sade saklama önerileri.")}<section class="section grid">${state.products.map((f) => `<article class="guide-row">${fruitVisual(f)}<div><h3>${f.name}</h3><p>${f.storage}</p></div><span class="tag">${f.season}</span></article>`).join("")}</section>`;
}

function recipesPage() {
  return `${pageHero("Tarifler", "Tropikal meyvelerle sade, uygulanabilir ve aroması dengeli tarif fikirleri.")}<section class="section"><div class="grid four">${recipes.map((r) => `<article class="blog-card"><span class="tag">Tarif</span><h3>${r[0]}</h3><p>${r[1]}</p></article>`).join("")}</div></section>`;
}

function blogPage() {
  return `${pageHero("Blog", "SEO uyumlu, bilgilendirici ve sade tropikal meyve içerikleri.")}<section class="section"><div class="grid four">${posts.map(blogCard).join("")}</div></section>`;
}

function faqSection() {
  const faqs = [
    ["Bu site satış yapıyor mu?", "Hayır. Biçer Tropikal bir tanıtım, katalog ve bilgi platformudur."],
    ["Ödeme, sepet veya üyelik var mı?", "Hayır. Ödeme, üyelik, sepet, kargo, adres veya kart bilgisi alınmaz."],
    ["Kutu veya kurumsal bilgi nasıl alınır?", "İletişim sayfasındaki WhatsApp yönlendirmesiyle bireysel veya kurumsal bilgi talebi başlatılabilir."],
    ["Görseller değiştirilebilir mi?", "Evet. Tüm ürün görsel alanları sonradan gerçek ürün fotoğraflarıyla güncellenebilir."]
  ];
  return `<section class="section"><div class="section-head"><div><p class="eyebrow">SSS</p><h2>Sık sorulan sorular</h2></div></div>${faqs.map((f) => `<div class="faq-item"><button type="button">${f[0]} <span>+</span></button><p>${f[1]}</p></div>`).join("")}</section>`;
}

function galleryPage() {
  return `${pageHero("Galeri", "Gerçek ürün görselleri sonradan eklenecek şekilde hazırlanmış premium galeri alanı.")}<section class="section"><div class="grid four">${state.products.slice(0, 8).map((f) => `<div class="gallery-tile">${f.image ? `<img src="${f.image}" alt="${f.name}" loading="lazy" />` : f.icon}<span class="sr-only">${f.name}</span></div>`).join("")}</div></section>`;
}

function contactPage(corporate = false) {
  return `
    ${pageHero("İletişim", "Bireysel bilgi, meyve kutusu ve kurumsal talepleriniz için WhatsApp üzerinden bize ulaşabilirsiniz.")}
    <section class="section contact-grid">
      <div>
        ${infoBlock("Güvenli iletişim", "Bu form adres, ödeme, kart veya üyelik bilgisi istemez. Bilgiler yalnızca talebinize dönüş yapmak için kullanılır.")}
        ${infoBlock("E-posta", `<a class="small-link" href="mailto:bicertropikal@gmail.com">bicertropikal@gmail.com</a>`)}
        <article class="info-card">
          <h3>WhatsApp iletişim hatları</h3>
          <div class="contact-actions">
            <a class="btn primary" href="https://wa.me/905537230927?text=Merhaba%2C%20Bi%C3%A7er%20Tropikal%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer">WhatsApp 1</a>
            <a class="btn primary" href="https://wa.me/905464414136?text=Merhaba%2C%20Bi%C3%A7er%20Tropikal%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer">WhatsApp 2</a>
          </div>
        </article>
      </div>
      <form class="form-card" id="contactForm">
        <div class="field"><label for="name">Ad Soyad</label><input id="name" name="name" required /></div>
        <div class="field"><label for="email">E-posta</label><input id="email" name="email" type="email" required /></div>
        <div class="field"><label for="phone">Telefon</label><input id="phone" name="phone" inputmode="tel" /></div>
        <div class="field"><label for="message">Mesaj</label><textarea id="message" name="message" required></textarea></div>
        <label class="consent-check">
          <input type="checkbox" name="consent" required />
          <span><a href="#/legal/kvkk">KVKK Aydınlatma Metni</a> ve <a href="#/legal/privacy">Gizlilik Politikası</a> hakkında bilgilendirildim.</span>
        </label>
        <button class="btn primary" type="submit">WhatsApp'a Yönlendir</button>
        <p id="formStatus" role="status"></p>
      </form>
    </section>
  `;
}

function legalPage(type) {
  const titles = { privacy: "Gizlilik Politikası", kvkk: "KVKK Aydınlatma Metni", cookies: "Çerez Politikası", terms: "Kullanım Koşulları" };
  const legalCopy = {
    privacy: [
      "Biçer Tropikal, ziyaretçilerin gizliliğine önem verir. Site; ödeme, üyelik, sepet, kargo, adres veya kart bilgisi toplamaz.",
      "İletişim formu gönderildiğinde bilgiler site içinde saklanmaz; kullanıcı, doldurduğu mesaj içeriğiyle WhatsApp uygulamasına yönlendirilir ve gönderimi kendi onayıyla tamamlar.",
      "E-posta adresi yalnızca kullanıcıların kendi tercihleriyle doğrudan iletişim kurabilmesi için paylaşılmıştır."
    ],
    kvkk: [
      "İletişim amacıyla paylaşılan ad soyad, e-posta, telefon ve mesaj bilgileri yalnızca talebe dönüş yapılması amacıyla kullanılabilir.",
      "Form üzerinden bilgiler otomatik olarak Biçer Tropikal sunucularında saklanmaz. WhatsApp yönlendirmesinde mesaj içeriği kullanıcı tarafından görüntülenir ve kullanıcı onayıyla gönderilir.",
      "Kullanıcılar iletişim talepleriyle ilgili bilgi almak için bicertropikal@gmail.com adresinden markaya ulaşabilir."
    ],
    cookies: [
      "Site, temel tercihleri hatırlamak için yerel tarayıcı depolama alanını kullanabilir. Örneğin tema, dil ve çerez tercihi bu kapsamda saklanabilir.",
      "Çerez onayı kabul veya ret seçenekleriyle kullanıcı tarafından yönetilir. Ödeme, reklam takibi veya üyelik çerezi kullanılmaz."
    ],
    terms: [
      "Biçer Tropikal sitesi satış sitesi değildir; tanıtım, katalog, meyve kutusu bilgisi ve WhatsApp iletişim yönlendirmesi sunar.",
      "Ürün bilgileri bilgilendirme amaçlıdır. Görseller, fiyatlandırma ve stok detayları admin paneli ve gerçek ürün içerikleri tamamlandığında güncellenebilir.",
      "Site içeriğinin izinsiz kopyalanması, marka adı ve görsellerinin yetkisiz kullanımı uygun değildir."
    ]
  };
  const paragraphs = legalCopy[type] || legalCopy.privacy;
  return `${pageHero(titles[type] || "Hukuki", "Biçer Tropikal bilgi platformu için hukuki bilgilendirme metni.")}<section class="section"><article class="info-card legal-copy"><h2>${titles[type]}</h2>${paragraphs.map((text) => `<p>${text}</p>`).join("")}</article></section>`;
}

function emptySearch() {
  return `<article class="info-card"><h2>Sonuç bulunamadı</h2><p>Aradığınız kriterlere uygun içerik yok. Filtreleri temizleyerek tekrar deneyin.</p><a class="btn primary" href="#/catalog">Ürünlere dön</a></article>`;
}

function notFound() {
  return `${pageHero("404", "Aradığınız sayfa bulunamadı.")}<section class="section"><a class="btn primary" href="#/">Ana sayfaya dön</a></section>`;
}

function adminPage() {
  return notFound();
}

function renderAdmin(tab = 0) {
  const content = document.querySelector("#adminContent");
  if (!content) return;
  const views = [
    `<table><thead><tr><th>Ürün</th><th>Kategori</th><th>Tat</th><th>Kullanım</th></tr></thead><tbody>${state.products.map((f) => `<tr><td>${f.name}</td><td>${f.category}</td><td>${f.taste}</td><td>${f.use}</td></tr>`).join("")}</tbody></table>`,
    `<table><thead><tr><th>Kategori</th><th>Ürün sayısı</th></tr></thead><tbody>${[...new Set(state.products.map((f) => f.category))].map((c) => `<tr><td>${c}</td><td>${state.products.filter((f) => f.category === c).length}</td></tr>`).join("")}</tbody></table>`,
    `<table><thead><tr><th>Başlık</th><th>Etiket</th></tr></thead><tbody>${posts.map((p) => `<tr><td>${p.title}</td><td>${p.tag}</td></tr>`).join("")}</tbody></table>`,
    `<div class="grid four">${state.products.slice(0, 8).map((f) => `<div class="gallery-tile">${f.icon}</div>`).join("")}</div>`,
    `<table><thead><tr><th>Form mesajları</th></tr></thead><tbody><tr><td>Form mesajları site içinde saklanmaz; kullanıcı WhatsApp'a yönlendirilir.</td></tr></tbody></table>`
  ];
  content.innerHTML = views[tab];
}

function route() {
  document.querySelector("#loading").classList.add("show");
  setTimeout(() => document.querySelector("#loading").classList.remove("show"), 240);
  const path = slugPath().split("?")[0];
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
  else if (first === "blog" && parts[1]) app.innerHTML = blogDetail(parts[1]);
  else if (first === "legal") app.innerHTML = legalPage(parts[1]);
  else app.innerHTML = (routes[first] || notFound)();
  window.scrollTo({ top: 0, behavior: "smooth" });
  navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#/${first}` || (!first && link.getAttribute("href") === "#/")));
  bindPageEvents();
}

function bindPageEvents() {
  const grid = document.querySelector("#catalogGrid");
  if (grid) {
    renderCatalog();
    const categoryFromUrl = queryValue("category");
    if (categoryFromUrl && document.querySelector("#categoryFilter")) {
      document.querySelector("#categoryFilter").value = categoryFromUrl;
      renderCatalog();
    }
    ["catalogSearch", "categoryFilter", "tasteFilter", "useFilter", "sortFilter"].forEach((id) => document.querySelector(`#${id}`).addEventListener("input", renderCatalog));
  }
  document.querySelectorAll(".faq-item button").forEach((button) => button.addEventListener("click", () => button.parentElement.classList.toggle("open")));
  const form = document.querySelector("#contactForm");
  if (form) form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const message = [
      "Merhaba, Biçer Tropikal hakkında bilgi almak istiyorum.",
      "",
      `Ad Soyad: ${data.name || ""}`,
      `E-posta: ${data.email || ""}`,
      `Telefon: ${data.phone || ""}`,
      `Mesaj: ${data.message || ""}`
    ].join("\n");
    const url = `https://wa.me/905537230927?text=${encodeURIComponent(message)}`;
    document.querySelector("#formStatus").textContent = "WhatsApp açılıyor. Mesajı kontrol edip gönderimi siz tamamlayabilirsiniz.";
    window.open(url, "_blank", "noopener,noreferrer");
  });
  const boxBuilder = document.querySelector("#boxBuilderForm");
  if (boxBuilder) boxBuilder.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = [...boxBuilder.querySelectorAll("input[name='fruits']:checked")].map((input) => input.value);
    const note = new FormData(boxBuilder).get("note") || "";
    if (!selected.length) {
      document.querySelector("#boxBuilderStatus").textContent = "Lütfen kutuya eklemek için en az bir meyve seçin.";
      return;
    }
    const message = [
      "Merhaba, Biçer Tropikal için meyve kutusu oluşturmak istiyorum.",
      "",
      `Seçilen meyveler: ${selected.join(", ")}`,
      "Fiyat: 0 TL",
      "Stok durumu: Stokta yok",
      `Not: ${note}`
    ].join("\n");
    document.querySelector("#boxBuilderStatus").textContent = "WhatsApp açılıyor. Kutunuzu kontrol edip mesajı gönderebilirsiniz.";
    window.open(`https://wa.me/905537230927?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
  const adminLogin = document.querySelector("#adminLogin");
  if (adminLogin) adminLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#adminStatus").textContent = "Admin paneli güvenlik nedeniyle production statik sitede kapalıdır.";
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
  setTimeout(() => document.querySelector(".intro-screen")?.classList.add("intro-done"), 3800);
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
  const results = [...state.products.map((f) => ({ title: f.name, text: f.desc, url: `#/product/${f.id}` })), ...posts.map((p) => ({ title: p.title, text: p.excerpt, url: `#/blog/${p.slug}` }))].filter((item) => `${item.title} ${item.text}`.toLowerCase().includes(q)).slice(0, 8);
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
