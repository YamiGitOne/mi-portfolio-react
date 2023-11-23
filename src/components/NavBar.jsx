import { Link } from 'react-router-dom';
import { useState } from "react";
import {FaBars} from "react-icons/fa";
const NavBar = () => {
    let Links =[
        { name: "Inicio", link: "/" },
  { name: "Proyectos", link: "/proyectos" },
  { name: "Contacto", link: "/contacto" },
    ];
    let [open, setOpen]=useState(false);
    return (
        <header>
            <nav className="">
                <div onClick={()=>setOpen(!open)} className="text-3xl text-gray-900 absolute right-8 top-48 cursor-pointer lg:hidden">
                    <FaBars
                    name={open ? 'close' : 'menu'}
                    />
                </div>
                <div className="shadow-md w-full absolute pt-2 lg:pt-1 px-0 lg:px-60">
                <ul className={`inline lg:flex absolute lg:static bg-white lg:z-auto z-10 lg:mt-36 mt-48
                right-0 w-full lg:w-auto pt-2 pb-3 lg:pb-3 pl-9 lg:pl-0 
                transition-all-duration-500 ease-in ${open ? 'top[-20] opacity-100' : 'top[-200]'} lg:opacity-100 opacity-0`}>

                    {
                        Links.map((link)=>(
                            <li key={link.name} className="text-md pl-4 my-7 lg:my-0">
                               <Link className="text-gray-800 hover:text-blue-600 duration-500" to={link.link}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                
                </div>
                
            </nav>

        </header>
    )
}
export default NavBar;