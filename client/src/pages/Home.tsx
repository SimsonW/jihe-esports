/**
 * 几何电竞官网 - Home Page
 * Design: 暗黑电竞美学 (Dark Esports Aesthetic)
 * Colors: #0A0A0A (bg), #D4AF37 (gold), #F0C040 (gold-bright)
 * Fonts: Rajdhani (headings) + Noto Sans SC (body)
 */

import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

// ─── Asset URLs ────────────────────────────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663276549771/aCYWfLHScd2zV4g4Hx4Dgu/hero-bg-2WTSE2CYNFz3KzSXtHFMHF.webp";
const LOGO_EMBLEM = "https://d2xsxph8kpxj0f.cloudfront.net/310519663276549771/aCYWfLHScd2zV4g4Hx4Dgu/logo-emblem-VqcdZ7Hit9mwGR5oGRo3ti.webp";
const SECTION_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663276549771/aCYWfLHScd2zV4g4Hx4Dgu/section-divider-bg-Ty6b6ukLtWuNnq24XDpH5E.webp";

const IMG = (path: string) => `/manus-storage/${path}`;

// ─── Data ──────────────────────────────────────────────────────────────────────
const sections = [
  {
    id: "lol",
    label: "英雄联盟",
    icon: "⚔️",
    color: "#3B82F6",
    items: [
      { title: "陪玩价格表", src: IMG("lol-price_371ab720.jpg") },
      { title: "代练表", src: IMG("lol-boost_5b778f67.jpg") },
      { title: "赔付标准", src: IMG("lol-refund_61645ec3.jpg") },
    ],
  },
  {
    id: "valorant",
    label: "无畏契约",
    icon: "🎯",
    color: "#EF4444",
    items: [
      { title: "陪玩价格表", src: IMG("valorant-price_d89156f1.jpg") },
    ],
  },
  {
    id: "delta",
    label: "三角洲行动",
    icon: "🪖",
    color: "#22C55E",
    items: [
      { title: "陪玩价格表", src: IMG("delta-price_065f70ec.jpg") },
      { title: "护航价格表", src: IMG("delta-escort_9f72d110.jpg") },
      { title: "趣味单", src: IMG("delta-fun_371da0a5.jpg") },
      { title: "AW单", src: IMG("delta-aw_e6537162.jpg") },
    ],
  },
  {
    id: "fun",
    label: "趣味专区",
    icon: "🎮",
    color: "#A855F7",
    items: [
      { title: "小小巨人趣味单", src: IMG("little-giant-fun_dc35f0bf.jpg") },
      { title: "自力更生单", src: IMG("self-reliance_a863311e.jpg") },
      { title: "安全箱代肝", src: IMG("safe-box_524180a6.jpg") },
      { title: "集合电竞三角洲飞行棋", src: IMG("jihe-delta-chess_d7309bbb.jpg") },
    ],
  },
  {
    id: "activity",
    label: "活动福利",
    icon: "🎁",
    color: "#F59E0B",
    items: [
      { title: "常规预存活动", src: IMG("prestore-regular_c6ba61b3.jpg") },
      { title: "累计充值活动", src: IMG("recharge-activity_af1c7671.jpg") },
      { title: "浪漫专属礼物", src: IMG("romantic-gift_4e612503.jpg") },
    ],
  },
  {
    id: "voice",
    label: "语音业务",
    icon: "🎙️",
    color: "#06B6D4",
    items: [
      { title: "语音业务表", src: IMG("voice-service_584e2c7a.jpg") },
    ],
  },
  {
    id: "notice",
    label: "老板须知",
    icon: "📋",
    color: "#D4AF37",
    items: [
      { title: "下单须知", src: IMG("order-notice_b9ce6430.jpg") },
    ],
  },
];

// ─── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: { title: string; src: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        onClick={onClose}
      >
        <X size={28} />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-[#D4AF37] transition-colors z-10 p-2"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <ChevronLeft size={36} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "lightboxIn 0.2s cubic-bezier(0.23,1,0.32,1) both",
        }}
      >
        <img
          src={images[index].src}
          alt={images[index].title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
          style={{ boxShadow: "0 0 40px rgba(212,175,55,0.2)" }}
        />
        <p className="mt-3 text-[#D4AF37] font-medium text-sm tracking-widest">
          {images[index].title}
        </p>
        {images.length > 1 && (
          <p className="text-white/40 text-xs mt-1">
            {index + 1} / {images.length}
          </p>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-[#D4AF37] transition-colors z-10 p-2"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <ChevronRight size={36} />
        </button>
      )}

      <style>{`
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

// ─── Section Component ─────────────────────────────────────────────────────────
function GameSection({
  section,
  onOpenImage,
}: {
  section: typeof sections[0];
  onOpenImage: (images: { title: string; src: string }[], index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="section-reveal" id={section.id}>
      {/* Section header */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{section.icon}</span>
        <h2
          className="text-xl font-bold tracking-wider"
          style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "#F0EDE0" }}
        >
          {section.label}
        </h2>
        <div
          className="flex-1 h-px ml-2"
          style={{
            background: `linear-gradient(90deg, ${section.color}80 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* Cards grid */}
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        }}
      >
        {section.items.map((item, i) => (
          <div
            key={i}
            className="img-card aspect-[3/4] cursor-pointer"
            onClick={() => onOpenImage(section.items, i)}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="overlay">
              <span className="text-white text-xs font-medium">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.95)"
          : "rgba(10,10,10,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.15)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-14">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={LOGO_EMBLEM}
            alt="几何电竞"
            className="w-8 h-8 object-contain"
          />
          <span
            className="text-gold-gradient font-bold text-lg tracking-widest"
            style={{ fontFamily: "'Rajdhani', 'Noto Sans SC', sans-serif" }}
          >
            几何电竞
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              className="nav-link"
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "#D4AF37",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 2
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(10,10,10,0.98)",
            borderTop: "1px solid rgba(212,175,55,0.15)",
          }}
        >
          {sections.map((s) => (
            <button
              key={s.id}
              className="block w-full text-left px-6 py-3 text-sm text-[#CCCCCC] hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
              onClick={() => scrollTo(s.id)}
            >
              <span className="mr-2">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const scrollToContent = () => {
    document.getElementById("lol")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 flex flex-col items-center">
        <img
          src={LOGO_EMBLEM}
          alt="几何电竞"
          className="w-24 h-24 md:w-32 md:h-32 mb-6 animate-float"
          style={{ filter: "drop-shadow(0 0 20px rgba(212,175,55,0.5))" }}
        />

        <h1
          className="text-5xl md:text-7xl font-black tracking-[0.15em] mb-3"
          style={{
            fontFamily: "'Rajdhani', 'Noto Sans SC', sans-serif",
            background: "linear-gradient(135deg, #D4AF37 0%, #F0C040 50%, #C8A020 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
          }}
        >
          几何电竞
        </h1>

        <p
          className="text-base md:text-lg text-white/80 tracking-[0.2em] mb-2"
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          JIHE ESPORTS
        </p>

        <div className="gold-divider w-32 my-4" />

        <p
          className="text-sm md:text-base text-[#CCCCCC] tracking-widest mb-8 max-w-md"
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          高质陪玩 &nbsp;·&nbsp; 稳定上车 &nbsp;·&nbsp; 透明价格 &nbsp;·&nbsp; 售后保障
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="btn-gold text-sm" onClick={scrollToContent}>
            查看价格表
          </button>
          <a
            href="#notice"
            className="btn-gold-outline text-sm"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("notice")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            下单须知
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50"
        style={{ animation: "float 2s ease-in-out infinite" }}
      >
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, transparent, #D4AF37)" }} />
        <span className="text-[#D4AF37] text-xs tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}

// ─── Features Strip ────────────────────────────────────────────────────────────
function FeaturesStrip() {
  const features = [
    { icon: "🏆", text: "专业陪玩" },
    { icon: "🔒", text: "安全可靠" },
    { icon: "⚡", text: "快速匹配" },
    { icon: "💬", text: "售后保障" },
    { icon: "💰", text: "透明价格" },
    { icon: "🌟", text: "优质服务" },
  ];

  return (
    <div
      className="py-4 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #0A0A0A 0%, #1a1400 50%, #0A0A0A 100%)",
        borderTop: "1px solid rgba(212,175,55,0.2)",
        borderBottom: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      <div className="flex gap-8 justify-center flex-wrap px-4">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 text-sm whitespace-nowrap">
            <span>{f.icon}</span>
            <span className="text-[#D4AF37] font-medium tracking-wider">{f.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Quick Nav ─────────────────────────────────────────────────────────────────
function QuickNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container py-8">
      <h2
        className="text-xs text-[#888] tracking-[0.3em] uppercase mb-4"
        style={{ fontFamily: "'Rajdhani', sans-serif" }}
      >
        快速导航
      </h2>
      <div className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium transition-all duration-150"
            style={{
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.2)",
              color: "#CCCCCC",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.18)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.5)";
              (e.currentTarget as HTMLButtonElement).style.color = "#D4AF37";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.08)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.2)";
              (e.currentTarget as HTMLButtonElement).style.color = "#CCCCCC";
            }}
          >
            <span>{s.icon}</span>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="mt-16 py-10 text-center"
      style={{
        backgroundImage: `url(${SECTION_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10,10,10,0.85)" }}
      />
      <div className="relative z-10 container">
        <img
          src={LOGO_EMBLEM}
          alt="几何电竞"
          className="w-14 h-14 mx-auto mb-3 opacity-80"
        />
        <p
          className="text-gold-gradient text-xl font-bold tracking-[0.3em] mb-2"
          style={{ fontFamily: "'Rajdhani', 'Noto Sans SC', sans-serif" }}
        >
          几何电竞
        </p>
        <p className="text-[#888] text-xs tracking-widest mb-4">
          JIHE ESPORTS · 专业陪玩服务
        </p>
        <div className="gold-divider max-w-xs mx-auto mb-4" />
        <p className="text-[#555] text-xs">
          © 2024 几何电竞 · 所有价格以最新公告为准 · 未成年人请在家长陪同下消费
        </p>
      </div>
    </footer>
  );
}

// ─── Floating CTA ──────────────────────────────────────────────────────────────
function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-2 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href="#notice"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("notice")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold animate-pulse-gold"
        style={{
          background: "linear-gradient(135deg, #D4AF37, #F0C040)",
          color: "#0A0A0A",
          fontFamily: "'Noto Sans SC', sans-serif",
          boxShadow: "0 4px 20px rgba(212,175,55,0.4)",
          whiteSpace: "nowrap",
        }}
      >
        <MessageCircle size={16} />
        添加客服下单
      </a>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [lightbox, setLightbox] = useState<{
    images: { title: string; src: string }[];
    index: number;
  } | null>(null);

  const openLightbox = (images: { title: string; src: string }[], index: number) => {
    setLightbox({ images, index });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  const prevImage = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length,
    });
  };

  const nextImage = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index: (lightbox.index + 1) % lightbox.images.length,
    });
  };

  return (
    <div className="min-h-screen" style={{ background: "#0A0A0A" }}>
      <Navbar />
      <Hero />
      <FeaturesStrip />
      <QuickNav />

      {/* Main content */}
      <main className="container pb-8">
        <div className="flex flex-col gap-12">
          {sections.map((section) => (
            <GameSection
              key={section.id}
              section={section}
              onOpenImage={openLightbox}
            />
          ))}
        </div>
      </main>

      <Footer />
      <FloatingCTA />

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
