import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { BsBookmarkFill } from 'react-icons/bs';
import { BsClock } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { FcCheckmark } from 'react-icons/fc';
import FadeLoader from 'react-spinners/FadeLoader';

const RecipeViews = ({
  loader,
  recipeDetails,
  recipeIngredients,
  setRecipeServings,
  recipeServings,
  isClicked,
  handleBookmark,
}) => {
  //changing the quantity of the ingredients when the servings changes
  const increaseServings = () => {
    setRecipeServings((prev) => prev + 1);
    recipeIngredients.forEach((item) => {
      item.quantity = (
        item.quantity *
        ((recipeServings + 1) / recipeServings)
      ).toFixed(2);
    });
  };
  const reduceServings = () => {
    setRecipeServings((prev) => prev - 1);
    recipeIngredients.forEach((item) => {
      item.quantity = (
        item.quantity *
        ((recipeServings - 1) / recipeServings)
      ).toFixed(2);
    });
  };

  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };
  console.log(isClicked);
  return (
    <div className='main' id='recipeView'>
      <div className='w-full justify-center opacity-70 relative md:h-[400px]'>
        {loader ? (
          <Image
            src={
              recipeDetails ? `${recipeDetails?.image}` : '/public/img/logo.png'
            }
            alt='sample'
            width={1000}
            height={400}
            className='object-cover before:bg-bgImage before:block before:absolute before:-inset-1 h-full w-full relative inline-block '
          />
        ) : (
          <FadeLoader
            size={150}
            thickness={97}
            speed={100}
            color='#f38e82'
            className='absolute '
            cssOverride={override}
          />
        )}
        <div className='absolute bottom-[-40px] md:bottom-0 md:py-[1rem] recipe__title bg-bgRecipeTitlepy justify-center text-center items-center px-[2rem]'>
          <span className='text-[16px] md:text-[3rem] text-center h-full md:leading-[3rem] '>
            {recipeDetails?.title}
          </span>
        </div>
      </div>

      {/* details about the time, servings and bookmark functionality */}
      <div className='h-[155px] mx-4 flex justify-around items-center '>
        <div className='flex gap-10 md:gap-40'>
          <div className='flex flex-col md:flex-row md:gap-4 items-center'>
            <span className='text-[2rem] md:text-[2.75rem] uppercase text-[#f38e82]'>
              <BsClock />
            </span>
            <span className='md:text-[1.75rem] uppercase'>
              {recipeDetails?.time} Minutes
            </span>
          </div>
          <div className='flex md:flex-row gap-2 md:gap-4 items-center'>
            <span className='text-[2.75rem] uppercase text-[#f38e82]'>
              <BsPeople />
            </span>
            <span className='md:text-[1.75rem] uppercase'>
              {recipeServings} servings
            </span>
            <span
              onClick={recipeDetails && reduceServings}
              className='text-[2.5rem] text-[#f38e82] cursor-pointer'
            >
              <AiOutlineMinusCircle />
            </span>
            <span
              onClick={recipeDetails && increaseServings}
              className='text-[2.5rem] text-[#f38e82] cursor-pointer'
            >
              <IoMdAddCircleOutline />
            </span>
          </div>
        </div>

        <span
          onClick={() => handleBookmark()}
          className='text-[1.5rem] md:text-[2rem] uppercase bg-[#f38e82] text-white p-4 rounded-full cursor-pointer font-bold transition-all ease-in duration-300 hover:scale-110'
        >
          {isClicked ? <BsBookmarkFill /> : <BsBookmark />}
        </span>
      </div>
      <div className=' bg-[#f2efee] py-[3rem] md:px-[4rem] '>
        <div className=' '>
          <span className='text-[2rem] text-[#f38e82] uppercase flex justify-center mb-8 font-bold tracking-[0.3rem]'>
            recipe ingredients
          </span>
          <ul className='  grid grid-cols-2 gap-4 px-4'>
            {recipeIngredients?.map((item, index) => (
              <li
                key={index}
                className='flex items-start  gap-2  text-[1.6rem]'
              >
                <span>
                  <FcCheckmark />
                </span>
                {item.quantity && (
                  <span className='text-[#615551] font-normal'>
                    {item.quantity}
                  </span>
                )}
                {item.unit && (
                  <span className='text-[#615551] font-normal'>
                    {item.unit}
                  </span>
                )}
                {item.description && (
                  <span className='text-[#615551] font-normal'>
                    {item.description}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeViews;
