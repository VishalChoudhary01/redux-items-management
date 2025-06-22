import React from 'react'
import { IoClose } from "react-icons/io5";

const Modal = ({children,handleModalToggle}) => {
  return (
    <div className='fixed z-20 bg-black/20 inset-0 flex justify-center backdrop-blur-md items-center'>
       {children &&
       <div className='bg-slate-50 p-10 relative rounded-lg'>
            <button onClick={handleModalToggle} className='absolute top-3 right-3 cursor-pointer'>
                <IoClose className='text-[1.5rem]'/>
            </button>
        {children}
        </div>
       } 

    </div>
  )
}

export default Modal