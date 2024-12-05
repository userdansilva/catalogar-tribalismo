import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import { Button } from "@/lib/shadcn/ui/button";
import instagramIcon from "@/assets/icons/instagram.svg";
import tiktokIcon from "@/assets/icons/tiktok.svg";
import whatsappIcon from "@/assets/icons/whatsapp-dark.svg";
import { Search } from "lucide-react";
import { useState } from "react";
import { SearchForm } from "../forms/search-form";

function LogoLink() {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Logo escrito Tribalismo"
        height={20}
      />
    </Link>
  );
}

function OfficialWebsiteLink() {
  return (
    <Button asChild variant="link">
      <a
        href="https://tribalismo.com.br/"
        target="_blank"
      >
        Site Oficial
      </a>
    </Button>
  );
}

function TiktokLink() {
  return (
    <Button asChild variant="link">
      <a
        href="https://www.tiktok.com/@tribalismo?lang=pt-BR"
        target="_blank"
      >
        <Image
          src={tiktokIcon}
          alt="Logo tiktok"
          width={16}
          height={16}
        />
        TikTok
      </a>
    </Button>
  );
}

function InstagramLink() {
  return (
    <Button asChild variant="link">
      <a
        href="https://www.instagram.com/tribalismo/"
        target="_blank"
      >
        <Image
          src={instagramIcon}
          alt="Logo instagram"
          width={16}
          height={16}
        />
        Instagram
      </a>
    </Button>
  );
}

function WhatsappLink() {
  return (
    <Button asChild variant="link">
      <a
        href="https://api.whatsapp.com/send/?phone=557730286168&text=Oi,+acabei+de+ver+o+catalogo+da+Tribalismo+e+quero+fazer+um+or%C3%A7amento!&type=phone_number&app_absent=0"
        target="_blank"
      >
        <Image
          src={whatsappIcon}
          alt="Logo whatsapp"
          width={16}
          height={16}
        />
        Whatsapp
      </a>
    </Button>
  );
}

export function Header() {
  const [isSearchMode, setIsSearchingMode] = useState(false);

  return (
    <header className="w-full border-b border-slate-100 py-4">
      <div className="container">
        {/* Mobile */}
        {!isSearchMode && (
          <div className="md:hidden">
            <div className="flex items-center justify-between gap-6">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://api.whatsapp.com/send/?phone=557730286168&text=Oi,+acabei+de+ver+o+catalogo+da+Tribalismo+e+quero+fazer+um+or%C3%A7amento!&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <Image
                    src={whatsappIcon}
                    alt="Logo whatsapp"
                    width={16}
                    height={16}
                  />
                </a>
              </Button>

              <LogoLink />

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchingMode(true)}
              >
                <Search className="size-4" />
              </Button>
            </div>
          </div>
        )}

        {isSearchMode && (
          <div className="flex items-center">
            <div className="flex-1">
              <SearchForm />
            </div>

            <Button variant="ghost" onClick={() => setIsSearchingMode(false)}>
              Cancelar
            </Button>
          </div>
        )}

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="flex items-center gap-6">
            <LogoLink />

            <div className="mr-auto">
              <div className="mr-auto flex items-center gap-4">
                <OfficialWebsiteLink />
                <InstagramLink />
                <TiktokLink />
                <WhatsappLink />
              </div>
            </div>

            <SearchForm />
          </div>
        </div>
      </div>
    </header>
  );
}
