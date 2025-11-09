"use client";

import {
  clearProductCacheNow,
  clearProductCacheSlate,
} from "@/app/action/clearDataCacheForUseCache";

export function ClearCacheSlateButton() {
  return (
    <button
      className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
      onClick={() => clearProductCacheSlate()}
    >
      🧹 Clear Cache Slate
    </button>
  );
}

export function ClearCacheNowButton() {
  return (
    <button
      className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
      onClick={() => clearProductCacheNow()}
    >
      🧹 Clear Cache Now
    </button>
  );
}
