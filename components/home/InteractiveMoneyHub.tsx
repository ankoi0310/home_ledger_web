"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  Users,
  PieChart,
  CalendarCheck,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Check,
  Clock,
  Sparkles,
} from "lucide-react";
import { formatVND } from "@/lib/utils";

const TABS = [
  { id: "accounts", label: "Tài khoản chung", icon: Wallet },
  { id: "expenses", label: "Nhật ký chi tiêu", icon: Users },
  { id: "budget", label: "Ngân sách tháng", icon: PieChart },
  { id: "bills", label: "Hóa đơn định kỳ", icon: CalendarCheck },
];

export function InteractiveMoneyHub() {
  const [activeTab, setActiveTab] = useState("accounts");

  return (
    <section id="demo" className="py-24 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/60 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3 border border-emerald-200 dark:border-emerald-900">
            <Sparkles className="w-3.5 h-3.5" />
            Trải Nghiệm Tương Tác Trực Tuyến
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
            Trung tâm tài chính gia đình trong tầm tay
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
            Nhấp chuột vào từng thẻ bên dưới để xem cách Home Ledger vận hành thực tế cho gia đình bạn.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#4f7eff] text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 border border-slate-200 dark:border-slate-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Canvas */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 dark:border-slate-800 min-h-[420px]">
          <AnimatePresence mode="wait">
            {activeTab === "accounts" && (
              <motion.div
                key="accounts"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      TỔNG SỐ DƯ TẤT CẢ TÀI KHOẢN THEO DÕI
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {formatVND(186350000)}
                    </h3>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                      ↑ Tăng 8.5% so với tháng trước từ khoản tiết kiệm chung
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-2 self-start sm:self-center px-4 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-[#4f7eff] text-sm font-semibold hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                    <Plus className="w-4 h-4" />
                    Thêm tài khoản mới
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      bank: "Vietcombank Digibank",
                      owner: "Quỹ chung gia đình",
                      type: "Tài khoản thanh toán",
                      balance: 84500000,
                      tag: "Chính",
                      color: "from-emerald-600 to-teal-700",
                    },
                    {
                      bank: "MB Bank Priority",
                      owner: "Hoàng Minh (Lương)",
                      type: "Tài khoản cá nhân",
                      balance: 42000000,
                      tag: "Thu nhập",
                      color: "from-blue-600 to-indigo-700",
                    },
                    {
                      bank: "Techcombank i-Save",
                      owner: "Quỹ phòng ngừa rủi ro",
                      type: "Tiết kiệm 6 tháng",
                      balance: 55000000,
                      tag: "Tiết kiệm",
                      color: "from-red-600 to-rose-700",
                    },
                    {
                      bank: "Ví MoMo & Tiền mặt",
                      owner: "Thu Trang (Chi chợ)",
                      type: "Chi tiêu vặt hằng ngày",
                      balance: 4850000,
                      tag: "Hằng ngày",
                      color: "from-pink-600 to-purple-700",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-gradient-to-br text-white shadow-md relative overflow-hidden"
                      style={{
                        backgroundImage:
                          idx === 0
                            ? "linear-gradient(135deg, #059669 0%, #0d9488 100%)"
                            : idx === 1
                            ? "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)"
                            : idx === 2
                            ? "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)"
                            : "linear-gradient(135deg, #db2777 0%, #9333ea 100%)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                          {item.tag}
                        </span>
                        <span className="text-xs text-white/80">{item.owner}</span>
                      </div>
                      <p className="text-xs text-white/80 font-medium">{item.bank}</p>
                      <p className="text-xl sm:text-2xl font-bold mt-1">{formatVND(item.balance)}</p>
                      <p className="text-[11px] text-white/70 mt-2">{item.type}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "expenses" && (
              <motion.div
                key="expenses"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Chi tiêu gần đây của cả nhà</h4>
                    <p className="text-xs text-slate-500">Mọi người cùng cập nhật theo thời gian thực</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#4f7eff]">
                    Hôm nay: {formatVND(2650000)}
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      title: "Siêu thị Go! An Phú (Thịt bò, rau củ, gia vị)",
                      who: "Thu Trang (Vợ)",
                      avatar: "TT",
                      avatarBg: "bg-pink-500",
                      amount: -1250000,
                      time: "Hôm nay, 11:20",
                      badge: "Quỹ chung",
                    },
                    {
                      title: "Bảo dưỡng xe máy định kỳ",
                      who: "Hoàng Minh (Chồng)",
                      avatar: "HM",
                      avatarBg: "bg-blue-600",
                      amount: -450000,
                      time: "Hôm nay, 09:15",
                      badge: "Đi lại",
                    },
                    {
                      title: "Tiền cà phê tiếp khách cá nhân",
                      who: "Hoàng Minh (Chồng)",
                      avatar: "HM",
                      avatarBg: "bg-blue-600",
                      amount: -85000,
                      time: "Hôm qua",
                      badge: "Chi riêng",
                    },
                    {
                      title: "Mua tã & sữa chua cho bé",
                      who: "Thu Trang (Vợ)",
                      avatar: "TT",
                      avatarBg: "bg-pink-500",
                      amount: -865000,
                      time: "Hôm qua",
                      badge: "Con cái",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100/70 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-full ${item.avatarBg} text-white flex items-center justify-center text-xs font-bold shrink-0`}
                        >
                          {item.avatar}
                        </div>
                        <div className="truncate">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                            {item.title}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                            <span className="font-medium text-[#4f7eff]">{item.who}</span>
                            <span>• {item.time}</span>
                            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[10px]">
                              {item.badge}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white shrink-0 ml-3">
                        {formatVND(item.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "budget" && (
              <motion.div
                key="budget"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Ngân sách gia đình Tháng 11</h4>
                    <p className="text-xs text-slate-500">Đã tiêu 72% - Còn 12 ngày trong tháng</p>
                  </div>
                  <div className="text-right sm:text-left">
                    <span className="text-xs text-slate-400">Hạn mức toàn gia đình:</span>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">32.000.000 ₫</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Ăn uống & Chợ búa",
                      spent: 10800000,
                      total: 12000000,
                      percent: 90,
                      status: "warning",
                      tip: "Sắp chạm ngưỡng, còn 1.200.000 ₫",
                    },
                    {
                      name: "Học tập & Nuôi con",
                      spent: 6200000,
                      total: 8000000,
                      percent: 77,
                      status: "good",
                      tip: "Tiến độ an toàn, còn 1.800.000 ₫",
                    },
                    {
                      name: "Hóa đơn & Nhà ở",
                      spent: 3100000,
                      total: 4500000,
                      percent: 68,
                      status: "good",
                      tip: "Còn 1.400.000 ₫",
                    },
                    {
                      name: "Giải trí & Mua sắm",
                      spent: 3400000,
                      total: 4000000,
                      percent: 85,
                      status: "good",
                      tip: "Còn 600.000 ₫",
                    },
                  ].map((b, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 space-y-2.5"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-bold text-slate-800 dark:text-slate-200">{b.name}</span>
                        <span className="font-semibold text-slate-900 dark:text-white">{b.percent}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            b.status === "warning" ? "bg-amber-500" : "bg-[#4f7eff]"
                          }`}
                          style={{ width: `${b.percent}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span>{formatVND(b.spent)} đã tiêu</span>
                        <span>{b.tip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "bills" && (
              <motion.div
                key="bills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Lịch nhắc hóa đơn tự động</h4>
                    <p className="text-xs text-slate-500">Tự động báo trước cho người chịu trách nhiệm</p>
                  </div>
                  <button className="text-xs font-semibold text-[#4f7eff] hover:underline flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" /> Thêm hóa đơn
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      name: "Tiền điện EVN TP.HCM",
                      period: "Hằng tháng, ngày 10",
                      responsible: "Hoàng Minh phụ trách",
                      amount: 1450000,
                      status: "Chưa thanh toán (còn 2 ngày)",
                      statusClass: "text-amber-600 bg-amber-50 dark:bg-amber-950/60",
                    },
                    {
                      name: "Cáp quang Internet VNPT",
                      period: "Hằng tháng, ngày 15",
                      responsible: "Thu Trang phụ trách",
                      amount: 286000,
                      status: "Đang chờ đến hạn",
                      statusClass: "text-slate-600 bg-slate-100 dark:bg-slate-800",
                    },
                    {
                      name: "Nước sạch Sawaco",
                      period: "Hằng tháng, ngày 05",
                      responsible: "Thu Trang phụ trách",
                      amount: 185000,
                      status: "✓ Đã thanh toán (04/11)",
                      statusClass: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60",
                    },
                    {
                      name: "Phí bảo hiểm Manulife gia đình",
                      period: "Hằng quý (kế tiếp: 25/11)",
                      responsible: "Quỹ chung",
                      amount: 4200000,
                      status: "Đang chờ đến hạn",
                      statusClass: "text-slate-600 bg-slate-100 dark:bg-slate-800",
                    },
                  ].map((bill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{bill.name}</p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
                          <span>{bill.period}</span>
                          <span>•</span>
                          <span className="text-[#4f7eff] font-medium">{bill.responsible}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{formatVND(bill.amount)}</p>
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full inline-block mt-1 ${bill.statusClass}`}>
                          {bill.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

