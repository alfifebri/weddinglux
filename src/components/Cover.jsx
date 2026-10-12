import React, { useEffect, useState } from 'react'
import { MailOpen, Heart } from 'lucide-react'

export default function Cover({ data, onOpen }) {
  const bgPhoto =
    data.heroBgPhoto ||
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80'
  const [guestName, setGuestName] = useState('')

  useEffect(() => {
    // Membaca parameter ?to=Nama+Tamu dari URL
    const params = new URLSearchParams(window.location.search)
    const to = params.get('to')
    if (to) {
      setGuestName(to)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950 text-stone-100 px-4 text-center overflow-hidden">
      {/* Background Foto */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55 filter blur-[1px] scale-105"
        style={{ backgroundImage: `url('${bgPhoto}')` }}
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-stone-950/80 via-stone-950/50 to-stone-950/90" />

      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-amber-500/20 rounded-full blur-[90px] pointer-events-none" />

      {/* Konten Utama */}
      <div className="relative z-10 max-w-md w-full space-y-6">
        <div className="flex justify-center text-amber-400">
          <Heart className="w-10 h-10 animate-bounce drop-shadow" />
        </div>

        <p className="tracking-[0.25em] uppercase text-xs text-amber-200/90 font-semibold drop-shadow">
          THE WEDDING OF
        </p>

        <h1 className="text-4xl md:text-5xl font-serif text-amber-100 drop-shadow-lg">
          {data.groom.nickname} & {data.bride.nickname}
        </h1>

        <p className="text-sm text-stone-200 drop-shadow">{data.event.date}</p>

        {/* Kotak Nama Tamu Yang Dituju */}
        {guestName && (
          <div className="bg-stone-950/60 backdrop-blur-md border border-amber-500/30 p-4 rounded-2xl max-w-xs mx-auto space-y-1 shadow-lg">
            <p className="text-[11px] text-stone-400 uppercase tracking-widest">
              Kepada Yth. Bapak/Ibu/Saudara/i:
            </p>
            <p className="text-lg font-serif text-amber-200 font-bold capitalize">
              {guestName}
            </p>
          </div>
        )}

        <div className="pt-4">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-7 py-3.5 rounded-full shadow-xl shadow-amber-600/30 transition-all hover:scale-105 cursor-pointer"
          >
            <MailOpen className="w-5 h-5" />
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  )
}
