import type { GetStaticProps, NextPage } from 'next'
import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import { useDesign } from '../hooks/useDesign'
import { Categories } from '../components/Categories'
import { Designs } from '../components/Designs'
import { Header } from '../components/Header'
import { Pagination } from '../components/Pagination'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { FormattedDesign } from '../types/Design'
import { Category } from '../types/Category'
import { Product } from '../types/Product'

interface HomeProps {
  designs: FormattedDesign[]
  categories: Category[]
  products: Product[]
}

const Home: NextPage<HomeProps> = ({designs:designsCached, categories, products}) => {
  const { designs, total, limit, page, handleChangePage, setDesignsAll, setDesigns } = useDesign()

  useEffect(() => {
    setDesignsAll(designsCached)
    setDesigns(designsCached)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Tribalismo</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

      <Categories data={categories}/>

      <Products data={products}/>

      <Designs data={designs}/>

      <Pagination total={total} limit={limit} currentPage={page} goToPage={handleChangePage}/>

      <Footer />
    </Fragment>
  )
}

export default Home

export const getStaticProps:GetStaticProps = async () => {
  const resultDesign = await fetch(`${process.env.DOMAIN}/api/designs`)
  const designs = await resultDesign.json() 

  const resultCategory = await fetch(`${process.env.DOMAIN}/api/categories`)
  const categories = await resultCategory.json() 

  const resultProducts = await fetch(`${process.env.DOMAIN}/api/products`)
  const products = await resultProducts.json() 
  
  return {
    props: {
      designs,
      categories,
      products
    },
  }
}