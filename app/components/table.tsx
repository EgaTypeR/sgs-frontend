import axios from "axios"
import { useEffect, useState } from "react"

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

const Table= () =>{
  const [data, setData] = useState<Product[]>([])

  useEffect(() =>{
    const fetchData = async() =>{
      let Url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/product`;
      try {
        const response = await axios.get(Url)
        setData(response.data)
      } catch (error) {
        console.error("Error Fetching Data")
      }
    }
  fetchData()
  },
  []
  )
  return(
    <div className="overflow-auto">
      <table className="divide-y divide-gray-600 max-w-screen-sm">
        <thead className="bg-gray-50">
          <tr className="text-lg text-gray-700 font-bold">
            <th className="px-8 py-2">Product</th>
            <th className="px-8 py-2">Category</th>
            <th className="px-8 py-2">Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {
            data.map( (row) =>(
              <tr key={row._id} className="text-lg text-gray-600 font-medium">
                <td className="px-8 py-1">{row.productName}</td>
                <td className="px-8 py-1">{row.category.join(', ')}</td>
                <td className="flex px-8 py-1 justify-end">{row.price.toLocaleString()}</td>
              </tr>
            )
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table