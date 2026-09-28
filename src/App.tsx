import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { articles, categories, photoGroups, site, type Article, type Category, type Photo } from './content'

function Arrow({ direction = 'right' }: { direction?: 'right' | 'left' }) {
  return <span aria-hidden="true">{direction === 'right' ? '↗' : '←'}</span>
}

function Header() {
  return <header className="site-header"><div className="shell flex min-h-16 items-center justify-between gap-6">
    <Link className="brand" to="/">{site.logo}</Link>
    <nav aria-label="主导航" className="flex items-center gap-7 text-sm">
      <NavLink end to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>首页</NavLink>
      <NavLink to="/writing" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>文字</NavLink>
      <NavLink to="/collection" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>收集</NavLink>
    </nav>
  </div></header>
}

function Footer() {
  return <footer className="site-footer"><div className="shell flex flex-wrap items-center justify-between gap-4 py-7 text-xs text-muted">
    <span>© {site.name} · 个人空间 / 记录日常随笔、旅途见闻与影像</span><span>当前内容为示例，等待替换</span>
  </div></footer>
}

function PageTop() {
  const location = useLocation()
  useEffect(() => { if (!location.hash) window.scrollTo(0, 0) }, [location.pathname, location.hash])
  return null
}

function SectionHeading({ number, eyebrow, title, link, linkText }: { number: string; eyebrow: string; title: string; link: string; linkText: string }) {
  return <div className="mb-8 flex items-end justify-between gap-4">
    <div><div className="eyebrow text-accent">{number} / {eyebrow}</div><h2 className="section-title">{title}</h2></div>
    <Link className="text-link" to={link}>{linkText} <Arrow /></Link>
  </div>
}

function HomeArticleCard({ article }: { article: Article }) {
  return <Link className="home-article-card group" to={`/writing/${article.slug}?from=home`}>
    <div className="flex items-center justify-between gap-4"><span className="category-chip">【示例】{article.category}</span><time className="text-xs text-muted">{article.date}</time></div>
    <h3 className="mt-5 font-serif text-[1.4rem] leading-snug group-hover:text-accent">{article.title}</h3>
    <p className="mt-4 line-clamp-3 text-sm leading-7">{article.summary}</p>
    <div className="mt-auto flex items-end justify-between gap-3 pt-7 text-xs"><span className="text-link">阅读全文 <Arrow /></span><span className="text-muted">{article.readMinutes} 分钟阅读</span></div>
  </Link>
}

function Home() {
  return <main className="shell pb-20">
    <section className="intro-panel mt-6 p-9 md:p-12">
      <div className="eyebrow text-accent">个人介绍 · PROFILE · INDEX</div>
      <div className="mt-3 flex flex-wrap items-baseline gap-4"><h1 className="font-serif text-4xl leading-tight md:text-5xl">{site.name}</h1><span className="category-chip">博主介绍 / 待提供</span></div>
      <p className="mt-6 max-w-3xl text-base leading-8">{site.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link className="button button-primary" to="/writing">从文字开始阅读 <Arrow /></Link><Link className="button button-soft" to="/collection">从照片开始浏览 <Arrow /></Link></div>
    </section>
    <section className="mt-20" aria-labelledby="recent-writing"><SectionHeading number="01" eyebrow="WRITING LOG" title="近期文字" link="/writing" linkText="查看全部文字" />
      <div className="grid gap-5 md:grid-cols-3" id="recent-writing">{articles.slice(0, 3).map(article => <HomeArticleCard key={article.slug} article={article} />)}</div>
    </section>
    <section className="mt-20" aria-labelledby="selected-photos"><SectionHeading number="02" eyebrow="VISUAL ARCHIVE" title="精选照片" link="/collection" linkText="进入收集页查看全部" />
      <div className="grid gap-6 md:grid-cols-2" id="selected-photos">{photoGroups.map(group => <Link className="photo-group-preview group" key={group.id} to={`/collection#${group.id}`}>
        <div className="relative overflow-hidden"><img src={group.cover} alt={group.subtitle} className="aspect-[1.7] w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]" /><span className="image-count">▣ {group.photos.length} 张照片系列</span></div>
        <div className="px-6 py-6"><h3 className="font-serif text-xl group-hover:text-accent">【示例组】{group.title}</h3><p className="mt-2 text-sm leading-7 text-muted">{group.subtitle}</p><span className="mt-5 inline-block text-link">展开画廊浏览 <Arrow /></span></div>
      </Link>)}</div>
    </section>
    <aside className="closing-note mt-12 flex flex-wrap items-center justify-between gap-4 px-7 py-6"><div><h2 className="font-serif text-xl">保持记录，凝视具体的生活</h2><p className="mt-1 text-sm text-muted">文字与摄影，是继续向前时可以随身带着的线索。</p></div><span className="eyebrow text-accent">持续更新 · 示例</span></aside>
  </main>
}

function categoryFromQuery(value: string | null): Category | null { return categories.find(category => category === value) ?? null }

function Writing() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selected = categoryFromQuery(searchParams.get('category'))
  const visible = selected ? articles.filter(article => article.category === selected) : articles
  return <main className="shell pb-24">
    <div className="page-intro flex flex-wrap items-end justify-between gap-6"><div><div className="eyebrow text-accent">VOL. II · INDEX · DISPATCHES & ARCHIVE</div><h1 className="page-title">文字 <em>Essays & Notes</em></h1><p className="mt-4 max-w-2xl text-sm leading-7">随笔、记录与阅读感想。按时间倒序排列，保持专注、克制且长效的阅读排印。</p></div><span className="subtle-counter">收录条目<br /><strong>{visible.length} 篇</strong></span></div>
    <div className="mt-10 mb-7 flex flex-wrap items-center justify-between gap-5"><div className="flex flex-wrap gap-2" role="group" aria-label="按类别筛选文字">
      <button className={`filter-pill ${selected === null ? 'selected' : ''}`} onClick={() => setSearchParams({})} aria-pressed={selected === null}>全部 ({articles.length})</button>
      {categories.map(category => <button className={`filter-pill ${selected === category ? 'selected' : ''}`} key={category} onClick={() => setSearchParams({ category })} aria-pressed={selected === category}>{category} ({articles.filter(article => article.category === category).length})</button>)}
    </div><span className="text-xs text-muted">☷ 时间倒序</span></div>
    <div className="space-y-3">{visible.map(article => <WritingRow key={article.slug} article={article} selected={selected} />)}</div>
    <div className="mt-10 text-xs text-muted">显示 {visible.length} 篇示例文字</div>
  </main>
}

function WritingRow({ article, selected }: { article: Article; selected: Category | null }) {
  const url = `/writing/${article.slug}${selected ? `?category=${encodeURIComponent(selected)}` : ''}`
  return <article className="writing-row"><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2 text-xs text-muted"><time>{article.date}</time><span className="category-chip">【示例】{article.category}</span></div>
    <h2 className="mt-3 font-serif text-2xl leading-snug"><Link className="hover:text-accent" to={url}>{article.title}</Link></h2>
    <p className="mt-3 max-w-2xl text-sm leading-7">{article.summary}</p>
    <div className="mt-5 flex flex-wrap items-center gap-5 text-xs"><Link className="text-link" to={url}>阅读全文 <Arrow /></Link><span className="text-muted">{article.readMinutes} 分钟阅读</span></div></div>
    {article.image && <Link className="writing-image" to={url} aria-label={`阅读${article.title}`}><img src={article.listImage ?? article.image} alt={article.imageAlt ?? ''} className={`h-full w-full object-cover ${article.slug === 'harbour-evening' ? 'harbour-crop' : ''}`} /></Link>}
  </article>
}

function ArticleDetail() {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const articleIndex = articles.findIndex(item => item.slug === slug)
  const article = articles[articleIndex]
  const selected = categoryFromQuery(searchParams.get('category'))
  const backUrl = searchParams.get('from') === 'home' ? '/' : selected ? `/writing?category=${encodeURIComponent(selected)}` : '/writing'
  if (!article) return <main className="shell py-24"><h1 className="font-serif text-3xl">没有找到这篇文字</h1><Link className="text-link mt-6 inline-block" to="/writing">返回文字列表 →</Link></main>
  const siblingUrl = (item: Article) => `/writing/${item.slug}${selected ? `?category=${encodeURIComponent(selected)}` : ''}`
  const sequence = selected ? articles.filter(item => item.category === selected) : articles
  const position = sequence.findIndex(item => item.slug === article.slug)
  return <main className="shell pb-24"><article className="article-paper mx-auto mt-7 max-w-3xl px-6 py-8 md:px-12 md:py-12">
    <div className="flex flex-wrap items-center justify-between gap-4 text-xs"><Link className="text-link" to={backUrl}><Arrow direction="left" /> 返回{backUrl === '/' ? '首页' : '文字列表'}</Link><span className="text-accent">● {article.category}</span></div>
    <div className="mt-10"><span className="category-chip">【示例】{article.category} · ESSAY ARCHIVE</span><h1 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">{article.title}</h1><div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted"><span>{article.date}</span><span>约 {article.readMinutes} 分钟阅读</span><span>示例文章，待替换</span></div></div>
    {article.image && <figure className="mt-9"><img className={`w-full rounded-sm object-cover ${article.slug === 'harbour-evening' ? 'harbour-hero' : ''}`} src={article.image} alt={article.imageAlt ?? ''} /><figcaption className="mt-2 text-xs text-muted">【示例照片】{article.imageAlt}</figcaption></figure>}
    <div className="prose-article mt-10">{article.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      {article.sections.map((section, i) => <section key={section.title}><div className="eyebrow mt-10 text-accent">SECTION {String(i + 1).padStart(2, '0')}</div><h2>{section.title}</h2>{section.paragraphs.map((paragraph, j) => <p key={j}>{paragraph}</p>)}
        {i === 0 && article.slug === 'morning-notes' && <figure className="inline-photo"><img src="/images/article-2.jpg" alt="带有树叶标本的纸本笔记，示例照片" /><figcaption>【示例照片】纸张与手写记录</figcaption></figure>}
      </section>)}
      {article.quote && <blockquote>“{article.quote}”</blockquote>}
    </div>
    <div className="my-12 text-center text-xs tracking-widest text-muted">· · ·<br />END OF ENTRY · 完</div>
    <div className="grid gap-3 sm:grid-cols-2">{position > 0 && <Link className="sibling-card" to={siblingUrl(sequence[position - 1])}>← 上一篇<span>{sequence[position - 1].title}</span></Link>}{position >= 0 && position < sequence.length - 1 && <Link className="sibling-card" to={siblingUrl(sequence[position + 1])}>下一篇 →<span>{sequence[position + 1].title}</span></Link>}</div>
    <div className="mt-10 text-center"><Link className="button button-primary" to={backUrl}>返回{backUrl === '/' ? '首页' : '文字列表'}</Link></div>
  </article></main>
}

function Lightbox({ groupTitle, photos, index, onClose, onChange }: { groupTitle: string; photos: Photo[]; index: number; onClose: () => void; onChange: (index: number) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onChange((index + 1) % photos.length)
      if (event.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', handleKey) }
  }, [index, onChange, onClose, photos.length])
  const photo = photos[index]
  return <div className="lightbox-backdrop" role="presentation" onMouseDown={onClose}><div className="lightbox-panel" role="dialog" aria-modal="true" aria-label={`${groupTitle}，${photo.title}`} onMouseDown={event => event.stopPropagation()}>
    <div className="lightbox-top"><div className="min-w-0"><span className="text-accent">●</span> <strong className="font-serif text-xl">{groupTitle}</strong> <span className="ml-2 rounded-full bg-stone-100 px-2 py-1 text-xs text-muted">{index + 1} / {photos.length}</span></div><button className="button button-soft" ref={closeRef} onClick={onClose} aria-label="关闭大图">× 关闭 (Esc)</button></div>
    <div className="lightbox-photo relative"><img src={photo.src} alt={photo.alt} /><button className="lightbox-arrow left-4" onClick={() => onChange((index - 1 + photos.length) % photos.length)} aria-label="上一张照片">← 上一张</button><button className="lightbox-arrow right-4" onClick={() => onChange((index + 1) % photos.length)} aria-label="下一张照片">下一张 →</button></div>
    <div className="lightbox-caption"><div><h2 className="font-serif text-2xl">{photo.title}</h2><p className="mt-2 text-sm leading-7 text-muted">{photo.description}</p></div><span className="eyebrow text-accent">示例照片 · 待替换</span></div>
  </div></div>
}

function Collection() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ groupIndex: number; photoIndex: number } | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const open = (groupIndex: number, photoIndex: number, trigger: HTMLButtonElement) => { triggerRef.current = trigger; setSelectedPhoto({ groupIndex, photoIndex }) }
  const close = () => { setSelectedPhoto(null); requestAnimationFrame(() => triggerRef.current?.focus()) }
  const change = (photoIndex: number) => setSelectedPhoto(current => current ? { ...current, photoIndex } : null)
  useEffect(() => { if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView() }, [])
  return <main className="shell pb-24"><div className="page-intro"><div className="eyebrow text-accent">VOL. III · VISUAL ARCHIVE</div><h1 className="page-title">收集 <em>Collected Views</em></h1><p className="mt-4 max-w-2xl text-sm leading-7">把视线停在路上的光、木造空间和桌边细微的日常。点击照片，就在当前页面看大图。</p></div>
    {photoGroups.map((group, groupIndex) => <section className="mt-16 scroll-mt-24" id={group.id} key={group.id} aria-labelledby={`${group.id}-heading`}><div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4"><div><div className="eyebrow text-accent">0{groupIndex + 1} / PHOTO SERIES</div><h2 id={`${group.id}-heading`} className="section-title mt-2">【示例组】{group.title}</h2><p className="mt-2 text-sm text-muted">{group.subtitle}</p></div><span className="text-xs text-muted">{group.photos.length} 张照片</span></div>
      <div className="grid gap-5 md:grid-cols-3">{group.photos.map((photo, photoIndex) => <button className="photo-tile group text-left" key={photo.id} onClick={event => open(groupIndex, photoIndex, event.currentTarget)} aria-label={`查看大图：${photo.title}`}><img src={photo.src} alt={photo.alt} className="aspect-[1.4] w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]" /><div className="flex items-center justify-between gap-2 px-1 py-4"><span className="font-serif text-lg">{photo.title}</span><span className="text-accent">↗</span></div></button>)}</div>
    </section>)}
    {selectedPhoto && <Lightbox groupTitle={photoGroups[selectedPhoto.groupIndex].title} photos={photoGroups[selectedPhoto.groupIndex].photos} index={selectedPhoto.photoIndex} onClose={close} onChange={change} />}
  </main>
}

export default function App() { return <><PageTop /><Header /><Routes><Route path="/" element={<Home />} /><Route path="/writing" element={<Writing />} /><Route path="/writing/:slug" element={<ArticleDetail />} /><Route path="/collection" element={<Collection />} /><Route path="*" element={<main className="shell py-24"><h1 className="font-serif text-3xl">这个页面不存在</h1><Link className="text-link mt-6 inline-block" to="/">返回首页 →</Link></main>} /></Routes><Footer /></> }
