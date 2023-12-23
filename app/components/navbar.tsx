import Link from 'next/link'

const Navbar = () =>{
  return(
    <div>
      <nav className="flex flex-row justify-center gap-4 my-4">
        <Link href={'/Search'}>
          Search
        </Link>
        <Link href={'/Add'}>
          Add
        </Link>
      </nav>
    </div>
  )
}
export default Navbar;