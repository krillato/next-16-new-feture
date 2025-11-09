import { RandomuserType } from "../services/type";

// components/NormalProductList.tsx
export default async function NormalProductList() {
  const res = await fetch(`https://randomuser.me/api`, {
    cache: "no-store", // ดึงสดทุกครั้ง
  });
  const data = await res.json();

  return (
    <ul className="p-2 border">
      <li key={data.results[0].name.first}>{data.results[0].name.first}</li>
    </ul>
  );
}
