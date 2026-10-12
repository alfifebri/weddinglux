import React, { useState, useRef, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { weddingData } from './data/weddingData'
import Cover from './components/Cover'
import Hero from './components/Hero'
import Event from './components/Event'
import Gallery from './components/Gallery'
import Gift from './components/Gift'
import Rsvp from './components/Rsvp'
import Navigation from './components/Navigation'
import LinkGenerator from './components/LinkGenerator'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false) // State untuk mengecek mode admin
  const audioRef = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })

    // Cek apakah URL mengandung ?mode=admin atau ?admin=true
    const params = new URLSearchParams(window.location.search)
    if (params.get('mode') === 'admin' || params.get('admin') === 'true') {
      setIsAdmin(true)
    }
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
    setTimeout(() => {
      AOS.refresh()
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {})
      }
    }, 100)
  }

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="min-h-screen bg-stone-950 font-sans text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      <audio ref={audioRef} src={weddingData.backgroundMusic} loop />

      {!isOpen && <Cover data={weddingData} onOpen={handleOpen} />}

      {isOpen && (
        <main className="pb-24">
          <div id="hero">
            <Hero data={weddingData} />
          </div>
          <Event event={weddingData.event} />
          <Gallery photos={weddingData.gallery} />
          <Gift gifts={weddingData.gifts} />
          <Rsvp />

          {/* Generator HANYA muncul jika link dibuka dengan mode admin! */}
          {isAdmin && (
            <LinkGenerator
              groomNickname={weddingData.groom.nickname}
              brideNickname={weddingData.bride.nickname}
            />
          )}

          <Navigation isPlaying={isPlaying} toggleMusic={toggleMusic} />

          <footer className="py-8 text-center text-xs text-stone-500 border-t border-stone-900">
            Created with ❤️ by Digital Invitation Studio
          </footer>
        </main>
      )}
    </div>
  )
}
