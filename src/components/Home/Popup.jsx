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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2">
      <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-3xl lg:max-w-5xl rounded-2xl overflow-hidden">
        {showClose && (
          <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 lg:right-25 z-10 rounded-full p-1 transition"
          >
            <X size={22} className="text-red-300 cursor-pointer" />
          </button>
        )}
        <Link
          href="https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source=%7B1%7D"
          target="_blank"
        >
          <img
            src="/Pop up.webp"
            alt="Popup"
            className="w-full h-auto max-h-[60vh] object-contain rounded-2xl"
          />
        </Link>
      </div>
    </div>
  );
}
