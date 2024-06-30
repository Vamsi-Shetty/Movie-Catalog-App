import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="sticky bg-slate-950 text-white text-center flex justify-center items-center sm:h-16 lg:h-auto lg:mb-3">
        <NavLink className="px-3 my-8" to='/'>Home</NavLink>
        <NavLink className="px-3 my-8" to='/signup'>Sign Up</NavLink>
        <NavLink className="px-3 my-8" to='/login'>Log in</NavLink>
    </div>
  )
}

export default Navbar