import React from 'react'
import {FiShoppingCart} from  "react-icons/fi"
import { Badge } from "@/components/ui/badge"



import Image from 'next/image'
import Logo from "@/app/Assest/images/Logo.webp"
const Navigation = () => {
  return (
    <div className=''><header className='flex justify-between px-36 py-6 md:flex-col xs:flex-col tablet:flex-col sm:py-6 max-lg:flex-row lg:flex-row'>

        <Image src={Logo} alt="Dine Market Logo"/>
        
        
             <div className='md:flex-col-reverse'>
                 <nav className='flex gap-10 md:flex-col-reverse sm:flex-col sm:pt-4 sm:justify-center lg:flex-row' >
            <ul>Female</ul>
            <ul>Male</ul>
            <ul>Kids</ul>
            <ul>All Products</ul>
        </nav>
        <input type="search" placeholder='What you looking for' className='w-72 pt-4  md:visible '/>
        <div className='sm:flex-col-reverse pt-4 ' >
        
        <FiShoppingCart size={24}/>
        </div>
             </div>
        </header></div>
  )
}

export default Navigation