import React, { useState, useEffect } from 'react'
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react'

export default function Event({ event }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(event.targetDate).getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [event.targetDate])

  return (
    <section id="event" className="py-20 px-4 bg-stone-900 text-stone-100">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4" data-aos="fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-400">
            Rangkaian Acara
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100">
            Jadwal & Lokasi
          </h2>
          <p className="text-stone-400 text-sm">{event.date}</p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto mt-6">
            {[
              { label: 'Hari', value: timeLeft.days },
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-stone-950 border border-amber-500/30 rounded-xl p-3 text-center"
              >
                <span className="block text-xl font-bold text-amber-200">
                  {item.value}
                </span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Akad & Resepsi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="bg-stone-950 border border-stone-800 p-8 rounded-2xl space-y-4"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-serif text-amber-200">Akad Nikah</h3>
            <div className="space-y-2 text-sm text-stone-300">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" /> {event.akad.time}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" /> {event.akad.venue}
              </p>
              <p className="text-xs text-stone-400 pl-6">
                {event.akad.address}
              </p>
            </div>
          </div>

          <div
            className="bg-stone-950 border border-stone-800 p-8 rounded-2xl space-y-4"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-serif text-amber-200">
              Resepsi Pernikahan
            </h3>
            <div className="space-y-2 text-sm text-stone-300">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />{' '}
                {event.resepsi.time}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />{' '}
                {event.resepsi.venue}
              </p>
              <p className="text-xs text-stone-400 pl-6">
                {event.resepsi.address}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center" data-aos="zoom-in">
          <a
            href={event.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold px-6 py-3 rounded-full transition-all"
          >
            <MapPin className="w-4 h-4" /> Buka Google Maps{' '}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
