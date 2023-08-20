
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'


function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
       <Image src="/img/logo.svg" width={300} height={40} alt='imagen logotipo'/>
       <nav className={styles.navegacion}>
       <Link href="/" >Inicio</Link>
       <Link href="/tienda">Tienda</Link>
       <Link href="/nosotros">Nosotros</Link>
       <Link href="/blog">Blog</Link>
       <Link href="/carrito" legacyBehavior>
        <a>
          <Image width={30} height={25} src="/img/carrito.png" alt='imagen carrito'/>
        </a>
       </Link>
       </nav>
      </div>
    </header>
  )
}

export default Header
