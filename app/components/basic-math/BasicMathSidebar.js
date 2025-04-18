'use client'
import Link from 'next/link'

export default function BasicMathSidebar({ onLinkClick = () => {} }) {
  return (
    <aside className="w-full sm:w-64 bg-gray-100 p-4 rounded-md overflow-y-auto h-full max-h-[90vh]">
      <nav>
        {[
          {
            grade: 'ป.1',
            topics: [
              { name: 'การบวก', path: '/basic-math/grade1/addition' },
              { name: 'การลบ', path: '/basic-math/grade1/subtraction' },
              { name: 'รูปทรงเรขาคณิต', path: '/basic-math/grade1/shapes' },
              { name: 'การเปรียบเทียบจำนวน', path: '/basic-math/grade1/comparison' },
            ],
          },
          {
            grade: 'ป.2',
            topics: [
              { name: 'การบวกเลขหลายหลัก', path: '/basic-math/grade2/add-multidigit' },
              { name: 'การลบเลขหลายหลัก', path: '/basic-math/grade2/sub-multidigit' },
              { name: 'การวัดและเวลา', path: '/basic-math/grade2/time-measurement' },
              { name: 'รูปเรขาคณิต 2 มิติ', path: '/basic-math/grade2/geometry' },
              { name: 'รูปแบบและการนำเสนอข้อมูล', path: '/basic-math/grade2/data' },
            ],
          },
          {
            grade: 'ป.3',
            topics: [
              { name: 'การคูณและการหารเบื้องต้น', path: '/basic-math/grade3/multiply-divide' },
              { name: 'เศษส่วนเบื้องต้น', path: '/basic-math/grade3/fractions' },
              { name: 'รูปเรขาคณิต 3 มิติ', path: '/basic-math/grade3/geometry3d' },
              { name: 'การอ่านแผนภูมิ', path: '/basic-math/grade3/charts' },
            ],
          },
          {
            grade: 'ป.4',
            topics: [
              { name: 'การคูณและหารหลายหลัก', path: '/basic-math/grade4/advanced-multiply-divide' },
              { name: 'ทศนิยมเบื้องต้น', path: '/basic-math/grade4/decimals' },
              { name: 'มุมและเส้นตรง', path: '/basic-math/grade4/angles-lines' },
              { name: 'การตีความข้อมูล', path: '/basic-math/grade4/data-interpretation' },
            ],
          },
          {
            grade: 'ป.5',
            topics: [
              { name: 'เศษส่วนและทศนิยม', path: '/basic-math/grade5/fractions-decimals' },
              { name: 'ความน่าจะเป็นพื้นฐาน', path: '/basic-math/grade5/probability' },
              { name: 'รูปแบบพีชคณิตเบื้องต้น', path: '/basic-math/grade5/algebra' },
              { name: 'พื้นที่และปริมาตร', path: '/basic-math/grade5/area-volume' },
            ],
          },
          {
            grade: 'ป.6',
            topics: [
              { name: 'สมการเบื้องต้น', path: '/basic-math/grade6/equations' },
              { name: 'การวิเคราะห์ข้อมูล', path: '/basic-math/grade6/data-analysis' },
              { name: 'ความสัมพันธ์และฟังก์ชัน', path: '/basic-math/grade6/functions' },
              { name: 'การวัดขั้นสูง', path: '/basic-math/grade6/measurement' },
            ],
          },
        ].map((level) => (
          <details key={level.grade} className="mb-2">
            <summary className="cursor-pointer font-semibold text-blue-700">{level.grade}</summary>
            <ul className="ml-4 mt-1 space-y-1">
              {level.topics.map((topic) => (
                <li key={topic.path}>
                <Link
                  href={topic.path}
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={onLinkClick}
                >
                  {topic.name}
                </Link>
              </li>
              ))}
            </ul>
          </details>
        ))}
      </nav>
    </aside>
  )
}
