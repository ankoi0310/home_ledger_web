"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HelpCircle, TrendingDown, AlertTriangle } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: HelpCircle,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-950/50",
    title: "\"Ai đã chi tiền cho điện nước?\"",
    description:
      "Không ai nhớ, không ai ghi lại. Cuối tháng lại phải ngồi đoán hoặc cãi nhau vì không minh bạch.",
  },
  {
    icon: TrendingDown,
    color: "text-purple-500 bg-purple-50 dark:bg-purple-950/50",
    title: "\"Ngân sách tháng còn bao nhiêu?\"",
    description:
      "Chi tiêu vô tội vạ đến khi nhìn tài khoản mới hoảng. Không có cách nào kiểm soát ngân sách gia đình hiệu quả.",
  },
  {
    icon: AlertTriangle,
    color: "text-orange-500 bg-orange-50 dark:bg-orange-950/50",
    title: "\"Hóa đơn nào sắp đến hạn?\"",
    description:
      "Tiền điện, nước, học phí, bảo hiểm – quá nhiều để nhớ. Và bạn chỉ biết mình quên khi đã bị phạt.",
  },
];

export function PainPoints() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-[#4f7eff] uppercase tracking-wider mb-3"
          >
            Vấn đề thực tế
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4"
          >
            Những câu hỏi mà mọi gia đình{" "}
            <br className="hidden sm:block" />
            Việt đều gặp phải
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto"
          >
            Spreadsheet quá phức tạp. Ghi sổ tay hay quên. Nhắn tin hỏi nhau thì mệt mỏi.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${point.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Solution teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Home Ledger giải quyết tất cả những vấn đề này —{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              đơn giản, minh bạch, tự động.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

