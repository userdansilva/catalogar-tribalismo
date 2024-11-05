import Image from "next/image";
import {
  CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle,
} from "@headlessui/react";
import { FiX } from "react-icons/fi";
import { FormattedDesign } from "../../../types/Design";
import { getIconsByName } from "../../../utils/get-icon-by-name";

interface DesignDetailModalProps {
  isOpen: boolean
  onClose: () => void
  design: FormattedDesign
}

export function DesignDetailModal({
  design, isOpen, onClose,
}: DesignDetailModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogBackdrop className="fixed inset-0 bg-slate-900/30" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="relative mx-auto max-h-full max-w-[1120px] overflow-x-scroll rounded-xl bg-white p-10 lg:min-w-full xl:min-w-[1120px]">
          <CloseButton as={() => (
            <button
              onClick={() => onClose()}
              className="absolute right-3 top-3 outline-brand-600 focus:text-brand-600 md:right-6 md:top-6"
            >
              <FiX size={24} />
            </button>
          )}
          />

          <div className="flex flex-col gap-8 lg:flex-row">
            <Image src={design.images[0].webp} alt={design.title} width={600} height={600} />

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
