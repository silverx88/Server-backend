// components/foreign-math/MobileForeignerMathMenu.js
import Link from "next/link";

export default function MobileForeignerMathMenu({ toggleMenu }) {
  return (
    <details className="pl-2 py-1">
      <summary className="text-blue-700 font-medium cursor-pointer">คณิตศาสตร์ต่างประเทศ</summary>
      <ul className="pl-4 space-y-1 mt-1">
        <li><Link href="/foreigner/indian-math" onClick={toggleMenu}>เวทคณิต (อินเดีย)</Link></li>
        <li><Link href="/foreigner/chinese-math" onClick={toggleMenu}>เทคนิคจีน</Link></li>
        <li><Link href="/foreigner/japanese-math" onClick={toggleMenu}>เทคนิคญี่ปุ่น</Link></li>
        <li><Link href="/foreigner/korean-math" onClick={toggleMenu}>เทคนิคเกาหลี</Link></li>
        <li><Link href="/foreigner/korean-math" onClick={toggleMenu}>เปรียบเทียบทั่วโลก</Link></li>
      </ul>
    </details>
  );
}


