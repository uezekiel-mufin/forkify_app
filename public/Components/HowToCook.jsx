import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HowToCook = ({ recipeDetails }) => {
  return (
    <div className='md:h-[293px] md:px-[10rem] md:py-[5rem] rounded-r-[5px]'>
      <div className='flex flex-col my-8 md:gap-6 items-center'>
        <h2 className='mb-[2.5rem] text-[#f38e82] text-[2rem] font-bold'>
          How to Cook
        </h2>
        <p className='mb-[3.5rem] mx-8  text-[1.7rem] text-center text-[#918581]'>
          This recipe was carefully designed and tested by All Recipes. Please
          check out directions at their website.
        </p>
        <a
          href={recipeDetails && `${recipeDetails?.source}`}
          target='_blank'
          rel='noreferrer'
        >
          <button className='flex gap-2 items-center text-[1.4rem] bg-bgDirectionBtn rounded-full py-[1.25rem] px-[2.25rem] font-semibold transition-all ease-in duration-300 hover:scale-110 text-white'>
            <span className='text-[1.5rem]'>Directions</span>
            <span className='text-[2rem]'>
              <BsArrowRight />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HowToCook;
