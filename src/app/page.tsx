'use client'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <h1>Home page</h1>
      <Link
        href={`./pages/admin/login`}
      >
        Iniciar sesion
      </Link>
      <Link
        href={`./pages/admin/home`}
      >
        Admin page
      </Link>
      <Link
        href={`./pages/admin/solicitudRegistro`}
      >
        Solicitar acceso a aplicacion
      </Link>
      <Link
        href={`./pages/admin/register`}
      >
        Terminar registro
      </Link>
    </>
  )
}