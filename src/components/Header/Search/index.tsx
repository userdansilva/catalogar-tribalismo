import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useDesign } from '../../../hooks/useDesign'
import styles from './styles.module.scss'

export const Search = () => {
  const { handleSearch } = useDesign()
  const [search, setSearch] = useState('')

  const router = useRouter()

  useEffect(() => {
    const { search } = router.query
    if (search) setSearch(search as string)
  }, [router.query])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch(search)
  }

  return (
    <div className={styles.container}>
      <FiSearch />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </form>
    </div>
  )
}
