import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { ParsedUrlQueryInput } from 'querystring'
import { FormattedDesign } from '../types/Design'

interface DesignContextProps {
  designs: FormattedDesign[]
  getDesigns: (designs: FormattedDesign[]) => void
  total: number
  limit: number
  page: number
  handleChangePage: (page: number) => void
  product: number
  handleSelectProduct: (id: number) => void
  category: number
  handleSelectCategory: (id: number) => void
  handleSearch: (serach: string) => void
}

const DesignContext = createContext<DesignContextProps>({} as DesignContextProps)

export const DesignProvider = ({ children }: { children: ReactNode }) => {
  const [designsAll, setDesignsAll] = useState<FormattedDesign[]>([])
  const [designs, setDesigns] = useState<FormattedDesign[]>([])
  const [page, setPage] = useState(1)
  const [product, setProcuct] = useState(0)
  const [category, setCategory] = useState(0)
  const [search, setSearch] = useState('')
  const [total, setTotal] = useState(0)

  const limit = 16

  const router = useRouter()

  const routerUpdater = (
    value: number | string,
    type: 'page' | 'product' | 'category' | 'search'
  ) => {
    const { product, category, page, search } = router.query

    const query = {
      search: type === 'search' ? value : search,
      product: type === 'product' ? value : product,
      category: type === 'category' ? value : category,
      page: type === 'page' ? value : page
    } as ParsedUrlQueryInput

    if ((type === 'page' && value === 1) || (type !== 'page' && !page)) delete query.page
    if ((type === 'product' && !value) || (type !== 'product' && !product)) delete query.product
    if ((type === 'category' && !value) || (type !== 'category' && !category)) delete query.category
    if ((type === 'search' && !value) || (type !== 'search' && !search)) delete query.search

    router.push({ query })
  }

  const getDesigns = (designs: FormattedDesign[]) => {
    setDesignsAll(designs)
    setDesigns(designs)
  }

  useEffect(() => {
    const { page, product, category, search } = router.query

    if (product) setProcuct(parseInt(product as string))
    if (category) setCategory(parseInt(category as string))
    if (search) setSearch(search as string)
    if (page) setPage(parseInt(page as string))
    else setPage(1)
  }, [router.query])

  const handleChangePage = (page: number) => {
    routerUpdater(page, 'page')
    setPage(page)
  }

  const handleSelectProduct = (id: number) => {
    routerUpdater(id, 'product')
    setProcuct(id)
  }

  const handleSelectCategory = (id: number) => {
    routerUpdater(id, 'category')
    setCategory(id)
  }

  const handleSearch = (search: string) => {
    routerUpdater(search, 'search')
    setSearch(search)
  }

  const normalizeString = (value: string) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()

  useEffect(() => {
    const paginateAndFilterDesigns = () => {
      const start = page * limit - limit
      const end = page * limit

      if (product !== 0 || category !== 0 || search !== '') {
        const designs = [...designsAll].filter(design => {
          let hasProduct = true
          if (product !== 0) hasProduct = design.product.id === product

          let hasCategory = true
          if (category !== 0) {
            for (var cat of design.categories) {
              if (cat.id !== category) hasCategory = false
            }
          }

          if (!design.tags) design.tags = ''

          let hasSearch = true
          if (search !== '')
            hasSearch =
              normalizeString(design.title).includes(normalizeString(search)) ||
              normalizeString(design.tags).includes(normalizeString(search))

          return hasProduct && hasCategory && hasSearch
        }) as FormattedDesign[]

        setTotal(designs.length)
        setDesigns(designs.slice(start, end))
      } else {
        setTotal(designsAll.length)
        const designs = [...designsAll].slice(start, end)
        setDesigns(designs)
      }
    }

    paginateAndFilterDesigns()
  }, [page, designsAll, product, category, search])

  useEffect(() => {
    setTotal(designsAll.length)
  }, [designsAll])

  return (
    <DesignContext.Provider
      value={{
        designs,
        getDesigns,
        total,
        limit,
        page,
        handleChangePage,
        product,
        handleSelectProduct,
        category,
        handleSelectCategory,
        handleSearch
      }}
    >
      {children}
    </DesignContext.Provider>
  )
}

export const useDesign = () => useContext(DesignContext)
