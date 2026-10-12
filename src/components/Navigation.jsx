import React from 'react'
import {
  Home,
  Heart,
  Calendar,
  Image,
  Gift,
  MessageCircle,
  Music,
  Disc,
} from 'lucide-react'

export default function Navigation({ isPlaying, toggleMusic }) {
  const navItems = [
    { href: '#hero', icon: Heart, label: 'Mempelai' },
    { href: '#event', icon: Calendar, label: 'Acara' },
    { href: '#gallery', icon: Image, label: 'Galeri' },
    { href: '#gift', icon: Gift, label: 'Gift' },
    { href: '#rsvp', icon: MessageCircle, label: 'RSVP' },
  ]

  const handleScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Tombol Play/Pause Musik Melayang (Pojok Kiri Bawah) */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-20 left-4 z-40 bg-stone-900/90 border border-amber-500/40 text-amber-300 p-3 rounded-full shadow-2xl backdrop-blur-md hover:scale-110 transition-all cursor-pointer flex items-center justify-center"
        title={isPlaying ? 'Pause Musik' : 'Play Musik'}
      >
        <Disc
          className={`w-5 h-5 ${isPlaying ? 'animate-spin text-amber-400' : 'text-stone-400'}`}
        />
      </button>

      {/* Floating Bottom Nav Bar (Tengah Bawah) */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-stone-950/85 border border-amber-500/30 backdrop-blur-lg px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 md:gap-4">
        {navItems.map((item, idx) => {
          const Icon = item.icon
          return (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="flex flex-col items-center gap-0.5 text-stone-400 hover:text-amber-300 transition-colors px-2 py-1"
            >
              <Icon className="w-4 h-4" />
              <span className="text-[9px] uppercase tracking-wider">
                {item.label}
              </span>
            </a>
          )
        })}
      </nav>
    </>
  )
}
