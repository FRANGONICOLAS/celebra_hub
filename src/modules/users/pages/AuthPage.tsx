import { Link, useLocation, useNavigate } from 'react-router-dom'
import { DemoAccessCard } from '../components/DemoAccessCard'
import { useMockAuth } from '../hooks/useMockAuth'

const tabClass = (isActive: boolean): string =>
  `rounded-xl px-4 py-2 text-sm font-semibold ${
    isActive ? 'bg-[#4e2d66] text-white' : 'bg-[#efe2f7] text-[#4e2d66]'
  }`

export const AuthPage = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { loginDemo } = useMockAuth()
  const isLogin = pathname.endsWith('/login')

  return (
    <main className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-3xl border border-white/60 bg-white/85 p-6 shadow-xl backdrop-blur md:p-8">
        <div className="mb-4 flex gap-2">
          <Link to="/auth/login" className={tabClass(isLogin)}>
            Iniciar sesión
          </Link>
          <Link to="/auth/register" className={tabClass(!isLogin)}>
            Registro
          </Link>
        </div>

        <h2 className="font-serif text-4xl text-[#2d2037]">{isLogin ? 'Bienvenida de vuelta' : 'Crea tu cuenta'}</h2>
        <p className="mt-2 text-sm text-[#6f5a82]">
          {isLogin
            ? 'Por ahora puedes entrar con un clic usando el usuario demo.'
            : 'El registro es visual en esta fase mock, pronto conectaremos autenticación real.'}
        </p>

        <form className="mt-6 space-y-3" onSubmit={(event) => event.preventDefault()}>
          <input placeholder="Correo" className="w-full rounded-xl border border-[#e2d2ee] bg-white p-3" />
          <input placeholder="Contraseña" type="password" className="w-full rounded-xl border border-[#e2d2ee] bg-white p-3" />
          {!isLogin && (
            <input placeholder="Confirmar contraseña" type="password" className="w-full rounded-xl border border-[#e2d2ee] bg-white p-3" />
          )}
          <button
            type="button"
            onClick={() => {
              loginDemo()
              navigate('/panel/invitaciones')
            }}
            className="w-full rounded-xl bg-[#4e2d66] px-4 py-3 text-sm font-semibold text-white"
          >
            {isLogin ? 'Entrar ahora' : 'Crear cuenta y entrar'}
          </button>
        </form>
      </section>

      <DemoAccessCard
        onAccess={() => {
          loginDemo()
          navigate('/panel/invitaciones')
        }}
      />
    </main>
  )
}
