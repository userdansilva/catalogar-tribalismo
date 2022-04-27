import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { FormattedDesign } from '../types/Design'

interface DesignContextProps {
  designs: FormattedDesign[]
  total: number
  limit: number
  page: number
  handleChangePage: (page: number) => void
  product: number
  handleSelectProduct: (id: number) => void
  category: number
  handleSelectCategory: (id: number) => void
}

const DesignContext = createContext<DesignContextProps>({} as DesignContextProps)

export const DesignProvider = ({ children }: { children: ReactNode }) => {
  const [designsAll, setDesignsAll] = useState<FormattedDesign[]>([])
  const [designs, setDesigns] = useState<FormattedDesign[]>([])
  const [page, setPage] = useState(1)
  const [product, setProcuct] = useState(0)
  const [category, setCategory] = useState(0)
  const [total, setTotal] = useState(0)

  const limit = 16

  const fetchData = async () => {
    try {
      const result = (await api.get('/designs')) as AxiosResponse<FormattedDesign[]>

      setDesigns(result.data)
      setDesignsAll(result.data)
    } catch {
      throw new Error('Failed to request Designs.')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const router = useRouter()

  const handleChangePage = (page: number) => {
    const { product } = router.query

    if (page > 1) router.push(`/?page=${page}${product ? `&product=${product}` : ''}`)
    else if (product) router.push(`/?product=${product}`)
    else router.push('/')

    setPage(page)
  }

  useEffect(() => {
    const { product, page } = router.query

    if (product) setProcuct(parseInt(product as string))

    if (page) setPage(parseInt(page as string))
    else setPage(1)
  }, [router.query])

  const handleSelectProduct = (id: number) => {
    const { category } = router.query

    if (category && id !== 0) router.push(`/?product=${id}&category=${category}`)
    else if (category && id === 0) router.push(`/?category=${category}`)
    else router.push(`/?product=${id}`)

    setProcuct(id)
  }

  useEffect(() => {
    const paginateDesigns = () => {
      const start = page * limit - limit
      const end = page * limit

      if (product !== 0 || category !== 0) {
        const byProduct = (design: FormattedDesign) => design.product.id === product

        const byCategory = (design: FormattedDesign) => {
          for (var cat of design.categories) {
            if (cat.id === category) return true
          }
          return false
        }

        const byProductAndCategory = (design: FormattedDesign) => {
          for (var cat of design.categories) {
            if (cat.id === category && design.product.id === product) return true
          }
          return false
        }

        let designs = [] as FormattedDesign[]

        if (product !== 0 && category === 0) designs = [...designsAll].filter(byProduct)
        if (product === 0 && category !== 0) designs = [...designsAll].filter(byCategory)
        if (product !== 0 && category !== 0) designs = [...designsAll].filter(byProductAndCategory)

        setTotal(designs.length)
        setDesigns(designs.slice(start, end))
      } else {
        const designs = [...designsAll].slice(start, end)
        setDesigns(designs)
      }
    }

    paginateDesigns()
  }, [page, designsAll, product, category])

  const handleSelectCategory = (id: number) => {
    const { product } = router.query

    if (product && id !== 0) router.push(`/?product=${product}&category=${id}`)
    else if (product && id === 0) router.push(`/?product=${product}`)
    else router.push(`/?category=${id}`)

    setCategory(id)
  }

  useEffect(() => {
    setTotal(designsAll.length)
  }, [designsAll])

  return (
    <DesignContext.Provider
      value={{
        designs,
        total,
        limit,
        page,
        handleChangePage,
        product,
        handleSelectProduct,
        category,
        handleSelectCategory
      }}
    >
      {children}
    </DesignContext.Provider>
  )
}

export const useDesign = () => useContext(DesignContext)
