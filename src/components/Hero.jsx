import React from 'react'

export default function Hero({ data }) {
  const bgPhoto =
    data.heroBgPhoto ||
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80'

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden bg-stone-950">
      {/* Background Foto Lebih Strong (Opacity 50%) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 filter blur-[1.5px] scale-105 pointer-events-none"
        style={{ backgroundImage: `url('${bgPhoto}')` }}
      />

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-stone-950/85 via-stone-950/60 to-stone-950/90 pointer-events-none" />

      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-137.5 bg-amber-500/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Konten Utama */}
      <div className="relative z-10 max-w-4xl w-full space-y-12">
        {/* Sub-header & Judul */}
        <div className="space-y-4 max-w-2xl mx-auto" data-aos="fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-400 font-semibold drop-shadow">
            PERNIKAHAN
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-amber-100 drop-shadow-lg">
            {data.groom.nickname} & {data.bride.nickname}
          </h2>
          <p className="text-stone-100 text-sm md:text-base leading-relaxed pt-2 max-w-lg mx-auto font-light drop-shadow">
            "Maha Suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan. Ya Allah semoga berkenan Engkau menikahkan
            kami:"
          </p>
        </div>

        {/* Kartu Profil Mempelai */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto px-2">
          {/* Mempelai Pria */}
          <div
            className="bg-stone-950/80 backdrop-blur-md border border-amber-500/35 p-8 rounded-3xl flex flex-col items-center text-center space-y-4 shadow-2xl hover:border-amber-400/60 transition-all"
            data-aos="fade-right"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-amber-500/40 blur-sm"></div>
              <img
                src={data.groom.photo}
                alt={data.groom.name}
                className="relative w-36 h-36 rounded-full object-cover border-2 border-amber-400 shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-amber-100">
                {data.groom.name}
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                {data.groom.parents}
              </p>
            </div>
          </div>

          {/* Mempelai Wanita */}
          <div
            className="bg-stone-950/80 backdrop-blur-md border border-amber-500/35 p-8 rounded-3xl flex flex-col items-center text-center space-y-4 shadow-2xl hover:border-amber-400/60 transition-all"
            data-aos="fade-left"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-amber-500/40 blur-sm"></div>
              <img
                src={data.bride.photo}
                alt={data.bride.name}
                className="relative w-36 h-36 rounded-full object-cover border-2 border-amber-400 shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-amber-100">
                {data.bride.name}
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                {data.bride.parents}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
