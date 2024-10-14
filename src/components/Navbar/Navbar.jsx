import React from 'react'
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div  data-aos="fade-down" className='fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-white font-bold text-2xl">
                        <img src={logo} alt=""  className='w-10'/>
                        <span >spc wb</span>
                    </div>
                    <div className='text-white'>
                        <ul className='flex items-center gap-6 text-xl py-4 sm:py-0 ' >
                            <li><a href="">About</a></li>
                            <li><a href="">technology</a></li>
                            <li><a href="">Galaxy</a></li>
                            <li><a href="">Satelight</a></li>
                        </ul>
                    </div>
                    <div >
                        <button className='text-white border-white border-2 px-3 py-1 rounded-md' >Login</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar
