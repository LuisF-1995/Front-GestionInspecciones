'use client'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <h1>Home page</h1>
      <nav>
        <ul>
          <li>
            <Link href={`./company/admin`}>Admin</Link>
          </li>
          <li>
            <Link href="./company">Empresa</Link>
          </li>
          <li>
            <Link href="./cliente">Clientes</Link>
          </li>
          <li>
            <Link href="./constructor">Constructores</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}