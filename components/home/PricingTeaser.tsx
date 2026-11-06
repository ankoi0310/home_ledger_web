"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatVND } from "@/lib/utils";

export function PricingTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#4f7eff] text-xs font-semibold mb-3 border border-blue-100 dark:border-blue-900"
          >
            Bảng Giá Minh Bạch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4"
          >
            Bắt đầu miễn phí, nâng cấp khi cần
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base"
          >
            Mọi gia đình đều có thể sử dụng trọn vẹn các tính năng quản lý chi tiêu cơ bản hoàn toàn miễn phí.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 mb-4">
                Gia đình cơ bản
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Miễn phí vĩnh viễn
              </h3>
              <p className="text-slate-500 text-sm mt-2 mb-6">
                Lý tưởng cho các cặp vợ chồng mới cưới, người độc thân hoặc 2-3 người ở chung.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">0 ₫</span>
                <span className="text-slate-400 text-sm">/ trọn đời</span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {[
                  "Tối đa 5 thành viên trong gia đình",
                  "Ghi chép chi tiêu & thu nhập không giới hạn",
                  "Theo dõi tối đa 4 tài khoản ngân hàng / ví",
                  "Lập ngân sách cơ bản theo danh mục",
                  "Nhắc nhở hóa đơn tự động trước 3 ngày",
                  "Đồng bộ thời gian thực trên iOS & Android",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/download"
              className="w-full text-center py-3.5 px-6 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm border border-slate-300 dark:border-slate-700 transition-colors"
            >
              Dùng thử miễn phí ngay
            </Link>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-blue-50/80 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20 rounded-3xl p-8 border-2 border-[#4f7eff] shadow-xl relative flex flex-col justify-between"
          >
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full gradient-primary text-white text-xs font-bold shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Khuyên Dùng
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-xs font-bold text-[#4f7eff] mb-4">
                Gia đình Nâng cao
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Home Ledger Premium
              </h3>
              <p className="text-slate-500 text-sm mt-2 mb-6">
                Dành cho gia đình nhiều thế hệ hoặc mong muốn báo cáo phân tích tài chính chuyên sâu.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">99.000 ₫</span>
                <span className="text-slate-400 text-sm">/ tháng (cả nhà dùng chung)</span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {[
                  "Tất cả tính năng trong gói Miễn phí",
                  "Không giới hạn số lượng thành viên",
                  "Không giới hạn tài khoản ngân hàng & thẻ",
                  "Báo cáo phân tích dòng tiền chuyên sâu hàng tháng",
                  "Xuất file Excel & báo cáo PDF định kỳ",
                  "Sao lưu đám mây ưu tiên & khôi phục dữ liệu",
                  "Hỗ trợ riêng 24/7 từ chuyên viên Home Ledger",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-800 dark:text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-[#4f7eff] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/pricing"
              className="w-full text-center py-3.5 px-6 rounded-2xl text-white gradient-primary font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Xem chi tiết gói Premium
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

