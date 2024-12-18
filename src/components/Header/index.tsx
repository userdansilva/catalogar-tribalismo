import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

import { Search } from "./Search";

import logo from "../../../public/images/logo-nova.svg";

function Navegation() {
  return (
    <nav className="child:px-4 child:py-2 child:outline-brand-600 flex flex-col gap-8 md:flex-row">
      <a target="_blank" href="https://www.tribalismo.com.br/">Site da Loja</a>
      <a target="_blank" href="https://www.instagram.com/tribalismo/">Instagram</a>
    </nav>
  );
}

export function Header() {
  const [openMenu, setMenuOpen] = useState(false);

  const handleToggleMenuMobile = () => {
    const bodyStyle = document.body.style;
    bodyStyle.overflowY = !openMenu ? "hidden" : "";
    setMenuOpen(!openMenu);
  };

  return (
    <header className="md:24 h-20 border-b border-slate-100">
      <div className="md:24 mx-auto flex h-20 max-w-[1760px] items-center justify-between px-8">
        <button
          className="w-8 py-2 text-2xl text-slate-300 md:hidden"
          onClick={handleToggleMenuMobile}
        >
          {openMenu ? <FiX /> : <FiMenu />}
        </button>
        <Link href="/" className="mr-8">
          <Image src={logo} alt="Logo da Tribalismo" width={150} height={30} />
        </Link>
        <div className="hidden md:block">
          <Navegation />
        </div>
        <div className="ml-auto hidden md:block">
          <Search />
        </div>
        <span />
      </div>

      {openMenu && (
        <div className="absolute z-10 flex size-full flex-col gap-8 bg-white p-8">
          <Search onSearch={handleToggleMenuMobile} />
          <Navegation />
        </div>
      )}
    </header>
  );
}
