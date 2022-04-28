import Image from 'next/image'

import styles from './styles.module.scss'

import logo from '../../../public/images/logo-black.svg'
import Link from 'next/link'
import { Search } from './Search'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

const Navegation = () => (
  <nav>
    <Link href="/">
      <a>Site da Loja</a>
    </Link>
    <Link href="/">
      <a>Instagram</a>
    </Link>
  </nav>
)

export const Header = () => {
  const [openMenu, setMenuOpen] = useState(false)

  const handleOpenMenuMobile = () => {
    const bodyStyle = document.body.style
    bodyStyle.overflowY = !openMenu ? 'hidden' : ''
    setMenuOpen(!openMenu)
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <button className={styles.bars} onClick={handleOpenMenuMobile}>
          <FaBars />
        </button>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo da Tribalismo" width={150} height={30} />
        </div>
        <Navegation />
        <div className={styles.search}>
          <Search />
        </div>
      </div>

      {openMenu && (
        <div className={styles.menuMobile}>
          <Search />
          <Navegation />
        </div>
      )}
    </header>
  )
}
