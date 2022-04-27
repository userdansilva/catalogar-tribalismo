import Image from 'next/image'
import { FormattedDesign } from '../../../types/Design'
import styles from './styles.module.scss'

interface DesignProps {
  data: FormattedDesign
}

export const Design = ({ data: design }: DesignProps) => {
  return (
    <div className={styles.container}>
      <Image src={design.images[0].webp} alt={design.title} width={600} height={600} />
    </div>
  )
}
