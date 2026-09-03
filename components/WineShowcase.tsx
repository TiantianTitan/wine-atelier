"use client";

import clsx from "clsx";
import { ArrowDown, ArrowLeft, ArrowUp } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { wines } from "@/data/wines";
import type { SortOption, Wine } from "@/types";

const categories = ["全部", ...new Set(wines.map((wine) => wine.category))];
const grades = ["全部等级", ...new Set(wines.map((wine) => wine.grade))];
const vintageRanges = ["全部年份", "1990年以前", "1990～2000年", "2000年以后"] as const;
type VintageRange = (typeof vintageRanges)[number];
const detailHashPrefix = "#酒款/";

function getWineIdFromHash() {
  const decodedHash = decodeURIComponent(window.location.hash);
  return decodedHash.startsWith(detailHashPrefix) ? decodedHash.slice(detailHashPrefix.length) : null;
}

function formatPrice(value: number) {
  return `€${new Intl.NumberFormat("zh-CN").format(value)}`;
}

function normalizeInventoryCode(value: string) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function matchesVintageRange(vintage: number, range: VintageRange) {
  if (range === "1990年以前") return vintage < 1990;
  if (range === "1990～2000年") return vintage >= 1990 && vintage <= 2000;
  if (range === "2000年以后") return vintage > 2000;
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
          src={wine.image}
          alt={`${wine.winery} ${wine.vintage} 年份酒瓶图`}
          width={900}
          height={1350}
          priority={index < 2}
          sizes="(max-width: 480px) 50vw, 240px"
        />
        {wine.classification ? <span className="classification-tag">{wine.classification}</span> : null}
        <span className="inventory-code">{wine.inventoryCode}</span>
      </span>
      <span className="card-info">
        <span className="card-name">
          {wine.winery}<span className="card-vintage">（{wine.vintage}）</span>
        </span>
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
        <Image src={wine.image} alt={`${wine.winery} 酒瓶图`} width={900} height={1350} sizes="45vw" />
        {wine.classification ? <span className="classification-tag">{wine.classification}</span> : null}
        <span className="inventory-code">{wine.inventoryCode}</span>
      </span>
      <span className="related-name">
        {wine.winery}<span className="card-vintage">（{wine.vintage}）</span>
      </span>
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
  const relatedWines = wine.related
    .map((id) => wines.find((item) => item.id === id))
    .filter((item): item is Wine => Boolean(item));

  return (
    <section className={clsx("detail-view", open && "is-active")} aria-hidden={!open} aria-label="酒款详情">
      <div className="detail-topbar">
        <button className="back-button" type="button" onClick={onBack} aria-label="返回酒款目录">
          <ArrowLeft size={16} aria-hidden="true" /> 返回
        </button>
        <span>酒款详情</span>
      </div>
      <article>
        <div className="detail-hero">
          <Image
            src={wine.image}
            alt={`${wine.winery} ${wine.vintage} 年份酒瓶图`}
            fill
            priority
            sizes="100vw"
          />
          <div className="detail-hero-copy">
            <span className="detail-code">库存编号 {wine.inventoryCode}</span>
            {wine.classification ? <p className="detail-classification">{wine.classification}</p> : null}
            <h2>{wine.winery}<span className="detail-vintage">（{wine.vintage}）</span></h2>
            <div className="detail-price-row">
              <strong>{formatPrice(wine.price)}</strong>
            </div>
          </div>
        </div>
        <div className="detail-body">
          <p className="detail-intro">{wine.description}</p>
          <dl className="detail-facts">
            <div className="fact-row"><dt>酒款分类</dt><dd>{wine.category}</dd></div>
            <div className="fact-row"><dt>等级</dt><dd>{wine.grade}</dd></div>
            <div className="fact-row"><dt>产地</dt><dd>{wine.origin}</dd></div>
            <div className="fact-row"><dt>品种</dt><dd>{wine.composition}</dd></div>
          </dl>
          <div className="quantity-block">
            <span>库存</span>
            <strong>{wine.quantity} 瓶</strong>
          </div>
          <section className="related-section" aria-labelledby="related-title">
            <p className="eyebrow">继续浏览</p>
            <h3 id="related-title">相关推荐</h3>
            <div className="related-grid">
              {relatedWines.map((relatedWine) => (
                <RelatedCard key={relatedWine.id} wine={relatedWine} onOpen={onOpenRelated} />
              ))}
            </div>
          </section>
        </div>
      </article>
    </section>
  );
}

export function WineShowcase() {
  const [category, setCategory] = useState("全部");
  const [grade, setGrade] = useState("全部等级");
  const [vintageRange, setVintageRange] = useState<VintageRange>("全部年份");
  const [sort, setSort] = useState<SortOption>("featured");
  const [codeQuery, setCodeQuery] = useState("");
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  const visibleWines = useMemo(() => {
    const filtered = wines.filter((wine) => {
      const categoryMatch = category === "全部" || wine.category === category;
      const gradeMatch = grade === "全部等级" || wine.grade === grade;
      const vintageMatch = matchesVintageRange(wine.vintage, vintageRange);
      const normalizedQuery = normalizeInventoryCode(codeQuery);
      const codeMatch = !normalizedQuery || normalizeInventoryCode(wine.inventoryCode).includes(normalizedQuery);
      return categoryMatch && gradeMatch && vintageMatch && codeMatch;
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
    closeTimerRef.current = window.setTimeout(() => {
      setSelectedWine(null);
      closeTimerRef.current = null;
    }, 760);
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
      if (reduceMotion.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => undefined);
      }
    };

    syncHeroMotion();
    reduceMotion.addEventListener("change", syncHeroMotion);
    return () => reduceMotion.removeEventListener("change", syncHeroMotion);
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
        </a>
      </header>

      <main>
        <section className="hero" id="顶部" aria-labelledby="hero-title">
          <video
            ref={heroVideoRef}
            className="hero-image hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/hero/wine-pour-poster.webp"
            aria-hidden="true"
          >
            <source src="/assets/hero/wine-pour-loop.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <h1 id="hero-title"><span>家中酒单</span></h1>
          </div>
          <a className="scroll-cue" href="#酒款目录">查看酒款 <ArrowDown size={15} aria-hidden="true" /></a>
        </section>

        <section className="catalog" id="酒款目录" aria-labelledby="catalog-title">
          <div className="catalog-heading reveal" data-reveal>
            <h2 id="catalog-title">酒款</h2>
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
              <span>按库存编号查找</span>
              <input
                type="search"
                value={codeQuery}
                onChange={(event) => {
                  const nextQuery = event.target.value;
                  setCodeQuery(nextQuery);
                  if (nextQuery.trim()) {
                    setCategory("全部");
                    setGrade("全部等级");
                    setVintageRange("全部年份");
                  }
                }}
                placeholder="例如 R-001"
                autoCapitalize="characters"
                spellCheck={false}
                aria-label="输入库存编号查找酒款"
              />
            </label>
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
                <span>年份</span>
                <select
                  value={vintageRange}
                  onChange={(event) => {
                    setVintageRange(event.target.value as VintageRange);
                    setCodeQuery("");
                  }}
                  aria-label="按年份筛选"
                >
                  {vintageRanges.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </label>
              <label className="sort-control">
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

      {selectedWine ? (
        <WineDetail wine={selectedWine} open={detailOpen} onBack={handleBack} onOpenRelated={openWine} />
      ) : null}
    </>
  );
}
