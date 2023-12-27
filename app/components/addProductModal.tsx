import React, { useEffect, useRef } from 'react'

const AddProductModal: React.FC<{isOpen: boolean, onClose: ()=> void}>= ({isOpen, onClose}) => {

  const modalRef = useRef<HTMLDivElement>(null)
  const handleCLoseModal = (e: MouseEvent) =>{
    if(modalRef.current && !modalRef.current.contains(e.target as Node)){
      onClose();
    }
  }

  const handleSave = () =>{
    onClose()
  }

  useEffect(()=>{
    if(isOpen){
      document.addEventListener('mousedown', handleCLoseModal)
    }
    else{
      document.removeEventListener('mousedown', handleCLoseModal)
    }
    return () =>{
      document.removeEventListener('mousedown', handleCLoseModal)
    }
  },[isOpen])

  return !isOpen ? null:
  (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className="bg-white p-6 rounded-lg w-80 flex justify-center flex-col" ref={modalRef}>
        <h1 className='font-semibold text-lg text-orange-600 flex justify-center'>Freyanashifa Jayawardana</h1>
        <div className='mx-4 flex flex-col justify-center my-2 gap-1'>
          <h3 className=''>Nama Produk</h3>
          <input type="text" className='border-2 rounded-md border-orange-200 focus:ring-2 focus:outline-none px-2 py-1'/>
        </div>
        <div className='mx-4 flex flex-col justify-center my-2 gap-1'>
          <h3 className=''>Kategori</h3>
          <input type="text" className='border-2 rounded-md border-orange-200 focus:ring-2 focus:outline-none px-2 py-1'/>
        </div>
        <div className='mx-4 flex flex-col justify-center my-2 gap-1'>
          <h3 className=''>Harga</h3>
          <input type="text" className='border-2 rounded-md border-orange-200 focus:ring-2 focus:outline-none px-2 py-1'/>
        </div>
        <div className='flex justify-end my-4'>
          <button className="bg-blue-700 text-white rounded-md px-2 py-1 shadow-md hover:shadow-lg flex justify-end" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddProductModal