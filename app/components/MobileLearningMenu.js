

'use client';
import { useState } from "react";
import Link from 'next/link'; // ✅ อันนี้สำคัญ!
import MobileBasicMathMenu from './basic-math/MobileBasicMathMenu';
// import MobileIntermediateMathMenu from './intermediate-math/...';
// import MobileAdvancedMathMenu from './advanced-math/...';


export default function MobileLearningMenu({ toggleMenu }) {
  const [openGrade, setOpenGrade] = useState('p1');         // สำหรับเมนูพื้นฐาน (ป.1 - ป.6)
  const [subMenuOpen, setSubMenuOpen] = useState(false);    // สำหรับเมนู "คณิตต่างประเทศ"

  const toggleGrade = (grade) => {
    setOpenGrade((prev) => (prev === grade ? null : grade));
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (

<div>
      <button onClick={toggleSubMenu}>
        {subMenuOpen ? '▼' : '▶'} เรียนคณิตศาสตร์
      </button>

     
      {subMenuOpen && (
        <div className="pl-4">
          <MobileBasicMathMenu toggleMenu={toggleMenu} />
          {/* <MobileIntermediateMathMenu toggleMenu={toggleMenu} /> */}
          {/* <MobileAdvancedMathMenu toggleMenu={toggleMenu} /> */}
          <ul className="pl-4 space-y-1 mt-1">
      <li><Link href="/intermediate-math" onClick={toggleMenu}>ระดับกลาง</Link></li>
      <li><Link href="/advanced-math" onClick={toggleMenu}>ระดับสูง</Link></li>
    </ul>   
        </div>
      )}
               
           
    </div>

    
  );
}
