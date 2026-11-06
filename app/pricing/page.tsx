"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { formatVND } from "@/lib/utils";

const COMPARISON_FEATURES = [
  { name: "Số thành viên tối đa trong gia đình", free: "Tối đa 5 người", premium: "Không giới hạn" },
  { name: "Số lượng tài khoản theo dõi (Ngân hàng/Ví)", free: "Tối đa 4 tài khoản", premium: "Không giới hạn" },
  { name: "Ghi chép chi tiêu & thu nhập", free: "Không giới hạn", premium: "Không giới hạn" },
  { name: "Lập hạn mức ngân sách theo danh mục", free: "Cơ bản", premium: "Nâng cao linh hoạt" },
  { name: "Nhắc nhở hóa đơn định kỳ tự động", free: "Trước 3 ngày", premium: "Tùy chỉnh 1 - 14 ngày" },
  { name: "Đính kèm ảnh chụp hóa đơn giao dịch", free: "1 ảnh / giao dịch", premium: "Đa ảnh chất lượng cao" },
  { name: "Báo cáo phân tích dòng tiền chuyên sâu", free: false, premium: true },
  { name: "Xuất dữ liệu ra file Excel / CSV", free: false, premium: true },
  { name: "Báo cáo tài chính gia đình định kỳ PDF", free: false, premium: true },
  { name: "Sao lưu đám mây ưu tiên & khôi phục nhanh", free: false, premium: true },
  { name: "Hỗ trợ khách hàng ưu tiên 24/7", free: "Tiêu chuẩn (24h)", premium: "Ưu tiên cao (<2h)" },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <div className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#4f7eff] text-xs font-semibold mb-4 border border-blue-100 dark:border-blue-900">
            <Sparkles className="w-3.5 h-3.5" />
            Đơn Giản & Minh Bạch
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
            Bảng Giá Dành Cho Gia Đình Việt
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Một gói đăng ký duy nhất – cả gia đình cùng tận hưởng không giới hạn lợi ích.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span
              onClick={() => setBillingCycle("monthly")}
              className={`text-sm font-semibold cursor-pointer ${
                billingCycle === "monthly" ? "text-slate-900 dark:text-white" : "text-slate-400"
              }`}
            >
              Thanh toán hằng tháng
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-14 h-8 bg-slate-200 dark:bg-slate-800 rounded-full p-1 transition-colors"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#4f7eff] transition-transform ${
                  billingCycle === "yearly" ? "translate-x-6" : ""
                }`}
              />
            </button>
            <span
              onClick={() => setBillingCycle("yearly")}
              className={`text-sm font-semibold cursor-pointer flex items-center gap-1.5 ${
                billingCycle === "yearly" ? "text-slate-900 dark:text-white" : "text-slate-400"
              }`}
            >
              Thanh toán hằng năm
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 text-xs font-bold">
                Tiết kiệm 33%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24 items-stretch">
          {/* Free Card */}
          <div className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Hộ gia đình cơ bản
              </span>
              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Gói Miễn Phí
              </h3>
              <p className="text-slate-500 text-sm mt-2 mb-6">
                Đáp ứng đầy đủ 4 câu hỏi tài chính cốt lõi cho các cặp đôi và gia đình nhỏ.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">0 ₫</span>
                <span className="text-slate-400 text-sm">/ vĩnh viễn</span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {[
                  "Tối đa 5 thành viên gia đình",
                  "4 tài khoản ngân hàng / ví điện tử",
                  "Ghi chép chi tiêu & thu nhập không giới hạn",
                  "Nhắc nhở hóa đơn tự động trước 3 ngày",
                  "Đồng bộ hóa tức thì trên iOS & Android",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/download"
              className="w-full text-center py-3.5 px-6 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm border border-slate-300 dark:border-slate-700 transition"
            >
              Bắt đầu miễn phí ngay
            </Link>
          </div>

          {/* Premium Card */}
          <div className="bg-gradient-to-b from-blue-50/70 via-white to-blue-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30 rounded-3xl p-8 border-2 border-[#4f7eff] shadow-2xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full gradient-primary text-white text-xs font-bold shadow-md">
              Gia đình chọn nhiều nhất
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f7eff] block mb-2">
                Hộ gia đình trọn gói
              </span>
              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Gia đình Nâng cao (Plus)
              </h3>
              <p className="text-slate-500 text-sm mt-2 mb-6">
                Toàn quyền mở khóa mọi tính năng phân tích, lưu trữ và báo cáo không giới hạn.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                  {billingCycle === "yearly" ? "66.500 ₫" : "99.000 ₫"}
                </span>
                <span className="text-slate-400 text-sm">/ tháng</span>
              </div>
              <p className="text-xs text-slate-400 mb-8">
                {billingCycle === "yearly"
                  ? "Thanh toán 799.000 ₫/năm cho toàn bộ gia đình"
                  : "Thanh toán từng tháng linh hoạt"}
              </p>

              <ul className="space-y-3.5 mb-8">
                {[
                  "Không giới hạn số thành viên tham gia",
                  "Không giới hạn tài khoản ngân hàng, sổ tiết kiệm",
                  "Báo cáo phân tích chuyên sâu & cảnh báo thông minh",
                  "Xuất file Excel / CSV & báo cáo tài chính PDF",
                  "Đính kèm nhiều ảnh hóa đơn phân giải cao",
                  "Hỗ trợ kỹ thuật ưu tiên 24/7",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-800 dark:text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-[#4f7eff] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/download"
              className="w-full text-center py-3.5 px-6 rounded-2xl text-white gradient-primary font-bold text-sm shadow-md hover:shadow-lg transition"
            >
              Dùng thử 14 ngày miễn phí
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
              So sánh chi tiết tính năng
            </h3>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-4 font-bold text-slate-900 dark:text-white w-1/2">Tính năng</th>
                  <th className="pb-4 font-bold text-slate-700 dark:text-slate-300 text-center w-1/4">Miễn phí</th>
                  <th className="pb-4 font-bold text-[#4f7eff] text-center w-1/4">Gia đình Plus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {COMPARISON_FEATURES.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-100/50 dark:hover:bg-slate-800/40">
                    <td className="py-3.5 text-slate-700 dark:text-slate-300 font-medium">{row.name}</td>
                    <td className="py-3.5 text-center text-slate-600 dark:text-slate-400">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )
                      ) : (
                        row.free
                      )}
                    </td>
                    <td className="py-3.5 text-center font-semibold text-slate-900 dark:text-white">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <Check className="w-4 h-4 text-[#4f7eff] mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )
                      ) : (
                        row.premium
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

