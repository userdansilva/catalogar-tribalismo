import React, { useEffect } from 'react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import ReactModal from 'react-modal'
import { FormattedDesign } from '../../../types/Design'
import styles from './styles.module.scss'
import { getIconsById } from '../../../services/icons'

interface DesignProps {
  data: FormattedDesign
}

ReactModal.setAppElement('#__next')

export const Design = ({ data: design }: DesignProps) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleCloseModal = () => setModalOpen(false)

  useEffect(() => {
    const bodyStyle = document.body.style
    if (isModalOpen) {
      setModalOpen(true)
      bodyStyle.overflowY = 'hidden'
    } else {
      setModalOpen(false)
      bodyStyle.overflowY = ''
    }
  }, [isModalOpen])

  return (
    <Fragment>
      <div className={styles.container} onClick={() => setModalOpen(true)}>
        <Image src={design.images[0].webp} alt={design.title} width={600} height={600} />
        <div className={styles.cover}></div>
        <div className={styles.info}>
          <span className={styles.title}>{design.title}</span>
          <span className={styles.id}>ID: {design.id}</span>
        </div>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Image src={design.images[0].webp} alt={design.title} width={600} height={600} />
        <div className={styles.modalContent}>
          <div className={styles.categories}>
            {design.categories.map(category => (
              <span key={category.id}>
                {getIconsById(category.id).icon} {category.name}
              </span>
            ))}
          </div>
          <span className={styles.title}>{design.title}</span>
          <span className={styles.id}>ID: {design.id}</span>
        </div>
      </ReactModal>
    </Fragment>
  )
}
