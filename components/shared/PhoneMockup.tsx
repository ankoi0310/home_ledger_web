"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  Users,
  CheckCircle2,
  AlertCircle,
  Bell,
} from "lucide-react";
import { formatVND } from "@/lib/utils";

// Simulated phone app screen
export function PhoneMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const transactions = [
    { name: "Siêu thị Vinmart", amount: -485000, member: "Minh", category: "Thực phẩm", time: "9:30" },
    { name: "Điện tháng 11", amount: -890000, member: "Hoa", category: "Hóa đơn", time: "10:15" },
    { name: "Lương tháng 11", amount: 18500000, member: "Minh", category: "Thu nhập", time: "Hôm qua" },
    { name: "Học phí con", amount: -2400000, member: "Hoa", category: "Giáo dục", time: "Hôm qua" },
  ];

  return (
    <div ref={ref} className="relative">
      {/* Floating cards behind phone */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 20 }}
        animate={isInView ? { opacity: 1, x: -20, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -left-8 top-24 z-10 w-44 glass rounded-2xl p-3 shadow-lg"
      >
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp className="w-4 h-4 text-[#34d399]" />
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Chi tháng này</span>
        </div>
        <p className="text-base font-bold text-slate-900 dark:text-white">
          {formatVND(8_740_000)}
        </p>
        <p className="text-xs text-[#34d399] mt-0.5">↓ 12% so với tháng trước</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={isInView ? { opacity: 1, x: 20, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -right-8 bottom-28 z-10 w-44 glass rounded-2xl p-3 shadow-lg"
      >
        <div className="flex items-center gap-2 mb-1">
          <Bell className="w-4 h-4 text-[#fbbf24]" />
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Sắp đến hạn</span>
        </div>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Internet FPT</p>
        <p className="text-xs text-[#fbbf24] mt-0.5">Còn 3 ngày · 350.000 ₫</p>
      </motion.div>

      {/* Phone frame */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="animate-float relative mx-auto"
        style={{ width: 280 }}
      >
        {/* Phone shell */}
        <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Screen */}
          <div className="bg-white dark:bg-slate-100 rounded-[2.5rem] overflow-hidden" style={{ height: 580 }}>
            {/* Status bar */}
            <div className="bg-[#4f7eff] px-6 pt-5 pb-4">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-blue-100 text-xs">Tổng số dư gia đình</p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-white text-xl font-bold font-heading"
                  >
                    {formatVND(42_650_000)}
                  </motion.p>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
              </div>
              {/* Budget bar */}
              <div className="mb-1">
                <div className="flex justify-between text-xs text-blue-100 mb-1.5">
                  <span>Ngân sách tháng 11</span>
                  <span>73% đã dùng</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "73%" } : {}}
                    transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Members */}
            <div className="px-4 py-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-500">Thành viên</span>
                <div className="ml-auto flex -space-x-2">
                  {["M", "H"].map((initial, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold ${
                        i === 0
                          ? "bg-blue-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {initial}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs text-slate-500">
                    +1
                  </div>
                </div>
              </div>
            </div>

            {/* Transactions */}
            <div className="px-4 py-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                Giao dịch gần đây
              </p>
              <div className="space-y-3">
                {transactions.map((tx, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.3 + i * 0.1 }}
                    className="flex items-center gap-2.5"
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs flex-shrink-0 ${
                        tx.amount > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {tx.amount > 0 ? "↑" : "↓"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-800 truncate">
                        {tx.name}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {tx.member} · {tx.time}
                      </p>
                    </div>
                    <p
                      className={`text-xs font-semibold flex-shrink-0 ${
                        tx.amount > 0 ? "text-[#34d399]" : "text-slate-700"
                      }`}
                    >
                      {tx.amount > 0 ? "+" : ""}
                      {formatVND(Math.abs(tx.amount))}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bill alert */}
            <div className="mx-4 mt-2 p-3 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-amber-800">Nhắc nhở</p>
                <p className="text-[10px] text-amber-600">
                  Tiền internet đến hạn sau 3 ngày
                </p>
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pt-2">
            <div className="w-28 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>

        {/* Reflection/glow */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none" />
      </motion.div>
    </div>
  );
}

