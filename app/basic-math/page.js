"use client";

export default function BasicMathHomePage() {
  return (
    <div className="flex min-h-screen">
      {/* Placeholder สำหรับ Sidebar (ซ้าย) */}
      <div className=" w-0 hidden lg:block" />

      {/* พื้นที่เนื้อหาหลัก */}
      <div className="flex-1">
        <div className="flex justify-center w-full px-4 py-12">
          <div className="max-w-xl text-center">
            <h1 className="text-3xl font-bold mb-4 text-blue-700">
              ยินดีต้อนรับสู่คณิตศาสตร์พื้นฐาน
            </h1>
            <p className="text-lg text-gray-700">
              เลือกระดับชั้นเรียนจากเมนูด้านซ้ายเพื่อเริ่มต้นการเรียนรู้ เช่น การบวก การลบ และหัวข้ออื่น ๆ
            </p>
          </div>
        </div>
      </div>



    </div>
  );
}
