import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import tiktokIcon from "@/assets/icons/tiktok.svg";
import whatsappIcon from "@/assets/icons/whatsapp.svg";
import { Button } from "@/lib/shadcn/ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 py-10">
      <div className="container flex flex-col items-center justify-between gap-10 md:flex-row">
        <Link href="/">
          <Image src={logo} alt="Logo escrito Tribalismo" height={30} />
        </Link>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Button asChild>
            <a
              href="https://api.whatsapp.com/send/?phone=557730286168&text=Oi,+acabei+de+ver+o+catalogo+da+Tribalismo+e+quero+fazer+um+or%C3%A7amento!&type=phone_number&app_absent=0"
              target="_blank"
            >
              <Image
                src={whatsappIcon}
                alt="Logo instagram"
                className="mr-2 size-4"
              />
              Fazer orçamento
            </a>
          </Button>

          <nav className="flex items-center gap-4">
            <Button asChild variant="link">
              <a
                href="https://tribalismo.com.br/"
                target="_blank"
              >
                Site Oficial
              </a>
            </Button>

            <Button asChild variant="link">
              <a
                href="https://www.instagram.com/tribalismo/"
                target="_blank"
              >
                <Image
                  src={instagramIcon}
                  alt="Logo instagram"
                  className="mr-2 size-4"
                />
                Instagram
              </a>
            </Button>

            <Button asChild variant="link">
              <a
                href="https://www.tiktok.com/@tribalismo?lang=pt-BR"
                target="_blank"
              >
                <Image
                  src={tiktokIcon}
                  alt="Logo tiktok"
                  className="mr-2 size-4"
                />
                TikTok
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
