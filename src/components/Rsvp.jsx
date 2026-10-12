import React, { useState } from 'react'
import { Send, MessageSquare } from 'lucide-react'

export default function Rsvp() {
  const [wishes, setWishes] = useState([
    {
      name: 'Budi Santoso',
      status: 'Hadir',
      message:
        'Selamat Alfi & Putri! Semoga menjadi keluarga yang sakinah mawaddah warahmah.',
    },
    {
      name: 'Siti Rahma',
      status: 'Hadir',
      message: 'Lancar sampai hari H yaa! Nggak sabar mau dateng.',
    },
  ])
  const [form, setForm] = useState({ name: '', status: 'Hadir', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.message) return
    setWishes([form, ...wishes])
    setForm({ name: '', status: 'Hadir', message: '' })
  }

  return (
    <section id="rsvp" className="py-20 px-4 bg-stone-900 text-stone-100">
      <div className="max-w-2xl mx-auto space-y-10">
        <div className="text-center space-y-2" data-aos="fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-400">
            Konfirmasi & Doa
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100">
            RSVP & Ucapan
          </h2>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-4"
          data-aos="fade-up"
        >
          <div>
            <label className="block text-xs text-amber-200 mb-1">
              Nama Anda
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-stone-900 border border-stone-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500"
              placeholder="Masukkan nama"
            />
          </div>
          <div>
            <label className="block text-xs text-amber-200 mb-1">
              Konfirmasi Kehadiran
            </label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full bg-stone-900 border border-stone-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500"
            >
              <option value="Hadir">Saya Akan Hadir</option>
              <option value="Tidak Hadir">Maaf, Tidak Bisa Hadir</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-amber-200 mb-1">
              Pesan & Doa
            </label>
            <textarea
              required
              rows="3"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-stone-900 border border-stone-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500"
              placeholder="Tuliskan ucapan & doa..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold py-3 rounded-lg flex justify-center items-center gap-2"
          >
            <Send className="w-4 h-4" /> Kirim Ucapan
          </button>
        </form>

        {/* List Ucapan */}
        <div
          className="space-y-4 max-h-80 overflow-y-auto pr-2"
          data-aos="fade-up"
        >
          {wishes.map((w, i) => (
            <div
              key={i}
              className="bg-stone-950/60 p-4 rounded-xl border border-stone-800/80 space-y-1"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-amber-200 text-sm">
                  {w.name}
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${w.status === 'Hadir' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'}`}
                >
                  {w.status}
                </span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {w.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
