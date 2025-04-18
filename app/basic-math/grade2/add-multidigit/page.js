'use client';

import AddMultiDigitPage from './AddMultiDigitPage';
import AddPracticeExercise from './AddPracticeExercise';
import NavigateButton from '@/components/NavigateButton';

export default function AddMultiDigitFullPage() {
  return (
    <>
      {/* ปุ่มอยู่บน */}
      <div className="flex justify-end mb-4">
      <NavigateButton
  to="/basic-math/grade2/sub-multidigit"
  label="ถัดไป → การลบเลขหลายหลัก"
  className="bg-blue-500 hover:bg-blue-600 text-white"
      />
      </div>

      {/* เนื้อหาหลัก */}
      <div className="max-w-screen-md mx-auto px-4 py-6">
        <AddMultiDigitPage />
        <AddPracticeExercise />
      </div>
    </>
  );
}

