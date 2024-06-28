"use client";
import Link from "next/link"
import React from "react"

export default function NavBar(){
    const [isOpen, setOpen] = React.useState(false)
    function handleClick(){
        setOpen(!isOpen)
    }
    return(
        <nav className="nav  p-5 h-24 md:h-44 md:w-64  max-w-md  flex items-center justify-between md:rounded-xl ">
            <div className="md:-mb-12 text-left">            
                <h1 className="font-bold">MK FrontEnd Mentor</h1>
                <p>Feedback Board</p>
            </div>            
            <div className="md:hidden">
                <button onClick={handleClick}>
                    {
                        isOpen ? 
                        (<div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99989 6.37857L2.98948 0.368164L0.868164 2.48948L6.87857 8.49989L0.868164 14.5103L2.98948 16.6316L8.99989 10.6212L15.0103 16.6316L17.1316 14.5103L11.1212 8.49989L17.1316 2.48948L15.0103 0.368164L8.99989 6.37857Z" fill="white"/>
                        </svg>
                    </div>):                   
                    (
                        <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                        <rect width="20" height="3" fill="white"/>
                        <rect y="7" width="20" height="3" fill="white"/>
                        <rect y="14" width="20" height="3" fill="white"/>
                        </svg> 
                    </div> 
                    ) }            
                </button>
                {isOpen &&
                <div className="hamburger-menu bg-[#F7F8FD] absolute  right-0 top-24 bottom-0  z-50">
                       <div className="MainDiv  md:flex  justify-between lg:flex-col">
                            <div className="rounded-lg bg-white text-[#4661E6] font-bold w-1/2 h-full p-5">
                                <button className="text-white py-1 px-3 bg-[#4661E6] rounded-lg hover:bg-[#CFD7FF]">
                                  <Link href="/all">ALL</Link>
                                </button>
                                <button className="m-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">
                                <Link href="/ui">UI</Link>
                                </button>
                                <button className="mx-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">
                                <Link href="/ux">UX</Link>
                                </button>
                                <button className="my-3  py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">
                                <Link href="/enhancement">Enhancement</Link>
                                </button>
                                <button className="mx-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">
                                <Link href="/bug">Bug</Link>
                                </button>
                                <button className="mx-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">
                                <Link href="/feature">Feature</Link>                                
                                </button>
                            </div>
                            <div className="bg-white rounded-lg mx-2 mt-5 p-5">
                                <p className="font-bold text-left text-[#3A4374]">Roadmap <span className="font-normal text-[#4661E6] ml-16"><a href="" className="hover:underline">View</a></span></p>
                                <div className="flex items-center  pt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                                </svg>
                                <p className="ml-4">Planned <span className="ml-16 font-bold text-[#647196]">0</span></p>
                                </div>
                                <div className="flex items-center py-5 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                                </svg>
                                <p className="ml-4">In-Progress <span className="ml-11 font-bold text-[#647196]">0</span></p>
                                </div>
                                <div className="flex items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                                </svg>
                                <p className="ml-4">Live <span className="ml-24 font-bold text-[#647196]">0</span></p>
                                </div>
                            </div>
                         </div> 
                </div>
                }
            </div>
        </nav>
    )
}