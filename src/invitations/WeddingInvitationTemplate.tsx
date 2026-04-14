import { useEffect, useMemo, useState } from 'react'

interface Countdown {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

const targetDate = new Date('2026-07-18T18:00:00')

const carouselImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80',
]

const itinerary = [
  { time: '06:00 pm', title: 'Ceremonia religiosa', icon: '⛪' },
  { time: '07:15 pm', title: 'Cóctel de bienvenida', icon: '🥂' },
  { time: '08:15 pm', title: 'Baile de novios', icon: '💃' },
  { time: '09:00 pm', title: 'Recepción', icon: '📍' },
  { time: '10:00 pm', title: 'Cena', icon: '🍽️' },
  { time: '11:45 pm', title: 'Fiesta', icon: '🎉' },
]

const getCountdown = (): Countdown => {
  const now = new Date().getTime()
  const diff = Math.max(targetDate.getTime() - now, 0)

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutos = Math.floor((diff / (1000 * 60)) % 60)
  const segundos = Math.floor((diff / 1000) % 60)

  return { dias, horas, minutos, segundos }
}

export const WeddingInvitationTemplate = () => {
  const [countdown, setCountdown] = useState<Countdown>(() => getCountdown())
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length)
    }, 3000)

    return () => clearInterval(slider)
  }, [])

  const countdownItems = useMemo(
    () => [
      { label: 'Días', value: countdown.dias },
      { label: 'Horas', value: countdown.horas },
      { label: 'Minutos', value: countdown.minutos },
      { label: 'Segundos', value: countdown.segundos },
    ],
    [countdown],
  )

  return (
    <div className="overflow-hidden rounded-3xl border border-[#ead9cc] bg-[#f6f1ec] text-[#22323f]">
      <section className="relative h-[84vh] min-h-[520px] w-full">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80"
          alt="Portada de invitación"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <p className="font-serif text-6xl drop-shadow md:text-7xl">Diana & Hugo</p>
          <p className="mt-3 text-3xl font-bold">18/07/2026</p>
          <p className="text-xl font-semibold">06:00 pm</p>
        </div>
      </section>

      <section className="bg-white px-4 py-10 text-center md:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {countdownItems.map((item) => (
              <article key={item.label} className="rounded-2xl border border-[#eadfd2] bg-[#fffdfb] p-4">
                <p className="text-4xl font-black text-[#0f2432]">{item.value.toString().padStart(2, '0')}</p>
                <p className="text-sm font-semibold text-[#5e6d79]">{item.label}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-8 font-serif text-5xl text-[#4a5f70]">¡ Nos Casamos !</h3>
          <p className="mx-auto mt-6 max-w-md whitespace-pre-line text-xl leading-10 text-[#5d6d78]">
            {'El amor que ha crecido en nosotros\ndesde la primera vez que nos\nconocimos, nos ha llevado hoy a\nbuscar en Dios la gracia para\nreforzar nuestro amor y nuestro hogar,\npor esta razón después de 8 años\nen los que hemos compartido aventuras,\nhistorias y grandes momentos hemos\ndecidido casarnos y compartir\ncon las personas más especiales\npara nosotros, esta gran felicidad'}
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:px-10">
        <h3 className="mb-5 text-center font-serif text-5xl text-[#4a5f70]">Galería</h3>
        <div className="relative mx-auto h-[520px] max-w-4xl overflow-hidden rounded-3xl border border-[#e5d8ca] bg-white shadow-lg">
          {carouselImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Foto ${index + 1} de la pareja`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-8">
        <h3 className="mb-7 text-center font-serif text-5xl text-[#4a5f70]">Itinerario</h3>
        <div className="mx-auto max-w-4xl">
          <div className="relative grid gap-5">
            <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[#e8dbcf] md:block" />
            {itinerary.map((item, index) => (
              <article key={`${item.time}-${item.title}`} className="grid items-center gap-3 md:grid-cols-2 md:gap-6">
                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'} rounded-2xl border border-[#eadfd2] bg-[#fffaf6] p-4`}>
                  <p className="text-2xl font-black text-[#102838]">{item.time}</p>
                  <p className="text-lg font-semibold text-[#5c6b77]">{item.title}</p>
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2 md:text-left' : 'md:text-right'} text-3xl`}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5e8dd]">{item.icon}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <h3 className="mb-6 text-center font-serif text-5xl text-[#4a5f70]">Ubicaciones</h3>
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-[#e6d8ca] bg-white shadow-sm">
            <div className="p-5 text-center">
              <h4 className="font-serif text-4xl text-[#4d6172]">Ceremonia</h4>
              <p className="mt-1 text-sm text-[#637482]">Parroquia San José, Valle del Cauca, Colombia</p>
            </div>
            <iframe
              title="Mapa ceremonia"
              src="https://www.google.com/maps?q=Parroquia+San+Jose+La+Victoria+Valle+del+Cauca&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </article>

          <article className="overflow-hidden rounded-3xl border border-[#e6d8ca] bg-white shadow-sm">
            <div className="p-5 text-center">
              <h4 className="font-serif text-4xl text-[#4d6172]">Fiesta de bodas</h4>
              <p className="mt-1 text-sm text-[#637482]">Finca La Isabela, La Unión, Valle del Cauca, Colombia</p>
            </div>
            <iframe
              title="Mapa recepción"
              src="https://www.google.com/maps?q=La+Union+Valle+del+Cauca+Finca+La+Isabela&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-14 text-center md:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#ecdcd0] bg-[#fff9f5] p-6">
          <p className="font-serif text-5xl text-[#4a5f70]">RSVP</p>
          <p className="mt-4 text-2xl text-[#253645]">Hola *Nombre del invitado*, por favor confirma tu asistencia.</p>
          <p className="mt-4 text-2xl font-extrabold text-[#102838]">Tu invitación es para 2 adulto(s)</p>

          <div className="mt-7 grid gap-3">
            <button type="button" className="rounded-full bg-[#dacdc2] px-6 py-3 text-lg font-bold text-[#1f3040]">
              Confirmar
            </button>
            <button type="button" className="rounded-full bg-[#dacdc2] px-6 py-3 text-lg font-bold text-[#1f3040]">
              Confirmar para menos invitados
            </button>
            <button type="button" className="text-lg font-bold text-[#5c6e7b] underline">
              No puedo asistir
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
