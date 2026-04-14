import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-10">
      <section className="w-full rounded-[2.2rem] border border-white/60 bg-white/75 p-8 text-center shadow-2xl backdrop-blur md:p-14">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7f668f]">Plataforma de gestión de eventos</p>
        <h1 className="mt-3 font-serif text-6xl leading-tight text-[#2d2037] md:text-7xl">Celebra Hub</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#69537c] md:text-lg">
          Organiza invitados e invitaciones para bodas, 15 años y celebraciones memorables con una experiencia visual elegante.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/auth/login"
            className="rounded-2xl bg-[#4e2d66] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#3f2453]"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/auth/register"
            className="rounded-2xl border border-[#6f4a8d] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#4e2d66] transition hover:bg-[#f5eafc]"
          >
            Registro
          </Link>
        </div>
      </section>
    </main>
  )
}
