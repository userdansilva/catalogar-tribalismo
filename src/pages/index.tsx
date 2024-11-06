/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";
import Head from "next/head";

import type { GetStaticProps, NextPage } from "next";

import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { Categories } from "../components/Categories";
import { Designs } from "../components/Designs";
import { Header } from "../components/Header";
import { Pagination } from "../components/Pagination";
import { Products } from "../components/Products";
import { Footer } from "../components/Footer";

import { FormattedDesign } from "../types/Design";
import { Category } from "../types/Category";
import { Product } from "../types/Product";

import { DesignProvider, useDesign } from "../hooks/useDesign";

import { getDesigns } from "../data/getDesigns";
import { getCategories } from "../data/getCategories";
import { getProducts } from "../data/getProducts";
import { Searching } from "../components/Searching";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  designs: FormattedDesign[]
  categories: Category[]
  products: Product[]
}

function Content({ categories, products }: Pick<HomeProps, "categories" | "products">) {
  const {
    designs, total, limit, page, handleChangePage,
  } = useDesign();

  const { query } = useRouter();

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => setIsSearching(!!query.search), [query]);

  return (
    <main className={inter.className}>
      <Header />

      <Categories data={categories} />

      <Products data={products} />

      {isSearching && <Searching />}

      <Designs data={designs} />

      {total > designs.length && (
        <div className="mt-12 flex justify-center">
          <Pagination
            total={total}
            limit={limit}
            currentPage={page}
            goToPage={handleChangePage}
          />
        </div>
      )}

      <Footer />
    </main>
  );
}

const Home: NextPage<HomeProps> = ({ designs: designsCached, categories, products }) => (
  <>
    <Head>
      <title>Catálogo de Artes - Tribalismo</title>
      <meta
        name="description"
        content="Milhares de opções de artes e frases para você e seu grupo se inspirarem!"
      />
    </Head>

    <DesignProvider designs={designsCached}>
      <Content categories={categories} products={products} />
    </DesignProvider>
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const designs = await getDesigns();
  const categories = await getCategories();
  const products = await getProducts();

  return {
    props: {
      designs,
      categories,
      products,
    },
    revalidate: 60 * 60 * 1 * 1, // 1 hour
  };
};
