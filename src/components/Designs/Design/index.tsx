import Image from 'next/image'
import { FormattedDesign } from '../../../types/Design'

interface DesignProps {
  data: FormattedDesign
  onClick: (design: FormattedDesign) => void;
}

export const Design = ({ data: design, onClick }: DesignProps) => {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-100 outline-none focus-visible:shadow-lg focus-visible:shadow-brand-400 focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
      onClick={() => onClick(design)}
      tabIndex={0}
    >
      <Image src={design.images[0].webp} alt={design.title} width={600} height={600} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <div className="absolute -bottom-8 flex w-full flex-col gap-2 px-8 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:opacity-100">
        <span className="truncate text-lg text-white">{design.title}</span>
        <span className="text-whiter mr-auto rounded-lg bg-brand-600 px-2 py-1 font-semibold text-white">
          ID: {design.id}
        </span>
      </div>
    </div>
  )
}
