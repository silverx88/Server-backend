'use client'

import '@/globals.css'
import '@/components/print/print-style.css'

import PrintHeader from '@/components/print/PrintHeader'
import { useState } from 'react'

const generateProblems = (count = 30) => {
  const problems = []
  for (let i = 0; i < count; i++) {
    const a = Math.floor(Math.random() * 900 + 100)
    const b = Math.floor(Math.random() * 900 + 100)
    problems.push({ a, b })
  }
  return problems
}

export default function AddPracticeExercise() {
  const [problems, setProblems] = useState(() => generateProblems(30))
  const [answers, setAnswers] = useState(Array(30).fill(''))
  const [showAnswers, setShowAnswers] = useState(Array(30).fill(false))

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  const revealAnswer = (index) => {
    const newShow = [...showAnswers]
    newShow[index] = true
    setShowAnswers(newShow)
  }

  const handleNewProblemSet = () => {
    const newProblems = generateProblems(30)
    setProblems(newProblems)
    setAnswers(Array(30).fill(''))
    setShowAnswers(Array(30).fill(false))
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        แบบฝึกหัดการบวกเลขหลายหลัก (ป.2)
      </h2>

      {/* 🔸 ปุ่มพิมพ์ */}
      <div className="flex justify-end mb-4 print-hidden">
        <button
          onClick={() => window.print()}
          className="bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded"
        >
          🖨️ พิมพ์แบบฝึกหัด
        </button>
      </div>

      {/* 🔸 ส่วนที่พิมพ์ได้ */}
      <div id="print-area">
        <PrintHeader title="แบบฝึกหัดการบวกเลขหลายหลัก (ป.2)" />

        <div className="flex flex-wrap gap-4 justify-center">
          {problems.map(({ a, b }, idx) => {
            const sum = a + b
            const aDigits = a.toString().padStart(3, ' ').split('')
            const bDigits = b.toString().padStart(3, ' ').split('')
            const userAnswer = parseInt(answers[idx])
            const isCorrect = userAnswer === sum

            return (
              <div
                key={idx}
                className="exercise-box bg-white rounded p-4 shadow w-[160px] text-center"
              >
                <div className="grid grid-cols-3 gap-1 font-mono text-lg text-right leading-tight">
                  <div className="text-red-500"> </div>
                  <div className="text-red-500"> </div>
                  <div className="text-red-500"> </div>

                  {aDigits.map((d, i) => (
                    <div key={`a-${i}`}>{d}</div>
                  ))}
                  {bDigits.map((d, i) => (
                    <div key={`b-${i}`}>
                      {i === 0 ? '+' : ''}
                      {d}
                    </div>
                  ))}
                </div>

                <hr className="border-t border-black my-1" />

                <input
                  type="text"
                  value={answers[idx]}
                  onChange={(e) => handleInputChange(idx, e.target.value)}
                  className="border w-full text-center px-2 py-[2px] font-mono"
                />

                {/* เฉลย (ซ่อนไม่ให้พิมพ์) */}
                {showAnswers[idx] ? (
                  <p className="mt-2 text-sm font-mono text-green-700 print-hidden">
                    คำตอบ: {sum}
                  </p>
                ) : (
                  <button
                    onClick={() => revealAnswer(idx)}
                    className="mt-2 text-sm text-blue-700 hover:underline print-hidden"
                  >
                    ▶ เฉลย
                  </button>
                )}

                {/* ผลลัพธ์ถูก/ผิด (ซ่อนไม่ให้พิมพ์) */}
                {answers[idx] !== '' && !isNaN(userAnswer) && (
                  <p
                    className={`mt-1 text-sm font-semibold print-hidden ${
                      isCorrect ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {isCorrect ? '✔ ถูกต้อง' : '✘ ลองใหม่'}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* 🔄 ปุ่มเปลี่ยนชุดคำถาม (ซ่อนไม่ให้พิมพ์) */}
      <div className="text-center mt-6 print-hidden">
        <button
          onClick={handleNewProblemSet}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          🔁 เปลี่ยนคำถามชุดใหม่
        </button>
      </div>
    </div>
  )
}
