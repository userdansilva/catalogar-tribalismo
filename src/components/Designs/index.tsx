import { FormattedDesign } from '../../types/Design'
import { Design } from './Design'
import styles from './styles.module.scss'
import notResultImage from '../../../public/images/no_result.svg'
import Image from 'next/image'

interface DesingnsProps {
  data: FormattedDesign[]
}

export const Designs = ({ data: designs }: DesingnsProps) => {
  const isDesignsEmpty = designs.length === 0

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        {isDesignsEmpty ? (
          <div className={styles.noResult}>
            <div>
              <Image src={notResultImage} alt="Imagem de mulher procurando algo" />
            </div>
            Nenhum item foi encontrado nessa busca!
          </div>
        ) : (
          <div className={styles.designs}>
            {designs.map(design => (
              <Design data={design} key={design.id} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
