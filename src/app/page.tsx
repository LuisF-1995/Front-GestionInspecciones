'use client'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <h1>Home page</h1>
      <nav>
        <ul>
          <li>
            <Link href={`./pages/company/admin`}>Admin</Link>
          </li>
          <li>
            <Link href="./pages/company">Empresa</Link>
          </li>
          <li>
            <Link href="./pages/cliente">Clientes</Link>
          </li>
          <li>
            <Link href="./pages/constructor">Constructores</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}