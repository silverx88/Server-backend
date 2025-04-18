'use client';

export default function SubMultiDigitPage() {
  return (
    <div className="max-w-screen-sm mx-auto p-0 text-lg">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        การลบเลขหลายหลัก (ป.2)
      </h1>

      <h2 className="text-xl font-semibold mb-2">แนวทางการลบเลขหลายหลัก</h2>
      <ul className="list-disc list-inside mb-4">
        <li>เริ่มลบจากหลักหน่วย</li>
        <li>หากตัวตั้งน้อยกว่าตัวลบ ต้อง "ยืม" จากหลักถัดไปทางซ้าย</li>
        <li>เมื่อยืมแล้วให้นำค่าที่ได้ไปลบต่อ</li>
      </ul>

      <h3 className="font-semibold text-blue-600 mb-2">ตัวอย่าง:</h3>
      <div className="mt-4">
        <div className="bg-gray-100 inline-block p-4 rounded shadow-sm">
          <table className="text-right table-fixed font-mono leading-relaxed">
            <thead>
              <tr>
                <td className="w-6 text-gray-500">ยืม</td>
                <td className="w-6"></td>
                <td className="w-6 text-red-600 font-bold">1</td>
                <td className="w-6 text-red-600 font-bold">1</td>
                
                <td></td>
              </tr>
              <tr className="leading-tight h-4">
                <td></td>
                <td className="text-blue-600 text-xs  font-bold   ">3</td>
                <td className="text-blue-600 text-xs  font-bold   ">4</td>
                <td></td>
             </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className="relative">
                     <span className="inline-block relative z-10">4</span>
                <div className="absolute top-1/2 left-2 w-full h-0.5 bg-red-500 rotate-45 origin-center z-0"></div>
                </td>
                <td className="relative">
                     <span className="inline-block relative z-10">5</span>
                <div className="absolute top-1/2 left-2 w-full h-0.5 bg-red-500 rotate-45 origin-center z-0"></div>
               </td>
                <td>2</td>
              </tr>
              <tr>
                <td className="text-black font-bold text-left pl-1">−</td>
                <td>2</td>
                <td>7</td>
                <td>8</td>
              </tr>
              <tr>
                <td colSpan="4">
                  <hr className="border border-black" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>1</td>
                <td>7</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold text-blue-600">คำอธิบาย:</h4>
        <ul className="list-decimal list-inside mt-2 space-y-1">
          <li>เริ่มลบหลักหน่วย: 2 − 8 ไม่ได้ → ต้องยืมจากหลักสิบ</li>
          <li>หลังยืม: 12 − 8 = <strong>4</strong></li>
          <li>หลักสิบ: เดิม 5 เหลือ 4 (เพราะยืมไป 1) → 4 − 7 ทำไม่ได้ → ยืมจากหลักร้อย</li>
          <li>หลักสิบใหม่: 14 − 7 = <strong>7</strong></li>
          <li>หลักร้อย: 4 เหลือ 3 → 3 − 2 = <strong>1</strong></li>
          <li>คำตอบคือ <strong>174</strong></li>
        </ul>
      </div>

      <div className="mt-6">
      <h3 className="font-semibold text-blue-600 mb-2">ตัวอย่างเพิ่มเติม:</h3>
      </div>

      <SubExamplesRow />
      {/* เว้นท้าย 2-3 บรรทัด */}
      <div className="h-10" />
    </div>

);
}


// ฟังก์ชันแสดงตัวอย่างแบบฝึกหัดหลายชุด


 function SubExamplesRow() {
    const padLeft = (arr, targetLength) => {
      const padCount = targetLength - arr.length;
      return Array(padCount).fill('').concat(arr);
    };
  
    const examples = [
      {
        borrow: ['', '1', '1','','←ยืม'],
        extra:   ['',6, 3, '',''],
        top:    ['',7, 4, 3,''],
        bottom: ['-',4, 5, 8,''],
        result: ['' ,2, 8, 5,''],
      },
      {
        borrow: ['', '1', '1','','←ยืม'],
        extra:   ['',4, 4, '',''],
        top:    ['',5, 5, 7,''],
        bottom: ['-',4, 5, 8,''],
        result: ['' ,'', 9, 9,''],
      },
      {
        borrow: ['', '', '1','','←ยืม'],
        extra:   ['',2, 8, '',''],
        top:    ['',3, 9, 2,''],
        bottom: ['-',1, 6, 4,''],
        result: ['' ,'2', 2, 8,''],
      },
    ];
  
    return (
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {examples.map((ex, idx) => {
          const maxLen = Math.max(ex.top.length, ex.bottom.length, ex.result.length, ex.borrow.length);
          const top = padLeft(ex.top, maxLen);
          const bottom = padLeft(ex.bottom, maxLen);
          const result = padLeft(ex.result, maxLen);
          const borrow = padLeft(ex.borrow, maxLen);
          const extra = padLeft(ex.extra ?? [], maxLen);
  
          return (
            <div key={idx} className=" w-50 bg-green-100 p-4 rounded shadow-sm text-center inline-block">

           <table className="text-right table-fixed" >
            <tbody>
              {/* แถวทด */}
            <tr>
                <td></td>
                {borrow.map((val, i) => (
                  <td key={i} className={`w-4 text-center ${val ? 'text-red-600 font-bold' : ''}`}>
                    {val}
                  </td>
                ))}
                         
              </tr>

                {/* แถวหักเลข */}
                 <tr className="text-xs text-blue-600 font-bold leading-none align-bottom" >
                    {extra.map((num, i) => (
                      <td key={i} className="p-0 -mt-1">{num}</td>
                    ))}
                  </tr>

                
                {/* แถวบน */}

                <tr>
                {top.map((num, i) => (
               <td key={i} className="relative">
               <span className="inline-block relative z-10">{num}</span>
                 {/* เงื่อนไขเลือกว่าจะขีดฆ่าตัวไหน */}
                 {(idx === 0 && (i === 1 || i === 2)) ||
                 (idx === 1 && (i === 1 || i === 2)) ||
                 (idx === 2 && i === 2) ? (
               <div className="absolute top-1/2 left-1 w-full h-0.5 bg-red-500 rotate-45 origin-center z-0"></div>
                  ) : null}
               </td>
               ))}
               </tr>

               {/* แถวล่าง */}
                  <tr>
                    {bottom.map((num, i) => (
                      <td key={i}>
                        {i === bottom.length - 3 ? '' : ''}
                        {num}
                      </td>
                    ))}
                  </tr>

                {/* เส้นกั้น */}
                  <tr>
                    <td colSpan={maxLen-0}>
                      <hr className="border border-black my-1" />
                    </td>
                  </tr>

                {/* ผลลัพธ์ */} 
                  <tr>
                    {result.map((num, i) => (
                      <td key={i}>{num}</td>
                    ))}
                  </tr>

            </tbody>
            </table>
            </div>
          );
        })}
      </div>
    );
  }
  

