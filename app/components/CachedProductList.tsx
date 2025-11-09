// components/CachedProductList.tsx
"use cache";

import { RandomuserType } from "../services/type";

async function getProducts() {
  const res = await fetch(`https://randomuser.me/api`, {
    cache: "no-store", // ไม่ cache ระดับ fetch เลย
    next: { tags: ["randomuser"] }, // ผูกกับ tag นี้
  });
  return res.json();
}

export default async function CachedProductList() {
  const data = await getProducts();
  return (
    <ul className="p-2 border">
      <li key={data.results[0].name.first}>{data.results[0].name.first}</li>
    </ul>
  );
}
