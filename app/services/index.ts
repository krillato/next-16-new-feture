import { NextResponse } from "next/server";

const fruits = [
  "Mango",
  "Apple",
  "Banana",
  "Grapes",
  "Durian",
  "Melon",
  "Peach",
];

export async function GET() {
  const shuffled = fruits.sort(() => 0.5 - Math.random()).slice(0, 3);
  const products = shuffled.map((name, i) => ({ id: i + 1, name }));
  await new Promise((r) => setTimeout(r, 800)); // ดีเลย์นิดนึง
  return NextResponse.json(products);
}
