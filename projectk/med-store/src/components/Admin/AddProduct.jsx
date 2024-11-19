import { Plus } from 'lucide-react'
import React from 'react'

const AddProduct = () => {
    return (
        <>
            <button className='w-10 h-10 font-bold flex justify-center items-center border-2 border-blue-500 rounded-md text-blue-500 shadow-md hover:text-white hover:bg-blue-500 hover:shadow-md hover:shadow-blue-400'>
                <Plus className='w-8 h-8' />
            </button>
        </>
    )
}

export default AddProduct