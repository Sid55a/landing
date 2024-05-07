import React from 'react'

const NavBar = () => {
  return (
    <div>
     <div className=" p-10 ">
    <div className=" flex justify-between">
      <h1 className="font-semibold text-2xl sm:text-sm ">GetJwel Sellers</h1>
      <div className=" flex gap-5">
        <button className=" bg-white border-none outline-none sm:text-xs  ">Why Us?</button>
        <button className="bg-[#EAE4C0] pt-2 pb-2 pl-4 pr-4 sm:pt-0 sm:pb-0  sm:pl-[0.3rem] sm:pr-[0.3rem]  sm:text-[0.5rem]" >Dashboard</button>
        <button className="bg-[#EAE4C0] pt-2 pb-2 pl-4 pr-4 sm:pt-0 sm:pb-0  sm:pl-[0.3rem] sm:pr-[0.3rem]  sm:text-[0.5rem] " >Become a Seller</button>
      </div>
    </div>
   </div>
    </div>
  )
}

export default NavBar