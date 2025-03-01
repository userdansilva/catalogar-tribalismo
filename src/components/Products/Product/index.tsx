import { useDesign } from "../../../hooks/useDesign";

import { Product as ProductType } from "../../../types/Product";

interface ProductProps {
  data: ProductType
  isActive?: boolean
}

export function Product({ data: product, isActive }: ProductProps) {
  const { handleSelectProduct } = useDesign();

  return (
    <button
      className={`min-w-max rounded-lg border-transparent px-4 py-2 outline-none first:ml-8
      last:mr-8 focus-visible:border-b-2 focus-visible:border-brand-600 md:first:ml-0
      md:last:mr-0
      ${isActive ? "bg-brand-200 font-[600] text-brand-600" : ""}`}
      onClick={() => handleSelectProduct(product.id)}
    >
      {product.name}
    </button>
  );
}
