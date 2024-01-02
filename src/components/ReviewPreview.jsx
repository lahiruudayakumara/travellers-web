import React from 'react'

const ReviewPreview = ({ name, img, desc }) => {
  return (
    <div className='bg-white shadow-md rounded-md p-5 text-center mb-10'>
        <p className='text-xs text-gray'>{desc}</p>
        <div className='px-5 flex flex-col justify-center'>
        <img 
            src={img} 
            alt='place-holder'
            className='rounded-full w-10 h-10 m-auto'
        />
        <p>{name}</p>
        </div>
    </div>
  )
}

export default ReviewPreview