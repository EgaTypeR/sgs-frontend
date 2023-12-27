import axios from 'axios'
import { error } from 'console'
import React, { useEffect, useRef, useState } from 'react'

interface Product{
 productName: string,
 barCode: string,
 category: string[],
 price: number,
}


const AddProductModal: React.FC<{isOpen: boolean, onClose: ()=> void}>= ({isOpen, onClose}) => {

  const nullProduct: Product = {
    productName:'',
    barCode:'',
    category:[],
    price: 0
  } 
  const [product, setProduct] = useState<Product>(nullProduct)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target
    setProduct((prevProduct) =>({
      ...prevProduct,
      [name]: value,
    }))
  }

  const savetoDB = () =>{
    let Url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/product`
    axios.post(Url, product)
    .then(
      response =>{
        alert('Successfuly save product')
      }
    )
    .catch(
      error =>{
        alert(`Fail to save into database: ${error}`)
      }
    )
    try {
      
    } catch (error) {
      console.error(`Fail to save into database`)
    }
  }

  const handleCLoseModal = (e: MouseEvent) =>{
    if(modalRef.current && !modalRef.current.contains(e.target as Node)){
      setProduct(nullProduct)
      onClose();
    }
  }

  const handleSave = () =>{
    savetoDB()
    setProduct(nullProduct)
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
          <input type="text" className='border-2 rounded-md border-orange-200 focus:ring-2 focus:outline-none px-2 py-1' value={product?.productName} name='productName' onChange={handleInputChange}/>
        </div>
        <div className='mx-4 flex flex-col justify-center my-2 gap-1'>
          <h3 className=''>Kategori</h3>
          <input type="text" className='border-2 rounded-md border-orange-200 focus:ring-2 focus:outline-none px-2 py-1' value={product?.category} name='category' onChange={handleInputChange}/>
        </div>
        <div className='mx-4 flex flex-col justify-center my-2 gap-1'>
          <h3 className=''>Harga</h3>
          <input type="number" className='border-2 rounded-md border-orange-200 focus:ring-2 focus:outline-none px-2 py-1' value={product?.price} name='price' onChange={handleInputChange}/>
        </div>
        <div className='flex justify-end my-4'>
          <button className="bg-blue-700 text-white rounded-md px-2 py-1 shadow-md hover:shadow-lg flex justify-end" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddProductModal