import React from 'react'
import dem from '../assets/grocery-image.png'


const Demo = () => {
  return (
    <>
    <div className='relative text-white'>
        <div className='flex flex-col ml-40 mt-40 grocery-image.png'>
            <h1 className='text-[40px] font-bold  font-mono'>Groceries <br /> Delivery in 15 mins</h1>
            <p className='text-[20px] font-semibold'>
                Grocify offers a wide range of products, <br /> Including fresh meat, diary,
                baked goods and services.
            </p>
           
        </div>
        <div className='flex ml-40 mt-20 gap-4'>
            <button className='bg-[#fff700] px-6 py-2 rounded-full text-[#7d7b59] font-bold
            hover:bg-transparent duration-50 hover:border-yellow-300  hover:border border-transparent'>
                Order Now
            </button>
            <button className='border border-yellow-300 border-transparent px-6 py-2 rounded-full'>
                Download App
            </button>
        </div>
    </div>
    <img src={dem} alt="" className='w-[650px]   absolute bottom-0 right-2' />
    </>
  )
}

export default Demo