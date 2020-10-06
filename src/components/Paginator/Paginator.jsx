import React, { useState } from 'react';
import PaginStyle from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={PaginStyle.paginator}>
        {portionNumber > 1 &&
            <p className={PaginStyle.prev} onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</p>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span style={{borderColor: 'red'}} className={cn({
                    [PaginStyle.selectedPage]: currentPage === p}, PaginStyle.pageNumber)}
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p);
                    }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <p className={PaginStyle.next} onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</p>
        }
    </div>
}

export default Paginator;