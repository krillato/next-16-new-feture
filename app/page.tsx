// app/products/page.tsx

import { Suspense } from "react";
import CachedProductList from "./components/CachedProductList";
import NormalProductList from "./components/NormalProductList";
import OldISRProductList from "./components/OldISRProductList";
import RefreshButton from "./components/button/RefreshButton";
import {
  ClearCacheNowButton,
  ClearCacheSlateButton,
} from "./components/button/ClearCacheButton";

export default async function ProductsPage() {
  return (
    <div className=" flex flex-col  gap-11 items-center justify-center w-full">
      <h1>🛍 NextJs 16 New Feture ✨</h1>

      <section className="border p-4 w-full items-center">
        <h2>1️⃣ Component แบบ ISR (เวอร์ชันเก่า) </h2>
        <OldISRProductList />
        :: evalidate ทุก 5 วินาที
      </section>

      <section className="border p-4 w-full items-center">
        <h2>
          2️⃣ Component ที่ใช้ {`"`}use cache{`"`} ✨
        </h2>
        <CachedProductList />
        <ul className="mt-4 gap-4 list-disc list-inside text-left">
          <li>
            :: 🔒 ข้อมูล “ไม่เปลี่ยนเลย” จนกว่าจะ redeploy หรือ invalidate cache
            เอง
          </li>
          <li>request เดิมอีก → ดึงจาก cache แทนการ fetch ใหม่</li>
          <li>
            ไม่มีหมดอายุ (เหมือน ISR ที่มี revalidate) เราจึงต้องบอกมันเองว่า
            “เคลียร์ cache นี้ออกไปนะ”
          </li>
          <li>
            เวลามันรันครั้งแรก → จะ render component แล้ว “จำ output ไว้ในระบบ
            cache” ครั้งต่อไปที่เจอ props / arguments เดิม → มันจะไม่รันใหม่เลย
            แต่ “ดึงจาก cache” ทันที
          </li>
          <li>:: มันไม่ขึ้นกับเวลา (เหมือน ISR)</li>
          <li>:: มันไม่สน fetch cache</li>
          <li>:: มันผูกกับ props/input ของ component โดยตรง</li>
        </ul>
      </section>

      <section className="border p-4 w-full items-center">
        <h2>3️⃣ Component ที่ไม่ใช้ cache (dynamic)</h2>
        <Suspense fallback={<p>กำลังโหลดข้อมูลสด...</p>}>
          <NormalProductList />
          :: ⚡ ข้อมูล “เปลี่ยนทุกครั้ง” เพราะ fetch สดทุกรอบ
        </Suspense>
      </section>

      <section className="flex gap-4">
        <div className="flex w-full flex-col items-center">
          <RefreshButton />
          :: refresh หน้า แบบทั่วไป
        </div>
        <div className="flex w-full flex-col items-center">
          <ClearCacheSlateButton />
          :: ล้าง cache แบบรอเปลี่ยนข้อมูลด้วยการ refresh ครั้งหน้า
          (เปลี่ยนข้อมูลอยู่เบื้องหลัง)
        </div>
        <div className="flex w-full flex-col items-center">
          <ClearCacheNowButton />
          :: ล้าง cache แล้วเปลี่ยนข้อมูลทันที
        </div>
      </section>
    </div>
  );
}
