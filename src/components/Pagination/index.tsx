import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  total: number
  limit: number
  currentPage: number
  goToPage: (page: number) => void
}

export function Pagination(props: PaginationProps) {
  const {
    total, limit, currentPage, goToPage,
  } = props;

  const totalPages = Math.ceil(total / limit);

  const createIndexes = () => {
    const initial = [];

    for (let i = currentPage - 1; i <= currentPage + 1; i += 1) {
      if (i <= totalPages && i >= 1) {
        initial.push(
          <button
            type="button"
            className={`${i === currentPage && "border-b-2 border-brand-600"}`}
            key={i}
            onClick={() => goToPage(i)}
          >
            {i}
          </button>,
        );
      }
    }

    return initial;
  };

  return (
    <div className="flex gap-4 *:p-4">
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage - 1 < 1}
      >
        <ChevronLeft className="size-4" />
      </button>

      {currentPage === totalPages && currentPage - 2 > 0 && (
        <button
          type="button"
          onClick={() => goToPage(currentPage - 2)}
        >
          {currentPage - 2}
        </button>
      )}

      {createIndexes()}

      {currentPage === 1 && currentPage + 2 <= totalPages && (
        <button
          type="button"
          onClick={() => goToPage(currentPage + 2)}
        >
          {currentPage + 2}
        </button>
      )}

      <button
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage + 1 >= totalPages}
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}
