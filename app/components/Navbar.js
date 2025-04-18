'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import MobileLearningMenu from "./MobileLearningMenu";
import MobileBasicMathMenu from "./basic-math/MobileBasicMathMenu";
import MobileForeignerMathMenu from "./foreign-math/MobileForeignerMathMenu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";


import { Fragment } from 'react'
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react'






export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 whitespace-nowrap">
          เว็บไซต์คณิตศาสตร์
        </Link>

        {/* Hamburger  */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
         


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {/* เรียนคณิตศาสตร์ */}
          <li className="relative group">
            <div className="cursor-pointer hover:text-blue-600">เรียนคณิตศาสตร์</div>
            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
              <ul className="flex flex-col bg-white shadow-md rounded-md mt-2 w-40 z-50">
                <li><Link href="/basic-math/" className="block px-4 py-2 hover:bg-blue-100">พื้นฐาน</Link></li>
                <li><Link href="/intermediate-math" className="block px-4 py-2 hover:bg-blue-100">ระดับกลาง</Link></li>
                <li><Link href="/advanced-math" className="block px-4 py-2 hover:bg-blue-100">ระดับสูง</Link></li>
              </ul>
            </div>
          </li>


          {/* คณิตศาสตร์ต่างประเทศ */}
<li className="relative group">
  <div className="cursor-pointer hover:text-blue-600">คณิตศาสตร์ต่างประเทศ</div>
  <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
    <ul className="flex flex-col bg-white shadow-md mt-2 rounded-md w-40 z-50">
      {/* เวทคณิต อินเดีย */}
      <li>
        <Link href="/foreigner/indian-math" className="block px-4 py-2 hover:bg-gray-100">
          เวทคณิต (อินเดีย)
        </Link>
      </li>
      {/* เทคนิคจีน */}
      <li>
        <Link href="/foreigner/chinese-math" className="block px-4 py-2 hover:bg-gray-100">
          เทคนิคจีน
        </Link>
      </li>
      {/* เทคนิคญี่ปุ่น */}
      <li>
        <Link href="/foreigner/japanese-math" className="block px-4 py-2 hover:bg-gray-100">
          เทคนิคญี่ปุ่น
        </Link>
      </li>
      {/* เทคนิคเกาหลี */}
      <li>
        <Link href="/foreigner/korean-math" className="block px-4 py-2 hover:bg-gray-100">
          เทคนิคเกาหลี
        </Link>
      </li>
      {/* เปรียบเทียบทั่วโลก */}
      <li>
        <Link href="/foreigner/comparison" className="block px-4 py-2 hover:bg-gray-100">
          เปรียบเทียบทั่วโลก
        </Link>
      </li>
    </ul>
  </div>
</li>


          {/* อื่น ๆ */}
          <li><Link href="/math-history" className="hover:text-blue-600">ประวัติศาสตร์คณิต</Link></li>
          <li><Link href="/math-applied" className="hover:text-blue-600">การประยุกต์ใช้จริง</Link></li>


          <li className="relative group">
          <div className="cursor-pointer hover:text-blue-600">เครื่องมือช่วยเรียน</div>
          <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
          <ul className="flex flex-col bg-white shadow-md mt-2 rounded-md w-40 z-50">
          <li><Link href="/math-tools/DTV" className="block px-4 py-2 hover:bg-gray-100">Dltv</Link></li>
          <li><Link href="/math-tools/whiteboard" className="hover:text-blue-600">Whiteboard</Link></li>
          </ul>
          </div>
          </li>





    



        </ul>
      </div>

     
      

 {/* ซ่อนไว้สำหรับเปิดใช้เพื่อตรวจสอบลิงค์ 
      <MobileBasicMathMenu toggleMenu={toggleMenu} />
      <MobileForeignerMathMenu toggleMenu={toggleMenu} />
      */}

{/* Mobile Menu */}

{menuOpen && (
  <div className="md:hidden px-4 pb-4 bg-white space-y-2">
    <MobileLearningMenu toggleMenu={toggleMenu} />
    <MobileForeignerMathMenu toggleMenu={toggleMenu} />

    <Link href="/math-history" onClick={toggleMenu} className="block py-2 border-b">
      ประวัติศาสตร์คณิต
    </Link>
    <Link href="/math-applied" onClick={toggleMenu} className="block py-2 border-b">
      การประยุกต์ใช้จริง
    </Link>

    <details className="pl-2 py-1">
      <summary className="text-blue-700 font-medium cursor-pointer">
        เครื่องมือช่วยเรียน
      </summary>
      <ul className="pl-4 space-y-1 mt-1">
        <li>
          <Link href="/math-tools/DTV" onClick={toggleMenu} className="text-blue-600 hover:underline">
            Dltv
          </Link>
        </li>
        <li>
          <Link href="/math-tools/whiteboard" onClick={toggleMenu} className="text-blue-600 hover:underline">
            Whiteboard
          </Link>
        </li>
      </ul>
    </details>
  </div>
)}

      




    </nav>
  )
}
