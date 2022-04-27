import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/images/logo-black.svg'
import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <Image src={logo} alt="Logo da Tribalismo" />
        <div>
          <p>Tribalismo | Produtos Personalizados</p>
          <p>Milhares de opções de artes e frases para você e seu grupo se inspirarem!</p>
        </div>
        <Link href="/">Compre agora</Link>
      </div>
    </footer>
  )
}
