import { Category as CategoryType } from '../../../types/Category'
import styles from './styles.module.scss'
import { useDesign } from '../../../hooks/useDesign'
import { FaBeer } from 'react-icons/fa'
import { getIconsById } from '../../../services/icons'

interface CategoryProps {
  data: CategoryType
  isActive?: boolean
}

export const Category = ({ data: category, isActive }: CategoryProps) => {
  const { handleSelectCategory } = useDesign()

  return (
    <div className={styles.container}>
      <div className={`${styles.iconContainer} ${isActive && styles.active}`}>
        <button className={styles.icon} onClick={() => handleSelectCategory(category.id)}>
          {getIconsById(category.id).icon}
        </button>
      </div>
      <span>{category.name}</span>
    </div>
  )
}
