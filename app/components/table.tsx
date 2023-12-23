
const Table = ({data}: any) =>{
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
            data.map( (row: any) =>(
              <tr key={row.id} className="text-lg text-gray-600 font-medium">
                <td className="px-8 py-1">{row.productName}</td>
                <td className="px-8 py-1">{row.category}</td>
                <td className="px-8 py-1">{row.price}</td>
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