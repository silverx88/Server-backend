import Link from "next/link";

export default function MobileBasicMathMenu({ toggleMenu }) {
  const levels = [
    {
      grade: "ป.1",
      basePath: "/basic-math/grade1",
      topics: [
        { name: "การบวก", slug: "addition" },
        { name: "การลบ", slug: "subtraction" },
        { name: "รูปทรงเรขาคณิต", slug: "shapes" },
        { name: "การเปรียบเทียบจำนวน", slug: "comparison" },
      ],
    },
    {
      grade: "ป.2",
      basePath: "/basic-math/grade2",
      topics: [
        { name: "การบวกเลขหลายหลัก", slug: "add-multidigit" },
        { name: "การลบเลขหลายหลัก", slug: "sub-multidigit" },
        { name: "การวัดและเวลา", slug: "time-measurement" },
        { name: "รูปเรขาคณิต 2 มิติ", slug: "geometry" },
        { name: "รูปแบบและการนำเสนอข้อมูล", slug: "data" },
      ],
    },
    {
      grade: "ป.3",
      basePath: "/basic-math/grade3",
      topics: [
        { name: "เศษส่วนเบื้องต้น", slug: "fractions" },
        { name: "การคูณ", slug: "multiplication" },
        { name: "การหาร", slug: "division" },
        { name: "โจทย์ปัญหา", slug: "word-problems" },
      ],
    },
    {
      grade: "ป.4",
      basePath: "/basic-math/grade4",
      topics: [
        { name: "ทศนิยม", slug: "decimals" },
        { name: "เศษส่วน", slug: "fractions" },
        { name: "พื้นที่และปริมาตร", slug: "area-volume" },
        { name: "โจทย์ปัญหาซับซ้อน", slug: "complex-problems" },
      ],
    },
    {
      grade: "ป.5",
      basePath: "/basic-math/grade5",
      topics: [
        { name: "ร้อยละ", slug: "percentage" },
        { name: "อัตราส่วนและร้อยละ", slug: "ratio-percent" },
        { name: "กราฟและการแปลความ", slug: "graphs" },
        { name: "โจทย์ปัญหาประยุกต์", slug: "applications" },
      ],
    },
    {
      grade: "ป.6",
      basePath: "/basic-math/grade6",
      topics: [
        { name: "สมการเบื้องต้น", slug: "equations" },
        { name: "รูปเรขาคณิตสามมิติ", slug: "geometry-3d" },
        { name: "สถิติและความน่าจะเป็น", slug: "statistics" },
        { name: "โจทย์รวมทุกเรื่อง", slug: "review" },
      ],
    },
  ];

   return (
    <details className="pl-2 py-1">
      <summary className="text-blue-700 font-medium cursor-pointer">พื้นฐาน</summary>
      <ul className="pl-4 space-y-1 mt-1">
        {levels.map((level) => (
          <li key={level.grade}>
            <details>
              <summary className="text-gray-800 cursor-pointer">{level.grade}</summary>
              <ul className="pl-4 mt-1 space-y-1">
                {level.topics.map((topic) => (
                  <li key={topic.slug}>
                    <Link
                      href={`${level.basePath}/${topic.slug}`}
                      onClick={toggleMenu}
                      className="text-blue-600 hover:underline"
                    >
                      {topic.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </details>
  );
  

























}
