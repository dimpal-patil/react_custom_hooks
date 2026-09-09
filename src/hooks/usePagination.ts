import { useState } from "react";


function usePagination(totalItems:number, itemsPerPage:number=10, initialPage:number = 1){

    const [currentPage, setCurrentPage] = useState(initialPage)
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsOnCurrentPage = Math.min(endIndex, totalItems) - startIndex

    const canNextPage = currentPage < totalPages;
    const canPrevPage = currentPage > 1;

    function setPage(pageNumber:number){
        const safePageNumber = Math.min(totalPages, Math.max(1, pageNumber))
        setCurrentPage(safePageNumber)
    }

    function nextPage(){
        if(canNextPage){
            setPage(currentPage + 1)
        }
    }

    function prevPage(){
        if(canPrevPage){
            setPage(currentPage - 1)
        }
    }

    return {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        itemsOnCurrentPage,
        setPage,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage
    };


}

export default usePagination;