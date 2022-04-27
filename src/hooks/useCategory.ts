import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { Category } from '../types/Category'

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchData = async () => {
    try {
      const result = (await api.get('/categories')) as AxiosResponse<Category[]>
      setCategories(result.data)
    } catch {
      throw new Error('Failed to request categories!')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    categories
  }
}
