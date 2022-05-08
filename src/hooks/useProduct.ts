import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

import { api } from '../lib/api'

import { Product } from '../types/Product'

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchDate = async () => {
    try {
      const result = (await api.get('/products')) as AxiosResponse<Product[]>
      setProducts(result.data)
    } catch {
      throw new Error('Failed to request products!')
    }
  }

  useEffect(() => {
    fetchDate()
  }, [])

  return {
    products
  }
}
