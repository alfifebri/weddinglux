import React, { useState } from 'react'
import { Share2, Copy, Check, MessageSquare } from 'lucide-react'

export default function LinkGenerator({ groomNickname, brideNickname }) {
  const [guestName, setGuestName] = useState('')
  const [copied, setCopied] = useState(false)

  // Buat URL lengkap berdasarkan lokasi domain saat ini
  const baseUrl =
    typeof window !== 'undefined'
      ? window.location.origin + window.location.pathname
      : ''
  const generatedLink = guestName
    ? `${baseUrl}?to=${encodeURIComponent(guestName)}`
    : baseUrl

  // Format Pesan WhatsApp Standar
  const shareMessage = `Kepada Yth. Bapak/Ibu/Saudara/i ${guestName || '[Nama Tamu]'}

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Anda untuk menghadiri acara pernikahan kami:

*${groomNickname} & ${brideNickname}*

Berikut link undangan digital Anda:
${generatedLink}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Terima Kasih.`

  const handleCopy = () => {
    if (!guestName.trim()) return
    navigator.clipboard.writeText(shareMessage)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-12 px-4 bg-stone-950 text-stone-100 border-t border-amber-500/20">
      <div className="max-w-xl mx-auto space-y-6 bg-stone-900/90 border border-amber-500/30 p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-md">
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 bg-amber-500/10 text-amber-400 rounded-full mb-1">
            <Share2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl md:text-2xl font-serif text-amber-100">
            Generator Link Tamu WA
          </h3>
          <p className="text-xs text-stone-400">
            Fitur khusus pengantin / admin untuk membuat pesan WhatsApp otomatis
            per tamu undangan.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
              Nama Tamu Undangan
            </label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Contoh: Budi Santoso / Pak RT & Keluarga"
              className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 text-sm rounded-xl p-3.5 outline-none transition-all"
            />
          </div>

          {/* Preview Format Pesan WA */}
          <div>
            <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">
              Preview Pesan Undangan
            </label>
            <div className="bg-stone-950/80 border border-stone-800/80 p-3.5 rounded-xl text-xs text-stone-300 font-mono whitespace-pre-line leading-relaxed max-h-40 overflow-y-auto">
              {shareMessage}
            </div>
          </div>

          <button
            onClick={handleCopy}
            disabled={!guestName.trim()}
            className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
              guestName.trim()
                ? 'bg-amber-600 hover:bg-amber-500 text-stone-950 shadow-lg shadow-amber-600/20'
                : 'bg-stone-800 text-stone-500 cursor-not-allowed'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">
                  Pesan WA Berhasil Disalin!
                </span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Salin Teks & Link WhatsApp
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
