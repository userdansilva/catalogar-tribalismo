import { useDesign } from '../../../hooks/useDesign'
import { Product as ProductType } from '../../../types/Product'
import styles from './styles.module.scss'

interface ProductProps {
  data: ProductType
  isActive?: boolean
}

export const Product = ({ data: product, isActive }: ProductProps) => {
  const { handleSelectProduct } = useDesign()

  return (
    <button
      className={`${styles.button} ${isActive && styles.active}`}
      onClick={() => handleSelectProduct(product.id)}
    >
      {product.name}
    </button>
  )
}
