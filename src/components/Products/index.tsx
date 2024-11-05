import { Product } from "./Product";

import { useDesign } from "../../hooks/useDesign";

import { Product as ProductType } from "../../types/Product";

interface ProductsProps {
  data: ProductType[] | null
}

export function Products({ data: products }: ProductsProps) {
  const { product: selectedProduct } = useDesign();

  return (
    <div className="mt-4">
      <div className="flex max-w-[1760px] justify-center md:mx-auto md:px-8 md:py-0">
        <div className="no-scrollbar flex gap-x-4 gap-y-0 overflow-x-scroll md:overflow-hidden">
          <Product data={{ id: 0, name: "Todos" }} isActive={selectedProduct === 0} />
          {products?.map((product) => (
            <Product data={product} key={product.id} isActive={selectedProduct === product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
