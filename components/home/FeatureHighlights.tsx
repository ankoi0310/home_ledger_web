"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wallet,
  Users,
  PieChart,
  CalendarClock,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Receipt,
  CreditCard,
  Building2,
} from "lucide-react";
import { formatVND } from "@/lib/utils";
import Link from "next/link";

export function FeatureHighlights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-[#4f7eff] text-sm font-semibold mb-4"
          >
            4 Câu Hỏi Then Chốt Của Mọi Gia Đình
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 dark:text-white leading-tight mb-6"
          >
            Hơn cả một ứng dụng ghi chép: <br className="hidden sm:block" />
            <span className="text-[#4f7eff]">Trạm điều hành tài chính chung</span> cho tổ ấm
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
          >
            Mọi thành viên đều có thể nhìn thấy tiền đi đâu, ai đã chi, và quỹ chung của gia đình
            còn lại bao nhiêu để cùng nhau an tâm vun đắp tương lai.
          </motion.p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="space-y-24 lg:space-y-32">
          {/* Question 1: Total balance */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-100/70 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                Câu hỏi 1
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                Gia đình mình hiện có tổng cộng bao nhiêu tiền trên các tài khoản?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                Thay vì phải hỏi nhau xem tài khoản ai còn bao nhiêu, Home Ledger tổng hợp số dư từ tất cả các nguồn theo dõi: tài khoản ngân hàng, ví điện tử MoMo/ZaloPay, sổ tiết kiệm và quỹ tiền mặt trong nhà.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Theo dõi tập trung Vietcombank, Techcombank, MB, VPBank,...",
                  "Phân tách rõ ràng giữa quỹ chi tiêu chung và tài khoản cá nhân",
                  "Hỗ trợ tiền mặt, tiền gửi tiết kiệm và ví điện tử phổ biến tại Việt Nam",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/features#accounts"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f7eff] hover:text-[#3b63e8] group"
              >
                Khám phá tính năng quản lý tài khoản
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Mock Visual 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-slate-900 dark:to-blue-950/40 p-6 sm:p-8 rounded-3xl border border-blue-100/60 dark:border-slate-800 shadow-xl"
            >
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-medium text-slate-400">Tổng tài sản hộ gia đình</span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {formatVND(148500000)}
                    </h4>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-[#4f7eff]">
                    <Wallet className="w-6 h-6" />
                  </div>
                </div>

                <div className="mt-5 space-y-3.5">
                  {[
                    { name: "Vietcombank Chung", type: "Tài khoản thanh toán", amount: 62400000, color: "bg-emerald-500" },
                    { name: "Techcombank Quỹ dự phòng", type: "Tiết kiệm linh hoạt", amount: 75000000, color: "bg-red-500" },
                    { name: "Tiền mặt trong két", type: "Chi tiêu nhanh", amount: 6500000, color: "bg-amber-500" },
                    { name: "Ví MoMo gia đình", type: "Đi chợ, điện nước", amount: 4600000, color: "bg-pink-500" },
                  ].map((acc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100/80 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${acc.color}`} />
                        <div>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{acc.name}</p>
                          <p className="text-xs text-slate-400">{acc.type}</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{formatVND(acc.amount)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Question 2: Spending log & attribution */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Mock Visual 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50/40 dark:from-slate-900 dark:to-teal-950/30 p-6 sm:p-8 rounded-3xl border border-emerald-100/60 dark:border-slate-800 shadow-xl"
            >
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-medium text-slate-400">Chi tiêu Tháng 11/2026</span>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {formatVND(24860000)}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-full">
                    <TrendingDown className="w-3.5 h-3.5" />
                    Đúng lộ trình
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    {
                      name: "Đi chợ tuần & Thực phẩm sạch",
                      by: "Thu Trang (Vợ)",
                      avatar: "TT",
                      avatarBg: "bg-pink-500",
                      amount: -1850000,
                      category: "Ăn uống",
                      date: "Hôm nay, 08:30",
                    },
                    {
                      name: "Tiền học mầm non bé Bơ",
                      by: "Hoàng Minh (Chồng)",
                      avatar: "HM",
                      avatarBg: "bg-blue-600",
                      amount: -4500000,
                      category: "Giáo dục",
                      date: "Hôm qua",
                    },
                    {
                      name: "Hóa đơn EVN Điện lực",
                      by: "Hoàng Minh (Chồng)",
                      avatar: "HM",
                      avatarBg: "bg-blue-600",
                      amount: -1280000,
                      category: "Hóa đơn sinh hoạt",
                      date: "04/11",
                    },
                    {
                      name: "Khám sức khỏe tổng quát",
                      by: "Thu Trang (Vợ)",
                      avatar: "TT",
                      avatarBg: "bg-pink-500",
                      amount: -2100000,
                      category: "Y tế & Sức khỏe",
                      date: "02/11",
                    },
                  ].map((tx, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${tx.avatarBg} text-white flex items-center justify-center text-xs font-bold shrink-0`}>
                          {tx.avatar}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">{tx.name}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[11px] font-medium text-[#4f7eff]">{tx.by}</span>
                            <span className="text-[11px] text-slate-400">• {tx.date}</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                        {formatVND(tx.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-100/70 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
                Câu hỏi 2
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                Tháng này cả nhà đã tiêu gì, và ai là người thực hiện từng khoản?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                Chấm dứt mọi thắc mắc và sự ngượng ngùng khi nhắc tiền. Mỗi thành viên có thể thêm chi tiêu trong 5 giây, đính kèm hóa đơn chụp ảnh và gắn tên người chi rõ ràng.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Ghi nhận chính xác ai đã thanh toán để tự động tính toán hoàn tiền nếu cần",
                  "Ghi chép linh hoạt: chi tiêu cá nhân vs chi tiêu dùng chung cả nhà",
                  "Chụp ảnh hóa đơn lưu trữ, tra cứu lại bất cứ khi nào cần kiểm tra",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/features#attribution"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f7eff] hover:text-[#3b63e8] group"
              >
                Xem cách thức phân bổ & chia sẻ chi phí
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Question 3: Budget adherence */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-purple-100/70 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
                Câu hỏi 3
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                Chi tiêu gia đình có đang nằm trong hạn mức ngân sách an toàn?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                Thiết lập hạn mức cho các danh mục quen thuộc như Ăn uống, Nuôi dạy con, Mua sắm, Y tế,... Hệ thống thông minh sẽ cảnh báo trước khi bạn vô tình chạm mức đỏ.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Biểu đồ trực quan tỉ lệ sử dụng ngân sách thời gian thực",
                  "Cảnh báo thông minh khi một danh mục vượt quá 80% hạn mức",
                  "Linh hoạt điều chuyển ngân sách giữa các quỹ khi phát sinh nhu cầu đột xuất",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/features#budget"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f7eff] hover:text-[#3b63e8] group"
              >
                Tìm hiểu công cụ lập ngân sách thông minh
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Mock Visual 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 bg-gradient-to-br from-purple-50 to-indigo-50/40 dark:from-slate-900 dark:to-purple-950/30 p-6 sm:p-8 rounded-3xl border border-purple-100/60 dark:border-slate-800 shadow-xl"
            >
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-medium text-slate-400">Ngân sách gia đình tháng này</span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                      30.000.000 ₫
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-950/60 px-3 py-1.5 rounded-full">
                    Còn lại {formatVND(5140000)}
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    { label: "Ăn uống & Đi chợ", spent: 9200000, max: 10000000, percent: 92, status: "near-limit" },
                    { label: "Nuôi dạy con & Học tập", spent: 6500000, max: 8000000, percent: 81, status: "ok" },
                    { label: "Hóa đơn điện nước & Internet", spent: 2800000, max: 3500000, percent: 80, status: "ok" },
                    { label: "Giải trí & Cuối tuần", spent: 4100000, max: 5000000, percent: 82, status: "ok" },
                  ].map((bg, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{bg.label}</span>
                        <span className="text-slate-500 font-medium">
                          {formatVND(bg.spent)} / {formatVND(bg.max)}
                        </span>
                      </div>
                      <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            bg.percent > 90 ? "bg-amber-500" : "bg-[#4f7eff]"
                          }`}
                          style={{ width: `${bg.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Question 4: Upcoming bills */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Mock Visual 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-slate-900 dark:to-amber-950/30 p-6 sm:p-8 rounded-3xl border border-amber-100/60 dark:border-slate-800 shadow-xl"
            >
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                      <CalendarClock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        Hóa đơn sắp tới (7 ngày)
                      </h4>
                      <p className="text-xs text-slate-400">3 khoản cần thanh toán</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-lg">
                    Tổng: {formatVND(4530000)}
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    {
                      title: "Internet cáp quang Viettel",
                      due: "Hạn ngày mai (10/11)",
                      amount: 275000,
                      tag: "Khẩn cấp",
                      tagColor: "bg-red-50 text-red-600 border-red-100",
                    },
                    {
                      title: "Tiền điện sinh hoạt EVN",
                      due: "Còn 3 ngày (12/11)",
                      amount: 1455000,
                      tag: "Sắp đến",
                      tagColor: "bg-amber-50 text-amber-600 border-amber-100",
                    },
                    {
                      title: "Phí dịch vụ chung cư & gửi xe",
                      due: "Còn 5 ngày (14/11)",
                      amount: 2800000,
                      tag: "Tuần này",
                      tagColor: "bg-blue-50 text-blue-600 border-blue-100",
                    },
                  ].map((bill, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{bill.title}</p>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${bill.tagColor}`}>
                            {bill.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{bill.due}</p>
                      </div>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{formatVND(bill.amount)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-100/70 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                Câu hỏi 4
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                Những hóa đơn và khoản chi tiêu nào sắp sửa đến hạn thanh toán?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                Quên đóng tiền điện bị cắt dịch vụ, quên tiền bảo hiểm định kỳ hay phạt trễ hạn thẻ tín dụng sẽ không còn lặp lại. Home Ledger chủ động nhắc hẹn trước ngày thanh toán đến toàn bộ gia đình.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Lịch nhắc thông minh trước 3 - 5 ngày qua thông báo điện thoại",
                  "Phân quyền ai là người chịu trách nhiệm thanh toán hóa đơn đó",
                  "Đánh dấu 'Đã thanh toán' ngay lập tức đồng bộ trạng thái cho cả hai vợ chồng",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/features#bills"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f7eff] hover:text-[#3b63e8] group"
              >
                Khám phá tính năng quản lý hóa đơn định kỳ
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
