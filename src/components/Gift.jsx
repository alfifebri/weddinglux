import React, { useState } from 'react'
import { CreditCard, Copy, Check } from 'lucide-react'

export default function Gift({ gifts }) {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const handleCopy = (accountNumber, index) => {
    navigator.clipboard.writeText(accountNumber)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section id="gift" className="py-20 px-4 bg-stone-950 text-stone-100">
      <div className="max-w-2xl mx-auto space-y-10 text-center">
        <div className="space-y-2" data-aos="fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-400">
            Tanda Kasih
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100">
            Amplop Digital
          </h2>
          <p className="text-stone-400 text-sm max-w-md mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun jika ingin memberi hadiah, Anda dapat menggunakan amplop
            digital di bawah ini:
          </p>
        </div>

        <div className="space-y-6">
          {gifts &&
            gifts.map((item, idx) => (
              <div
                key={idx}
                className="bg-stone-900/80 border border-stone-800 p-6 rounded-2xl space-y-3 shadow-xl max-w-md mx-auto"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.bank}
                </div>

                <p className="text-2xl font-mono tracking-wider font-bold text-stone-200">
                  {item.accountNumber || item.number}
                </p>

                <p className="text-xs text-stone-400">
                  a.n{' '}
                  <span className="text-amber-200 font-medium">
                    {item.name || item.holder || item.accountHolder}
                  </span>
                </p>

                <button
                  onClick={() =>
                    handleCopy(item.accountNumber || item.number, idx)
                  }
                  className="mt-2 inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-amber-200 text-xs font-medium px-4 py-2 rounded-lg transition-all cursor-pointer border border-stone-700"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Berhasil Disalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Salin No. Rekening
                    </>
                  )}
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
