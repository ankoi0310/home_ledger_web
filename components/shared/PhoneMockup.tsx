"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  CalendarCheck,
  PieChart,
  Plus,
  Bell,
  Sparkles,
  CheckCircle2,
  Receipt,
  ShoppingCart,
  Zap,
  GraduationCap,
  TrendingDown,
  Wifi,
  Battery,
} from "lucide-react";
import { formatVND } from "@/lib/utils";

export function PhoneMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const transactions = [
    {
      name: "Siêu thị WinMart+ (Rau củ, thịt)",
      who: "Trang (Vợ)",
      amount: -485000,
      icon: ShoppingCart,
      iconBg: "bg-orange-50 text-orange-600 dark:bg-orange-950/60",
      time: "09:20",
    },
    {
      name: "Hóa đơn Điện lực EVN",
      who: "Minh (Chồng)",
      amount: -1280000,
      icon: Zap,
      iconBg: "bg-amber-50 text-amber-600 dark:bg-amber-950/60",
      time: "Hôm qua",
    },
    {
      name: "Tiền học năng khiếu bé Bơ",
      who: "Trang (Vợ)",
      amount: -2500000,
      icon: GraduationCap,
      iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-950/60",
      time: "Hôm qua",
    },
  ];

  return (
    <div ref={ref} className="relative w-full max-w-sm mx-auto select-none">
      {/* Floating Pill Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute -right-6 -top-4 z-20 glass-panel shadow-xl rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-700 max-w-[210px] hidden sm:block"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-bold text-slate-800 dark:text-slate-100">
            Vừa cập nhật chi tiêu
          </span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
          <strong>Minh</strong> vừa trả tiền điện nước: <strong>1.280.000 ₫</strong>
        </p>
      </motion.div>

      {/* Floating Pill Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute -left-8 bottom-16 z-20 glass-panel shadow-xl rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-700 max-w-[220px] hidden sm:block"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 rounded-full bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
            <Bell className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-bold text-slate-800 dark:text-slate-100">
            Nhắc hạn hóa đơn
          </span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
          Internet FPT còn <strong>2 ngày</strong> • 350.000 ₫
        </p>
      </motion.div>

      {/* iPhone 16 Frame Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="animate-float relative rounded-[48px] p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border-4 border-slate-700/80 ring-1 ring-white/20"
      >
        {/* Dynamic Island Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500/80" />
          <div className="w-2 h-2 rounded-full bg-slate-800" />
        </div>

        {/* Inner Screen */}
        <div className="rounded-[40px] overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col h-[590px]">
          {/* iOS Status Bar */}
          <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* App Header */}
          <div className="px-5 pt-2 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                MT
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Không gian gia đình</p>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  Nhà Minh & Trang 🏡
                </h4>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200/60 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 relative">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-red-500 absolute top-1.5 right-1.5" />
            </div>
          </div>

          {/* Screen Content - Scrollable container */}
          <div className="flex-1 px-4 space-y-3.5 overflow-hidden">
            {/* Main Balance Card */}
            <div className="p-4 rounded-3xl bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#1e40af] text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between text-blue-100 text-xs mb-1">
                  <span>Tổng tài sản hộ gia đình</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold">
                    4 Tài khoản
                  </span>
                </div>
                <h3 className="text-2xl font-black font-heading tracking-tight">
                  {formatVND(148500000)}
                </h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-white/10 px-2 py-0.5 rounded-full">
                    ↑ +8.4% tháng này
                  </span>
                  <span className="text-[11px] text-blue-200">Quỹ chung & Tiết kiệm</span>
                </div>
              </div>

              {/* Decorative circle glow */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
            </div>

            {/* Quick Actions (4 buttons) */}
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { label: "Ghi chép", icon: Plus, bg: "bg-blue-600 text-white" },
                { label: "Hóa đơn", icon: CalendarCheck, bg: "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800" },
                { label: "Ngân sách", icon: PieChart, bg: "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800" },
                { label: "Báo cáo", icon: TrendingDown, bg: "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800" },
              ].map((act, idx) => {
                const Icon = act.icon;
                return (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs ${act.bg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">
                      {act.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Monthly Budget Progress Box */}
            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  Hạn mức Tháng 11
                </span>
                <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                  Còn 7.140.000 ₫
                </span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-[74%]" />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>Đã chi: 24.860.000 ₫ (74%)</span>
                <span>Mục tiêu: 32.000.000 ₫</span>
              </div>
            </div>

            {/* Recent Expenses List */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Chi tiêu hôm nay
                </span>
                <span className="text-[10px] font-semibold text-blue-600">Xem tất cả</span>
              </div>

              <div className="space-y-1.5">
                {transactions.map((tx, idx) => {
                  const Icon = tx.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${tx.iconBg}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                            {tx.name}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            <span className="text-blue-600 font-medium">{tx.who}</span> • {tx.time}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white shrink-0 ml-2">
                        {formatVND(tx.amount)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="py-2.5 flex justify-center bg-white dark:bg-slate-950">
            <div className="w-24 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
