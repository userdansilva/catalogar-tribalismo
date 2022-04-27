import { useDesign } from '../../hooks/useDesign'
import { Product as ProductType } from '../../types/Product'
import { Product } from './Product'
import styles from './styles.module.scss'

interface ProductsProps {
  data: ProductType[]
}

export const Products = ({ data: products }: ProductsProps) => {
  const { product: selectedProduct } = useDesign()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.products}>
          <Product data={{ id: 0, name: 'Todos' }} isActive={selectedProduct === 0} />
          {products.map(product => (
            <Product data={product} key={product.id} isActive={selectedProduct === product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
