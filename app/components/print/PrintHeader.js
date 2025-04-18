export default function PrintHeader({ title }) {
    return (
      <div className="print-only mb-4 border-b pb-2 text-sm">
        <h1 className="text-xl font-bold text-center mb-1">{title}</h1>
        <div className="grid grid-cols-2 gap-2 px-4">
          <div>ชื่อ: ...........................................................</div>
          <div>ห้อง: ............ วันที่: ...............</div>
        </div>
      </div>
    )
  }