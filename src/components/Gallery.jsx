import React from 'react'

export default function Gallery({ photos }) {
  return (
    <section id="gallery" className="py-20 px-4 bg-stone-950 text-stone-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2" data-aos="fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-400">
            Momen Bahagia
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100">
            Galeri Foto
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((url, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl border border-stone-800"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <img
                src={url}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
