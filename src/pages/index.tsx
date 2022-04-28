import type { NextPage } from 'next'
import { Fragment } from 'react'
import Head from 'next/head'

import { useCategory } from '../hooks/useCategory'
import { useDesign } from '../hooks/useDesign'
import { useProduct } from '../hooks/useProduct'

import { Categories } from '../components/Categories'
import { Designs } from '../components/Designs'
import { Header } from '../components/Header'
import { Pagination } from '../components/Pagination'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  const { categories } = useCategory()
  const { products } = useProduct()
  const { designs, total, limit, page, handleChangePage } = useDesign()

  return (
    <Fragment>
      <Head>
        <title>Tribalismo</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

      <h1>teste dnv</h1>

      <Categories data={categories}/>

      <Products data={products}/>

      <Designs data={designs}/>

      <Pagination total={total} limit={limit} currentPage={page} goToPage={handleChangePage}/>

      <Footer />
    </Fragment>
  )
}

export default Home
