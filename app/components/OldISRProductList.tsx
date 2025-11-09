// components/OldISRProductList.tsx

import { RandomuserType } from "../services/type";

// ใช้ data caching ผ่าน fetch แบบ ISR
export default async function OldISRProductList() {
  const res = await fetch(`https://randomuser.me/api`, {
    next: { revalidate: 5 }, // revalidate ทุก 60 วินาที
  });
  const data = await res.json();

  return (
    <ul className="p-2 border">
      <li key={data.results[0].name.first}>{data.results[0].name.first}</li>
    </ul>
  );
}
