import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Clock, Globe, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content, fullMenu, LANGS, type Lang } from "@/lib/i18n";
const galleryR = { url: "./images/havana-gallery-r.jpeg", asset_id: "gallery-r" };
const galleryRe = { url: "./images/havana-gallery-re.jpeg", asset_id: "gallery-re" };
const galleryRes = { url: "./images/havana-gallery-res.jpeg", asset_id: "gallery-res" };
const galleryRest = { url: "./images/havana-gallery-rest.jpeg", asset_id: "gallery-rest" };
const galleryResta = { url: "./images/havana-gallery-resta.jpeg", asset_id: "gallery-resta" };
const galleryRestau = { url: "./images/havana-gallery-restau-crop.jpeg", asset_id: "gallery-restau" };
const galleryRestaur = { url: "./images/havana-gallery-restaur.jpeg", asset_id: "gallery-restaur" };
const galleryRestaurent = { url: "./images/havana-gallery-restaurent.jpeg", asset_id: "gallery-restaurent" };

const PHONE = "0539521556";
const PHONE_DISPLAY = "05 39 52 15 56";
const MAPS_URL = "https://share.google/wcSKL2hfh7EClSvMQ";
const STORAGE_KEY = "havana-lang";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HAVANA | Restaurant & Café" },
      {
        name: "description",
        content:
          "HAVANA Restaurant & Café : carte complète en français, anglais, arabe et espagnol. Ouvert 7h–1h tous les jours, 05 39 52 15 56.",
      },
      { property: "og:title", content: "HAVANA | Restaurant & Café" },
      {
        property: "og:description",
        content: "Carte complète en 4 langues, ouvert tous les jours de 7h à 1h. Réservez au 05 39 52 15 56.",
      },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const featureImages = [
  { image: galleryRes.url, number: "01" },
  { image: galleryRestaurent.url, number: "02" },
];

const galleryImages = [galleryR, galleryRe, galleryRes, galleryRest, galleryResta, galleryRestau, galleryRestaur, galleryRestaurent];
const galleryText: Record<Lang, { label: string; title: string; alt: string }> = {
  fr: { label: "À découvrir", title: "Nos assiettes en images.", alt: "Plat ou boisson servi chez HAVANA" },
  en: { label: "Discover", title: "A look at our plates.", alt: "Dish or drink served at HAVANA" },
  ar: { label: "اكتشف", title: "أطباقنا بالصور.", alt: "طبق أو مشروب يقدم في هافانا" },
  es: { label: "Descubre", title: "Nuestros platos en fotos.", alt: "Plato o bebida servido en HAVANA" },
};

export function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("fr");
  const close = () => setMobileOpen(false);
  const t = content[lang];
  const rtl = t.dir === "rtl";

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && saved in content) {
      setLang(saved);
      return;
    }
    const nav = navigator.language.slice(0, 2).toLowerCase();
    if (nav === "en" || nav === "ar" || nav === "es") setLang(nav);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  const pickLang = (code: Lang) => {
    setLang(code);
    close();
  };

  const LangSwitcher = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-1 ${className}`}>
      <Globe size={14} className="text-primary" aria-hidden />
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => pickLang(l.code)}
          aria-label={l.label}
          aria-current={lang === l.code ? "true" : undefined}
          className={`px-2 py-1 text-[11px] font-bold uppercase tracking-[.12em] transition-colors ${
            lang === l.code ? "text-primary underline underline-offset-4" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.short}
        </button>
      ))}
    </div>
  );

  const navItems: [string, string][] = [
    [t.nav.universe, "histoire"],
    [t.nav.flavors, "saveurs"],
    [t.nav.menu, "carte"],
    [t.nav.infos, "infos"],
  ];

  return (
    <main dir={t.dir} className="overflow-x-hidden bg-background">
      <section id="accueil" className="hero-section relative h-[82svh] max-h-[820px] min-h-[570px]">
        <img src={galleryRest.url} alt="HAVANA Restaurant & Café interior" width={960} height={1280} className="hero-photo absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 hero-shade" />
        <header className="relative z-20 mx-auto flex max-w-[1520px] items-center justify-between gap-4 px-6 py-6 md:px-12 lg:px-20 lg:py-8">
          <a href="#accueil" onClick={close} className="leading-none" aria-label={t.ariaHome}>
            <span className="block font-display text-[34px] font-semibold leading-none tracking-[.06em] md:text-[42px]">HAVANA</span>
            <span dir="ltr" className="mt-1 block font-display text-[17px] font-semibold leading-none tracking-[.06em] text-primary md:text-[21px]">LARACHE</span>
          </a>
          <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[.16em] lg:flex" aria-label={t.nav.menu}>
            {navItems.map(([label, id]) => (
              <a key={id} className="nav-link" href={`#${id}`}>{label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-6 lg:flex">
            <LangSwitcher />
            <a href={`tel:${PHONE}`} dir="ltr" className="flex items-center gap-3 border border-primary px-6 py-3 text-[11px] font-bold uppercase tracking-[.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <Phone size={14} /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <LangSwitcher />
             <Button aria-label={mobileOpen ? t.closeMenu : t.openMenu} variant="ghost" size="icon" className="text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={25} /> : <Menu size={25} />}
            </Button>
          </div>
        </header>
        {mobileOpen && (
          <nav className="mobile-nav absolute left-0 right-0 top-[80px] z-30 flex flex-col bg-background px-6 py-4 text-sm font-semibold uppercase tracking-[.15em] lg:hidden" aria-label={t.nav.menu}>
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={close} className="border-b border-border py-4">{label}</a>
            ))}
            <a href={`tel:${PHONE}`} dir="ltr" onClick={close} className="py-4 text-primary">{PHONE_DISPLAY}</a>
          </nav>
        )}
        <div className="relative z-10 mx-auto flex h-[calc(100%-110px)] max-w-[1520px] flex-col justify-center px-6 pb-16 md:px-12 lg:px-20">
          <div className="mb-7 flex items-center gap-3"><span className="section-rule" /><span className="font-label text-primary">{t.openBadge}</span></div>
           <h1 className="font-display max-w-[800px] text-6xl font-medium leading-[.9] sm:text-7xl md:text-8xl lg:text-[9rem]"><span dir="ltr" className="inline-block">HAVANA<span className="text-primary">.</span></span></h1>
           <p className="font-display mt-7"><span dir="ltr" className="inline-block text-4xl font-medium leading-none tracking-[.06em] sm:text-5xl md:text-6xl">LARACHE<span className="text-primary">.</span></span></p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#carte" className="inline-flex items-center gap-3 border border-primary bg-primary px-7 py-3.5 text-[11px] font-bold uppercase tracking-[.16em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary">{t.ctaMenu} <ArrowRight size={16} className={rtl ? "rotate-180" : ""} /></a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-border px-7 py-3.5 text-[11px] font-bold uppercase tracking-[.16em] transition-colors hover:border-primary hover:text-primary"><MapPin size={15} /> {t.ctaRoute}</a>
          </div>
        </div>
        <a href="#histoire" aria-label={t.explore} className="absolute bottom-7 right-6 z-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.18em] md:right-12 lg:right-20"><span>{t.explore}</span><ArrowDown size={16} /></a>
      </section>

      <section id="histoire" className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-24">
          <div className="relative">
             <img src={galleryResta.url} loading="lazy" width={960} height={1280} alt={t.alts.interior} className="aspect-[4/4.5] w-full object-cover md:aspect-[5/4] lg:aspect-[4/4.5]" />
            <div className="absolute -bottom-5 -right-3 bg-primary px-6 py-5 text-primary-foreground md:-right-6 md:px-8"><span className="font-display text-3xl italic">{t.story.badge}</span></div>
          </div>
          <div className="lg:pl-4">
            <div className="mb-7 flex items-center gap-4"><span className="section-rule" /><span className="font-label text-primary">{t.story.label}</span></div>
            <h2 className="font-display max-w-[680px] text-[clamp(3.4rem,6vw,7rem)] leading-[.88]">{t.story.title} <em className="font-normal text-primary">{t.story.titleEm}</em></h2>
            <p className="mt-8 max-w-[530px] text-[15px] leading-8 text-muted-foreground">{t.story.text}</p>
            <a href="#infos" className="mt-8 inline-flex items-center gap-3 border-b border-primary pb-2 text-[11px] font-bold uppercase tracking-[.16em] text-primary">{t.story.link} <ArrowRight size={16} className={rtl ? "rotate-180" : ""} /></a>
          </div>
        </div>
      </section>

      <section id="saveurs" className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-[1520px] px-6 md:px-12 lg:px-20">
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4"><span className="section-rule" /><span className="font-label text-primary">{t.flavors.label}</span></div>
              <h2 className="font-display text-[clamp(3.4rem,6vw,7rem)] leading-[.88]">{t.flavors.title} <em className="font-normal text-primary">{t.flavors.titleEm}</em></h2>
            </div>
            <p className="max-w-[330px] text-sm leading-7 text-muted-foreground">{t.flavors.intro}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-14">
            {t.flavors.items.map((item, i) => (
              <article key={i} className="group">
                <div className="image-frame relative overflow-hidden">
                   <img src={featureImages[i]?.image ?? featureImages[0]?.image} loading="lazy" width={1024} height={1280} alt={item.alt} className="image-zoom aspect-[4/4.6] w-full object-cover" />
                </div>
                <p className="font-label mt-7 text-primary">{item.category}</p>
                <h3 className="font-display mt-3 text-[clamp(2rem,2.9vw,3.25rem)] leading-none">{item.title}</h3>
                <p className="mt-4 max-w-[370px] text-sm leading-7 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="carte" className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1150px]">
          <div className="text-center">
            <div className="mx-auto mb-5 section-rule" />
            <p className="font-label text-primary">{t.menuSection.label}</p>
            <h2 className="font-display mt-5 text-[clamp(3.6rem,7vw,8rem)] leading-[.85]">{t.menuSection.title} <em className="font-normal text-primary">{t.menuSection.titleEm}</em></h2>
            <p className="mx-auto mt-6 max-w-[480px] text-sm leading-7 text-muted-foreground">{t.menuSection.intro}</p>
          </div>

          {fullMenu.map((section) => (
            <div key={section.category} className="mt-16">
              <div className="flex items-baseline justify-between gap-5 border-b border-primary pb-4">
                <h3 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-none">{section.category}</h3>
                {section.note && <span className="font-label text-muted-foreground">{section.note}</span>}
              </div>
              <div className="grid gap-x-16 md:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between gap-5 border-b border-border py-5">
                    <div>
                      <h4 className="font-display text-[25px] font-semibold leading-none md:text-[29px]">{item.name}</h4>
                      {item.detail && <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.detail}</p>}
                    </div>
                    <span className="shrink-0 font-display text-2xl font-semibold text-primary">{item.price}<small className="mx-1 font-sans text-[10px] font-bold uppercase">{t.menuSection.currency}</small></span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-xs text-muted-foreground">{t.menuSection.footnote}</p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 border border-primary px-7 py-3.5 text-[11px] font-bold uppercase tracking-[.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"><Phone size={15} /> {t.menuSection.order} · <span dir="ltr">{PHONE_DISPLAY}</span></a>
          </div>
        </div>
      </section>

      <section id="photos" className="border-t border-border px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1520px]">
          <div className="mb-10 md:mb-14">
            <div className="mb-5 flex items-center gap-4"><span className="section-rule" /><span className="font-label text-primary">{galleryText[lang].label}</span></div>
            <h2 className="font-display text-[clamp(3.4rem,6vw,7rem)] leading-[.88]">{galleryText[lang].title}</h2>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
            {galleryImages.map((photo, i) => (
              <div key={photo.asset_id} className="image-frame overflow-hidden">
                <img src={photo.url} alt={`${galleryText[lang].alt} ${i + 1}`} loading="lazy" width={960} height={1280} className="image-zoom aspect-[3/4] w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="infos" className="bg-muted">
        <div className="grid lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-1 p-1 lg:min-h-[650px]">
             <img src={galleryRest.url} loading="lazy" width={960} height={1280} alt={t.alts.exterior} className="col-span-2 h-[290px] w-full object-cover md:h-[380px] lg:h-[390px]" />
             <img src={galleryRe.url} loading="lazy" width={960} height={1280} alt={t.alts.corner} className="h-48 w-full object-cover md:h-64 lg:h-[260px]" />
             <img src={galleryR.url} loading="lazy" width={960} height={1280} alt={t.alts.counter} className="h-48 w-full object-cover md:h-64 lg:h-[260px]" />
          </div>
          <div className="flex items-center px-6 py-20 md:px-12 lg:px-16">
            <div className="w-full max-w-[560px]">
              <div className="mb-7 flex items-center gap-4"><span className="section-rule" /><span className="font-label text-primary">{t.infos.label}</span></div>
              <h2 className="font-display text-[clamp(3rem,6vw,6rem)] leading-[.88]">{t.infos.title} <em className="font-normal text-primary">{t.infos.titleEm}</em></h2>

              <div className="mt-10 border-t border-border pt-7">
                <p className="font-label mb-4 flex items-center gap-2 text-primary"><Clock size={14} /> {t.infos.hoursLabel}</p>
                <ul className="text-sm">
                  {t.infos.days.map((day) => (
                    <li key={day} className="flex justify-between border-b border-border py-2.5">
                      <span className="text-muted-foreground">{day}</span>
                      <span className="font-semibold">{t.infos.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={`tel:${PHONE}`} dir="ltr" className="inline-flex flex-1 items-center justify-center gap-3 border border-primary bg-primary px-6 py-4 text-[11px] font-bold uppercase tracking-[.14em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"><Phone size={15} /> {PHONE_DISPLAY}</a>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-3 border border-border px-6 py-4 text-[11px] font-bold uppercase tracking-[.14em] transition-colors hover:border-primary hover:text-primary"><MapPin size={15} /> {t.infos.maps}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-14 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-10 border-b border-border pb-12 md:flex-row md:items-end">
          <div>
            <span dir="ltr" className="inline-block font-display text-6xl font-semibold leading-none md:text-8xl">HAVANA<span className="text-primary">.</span></span>
            <span dir="ltr" className="mt-2 block font-display text-2xl font-semibold leading-none tracking-[.06em] text-primary md:text-4xl">LARACHE</span>
            <LangSwitcher className="mt-5 -ml-2" />
          </div>
          <div className="flex flex-col gap-3 text-sm md:items-end">
            <p className="font-display whitespace-pre-line text-2xl italic">{t.heroLine.replace("\n", " ")}</p>
            <a href={`tel:${PHONE}`} dir="ltr" className="font-semibold text-primary">{PHONE_DISPLAY}</a>
            <p className="text-muted-foreground">{t.footer.everyday}</p>
            <div className="flex flex-wrap gap-5 text-[11px] font-bold uppercase tracking-[.14em]">
              <a href="#carte" className="hover:text-primary">{t.footer.menu}</a>
              <a href="#infos" className="hover:text-primary">{t.footer.infos}</a>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-primary">{t.footer.maps}</a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-2 pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} {t.footer.rights}</span>
          <span>{t.footer.note}</span>
        </div>
      </footer>
    </main>
  );
}
