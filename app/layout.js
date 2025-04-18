// app/layout.js
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'MathCamp',
  description: 'เว็บไซต์สอนคณิตศาสตร์แบบครบถ้วนสำหรับนักเรียนไทย',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-white text-gray-900">
        {/* ✅ Navbar อยู่บนสุด */}
        <Navbar />

        {/* ✅ เนื้อหาหลัก เริ่มหลังจาก Navbar สูงประมาณ 56px (py-3) */}
        <main className="pt-16 px-4 max-w-screen-xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
