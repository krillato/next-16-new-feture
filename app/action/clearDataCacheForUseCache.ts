"use server";

import { revalidateTag } from "next/cache";

export async function clearProductCacheSlate() {
  revalidateTag("randomuser", "max");
}

export async function clearProductCacheNow() {
  revalidateTag("randomuser", { expire: 0 });
}

/*tag	ชื่อ tag ที่ผูกไว้กับ cache
profile	วิธี revalidate:
- "max" ✅ (แนะนำ): ใช้ stale-while-revalidate
- { expire: 0 }: หมดอายุทันที (เหมาะกับ webhook/third-party ที่อยากล้างเดี๋ยวนี้)
- หรือจะใช้ profile custom ก็ได้ถ้ามีตั้งค่า cacheLife ไว้เอง */
