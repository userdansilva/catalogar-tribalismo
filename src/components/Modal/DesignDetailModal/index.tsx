/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import {
  CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle,
} from "@headlessui/react";
import { FiX } from "react-icons/fi";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/lib/shadcn/ui/carousel";
import { cn } from "@/lib/utils";
import { FormattedDesign } from "../../../types/Design";
import { getIconsByName } from "../../../utils/get-icon-by-name";

function CloseButtonUI(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...props}
      className="absolute right-3 top-3 outline-brand-600 focus:text-brand-600 md:right-6 md:top-6"
    >
      <FiX size={24} />
    </button>
  );
}
interface DesignDetailModalProps {
  isOpen: boolean
  onClose: () => void
  design: FormattedDesign
}

export function DesignDetailModal({
  design, isOpen, onClose,
}: DesignDetailModalProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const isMultiple = design.images.length > 1;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogBackdrop className="fixed inset-0 bg-slate-900/30" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="relative mx-auto max-h-full max-w-[1120px] overflow-x-scroll rounded-xl bg-white p-10 lg:min-w-full xl:min-w-[1120px]">
          <CloseButton as={CloseButtonUI} />

          <div className="flex flex-col gap-8 lg:flex-row">
            <Carousel className="group w-full max-w-[600px] overflow-hidden rounded-2xl bg-slate-100" setApi={setApi}>
              <CarouselContent>
                {design.images.map((image) => (
                  <CarouselItem
                    key={image.id}
                  >
                    <Image src={image.webp} alt={design.title} width={600} height={600} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {isMultiple && (
                <>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />

                  <div className="absolute inset-x-0 bottom-0 flex justify-center p-4">
                    <div className="flex space-x-2">
                      {api?.scrollSnapList().map((_, i) => (
                        <span
                          key={i}
                          className={cn(
                            "block size-2 rounded-full bg-slate-300",
                            (current === (i + 1)) && "bg-brand-600",
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </Carousel>

            <div className="flex flex-1 flex-col gap-3 md:gap-6">
              <div className="flex flex-wrap gap-2">
                {design.categories.map((category) => (
                  <span
                    key={category.id}
                    className="flex items-center gap-1 rounded-md bg-brand-200 px-3 py-1 text-brand-600"
                  >
                    {getIconsByName(category.name)}
                    {" "}
                    {category.name}
                  </span>
                ))}
              </div>
              <DialogTitle className="line-clamp-3 text-2xl font-bold text-slate-800 md:text-3xl">
                {design.title}
              </DialogTitle>
              <span className="mr-auto rounded-md bg-brand-600 px-3 py-1 text-white">
                ID:
                {" "}
                {design.id}
              </span>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
