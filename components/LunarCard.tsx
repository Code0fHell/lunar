"use client"

import { useRouter } from "next/navigation";

export default function LunarCard() {

  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#3b0008] via-[#4b050f] to-[#130107] text-yellow-50">

      {/* CARD CONTAINER */}
      <div className="relative w-[900px] h-[520px] max-w-full px-4">

        <div className="relative w-full h-full flex shadow-2xl rounded-[32px] overflow-hidden">

          {/* LEFT PAGE */}
          <div className="w-1/2 h-full relative bg-gradient-to-b from-[#e91d2b] to-[#8b0010] border-[6px] border-red-900">

            <div className="absolute inset-3 border-2 border-yellow-200/70 rounded-[26px]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-3">

              <p className="tracking-[0.35em] text-xs uppercase text-yellow-200/80">
                2026
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-yellow-100/90">
               Chúc mừng năm mới
              </h2>

              <p className="mt-3 text-[11px] tracking-[0.28em] uppercase text-yellow-200/70">
                Thịnh vượng · May mắn · Vui vẻ
              </p>

            </div>

          </div>

          {/* RIGHT PAGE */}
          <div className="w-1/2 h-full bg-[#f6efe3] border-[6px] border-red-900 relative">

            <div className="absolute inset-3 border-2 border-red-300/70 rounded-[26px]" />

            <div className="p-10 text-center relative z-10 flex flex-col h-full">

              <h1 className="text-3xl md:text-4xl text-red-700 font-serif mb-4">
                Chúc mừng năm mới
              </h1>

              <p className="mt-4 text-gray-700 text-sm">
                “Năm mới Tết đến, chúc em yêu của anh có một năm thật sự thành công đối với những dự định đã đặt ra, luôn luôn vui vẻ, hạnh phúc bên gia đình và bên anh; quan trọng nhất là sức khỏe của em phải khỏe hơn năm cũ nhé.”
              </p>

              <div className="mt-6 text-xs text-gray-500 uppercase tracking-[0.28em]">
                Từ Anh yêu của em, Sơn 💖 
              </div>

              <div className="mt-auto pt-6 text-[10px] text-gray-500 uppercase tracking-[0.3em]">
                Thịnh vượng & May mắn
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BUTTON ALWAYS SHOW */}
      <button
        onClick={() => router.push("/fireworks")}
        className="absolute bottom-12 bg-yellow-400 text-red-900 px-8 py-3 rounded-full shadow-xl hover:scale-105 transition font-semibold tracking-wide"
      >
       Xem pháo hoa cùng anh nhé
      </button>

    </div>
  );
}
