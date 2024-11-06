import { cn } from "@/lib/utils";
import { Category as CategoryType } from "../../../types/Category";
import { useDesign } from "../../../hooks/useDesign";
import { getIconsByName } from "../../../utils/get-icon-by-name";

interface CategoryProps {
  data: CategoryType
  isActive?: boolean
}

export function Category({ data: category, isActive }: CategoryProps) {
  const { handleSelectCategory } = useDesign();

  return (
    <div className="flex flex-col text-center first:ml-8 last:mr-8 md:first:ml-0 md:last:mr-0">
      <button
        type="button"
        className={cn(
          `m-1 flex size-16 items-center justify-center rounded-full text-2xl outline-none ring-brand-600
          focus:ring-offset-2 focus-visible:shadow-lg focus-visible:shadow-brand-300 focus-visible:ring-2`,
          isActive ? "bg-brand-100 text-brand-600 ring-2 ring-offset-2" : "bg-slate-100 text-slate-300",
        )}
        onClick={() => handleSelectCategory(category.id)}
      >
        {getIconsByName(category.name)}
      </button>
      <span className="mt-2 inline-block w-[72px] truncate text-center">
        {category.name}
      </span>
    </div>
  );
}
