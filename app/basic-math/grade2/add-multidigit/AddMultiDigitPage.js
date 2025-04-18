// ไฟล์: grade2/add-subtract/AddMultiDigitPage.js

'use client';

export default function AddMultiDigitPage() {
  return (
    <div className="max-w-screen-sm mx-auto p-0 text-lg ">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        การบวกเลขหลายหลัก (ป.2)
      </h1>

      <h2 className="text-xl font-semibold mb-2">แนวทางการบวกเลขหลายหลัก</h2>
      <ul className="list-disc list-inside mb-4">
        <li>เริ่มบวกจากหลักหน่วย</li>
        <li>หากผลบวกเกิน 9 ให้ทดไปยังหลักถัดไป</li>
        <li>ทำแบบเดียวกันกับหลักสิบ และหลักร้อย</li>
      </ul>

      <h3 className="font-semibold text-blue-600 mb-2">ตัวอย่าง:</h3>
      <div className="mt-4">
        <div className="bg-gray-100 inline-block p-4 rounded shadow-sm">
          <table className="text-right table-fixed font-mono leading-relaxed">
            <thead>
              <tr>
                <td className="w-6"></td>
                <td className="w-6"></td>
                <td className="w-6 text-red-600 font-bold">1</td>
                <td className="w-6 text-gray-500">←</td>
                <td className="w-8 text-gray-500">ทด</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>1</td>
                <td>5</td>
                <td>6</td>
                <td></td>
              </tr>
              <tr>
              
              <td className="text-black font-bold   text-left pl-1">+</td>
                <td>2</td>
                <td>3</td>
                <td>7</td>
                <td></td>
               
              </tr>
              <tr>
                <td colSpan="5">
                  <hr className="border border-black" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>3</td>
                <td>9</td>
                <td>3</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold text-blue-600">คำอธิบาย:</h4>
        <ul className="list-decimal list-inside mt-2 space-y-1">
          <li>เริ่มบวกหลักหน่วย: 6 + 7 = <strong>13</strong> → ใส่ 3 ทด 1</li>
          <li>บวกหลักสิบ: 5 + 3 = 8 แล้วบวกทดอีก 1 ได้ <strong>9</strong></li>
          <li>บวกหลักร้อย: 1 + 2 = <strong>3</strong></li>
          <li>คำตอบคือ <strong>393</strong></li>
        </ul>
      </div>

      <AddExamplesRow />
      {/* เว้นท้าย 2-3 บรรทัด */}
      <div className="h-10" />
    </div>
  );
}

// ฟังก์ชันแสดงตัวอย่างแบบฝึกหัดหลายชุด
function AddExamplesRow() {
  const padLeft = (arr, targetLength) => {
    const padCount = targetLength - arr.length;
    return Array(padCount).fill('').concat(arr);
  };

  const examples = [
    {
      carry: ['1', '1', ''],
      top: [2, 8, 9],
      bottom: [3, 4, 8],
      result: [6, 3, 7],
    },
    {
      carry: ['1', '1', ''],
      top: [1, 7, 9],
      bottom: [4, 5, 8],
      result: [6, 3, 7],
    },
    {
      carry: ['', '1', ''],
      top: [1, 5, 6],
      bottom: [2, 3, 7],
      result: [3, 9, 3],
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      {examples.map((ex, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded shadow text-center font-mono">
          <table className="text-right table-fixed">
            <tbody>
              {/* แถวทด */}
              <tr>
                <td></td>
                {padLeft(ex.carry, ex.top.length).map((carry, i) => (
                  <td key={i} className={`w-6 ${carry ? 'text-red-600 font-bold' : ''}`}>
                    {carry || ''}
                  </td>
                ))}
                <td className="text-gray-500 text-left pl-1">←ทด</td>
              </tr>

              {/* แถวบน */}
              <tr>
                <td></td>
                {ex.top.map((num, i) => (
                  <td key={i}>{num}</td>
                ))}
                <td></td>
              </tr>

              {/* แถวล่าง */}
              <tr>
                <td className="font-bold text-black text-left pl-1">+</td>
                {padLeft(ex.bottom, ex.top.length).map((num, i) => (
                  <td key={i}>{num}</td>
                ))}
                <td></td>
              </tr>

              {/* เส้นคั่น */}
              <tr>
                <td colSpan={ex.top.length + 2}>
                  <hr className="border-t-2 border-black my-1" />
                </td>
              </tr>

              {/* แถวผลลัพธ์ */}
              <tr>
                <td></td>
                {ex.result.map((num, i) => (
                  <td key={i}>{num}</td>
                ))}
                <td></td>
              </tr>

              
            </tbody>
          </table>

        </div>
      ))}
    </div>
    
  );


}


