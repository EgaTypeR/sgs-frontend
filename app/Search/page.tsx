'use client'
import { useState, useEffect } from "react"
import axios from "axios"

import SearchBar from "../components/searchBar"
import Table from "../components/table"
import AddProductModal from "../components/addProductModal"

interface Product{
  _id: string,
 productName: string,
 barCode: string,
 category: string[],
 price: number,
 createdAt: string,
 updatedAt: string,
 __v:number
}

const Page = () =>{ 
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleClick = () =>{
    openModal()
  }

  const openModal = () =>{
    setIsOpen(true)
  }
  const closeModal = () =>{
    setIsOpen(false)
  }
  
  

  return(
    <div className="bg-white min-h-screen overflow-hidden">
      <AddProductModal isOpen={isOpen} onClose={closeModal}></AddProductModal>
      <div className="flex justify-center m-4">
        <SearchBar></SearchBar>
      </div>
      <div className="flex justify-center items-stretch">
        <button className="bg-indigo-700 text-white rounded-md px-2 py-1 shadow-md hover:shadow-lg hover:scale-105 flex justify-end" onClick={handleClick}>Add</button>
      </div>
      <div className="flex justify-center my-8">
        <Table></Table>
      </div>
      <div>
        
      </div>
      
    </div>
  )
}

export default Page