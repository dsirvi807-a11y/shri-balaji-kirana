"use client"

import { useState } from "react"
import { ArrowRight, Heart, Menu, Search, ShoppingBag, Sparkles, X } from "lucide-react"
import "./page.css"

const categories = [
  { name: "Fresh produce", note: "Farm-picked daily", icon: "🥬", tone: "green" },
  { name: "Dairy & eggs", note: "Wholesome goodness", icon: "🥛", tone: "yellow" },
  { name: "Pantry staples", note: "Stock up & save", icon: "🌾", tone: "orange" },
  { name: "Snacks & drinks", note: "Little joys", icon: "🍪", tone: "pink" },
]
const products = [
  { name: "Premium Basmati Rice", detail: "5 kg · Shri Balaji select", price: "₹569", old: "₹620", icon: "🌾", tag: "Bestseller" },
  { name: "Fresh Farm Milk", detail: "1 litre · Full cream", price: "₹68", old: "₹72", icon: "🥛", tag: "Fresh today" },
  { name: "Mango Alphonso", detail: "1 kg · Ratnagiri", price: "₹299", old: "₹350", icon: "🥭", tag: "Seasonal" },
  { name: "Cold-pressed Groundnut Oil", detail: "1 litre · Wood pressed", price: "₹185", old: "₹210", icon: "🫙", tag: "Pure & natural" },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cart, setCart] = useState(0)
  const [liked, setLiked] = useState<number[]>([])
  const addToCart = () => setCart((value) => value + 1)

  return <main>
    <div className="topbar">Free delivery on orders above ₹499 <span>·</span> Same-day delivery in your neighborhood</div>
    <header className="header">
      <a className="brand" href="#top"><span className="brand-mark">SB</span><span><strong>Shri Balaji</strong><small>KIRANA STORE</small></span></a>
      <nav className={menuOpen ? "nav open" : "nav"}><a href="#shop">Shop</a><a href="#categories">Categories</a><a href="#story">Our story</a><a href="#contact">Contact</a></nav>
      <div className="header-actions"><button className="icon-button" aria-label="Search"><Search /></button><button className="bag" onClick={addToCart}><ShoppingBag /> <span>Cart ({cart})</span></button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <section className="hero" id="top"><div className="hero-copy"><div className="eyebrow"><Sparkles /> GOOD FOOD, GOOD MOOD</div><h1 className="serif">Your everyday<br /><em>goodness,</em> delivered.</h1><p>From fresh farm produce to pantry favorites, we bring a little more care to your everyday grocery run.</p><div className="hero-actions"><a className="primary-button" href="#shop">Shop groceries <ArrowRight /></a><a className="text-link" href="#story">Why Shri Balaji <ArrowRight /></a></div><div className="trust"><div className="avatars"><span>R</span><span>A</span><span>P</span></div><div><div className="stars">★★★★★</div><small>Loved by 2,000+ families</small></div></div></div><div className="hero-art"><div className="sun"></div><div className="leaf leaf-one">✦</div><div className="leaf leaf-two">✧</div><div className="basket"><div className="basket-handle"></div><div className="basket-items"><span>🍅</span><span>🥖</span><span>🥬</span><span>🍋</span></div><div className="basket-body"></div></div><div className="floating-card"><span>✦</span><div><strong>Picked fresh</strong><small>Every morning</small></div></div></div></section>

    <section className="section categories" id="categories"><div className="section-heading"><div><p className="eyebrow">SHOP BY CATEGORY</p><h2 className="serif">Good things for every table.</h2></div><a className="text-link" href="#shop">View all categories <ArrowRight /></a></div><div className="category-grid">{categories.map((category) => <a href="#shop" className={`category-card ${category.tone}`} key={category.name}><span className="category-icon">{category.icon}</span><div><h3>{category.name}</h3><p>{category.note}</p></div><ArrowRight /></a>)}</div></section>

    <section className="section shop" id="shop"><div className="section-heading"><div><p className="eyebrow">OUR PICKS FOR YOU</p><h2 className="serif">The good stuff.</h2></div><a className="text-link" href="#shop">See all products <ArrowRight /></a></div><div className="product-grid">{products.map((product, index) => <article className="product-card" key={product.name}><div className="product-visual"><span className="product-tag">{product.tag}</span><button className={liked.includes(index) ? "like active" : "like"} onClick={() => setLiked((values) => values.includes(index) ? values.filter((value) => value !== index) : [...values, index])} aria-label="Add to wishlist"><Heart /></button><span className="product-emoji">{product.icon}</span></div><div className="product-info"><h3>{product.name}</h3><p>{product.detail}</p><div className="product-bottom"><div><strong>{product.price}</strong><del>{product.old}</del></div><button className="add-button" onClick={addToCart}>Add</button></div></div></article>)}</div></section>

    <section className="story" id="story"><div className="story-art"><div className="story-circle"><span>Since</span><strong>1998</strong><small>serving with care</small></div><span className="story-sticker">Made with<br />care</span></div><div className="story-copy"><p className="eyebrow">A LITTLE ABOUT US</p><h2 className="serif">Your neighborhood,<br /><em>just a little closer.</em></h2><p>We started with a small shop, a big heart, and a simple belief: groceries should feel personal. Today, Shri Balaji is still family-run, still local, and still choosing quality like we&apos;re shopping for our own kitchen.</p><a className="text-link" href="#contact">Meet our family <ArrowRight /></a></div></section>

    <section className="newsletter" id="contact"><div><p className="eyebrow">STAY IN THE LOOP</p><h2 className="serif">A little goodness,<br />in your inbox.</h2></div><form onSubmit={(event) => event.preventDefault()}><label htmlFor="email">Email address</label><div className="email-row"><input id="email" type="email" placeholder="you@example.com" /><button className="primary-button">Sign me up <ArrowRight /></button></div><small>No spam. Just fresh picks, offers & good news.</small></form></section>
    <footer><div className="brand"><span className="brand-mark">SB</span><span><strong>Shri Balaji</strong><small>KIRANA STORE</small></span></div><p>Freshness for every day.</p><span>© 2024 Shri Balaji Kirana</span></footer>
  </main>
}
