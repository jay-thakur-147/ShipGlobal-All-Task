const Navbar = () => {
  return (
    <nav className='flex justify-center bg-indigo-900 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-xl'>Jay Kishore Thakur</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
