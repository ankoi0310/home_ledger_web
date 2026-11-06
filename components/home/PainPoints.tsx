"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HelpCircle, TrendingDown, AlertTriangle, ArrowDown, Sparkles } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: HelpCircle,
    badge: "Minh bạch người chi",
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950/60 border-blue-200/60 dark:border-blue-900",
    quote: "“Ủa, tiền điện nước tháng này ai đã trả chưa?”",
    desc: "Không ai nhớ rõ, người này tưởng người kia đã đóng. Đến khi bị ngắt dịch vụ hoặc cuối tháng ngồi cộng hóa đơn thì ngượng ngùng và mệt mỏi.",
  },
  {
    icon: TrendingDown,
    badge: "Kiểm soát ngân sách",
    color: "text-purple-600 bg-purple-50 dark:bg-purple-950/60 border-purple-200/60 dark:border-purple-900",
    quote: "“Mới giữa tháng mà tài khoản chung đã cạn tiền?”",
    desc: "Mỗi người chi một ít: đi chợ, cà phê, mua sắm online,... Không có một bảng ngân sách chung theo thời gian thực khiến gia đình luôn rơi vào thế bị động.",
  },
  {
    icon: AlertTriangle,
    badge: "Nhắc lịch tự động",
    color: "text-amber-600 bg-amber-50 dark:bg-amber-950/60 border-amber-200/60 dark:border-amber-900",
    quote: "“Quên đóng tiền học, tiền bảo hiểm định kỳ!”",
    desc: "Quá nhiều hóa đơn cần nhớ: tiền thuê nhà, phí chung cư, tiền mạng, học phí con,... Ghi vào sổ tay thì hay quên, để trong tin nhắn thì trôi mất.",
  },
];

export function PainPoints() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-slate-950 border-y border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200/80 dark:border-red-900 text-xs font-bold text-red-600 dark:text-red-400 mb-4"
          >
            Nỗi Trăn Trở Của Các Gia Đình
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            Quản lý tài chính chung không nên là nguyên nhân gây rạn nứt
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Ghi sổ tay thì lười. Dùng Excel trên máy tính thì bất tiện. Nhắn tin hỏi nhau thì ngại ngùng. Gia đình bạn xứng đáng có một giải pháp thông minh hơn.
          </motion.p>
        </div>

        {/* 3 Pain Points Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PAIN_POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900/80 rounded-3xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.color}`}>
                      {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 shadow-xs flex items-center justify-center text-slate-700 dark:text-slate-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white mb-3 italic leading-snug">
                    {item.quote}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transition statement to solution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 max-w-3xl mx-auto text-center"
        >
          <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base font-semibold">
            ✨ Home Ledger sinh ra để trả lời 4 câu hỏi này một cách tự động, minh bạch và chính xác mỗi ngày.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
