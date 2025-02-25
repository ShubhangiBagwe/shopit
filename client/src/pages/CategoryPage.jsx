import React, { useEffect, useState } from 'react'


const CategoryPage = () => {
  const [openUploadCategory, setOpenUploadCategory] = useState(false)

  return (
    <section>
      <div className='p-2 bg-white shadow-md flex items-center justify-between'>
        <h1 className='font-semibold'>
          Category
        </h1>
        <button onClick={() => setOpenUploadCategory(true)} className='text-sm border border-[#ffbf00] hover:bg-[#ffbf00] px-3 py-1 rounded'>
          Add Category
        </button>
      </div>
    </section>

  )
}

export default CategoryPage