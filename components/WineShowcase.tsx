"use client";

import clsx from "clsx";
import { ArrowDown, ArrowLeft, ArrowUp, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { salesContent } from "@/data/sales-content";
import { wines } from "@/data/wines";
import type { SortOption, Wine } from "@/types";

const categories = ["全部", ...new Set(wines.map((wine) => wine.category))];
const grades = ["全部等级", ...new Set(wines.map((wine) => wine.grade))];
const vintageRanges = ["全部年代", "50年代", "60年代", "70年代", "80年代", "90年代"] as const;
type VintageRange = (typeof vintageRanges)[number];
const detailHashPrefix = "#酒款/";
const detailTransitionMs = 980;
const collectionReferenceYear = 2026;
const weChatInlineVideoAttributes = {
  "webkit-playsinline": "true",
  "x5-playsinline": "true",
  "x5-video-player-type": "h5-page"
} as const;

function getWineIdFromHash() {
  const decodedHash = decodeURIComponent(window.location.hash);
  return decodedHash.startsWith(detailHashPrefix) ? decodedHash.slice(detailHashPrefix.length) : null;
}

function formatPrice(value: number) {
  return `€${new Intl.NumberFormat("zh-CN").format(value)}`;
}

function getBottleAge(vintage: number) {
  return collectionReferenceYear - vintage;
}

function normalizeInventoryCode(value: string) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function matchesVintageRange(vintage: number, range: VintageRange) {
  if (range === "50年代") return vintage >= 1950 && vintage < 1960;
  if (range === "60年代") return vintage >= 1960 && vintage < 1970;
  if (range === "70年代") return vintage >= 1970 && vintage < 1980;
  if (range === "80年代") return vintage >= 1980 && vintage < 1990;
  if (range === "90年代") return vintage >= 1990 && vintage < 2000;
  return true;
}

function WineCard({ wine, index, onOpen }: { wine: Wine; index: number; onOpen: (wine: Wine) => void }) {
  const animationStyle = { "--card-index": index } as CSSProperties;

  return (
    <button
      className="wine-card"
      type="button"
      onClick={() => onOpen(wine)}
      style={animationStyle}
      aria-label={`查看编号 ${wine.inventoryCode}，${wine.winery} ${wine.vintage} 年份详情`}
    >
      <span className="card-image-wrap">
        <Image
          src={wine.images[0]}
          alt={`${wine.winery} ${wine.vintage} 年份酒瓶图`}
          width={900}
          height={1350}
          sizes="(max-width: 480px) 47vw, 220px"
        />
        {wine.classification ? <span className="classification-tag">{wine.classification}</span> : null}
        <span className="inventory-code">{wine.inventoryCode}</span>
      </span>
      <span className="card-info">
        <span className="card-yearline">
          <strong>{wine.vintage}</strong>
          <small>{getBottleAge(wine.vintage)} 年前</small>
        </span>
        <span className="card-name">{wine.winery}</span>
        <span className="card-price">{formatPrice(wine.price)}</span>
      </span>
    </button>
  );
}

function RelatedCard({ wine, onOpen }: { wine: Wine; onOpen: (wine: Wine) => void }) {
  return (
    <button
      className="related-card"
      type="button"
      onClick={() => onOpen(wine)}
      aria-label={`查看编号 ${wine.inventoryCode}，${wine.winery} 详情`}
    >
      <span className="related-image-wrap">
        <Image src={wine.images[0]} alt={`${wine.winery} 酒瓶图`} width={900} height={1350} sizes="45vw" />
        {wine.classification ? <span className="classification-tag">{wine.classification}</span> : null}
        <span className="inventory-code">{wine.inventoryCode}</span>
      </span>
      <span className="related-yearline">
        <strong>{wine.vintage}</strong>
        <small>{getBottleAge(wine.vintage)} 年前</small>
      </span>
      <span className="related-name">{wine.winery}</span>
      <span className="card-price">{formatPrice(wine.price)}</span>
    </button>
  );
}

function WineDetail({
  wine,
  open,
  onBack,
  onOpenRelated
}: {
  wine: Wine;
  open: boolean;
  onBack: () => void;
  onOpenRelated: (wine: Wine) => void;
}) {
  const detailRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const previewGalleryRef = useRef<HTMLDivElement | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [previewImage, setPreviewImage] = useState<number | null>(null);
  const content = salesContent[wine.id];
  const relatedWines = wine.related
    .map((id) => wines.find((item) => item.id === id))
    .filter((item): item is Wine => Boolean(item));

  useEffect(() => {
    setActiveImage(0);
    setPreviewImage(null);
    detailRef.current?.scrollTo({ top: 0 });
    galleryRef.current?.scrollTo({ left: 0 });
  }, [wine.id]);

  useEffect(() => {
    if (!open) setPreviewImage(null);
  }, [open]);

  useEffect(() => {
    if (previewImage === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewImage(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [previewImage]);

  useEffect(() => {
    const gallery = previewGalleryRef.current;
    if (previewImage === null || !gallery) return;
    gallery.scrollTo({ left: gallery.clientWidth * previewImage });
  }, [previewImage]);

  const selectImage = (index: number) => {
    const gallery = galleryRef.current;
    setActiveImage(index);
    if (gallery) gallery.scrollTo({ left: gallery.clientWidth * index, behavior: "smooth" });
  };

  const syncActiveImage = () => {
    const gallery = galleryRef.current;
    if (!gallery?.clientWidth) return;
    setActiveImage(Math.round(gallery.scrollLeft / gallery.clientWidth));
  };

  const syncPreviewImage = () => {
    const gallery = previewGalleryRef.current;
    if (!gallery?.clientWidth) return;
    setPreviewImage(Math.round(gallery.scrollLeft / gallery.clientWidth));
  };

  return (
    <section ref={detailRef} className={clsx("detail-view", open && "is-active")} aria-hidden={!open} aria-label="酒款详情">
      <div className="detail-topbar">
        <button className="back-button" type="button" onClick={onBack} aria-label="返回酒款目录">
          <ArrowLeft size={16} aria-hidden="true" /> 返回
        </button>
        <span>年份藏品</span>
      </div>
      <article className="detail-sheet" key={wine.id}>
        <div className="detail-hero">
          <div ref={galleryRef} className="detail-gallery" onScroll={syncActiveImage} aria-label="酒瓶照片">
            {wine.images.map((image, index) => (
              <button
                className="detail-slide"
                key={image}
                type="button"
                aria-haspopup="dialog"
                aria-label={`全屏查看照片 ${index + 1} / ${wine.images.length}`}
                onClick={() => setPreviewImage(index)}
              >
                <Image
                  src={image}
                  alt={`${wine.winery} ${wine.vintage} 年份酒瓶照片 ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                />
              </button>
            ))}
          </div>
          {wine.images.length > 1 ? (
            <div className="detail-photo-nav" role="tablist" aria-label="切换酒瓶照片">
              {wine.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={clsx(activeImage === index && "is-active")}
                  role="tab"
                  aria-selected={activeImage === index}
                  aria-label={`查看第 ${index + 1} 张照片`}
                  onClick={() => selectImage(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          ) : null}
          <div className="detail-hero-copy">
            <div className="detail-badge-row">
              <span className="detail-code">库存编号 {wine.inventoryCode}</span>
              <span className="detail-age">距今 {getBottleAge(wine.vintage)} 年</span>
            </div>
            {wine.classification ? <p className="detail-classification">{wine.classification}</p> : null}
            <h2 className={clsx(wine.winery.length > 38 && "is-long")}>
              {wine.winery}<span className="detail-vintage">（{wine.vintage}）</span>
            </h2>
            <div className="detail-price-row">
              <strong>{formatPrice(wine.price)}</strong>
            </div>
          </div>
        </div>
        <div className="detail-body">
          <section className="detail-opening" aria-label={`${wine.vintage} 年份故事`}>
            <p className="detail-opening-kicker">从这一年说起</p>
            <div className="detail-opening-year">
              <strong>{wine.vintage}</strong>
              <span>距今 {getBottleAge(wine.vintage)} 年</span>
            </div>
            <p className="detail-intro">{content.intro}</p>
          </section>
          <aside className="occasion-callout" aria-label="适合的纪念与送礼场景">
            <span>送给</span>
            <p>{content.occasion}</p>
          </aside>
          <dl className="detail-facts">
            <div className="fact-row"><dt>年份</dt><dd>{wine.vintage} 年 · 距今 {getBottleAge(wine.vintage)} 年</dd></div>
            <div className="fact-row"><dt>来自</dt><dd>{wine.origin}</dd></div>
            <div className="fact-row"><dt>酒款身份</dt><dd>{content.position}</dd></div>
            <div className="fact-row"><dt>品种</dt><dd>{wine.composition}</dd></div>
          </dl>
          <section className="research-notes" aria-label="这瓶酒的故事与开瓶提示">
            <article className="research-note">
              <span>酒瓶背后</span>
              <h3>{content.storyTitle}</h3>
              <p>{content.story}</p>
            </article>
            <article className="research-note">
              <span>开瓶之前</span>
              <h3>{content.palateTitle}</h3>
              <p>{content.palate}</p>
            </article>
            <article className="research-note">
              <span>产地与手艺</span>
              <h3>{content.craftTitle}</h3>
              <p>{content.craft}</p>
            </article>
          </section>
          <div className="quantity-block">
            <div>
              <span>库存</span>
              <strong>{wine.quantity} 瓶</strong>
            </div>
            <div>
              <strong>{formatPrice(wine.price)}</strong>
            </div>
          </div>
          <details className="condition-disclosure">
            <summary>看看这瓶的保存状态</summary>
            <p>{wine.condition}</p>
            <small>藏家确认目前没有漏液。老酒能不能开来喝，仍要看酒塞、液面和多年储藏；纪念与陈列价值不等于适饮保证。</small>
          </details>
          <section className="related-section" aria-labelledby="related-title">
            <p className="eyebrow">继续浏览</p>
            <h3 id="related-title">再看看这两瓶</h3>
            <div className="related-grid">
              {relatedWines.map((relatedWine) => (
                <RelatedCard key={relatedWine.id} wine={relatedWine} onOpen={onOpenRelated} />
              ))}
            </div>
          </section>
        </div>
      </article>
      {previewImage !== null ? (
        <div
          className="image-preview"
          role="dialog"
          aria-modal="true"
          aria-label={`${wine.winery} ${wine.vintage} 年份高清照片预览`}
          onClick={() => setPreviewImage(null)}
        >
          <button
            className="image-preview-close"
            type="button"
            autoFocus
            aria-label="退出图片预览"
            onClick={() => setPreviewImage(null)}
          >
            <span>退出预览</span>
            <X size={18} aria-hidden="true" />
          </button>
          <div
            ref={previewGalleryRef}
            className="image-preview-gallery"
            aria-label="高清酒瓶照片"
            onScroll={syncPreviewImage}
            onClick={(event) => event.stopPropagation()}
          >
            {wine.images.map((image, index) => (
              <div className="image-preview-slide" key={image} aria-label={`高清照片 ${index + 1} / ${wine.images.length}`}>
                <Image
                  src={image}
                  alt={`${wine.winery} ${wine.vintage} 年份完整酒瓶照片 ${index + 1}`}
                  fill
                  unoptimized
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
          {wine.images.length > 1 ? (
            <span className="image-preview-count">{previewImage + 1}/{wine.images.length}</span>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export function WineShowcase() {
  const [category, setCategory] = useState("全部");
  const [grade, setGrade] = useState("全部等级");
  const [vintageRange, setVintageRange] = useState<VintageRange>("全部年代");
  const [sort, setSort] = useState<SortOption>("featured");
  const [codeQuery, setCodeQuery] = useState("");
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [heroVideoPlaying, setHeroVideoPlaying] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const cellarVideoRef = useRef<HTMLVideoElement | null>(null);

  const visibleWines = useMemo(() => {
    const filtered = wines.filter((wine) => {
      const categoryMatch = category === "全部" || wine.category === category;
      const gradeMatch = grade === "全部等级" || wine.grade === grade;
      const vintageMatch = matchesVintageRange(wine.vintage, vintageRange);
      const rawQuery = codeQuery.trim();
      const normalizedQuery = normalizeInventoryCode(rawQuery);
      const yearQuery = rawQuery.replace(/\D/g, "");
      const queryMatch = !rawQuery
        || normalizeInventoryCode(wine.inventoryCode).includes(normalizedQuery)
        || (yearQuery.length === 4 && String(wine.vintage) === yearQuery);
      return categoryMatch && gradeMatch && vintageMatch && queryMatch;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "vintage-desc") return b.vintage - a.vintage;
      if (sort === "grade-desc") return b.gradeRank - a.gradeRank;
      return a.sortOrder - b.sortOrder;
    });
  }, [category, codeQuery, grade, sort, vintageRange]);

  const animateClose = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setDetailOpen(false);
    const closeDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 30 : detailTransitionMs;
    closeTimerRef.current = window.setTimeout(() => {
      setSelectedWine(null);
      closeTimerRef.current = null;
    }, closeDelay);
  }, []);

  const openWine = useCallback((wine: Wine, pushHistory = true) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setSelectedWine(wine);
    requestAnimationFrame(() => setDetailOpen(true));
    if (pushHistory) window.history.pushState({ wineId: wine.id }, "", `${detailHashPrefix}${wine.id}`);
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      const wineId = getWineIdFromHash();
      if (wineId) {
        const wine = wines.find((item) => item.id === wineId);
        if (wine) openWine(wine, false);
      } else {
        animateClose();
      }
    };

    syncFromHash();
    window.addEventListener("popstate", syncFromHash);
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      window.removeEventListener("popstate", syncFromHash);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [animateClose, openWine]);

  useEffect(() => {
    document.body.classList.toggle("detail-open", detailOpen);
    return () => document.body.classList.remove("detail-open");
  }, [detailOpen]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncHeroMotion = () => {
      const video = heroVideoRef.current;
      if (!video) return;
      if (reduceMotion.matches || document.hidden) {
        video.pause();
        setHeroVideoPlaying(false);
        if (reduceMotion.matches) video.currentTime = 0;
      } else {
        video.muted = true;
        video.playsInline = true;
        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "true");
        void video.play()
          .then(() => setHeroVideoPlaying(true))
          .catch(() => setHeroVideoPlaying(false));
      }
    };

    syncHeroMotion();
    reduceMotion.addEventListener("change", syncHeroMotion);
    document.addEventListener("WeixinJSBridgeReady", syncHeroMotion);
    document.addEventListener("visibilitychange", syncHeroMotion);
    window.addEventListener("pageshow", syncHeroMotion);
    document.addEventListener("touchstart", syncHeroMotion, { passive: true, once: true });
    document.addEventListener("pointerdown", syncHeroMotion, { passive: true, once: true });

    return () => {
      reduceMotion.removeEventListener("change", syncHeroMotion);
      document.removeEventListener("WeixinJSBridgeReady", syncHeroMotion);
      document.removeEventListener("visibilitychange", syncHeroMotion);
      window.removeEventListener("pageshow", syncHeroMotion);
      document.removeEventListener("touchstart", syncHeroMotion);
      document.removeEventListener("pointerdown", syncHeroMotion);
    };
  }, []);

  useEffect(() => {
    const video = cellarVideoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (reduceMotion.matches || !entry.isIntersecting) {
          video.pause();
          if (reduceMotion.matches) video.currentTime = 0;
          return;
        }
        void video.play().catch(() => undefined);
      },
      { rootMargin: "160px 0px", threshold: 0.18 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleBack = () => {
    if (getWineIdFromHash()) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    animateClose();
  };

  return (
    <>
      <div className="page-grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#顶部" aria-label="返回藏酒册顶部">
          <span className="brand-mark">藏</span>
          <span className="brand-copy">
            <strong>家中酒单</strong>
            <small>私人藏酒</small>
          </span>
        </a>
        <span className="header-count">{wines.length} 瓶</span>
      </header>

      <main>
        <section className="hero" id="顶部" aria-labelledby="hero-title">
          <div className={clsx("hero-media", heroVideoPlaying && "is-playing")} aria-hidden="true">
            <img
              className="hero-image hero-poster"
              src="/assets/hero/wine-pour-poster.webp"
              alt=""
              width="720"
              height="1280"
              fetchPriority="high"
            />
            <video
              ref={heroVideoRef}
              className="hero-image hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              poster="/assets/hero/wine-pour-poster.webp"
              {...weChatInlineVideoAttributes}
              onPlaying={() => setHeroVideoPlaying(true)}
              onPause={() => setHeroVideoPlaying(false)}
              onWaiting={() => setHeroVideoPlaying(false)}
              onStalled={() => setHeroVideoPlaying(false)}
            >
              <source src="/assets/hero/wine-pour-loop-mobile.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-rule" aria-hidden="true"><span /></div>
          <div className="hero-content">
            <p className="hero-kicker"><span>私人藏酒</span><span>1955—1997</span></p>
            <h1 id="hero-title"><span>家中</span><span>酒单</span></h1>
            <p className="hero-note">你记得哪一年？</p>
          </div>
          <a className="scroll-cue" href="#藏酒序章">翻开酒单 <ArrowDown size={15} aria-hidden="true" /></a>
        </section>

        <section className="cellar-overture" id="藏酒序章" aria-labelledby="overture-title">
          <div className="overture-heading reveal" data-reveal>
            <p className="eyebrow">私人珍藏 · 三十瓶</p>
            <h2 id="overture-title" aria-label="1955 至 1997">
              <span>1955</span><small>—</small><span>1997</span>
            </h2>
            <p>有人在这些年份出生、相爱、成家；酒瓶也把那一年留到了今天。</p>
          </div>
          <div className="overture-media reveal" data-reveal>
            <div className="overture-frame">
              <video
                ref={cellarVideoRef}
                muted
                loop
                playsInline
                preload="none"
                poster="/assets/hero/cellar-pour-poster.webp"
                aria-hidden="true"
              >
                <source src="/assets/hero/cellar-pour-loop.mp4" type="video/mp4" />
              </video>
              <div className="overture-shade" aria-hidden="true" />
              <span className="overture-caption">生日 · 纪念日 · 想起的人</span>
            </div>
          </div>
          <a className="overture-link reveal" data-reveal href="#酒款目录">
            查看全部 {wines.length} 款 <ArrowDown size={15} aria-hidden="true" />
          </a>
        </section>

        <section className="catalog" id="酒款目录" aria-labelledby="catalog-title">
          <div className="catalog-heading reveal" data-reveal>
            <p className="eyebrow">按你记得的那一年</p>
            <h2 id="catalog-title">你在找哪一年</h2>
            <p>也许是你的出生年，也许是父母结婚的那一年。年份是故事，能不能喝，要看每瓶自己的状态。</p>
          </div>

          <div className="catalog-controls reveal" data-reveal aria-label="酒款筛选与排序">
            <div className="category-tabs" role="tablist" aria-label="按分类筛选">
              {categories.map((item) => (
                <button
                  key={item}
                  className="category-tab"
                  type="button"
                  role="tab"
                  aria-selected={category === item}
                  onClick={() => {
                    setCategory(item);
                    setCodeQuery("");
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="code-search">
              <span>找年份或库存编号</span>
              <input
                type="search"
                value={codeQuery}
                onChange={(event) => {
                  const nextQuery = event.target.value;
                  setCodeQuery(nextQuery);
                  if (nextQuery.trim()) {
                    setCategory("全部");
                    setGrade("全部等级");
                    setVintageRange("全部年代");
                  }
                }}
                placeholder="例如 1967 或 R-002"
                autoCapitalize="characters"
                spellCheck={false}
                aria-label="输入年份或库存编号查找酒款"
              />
            </label>
            <div className="decade-filter">
              <span>年代</span>
              <div className="decade-tabs" role="tablist" aria-label="按年代筛选">
                {vintageRanges.map((item) => (
                  <button
                    key={item}
                    className="decade-tab"
                    type="button"
                    role="tab"
                    aria-selected={vintageRange === item}
                    onClick={() => {
                      setVintageRange(item);
                      setCodeQuery("");
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="select-row">
              <label>
                <span>等级</span>
                <select
                  value={grade}
                  onChange={(event) => {
                    setGrade(event.target.value);
                    setCodeQuery("");
                  }}
                  aria-label="按等级筛选"
                >
                  {grades.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </label>
              <label>
                <span>排序</span>
                <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)} aria-label="酒款排序">
                  <option value="featured">推荐顺序</option>
                  <option value="price-asc">价格从低到高</option>
                  <option value="price-desc">价格从高到低</option>
                  <option value="vintage-desc">年份从新到旧</option>
                  <option value="grade-desc">等级从高到低</option>
                </select>
              </label>
            </div>
          </div>

          <div className="result-line reveal" data-reveal>
            <span aria-live="polite">{visibleWines.length} 款</span>
            <span>酒瓶状态都写在详情里</span>
          </div>

          {visibleWines.length ? (
            <div className="wine-grid">
              {visibleWines.map((wine, index) => <WineCard key={wine.id} wine={wine} index={index} onOpen={openWine} />)}
            </div>
          ) : (
            <div className="empty-state">当前筛选条件下暂无酒款。</div>
          )}
        </section>

        <footer className="site-footer reveal" data-reveal aria-label="页面署名">
          <span>程序猿hoting的酒单</span>
          <a href="#顶部" aria-label="返回顶部">返回顶部 <ArrowUp size={14} aria-hidden="true" /></a>
        </footer>
      </main>

      <div className={clsx("book-backdrop", detailOpen && "is-active")} aria-hidden="true" />

      {selectedWine ? (
        <WineDetail wine={selectedWine} open={detailOpen} onBack={handleBack} onOpenRelated={openWine} />
      ) : null}
    </>
  );
}
