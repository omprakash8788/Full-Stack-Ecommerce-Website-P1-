import React from 'react'

const NewSLetterBox = () => {
    const onSubmitHandler =(e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>
          Subscribe now & get 20% off
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
           <input className='w-full flex-1 outline-none' type="Enter your emails" required />
           <button className='bg-black text-white text-xs px-10 py-4' type='submit'>Subscribe</button>
        </form>

    </div>
  )
}

export default NewSLetterBox