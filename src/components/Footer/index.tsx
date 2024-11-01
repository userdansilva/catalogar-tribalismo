import Image from 'next/image'

import logo from '../../../public/images/logo-nova.svg'

export const Footer = () => {
  return (
    <footer className="mt-16 border-t-[1px] border-slate-100 py-8">
      <div className="mx-auto flex max-w-[1760px] flex-col items-start justify-between gap-8 px-8 md:flex-row md:items-center">
        <Image src={logo} alt="Logo da Tribalismo" width={150} height={30} />
        <div>
          <p>Tribalismo | Produtos Personalizados</p>
          <p>Milhares de opções de artes e frases para você e seu grupo se inspirarem!</p>
        </div>
        <a href="https://www.tribalismo.com.br/" target="_blank" className=" whitespace-nowrap rounded-lg bg-brand-600 p-4 font-[600] text-white">
          Compre agora
        </a>
      </div>
    </footer>
  )
}
