import { useState } from "react";
import { Link } from "react-scroll"
import {CiMenuFries} from "react-icons/ci"
import {FaTimes} from "react-icons/fa"

const Nav = () => {
  const[click,setClick] = useState(false);
  const handleClick=()=> setClick(!click);
  const content = <>
  <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
  <ul className="text-center text-xl p-20">
      <Link to="/"><li className="my-4 py-4 border-b-slate-800 hover:border-slate-800 hover:rounded">Home</li></Link>
      <Link to="about"><li className="my-4 py-4 border-b-slate-800 hover:border-slate-800 hover:rounded">About</li></Link>
      <Link to="contact"><li className="my-4 py-4 border-b-slate-800 hover:border-slate-800 hover:rounded">Contact Us</li></Link>
      <Link to="services"><li className="my-4 py-4 border-b-slate-800 hover:border-slate-800 hover:rounded">Services</li></Link>
      <Link to="projects"><li className="my-4 py-4 border-b-slate-800 hover:border-slate-800 hover:rounded">Projects</li></Link>
    </ul>
  </div>
  </>
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-slate-800">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">LoGo</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
        <div className="flex-10">
        <ul className="flex gap-8 mr-16 text-[18px]">
      <Link spy={true} smooth={true} to="/"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">Home</li></Link>
      <Link spy={true} smooth={true} to="about"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">About</li></Link>
      <Link spy={true} smooth={true} to="contact"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">Contact Us</li></Link>
      <Link spy={true} smooth={true} to="services"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">Services</li></Link>
      <Link spy={true} smooth={true} to="projects"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">Projects</li></Link>
    </ul></div>
        </div>
        <div>
    {click && content}
        </div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
    </nav>
  )
}

export default Nav