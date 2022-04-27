import { FormattedDesign } from '../../types/Design'
import { Design } from './Design'
import styles from './styles.module.scss'

interface DesingnsProps {
  data: FormattedDesign[]
}

export const Designs = ({ data: designs }: DesingnsProps) => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.designs}>
          {designs.map(design => (
            <Design data={design} key={design.id} />
          ))}
        </div>
      </div>
    </main>
  )
}
