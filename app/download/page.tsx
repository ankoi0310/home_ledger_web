import type { Metadata } from "next";
import { Smartphone, QrCode, ShieldCheck, CheckCircle2, Star, Download, Apple, Sparkles } from "lucide-react";
import { WaitlistForm } from "@/components/shared/WaitlistForm";

export const metadata: Metadata = {
  title: "Tải Ứng Dụng Home Ledger",
  description:
    "Tải ứng dụng quản lý tài chính gia đình Home Ledger miễn phí trên iOS và Android. Quét mã QR hoặc nhận đường link cài đặt qua email.",
};

export default function DownloadPage() {
  return (
    <div className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#4f7eff] text-xs font-semibold mb-4 border border-blue-100 dark:border-blue-900">
            <Download className="w-3.5 h-3.5" />
            Cài Đặt Miễn Phí
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
            Tải Ứng Dụng Home Ledger
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Khả dụng trên cả hai nền tảng iOS và Android. Đồng bộ hóa mượt mà cho mọi thành viên trong nhà.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column: Direct Download Options */}
          <div className="lg:col-span-7 space-y-8 text-center sm:text-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Chọn phiên bản cho thiết bị của bạn
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Ứng dụng hoàn toàn miễn phí tải về, không chứa quảng cáo gây phiền toái và được kiểm duyệt an toàn bởi Apple App Store và Google Play Protect.
              </p>
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#app-store"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-lg transition"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase font-medium">Khả dụng trên</p>
                  <p className="text-sm font-bold">App Store (iOS)</p>
                </div>
              </a>

              <a
                href="#google-play"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-lg transition border border-slate-700/60"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase font-medium">Tải về trên</p>
                  <p className="text-sm font-bold">Google Play (Android)</p>
                </div>
              </a>
            </div>

            {/* System Requirements */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Yêu cầu hệ thống tối thiểu
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                <li>• <strong>iOS / iPadOS:</strong> Phiên bản 15.0 trở lên (iPhone, iPad, iPod Touch)</li>
                <li>• <strong>Android:</strong> Phiên bản 9.0 (Pie) trở lên, hỗ trợ dịch vụ Google Play</li>
                <li>• <strong>Dung lượng:</strong> Khoảng 45 MB dung lượng bộ nhớ khả dụng</li>
              </ul>
            </div>

            {/* Waitlist update */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Hoặc nhận thông báo & đường link cài đặt qua Email
              </p>
              <WaitlistForm />
            </div>
          </div>

          {/* Right Column: QR Code Scan Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center max-w-sm w-full shadow-xl">
              <div className="w-48 h-48 mx-auto bg-white p-4 rounded-2xl shadow-inner flex flex-col items-center justify-center mb-6">
                <QrCode className="w-32 h-32 text-slate-900 mb-2" />
                <span className="text-[11px] font-bold text-slate-600">Quét bằng Camera điện thoại</span>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                Quét mã để tải nhanh
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Mở ứng dụng Camera trên iPhone hoặc Android và hướng vào mã QR ở trên để chuyển thẳng đến kho ứng dụng.
              </p>

              <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 py-2 px-3 rounded-xl">
                <ShieldCheck className="w-4 h-4" />
                Đã kiểm duyệt bảo mật an toàn
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

