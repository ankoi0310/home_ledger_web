"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Shield, Smartphone, QrCode, CheckCircle2 } from "lucide-react";
import { WaitlistForm } from "@/components/shared/WaitlistForm";

export function WaitlistCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (8 cols): Pitch and Form */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Sẵn Sàng Cho Mọi Gia Đình Việt
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-6">
              Bắt đầu hành trình minh bạch tài chính cho tổ ấm ngay hôm nay
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
              Không còn những câu hỏi băn khoăn về chi tiêu hay bất an cuối tháng. Hãy để Home Ledger giúp cả gia đình thấu hiểu và đồng lòng xây dựng tương lai thịnh vượng.
            </p>

            {/* Email form */}
            <div className="max-w-md mx-auto lg:mx-0 mb-8">
              <WaitlistForm />
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Không cần thẻ tín dụng</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Miễn phí 100% cho hộ gia đình</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Mã hóa bảo mật chuẩn ngân hàng</span>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): App download card with QR */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 max-w-xs w-full text-center shadow-2xl">
              <Image
                src="/app-icon-master.png"
                alt="Home Ledger App Icon"
                width={64}
                height={64}
                className="w-16 h-16 rounded-2xl mx-auto shadow-md mb-4"
              />
              <div className="w-40 h-40 mx-auto bg-white p-3 rounded-2xl shadow-inner flex items-center justify-center mb-5">
                {/* SVG QR Code Simulation */}
                <div className="w-full h-full border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center p-2 text-slate-800">
                  <QrCode className="w-20 h-20 text-slate-900 mb-1" />
                  <span className="text-[10px] font-bold text-slate-600">Quét mã để tải app</span>
                </div>
              </div>

              <h4 className="font-bold text-white text-base mb-1">Tải ứng dụng Home Ledger</h4>
              <p className="text-xs text-slate-300 mb-5">Khả dụng trên cả iOS và Android</p>

              <div className="space-y-2.5">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-colors flex items-center justify-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Tải trên App Store (iOS)
                </button>
                <button className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-white/10 transition-colors flex items-center justify-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Tải trên Google Play (Android)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

