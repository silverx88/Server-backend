'use client';

import { useState } from 'react';
import BasicMathSidebar from '@/components/basic-math/BasicMathSidebar';

export default function BasicMathLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* ✅ Layout หลักของหน้าคณิตศาสตร์พื้นฐาน */}
      <div className="flex min-h-screen pt-5 ">
        {/* Sidebar Desktop */}
        <aside className="w-64 p-4 overflow-y-auto hidden md:block ">
          <BasicMathSidebar />
        </aside>
        {/* เนื้อหาหลัก */}
        <main className="flex-1 p-6 md:ml-64   ">{children}</main>







        {/* Sidebar Mobile 
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-100 p-4 z-50 transform transition-transform duration-300 md:hidden ${
            showSidebar ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            className="text-right w-full text-xl mb-4"
            onClick={() => setShowSidebar(false)}
          >
            ✕
          </button>
          <BasicMathSidebar onLinkClick={() => setShowSidebar(false)} />

        </div>

        {/* ปุ่ม Hamburger 
        <button
          className="md:hidden fixed top-1 left-65 z-50 bg-white p-2 border rounded"
          onClick={() => setShowSidebar(true)}
        >
          พื้นฐาน☰
        </button>   */}

        
      </div>




      {/* ✅ แสดงเฉพาะตอนพิมพ์ */}
      <div className="print-footer print-only">
        เว็บไซต์: www.mathcamp.fun | แบบฝึกหัดคณิตศาสตร์สำหรับนักเรียนไทย
      </div>
    </>
  );
}
