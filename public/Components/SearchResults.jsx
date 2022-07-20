import React, { useState } from "react";
import Image from "next/image";

const SearchResults = ({
  fetchedRecipes,
  currentPage,
  setCurrentPage,
  getRecipeDetails,
}) => {
  const pageLimit = 10;
  const start = (currentPage - 1) * pageLimit;
  const end = start + pageLimit;
  const pages = +Math.ceil(fetchedRecipes?.length / pageLimit);
  const prev = (e) => {
    const target = e.target;
    if (target.closest(".btn-prev") && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const next = (e) => {
    const target = e.target;
    if (target.closest(".btn-next") && currentPage <= pages - 1) {
      setCurrentPage(currentPage + 1);
      if (currentPage === pages) return;
    }
  };

  return (
    <div className='sidebar'>
      <ul className='flex flex-1 flex-col py-[3rem]'>
        {fetchedRecipes?.slice(start, end).map((item, index) => (
          <li key={item.id} onClick={() => getRecipeDetails(item.id)}>
            <a className='flex  gap-8 py-[1.5rem] px-[3.25rem] items-center hover:bg-[#f2efee] cursor-pointer'>
              <Image
                src={`${item.image_url}`}
                alt='item__image'
                width={56}
                height={56}
                className='rounded-full'
              />
              <div>
                <h3 className='text-[#f38e82] max-w-[25rem] text-[1.45rem] overflow-hidden text-ellipsis whitespace-nowrap uppercase'>
                  {item.title}
                </h3>
                <h2 className='text-[#918581] text-[1.15rem] uppercase font-semibold'>
                  {item.publisher}
                </h2>
              </div>
            </a>
          </li>
        ))}
      </ul>
      {pages > 1 && (
        <div className='mb-8 flex justify-around items-end h-[31px]'>
          <button
            onClick={prev}
            className='btn-prev bg-[#f9f5f3] text-[#f38e82] text-[1.3rem] py-[0.5rem] px-[1.8rem] capitalize font-semibold rounded-full flex gap-3 items-center justify-center transition-all  duration-200 hover:bg-[#f3ded4]'
          >
            <span>prev</span>
          </button>
          <button
            onClick={(e) => next(e)}
            className='btn-next bg-[#f9f5f3] text-[#f38e82] text-[1.3rem] py-[0.5rem] px-[1.8rem] capitalize font-semibold rounded-full flex gap-3 items-center justify-center transition-all duration-200 hover:bg-[#f3ded4] '
          >
            <span>next</span>
          </button>
        </div>
      )}
    </div>
  );
};
export default SearchResults;
