"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { QrCode, UserPlus, Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    step: "01",
    title: "Khởi tạo Không gian Gia đình",
    desc: "Tải ứng dụng và tạo ngôi nhà số của bạn trong 60 giây. Chọn đơn vị VND, thêm các tài khoản ngân hàng hoặc quỹ tiền mặt muốn quản lý.",
    badge: "Bắt đầu nhanh",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Mời vợ chồng & người thân vào nhóm",
    desc: "Gửi lời mời qua tin nhắn Zalo hoặc để người thân quét mã QR trực tiếp. Mọi người lập tức tham gia vào chung một trang sổ chi tiêu.",
    badge: "Đồng bộ tức thì",
    icon: UserPlus,
  },
  {
    step: "03",
    title: "Cùng ghi chép & vun đắp mục tiêu",
    desc: "Mỗi khi có khoản chi, chỉ mất 5 giây để ghi chép hoặc chụp ảnh hóa đơn. Cả nhà cùng nhìn thấy bức tranh tài chính minh bạch và gắn kết hơn.",
    badge: "An tâm tài chính",
    icon: HeartHandshake,
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-[#4f7eff] text-sm font-semibold mb-4"
          >
            Quy Trình Sử Dụng Đơn Giản
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6"
          >
            Bắt đầu quản lý tài chính chung chỉ với 3 bước
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            Không cần kiến thức kế toán phức tạp. Home Ledger được thiết kế thân thiện cho mọi thành viên trong nhà, từ người lớn tuổi đến người trẻ.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                className="relative bg-slate-50 dark:bg-slate-900/80 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black font-heading text-blue-200 dark:text-blue-950 group-hover:text-[#4f7eff] transition-colors">
                      {s.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-[#4f7eff] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#4f7eff] uppercase tracking-wider block mb-2">
                    {s.badge}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center text-xs font-semibold text-slate-400 group-hover:text-[#4f7eff] transition-colors">
                  <span>Trải nghiệm ngay</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security assurance banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/40 to-emerald-50/60 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900 border border-blue-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#4f7eff]/10 flex items-center justify-center text-[#4f7eff] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                An toàn tuyệt đối theo tiêu chuẩn Việt Nam
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Tuân thủ Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân. Dữ liệu được mã hóa đầu cuối.
              </p>
            </div>
          </div>
          <Link
            href="/privacy-policy"
            className="text-xs font-bold text-[#4f7eff] hover:underline shrink-0"
          >
            Đọc chính sách bảo mật →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
