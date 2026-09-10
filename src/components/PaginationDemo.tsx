
import usePagination from "../hooks/usePagination";

function PaginationDemo() {
    const numbers =[];
    for(let i = 1; i<=100; i++){
        numbers.push(i);
    }

    const {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        itemsOnCurrentPage,
        setPage,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage,
    } = usePagination(numbers.length, 10, 1);

    const currentItems = numbers.slice(startIndex, endIndex);

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-10">
            <div className="mx-auto max-w-2xl">
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-red-200">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-6 text-center text-white">
                        <h1 className="text-2xl font-bold uppercase tracking-wide">
                            Pagination Demo
                        </h1>

                        <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                            <div>
                                <p className="text-indigo-200">Total Items</p>
                                <p className="text-lg font-bold">{numbers.length}</p>
                            </div>

                            <div>
                                <p className="text-indigo-200">Per Page</p>
                                <p className="text-lg font-bold">10</p>
                            </div>

                            <div>
                                <p className="text-indigo-200">Page</p>
                                <p className="text-lg font-bold">
                                    {currentPage} / {totalPages}
                                </p>
                            </div>
                        </div>
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

                        {/* Page Numbers */}
                        <div className="mt-6 flex flex-wrap justify-center gap-2">
                            {Array.from({ length: totalPages }, (_, index) => {
                                const pageNumber = index + 1;

                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => setPage(pageNumber)}
                                        className={`h-9 w-9 rounded-lg font-semibold transition ${
                                            currentPage === pageNumber
                                                ? "bg-indigo-600 text-white"
                                                : "bg-slate-100 text-slate-700 hover:bg-indigo-100"
                                        }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Previous / Next */}
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

