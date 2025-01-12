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
          <Image
            src={logo}
            alt="Logo escrito Tribalismo"
            width={180}
          />
        </Link>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Button asChild>
            <a
              href="https://tintim.link/whatsapp/713fa0a4-d866-43a7-829e-96344d0fe1a9/9c6390cc-5f40-4428-bb97-3c989a2bc820"
              target="_blank"
            >
              <Image
                src={whatsappIcon}
                alt="Logo whatsapp"
                width={16}
                height={16}
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
                  width={16}
                  height={16}
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
                  width={16}
                  height={16}
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
