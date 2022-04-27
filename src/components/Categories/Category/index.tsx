import Image from 'next/image'
import { Category as CategoryType } from '../../../types/Category'
import caneca from '../../../../public/images/categories/caneca.jpg'
import styles from './styles.module.scss'
import { useDesign } from '../../../hooks/useDesign'

interface CategoryProps {
  data: CategoryType
  isActive?: boolean
}

export const Category = ({ data: category, isActive }: CategoryProps) => {
  const { handleSelectCategory } = useDesign()

  return (
    <div className={styles.container}>
      <div className={`${styles.imageContainer} ${isActive && styles.active}`}>
        <button className={styles.image} onClick={() => handleSelectCategory(category.id)}>
          <Image src={caneca} alt="Caneca" height={63} width={63} />
        </button>
      </div>
      <span>{category.name}</span>
    </div>
  )
}
