"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const TOP_FAQS = [
  {
    q: "Home Ledger khác gì so với dùng một file Excel hoặc Google Sheet chung?",
    a: "Google Sheet đòi hỏi cả nhà phải tự mở máy tính hoặc nhập liệu phức tạp, dễ bị xóa nhầm công thức và không thể gửi thông báo nhắc hạn hóa đơn. Home Ledger được thiết kế riêng trên di động: chỉ mất 5 giây để ghi chép, đính kèm ảnh hóa đơn, phân quyền xem và tự động tính toán tổng tài sản gia đình.",
  },
  {
    q: "Chồng/vợ tôi không quen dùng công nghệ thì có sử dụng được không?",
    a: "Hoàn toàn dễ dàng! Giao diện 100% tiếng Việt, các nút bấm to rõ, các danh mục quen thuộc như Tiền chợ, Tiền điện, Học phí,... Ai cũng có thể thao tác ghi chi tiêu chỉ bằng 2 lần chạm mà không cần học bất kỳ hướng dẫn phức tạp nào.",
  },
  {
    q: "Dữ liệu tài chính của gia đình tôi có được bảo mật an toàn không?",
    a: "Bảo mật là ưu tiên số 1 của chúng tôi. Dữ liệu được mã hóa chuẩn ngân hàng AES-256 trong quá trình lưu trữ và truyền tải qua HTTPS. Chúng tôi tuân thủ nghiêm ngặt Nghị định 13/2023/NĐ-CP và cam kết tuyệt đối không bán hoặc chia sẻ dữ liệu tài chính của bạn cho bên thứ ba.",
  },
  {
    q: "Một tài khoản gia đình có thể dùng trên bao nhiêu thiết bị cùng lúc?",
    a: "Bạn có thể đăng nhập trên nhiều điện thoại và máy tính bảng cùng lúc. Khi một thành viên ghi chi tiêu hoặc chỉnh sửa ngân sách, mọi thiết bị khác của gia đình sẽ nhận được cập nhật tức thì theo thời gian thực.",
  },
];

export function FAQTeaser() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#4f7eff] text-xs font-semibold mb-3 border border-blue-100 dark:border-blue-900">
            <HelpCircle className="w-3.5 h-3.5" />
            Giải Đáp Thắc Mắc
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Mọi điều bạn cần biết trước khi bắt đầu hành trình quản lý tài chính cùng gia đình.
          </p>
        </div>

        <div className="space-y-4">
          {TOP_FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg pr-4">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-[#4f7eff]" : "text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#4f7eff] hover:underline"
          >
            Xem tất cả các câu hỏi & hướng dẫn chi tiết
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

