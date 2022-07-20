import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const AddRecipe = ({ setModal, handleUpload }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => handleUpload(data);

  return (
    <div className=' modal__container'>
      <div className='modal__content flex flex-col bg-white md:w-3/5  rounded-sm'>
        <span onClick={() => setModal(false)} className='btn--close-modal'>
          <AiOutlineClose />
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-8 md:grid grid-cols-2 md:gap-24'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-start text-[2.25rem] font-bold mb-[1rem]'>
                Recipe Data
              </h3>
              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='title'>
                  Title
                </label>
                <input
                  placeholder='title of your recipe'
                  {...register("Title")}
                  id='title'
                  type='text'
                  className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg trarecipe__input nsition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>
              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='url'>
                  Url
                </label>{" "}
                <input
                  placeholder='your weblink'
                  {...register("Source_url")}
                  id='url'
                  type='text'
                  className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>
              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='image'>
                  Image
                </label>{" "}
                <input
                  placeholder='image url'
                  {...register("image_url")}
                  id='image'
                  type='text'
                  className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>
              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='publisher'>
                  Publisher
                </label>{" "}
                <input
                  placeholder='PPublisher name'
                  {...register("Publisher")}
                  id='publisher'
                  type='text'
                  className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>
              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='prep__time'>
                  Time
                </label>{" "}
                <input
                  placeholder='time it takes to cook'
                  {...register("time")}
                  id='prep__time'
                  type='number'
                  className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>
              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='servings'>
                  Servings
                </label>{" "}
                <input
                  placeholder='no of persons your ingredients are for'
                  {...register("Servings")}
                  id='servings'
                  type='number'
                  className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-outfocus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <h3 className='text-start text-[2.25rem] font-bold mb-[1rem]'>
                Ingredients
              </h3>
              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='ingredient1'>
                  Ingredients 1
                </label>
                <input
                  placeholder='format: quantity,unit,description'
                  {...register("ingredient 1")}
                  id='ingredient1'
                  type='text'
                  className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solirecipe__input d border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>
              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='ingredient2'>
                  Ingredients 2
                </label>
                <input
                  placeholder='format: quantity,unit,description'
                  {...register("ingredient 2")}
                  id='ingredient2'
                  type='text'
                  className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solirecipe__input d border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>
              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='ingredient3'>
                  Ingredients 3
                </label>
                <input
                  placeholder='format: quantity,unit,description'
                  {...register("ingredient 3")}
                  id='ingredient3'
                  type='text'
                  className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solirecipe__input d border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>

              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='ingredient4'>
                  Ingredients 4
                </label>
                <input
                  {...register("ingredient 4")}
                  placeholder='format: quantity,unit,description'
                  id='ingredient4'
                  type='text'
                  className='recipe__input text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>

              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='ingredient5'>
                  Ingredients 5
                </label>
                <input
                  {...register("ingredient 5")}
                  placeholder='format: quantity,unit,description'
                  id='ingredient5'
                  type='text'
                  className='recipe__input text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>

              <div className='recipe__input'>
                <label className='recipe__label' htmlFor='ingredient6'>
                  Ingredients 6
                </label>
                <input
                  {...register("ingredient 6")}
                  placeholder='format: quantity,unit,description'
                  id='ingredient6'
                  type='text'
                  className='recipe__input text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'
                />
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='flex mt-[3rem] w-[150px] items-center gap-2 text-[1.4rem] md:text-[1.7rem] font-semibold px-[2rem] md:px-[4rem] py-[1.2rem] md:py-[1.5rem] bg-bgUploadBtn uppercase text-white rounded-[10rem] text-center justify-center'>
              <span className='text-[2rem]'>
                <BsCloudUpload />
              </span>
              <span>Upload</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
