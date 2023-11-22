import { useState } from "react";
import {FaBars} from "react-icons/fa"
const NavBar = () => {
    let Links =[
        {name:"Inicio", link:"/"},
        {name:"Projects", link:"/projects"}
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
                <div className="shadow-md w-full absolute pt-2 ">
                <ul className={`inline lg:flex absolute lg:static bg-white lg:z-auto z[-1] lg:mt-36 mt-48
                right-0 w-full lg:w-auto pt-2 pb-3 lg:pb-2 pl-9 lg:pl-4 
                transition-all-duration-500 ease-in ${open ? 'top[-20] opacity-100' : 'top[-200]'} lg:opacity-100 opacity-0`}>

                    {
                        Links.map((link)=>(
                            <li key={link.name} className="text-xl pl-4 my-7 lg:my-0">
                                <a className="text-gray-800 hover:text-blue-600 duration-500" href={link.link}>{link.name}</a>
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