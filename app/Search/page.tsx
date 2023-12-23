'use client'
import { useState } from "react"
import SearchBar from "../components/searchBar"
import Table from "../components/table"

const Page = () =>{ 
  const dummy = [
    {
    id:1,
    productName : 'Lifebuoy',
    category: 'soap',
    price: 4000
    },
    {
      id:2,
      productName : 'Kingkong',
      category: 'Insectiside',
      price: 5000
    },
    {
      id:3,
      productName : 'Roma Kelapa uwhduhwduwhdusjdnjsadn sdksks',
      category: 'Food',
      price: 9000
    }
  ]
  const [data, setData] = useState(dummy)

  return(
    <div className="bg-white min-h-screen overflow-hidden">
      <div className="flex justify-center m-4">
        <SearchBar></SearchBar>
      </div>
      <div className="flex justify-center">
        <Table data= {data}></Table>
      </div>
      <div>
        
      </div>
      
    </div>
  )
}

export default Page