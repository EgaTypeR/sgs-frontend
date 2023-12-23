'use client'
import { useRef, useState, KeyboardEvent } from "react"

const SearchBar = () =>{
  const [type, setType] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const handleChange = (e: any) =>{

  }
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) =>{
      e.key == 'Enter' ? alert(searchRef.current?.value) : null
  }
  return(
    <div>
      <div className={`bg-white rounded-lg border-2 border-gray-600 flex flex-row gap-2 px-4 py-2`}>
        <div>O</div>
        <input type="text"  className="w-fit focus: outline-none " ref={searchRef} placeholder="Search" onChange={handleChange} onKeyDown={handleEnter}/>
      </div>
    </div>
  )
}

export default SearchBar