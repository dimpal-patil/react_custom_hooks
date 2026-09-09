import usePagination from "../hooks/usePagination";

function PaginationDemo() {
    const numbers = [];

    for (let i = 1; i <= 100; i++) {
    numbers.push(i);
    }

    const {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        itemsOnCurrentPage,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage,
    } = usePagination(numbers.length, 10, 1);

    const currentItems = numbers.slice(startIndex, endIndex);

return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
        <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">

                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-6 text-center text-white">
                    <h1 className="text-2xl font-bold uppercase tracking-wide">
                        Pagination
                    </h1>

                    <p className="mt-2 font-medium">
                        Page {currentPage} of {totalPages}
                    </p>

                    <p className="text-sm text-indigo-100">
                        {itemsOnCurrentPage} items on this page
                    </p>
                </div>

                {/* Items */}
                <div className="p-6">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                        {currentItems.map((number) => (
                            <div
                                key={number}
                                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center font-medium text-slate-700"
                            >
                                {number}
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button
                            className="rounded-xl bg-slate-700 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                            onClick={prevPage}
                            disabled={!canPrevPage}
                        >
                            ← Previous
                        </button>

                        <button
                            className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
                            onClick={nextPage}
                            disabled={!canNextPage}
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}


export default PaginationDemo;