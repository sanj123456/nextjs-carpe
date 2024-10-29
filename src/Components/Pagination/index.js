"use client";
import React from 'react'
import "./pagination.scss"
export default function Pagination({ setcurruntPage, pageCount  , curruntPage }) {
//pagecount means last page
    function prevPage() {
        setcurruntPage?.((prevState) => (curruntPage === 1 ? 1 : prevState - 1));
    }
    function nextPage() {
        setcurruntPage?.((prevState) =>
            curruntPage === pageCount ? prevState : prevState + 1
        );
    }
 
    // const pageArray = [...new Array(pageCount).fill(0)].map((_, i) => i + 1);
    // console.log(pageArray)
    return <div className="pagination outer-padding">
        <button disabled={!(pageCount > 1) || curruntPage === 1} type='button' onClick={prevPage} className="page-change-btn">
            <img src='/previous-page.svg' />
        </button>
        { [...new Array((pageCount)).fill(0)].map((_, i) => i + 1)?.map((page) => {
            if (
                page === 1 ||
                curruntPage === page ||
                curruntPage + 1 === page ||
                page === curruntPage - 1 ||
                page === pageCount- 1 ||
                page === pageCount
            ) {
                return (
                    <>
                        <button
                            key={page}
                            type='button'
                            onClick={() => {  setcurruntPage?.(page)}}
                            className={` ${curruntPage === page ? "currunt-page" : "other-page"
                                }  page-nomber-btn`}
                        >
                            {page}
                        </button>
                        {page === pageCount - 2 && (
                            <span key={"dot"+page} className="dots">
                                ....
                            </span>
                        )}
                    </>
                );
            }

            if (page === pageCount - 2)
                return (
                    <span key={"dot"+page} className="dots">....</span>
                );

            return null;
        })}
        <button disabled={!(pageCount > 1) || (curruntPage === pageCount)} type='button' onClick={nextPage} className="page-change-btn">
            <img src='/next-page.svg' />
        </button>
    </div>
}

