'use client';
import { useState } from 'react';

export default function AddPage() {
  const exercises = [
    { question: '1 + 1', answer: 2 },
    { question: '2 + 3', answer: 5 },
    { question: '4 + 2', answer: 6 },
    { question: '5 + 0', answer: 5 },
    { question: '3 + 3', answer: 6 },
  ];

  const [answers, setAnswers] = useState(Array(exercises.length).fill(''));
  const [isCorrect, setIsCorrect] = useState(Array(exercises.length).fill(false));

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);

    const correct = parseInt(value) === exercises[index].answer;
    const newIsCorrect = [...isCorrect];
    newIsCorrect[index] = correct;
    setIsCorrect(newIsCorrect);
  };

  return (
    <div className="max-w-screen-sm mx-auto p-0">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">การบวก (ป.1)</h1>

      <h2 className="font-semibold">ความหมายของการบวก</h2>
      <p className="mb-4">
        การบวกคือการนำจำนวนตั้งแต่ 2 จำนวนขึ้นไปมารวมกัน เช่น เรามีลูกบอล 2 ลูก และได้เพิ่มอีก 3 ลูก เราจะมีทั้งหมด 5 ลูก
      </p>

      <h2 className="font-semibold">สัญลักษณ์ที่ใช้ในการบวก</h2>
      <p className="mb-4">
        เราใช้เครื่องหมาย <span className="text-blue-600 font-bold">+</span> แทนคำว่า "บวก" และเครื่องหมาย <span className="text-blue-600 font-bold">=</span> เพื่อแสดงผลลัพธ์ เช่น <br />
        <span className="text-green-600">3 + 2 = 5</span>
      </p>

      <h2 className="font-semibold">เทคนิคช่วยในการบวก</h2>
      <ul className="list-disc list-inside mb-4">
        <li>ใช้สื่อมือช่วยนับ</li>
        <li>ใช้ของเล่นหรือสิ่งของจริง เช่น ดินสอ ลูกโป่ง</li>
        <li>ใช้เส้นจำนวน (Number Line)</li>
      </ul>

      <h3 className="font-semibold text-lg mt-6 mb-2">🔹 การบวกด้วยภาพ</h3>
<p className="mb-2">ใช้ภาพหรือรูปสิ่งของช่วยในการนับ เช่น รูปดาว ⭐</p>

<div className="text-base space-y-2 leading-relaxed">
  <div>
    <span className="inline-block">⭐️⭐️ + ⭐️⭐️⭐️ = ⭐️⭐️⭐️⭐️⭐️</span><br />
    <span className="inline-block">→ 2 + 3 = 5</span>
  </div>
  <div>
    <span className="inline-block">🍎🍎🍎 + 🍎🍎 = 🍎🍎🍎🍎🍎</span><br />
    <span className="inline-block">→ 3 + 2 = 5</span>
  </div>
  <div>
    <span className="inline-block">🚗 + 🚗🚗 = 🚗🚗🚗</span><br />
    <span className="inline-block">→ 1 + 2 = 3</span>
  </div>
</div>
    
      <h2 className="text-lg font-semibold mt-6">การบวกโดยนับนิ้ว</h2>
      <p className="mt-1">
        เช่น ถ้าโจทย์คือ 2 + 3 ให้นักเรียนชูนิ้ว 2 นิ้ว แล้วชูเพิ่มอีก 3 นิ้ว เมื่อนับนิ้วทั้งหมดจะได้ 5 นิ้ว ซึ่งคือคำตอบของ 2 + 3
      </p>
      <img
        src="/images/addition-fingers.png"
        alt="ตัวอย่างการนับนิ้ว"
        className="my-3 rounded shadow-md w-full max-w-xs mx-auto"
      />

      <h2 className="text-lg font-semibold mt-6">การบวกโดยใช้เส้นจำนวน</h2>
      <p className="mt-1">
        เส้นจำนวน (Number Line) คือเส้นที่มีตัวเลขเรียงกัน นักเรียนจะเริ่มจากตัวเลขแรก
        แล้วกระโดดทีละช่องตามตัวเลขที่สอง เช่น 2 + 3 ให้นับจาก 2 แล้วกระโดด 3 ช่อง จะไปสิ้นสุดที่ 5
      </p>
      <img
        src="/images/number-line-example.png"
        alt="ตัวอย่างการบวกด้วยเส้นจำนวน"
        className="my-3 rounded shadow-md w-full max-w-xs mx-auto"
      />

      {/* แบบฝึกหัด */}
      <h2 className="text-lg font-semibold mt-6">แบบฝึกหัดการบวก</h2>
      <p className="mt-1 mb-2">ลองทำแบบฝึกหัดเหล่านี้:</p>
      <div className="space-y-3">
        {exercises.map((ex, index) => (
          <div key={index} className="flex items-center space-x-2">
            <label>{index + 1}. {ex.question} =</label>
            <input
              type="number"
              value={answers[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-20 border border-gray-400 rounded px-2 py-1"
            />
            {answers[index] !== '' && (
  isCorrect[index] ? (
    <span className="text-green-500 text-xl">✅</span>
  ) : (
    <span className="text-red-500 text-xl">❌</span>
  )
)}
          </div>
        ))}
      </div>

      <p className="mt-6 italic text-sm text-gray-600">
        นักเรียนสามารถลองใช้ของเล่น หรือวาดภาพประกอบ เพื่อช่วยในการหาคำตอบได้ด้วยนะ!
      </p>
    </div>
  );
}
