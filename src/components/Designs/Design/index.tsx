/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/lib/shadcn/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FormattedDesign } from "../../../types/Design";

interface DesignProps {
  data: FormattedDesign
  onClick: (design: FormattedDesign) => void;
}

export function Design({ data: design, onClick }: DesignProps) {
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
    <Carousel className="group w-full overflow-hidden rounded-2xl bg-slate-100" setApi={setApi}>
      <CarouselContent onClick={() => onClick(design)} className="cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
        <div className="absolute -bottom-8 flex w-full flex-col gap-2 px-8 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:opacity-100">
          <span className="truncate text-lg font-bold text-white">{design.title}</span>
          <span className="mr-auto rounded-lg bg-brand-600 px-2 py-1 font-semibold text-white">
            {`ID: ${design.id}`}
          </span>
        </div>

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
  );
}
