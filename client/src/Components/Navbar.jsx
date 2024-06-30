import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-slate-950 text-white text-center flex justify-center items-center h-screen md:h-auto mb-3">
        <NavLink className="px-3 my-8" to='/'>Home</NavLink>
        <NavLink className="px-3 my-8" to='/signup'>Sign Up</NavLink>
        <NavLink className="px-3 my-8" to='/login'>Log in</NavLink>
    </div>
  )
}

export default Navbar