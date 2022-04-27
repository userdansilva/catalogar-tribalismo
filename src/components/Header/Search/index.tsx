import { FiSearch } from 'react-icons/fi'
import styles from './styles.module.scss'

export const Search = () => {
  return (
    <div className={styles.container}>
      <FiSearch />
      <input type="text" placeholder="Pesquisar" />
    </div>
  )
}
