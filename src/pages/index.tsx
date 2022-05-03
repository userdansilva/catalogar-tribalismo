import { Fragment, useEffect } from 'react'
import Head from 'next/head'

import type { GetStaticProps, NextPage } from 'next'

import { Categories } from '../components/Categories'
import { Designs } from '../components/Designs'
import { Header } from '../components/Header'
import { Pagination } from '../components/Pagination'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'

import { FormattedDesign } from '../types/Design'
import { Category } from '../types/Category'
import { Product } from '../types/Product'

import { useDesign } from '../hooks/useDesign'

import { getDesigns } from '../data/getDesigns'
import { getCategories } from '../data/getCategories'
import { getProducts } from '../data/getProducts'

interface HomeProps {
  designs: FormattedDesign[]
  categories: Category[]
  products: Product[]
}

const Home: NextPage<HomeProps> = ({designs:designsCached, categories, products}) => {
  const { designs, total, limit, page, handleChangePage, getDesigns } = useDesign()

  useEffect(() => {
    getDesigns(designsCached)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Catálogo de Artes - Tribalismo</title>
        <meta name="description" content="Milhares de opções de artes e frases para você e seu grupo se inspirarem!" />
      </Head>

      <Header />

      <Categories data={categories}/>

      <Products data={products}/>

      <Designs data={designs}/>

      {total > designs.length && (

        <Pagination total={total} limit={limit} currentPage={page} goToPage={handleChangePage}/>
      )}

      <Footer />
    </Fragment>
  )
}

export default Home

export const getStaticProps:GetStaticProps = async () => {
  const designs = await getDesigns()
  const categories = await getCategories()
  const products = await getProducts()

  return {
    props: {
      designs,
      categories,
      products
    },
    revalidate: 60 * 60 * 60 * 24 * 7 //7 days
  }
}