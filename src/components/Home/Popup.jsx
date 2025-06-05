"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function Popup() {
  const [visible, setVisible] = useState(false);
  const [showClose, setShowClose] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 8000);
    const closeTimer = setTimeout(() => setShowClose(true), 11000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50  backdrop-blur-sm px-2">
      <div className="relative max-w-sm w-full md:max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-white">
        {showClose && (
          <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white rounded-full p-1 transition"
          >
            <X size={22} className="text-red-500 cursor-pointer" />
          </button>
        )}
      <Link href="https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source=%7B1%7D" target="_blank">
        <img
          src="/Pop up.webp"
          alt="Popup"
          className="w-full h-auto max-h-[90vh] object-cover"
        />
      </Link>
      </div>
    </div>
  );
}
