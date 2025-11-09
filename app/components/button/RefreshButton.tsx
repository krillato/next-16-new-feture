"use client";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.refresh()}
      className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
    >
      🔁 Refresh
    </button>
  );
}
