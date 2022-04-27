import Image from 'next/image'

import styles from './styles.module.scss'

import logo from '../../../public/images/logo-black.svg'
import Link from 'next/link'
import { Search } from './Search'

export const Header = () => (
  <header className={styles.container}>
    <div className={styles.content}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo da Tribalismo" width={150} height={30} />
      </div>
      <nav>
        <Link href="/">
          <a>Site da Loja</a>
        </Link>
        <Link href="/">
          <a>Instagram</a>
        </Link>
      </nav>
      <Search />
    </div>
  </header>
)
