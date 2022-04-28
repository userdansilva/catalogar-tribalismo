import { useDesign } from '../../hooks/useDesign'
import { Category as CategoryType } from '../../types/Category'
import { Category } from './Category'

import styles from './styles.module.scss'

interface CategoriesProps {
  data: CategoryType[]
}

export const Categories = ({ data: categories }: CategoriesProps) => {
  const { category: selectedCategory } = useDesign()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>Categorias</span>
        <div className={styles.categories}>
          <Category
            data={{ id: 0, name: 'Todas', favorite: 'N' }}
            isActive={selectedCategory === 0}
          />
          {categories.map(category => (
            <Category
              data={category}
              key={category.id}
              isActive={selectedCategory === category.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
