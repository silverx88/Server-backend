import React from "react";

const ExerciseItem = ({ a, b, problem, answer, showSolution }) => {
  // กรณีใหม่: a และ b แยกตัว
  if (typeof a === "number" && typeof b === "number") {
    return (
      <div className="border p-4 rounded shadow text-center text-lg print:text-base">
        <div>
          {a} + {b} = {showSolution ? <strong>{answer}</strong> : "____"}
        </div>
      </div>
    );
  }

  // กรณีเก่า: รับโจทย์เป็นข้อความ เช่น "123 + 456"
  if (typeof problem === "string") {
    return (
      <div className="border p-4 rounded shadow text-center text-lg print:text-base">
        <div>
          {problem} = {showSolution ? <strong>{answer}</strong> : "____"}
        </div>
      </div>
    );
  }

  // หากไม่มีข้อมูลที่จำเป็น
  return (
    <div className="border border-red-400 text-red-600 p-4 rounded shadow">
      ⚠️ เกิดข้อผิดพลาด: ไม่พบโจทย์ (a หรือ b ไม่ใช่ตัวเลข)
    </div>
  );
};

export default ExerciseItem;
