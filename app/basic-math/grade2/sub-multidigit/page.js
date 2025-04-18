'use client';


import SubMultiDigitPage from './SubMultiDigitPage';
import SubPracticeExercise from './SubPracticeExercise';
import NavigateButton from '@/components/NavigateButton';

export default function SubMultiDigitFullPage() {
  return (
    <>
      {/* ปุ่มอยู่บน */}
      <div className="flex justify-end mb-4">
        <NavigateButton
          to="/basic-math/grade2/add-multidigit"
          label=" การลบเลขหลายหลัก ← ย้อนกลับ"
          className="bg-green-500 hover:bg-green-600 text-white"
        />
      </div>

      {/* เนื้อหาหลัก */}
      <div className="max-w-screen-md mx-auto px-4 py-6">
      <SubMultiDigitPage />
      <SubPracticeExercise />
      </div>
    </>
  );
}
