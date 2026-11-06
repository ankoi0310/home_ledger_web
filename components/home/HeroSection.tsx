"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Users, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PhoneMockup } from "@/components/shared/PhoneMockup";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-slate-50/60 dark:bg-slate-950 bg-grid-pattern">
      {/* Background Lighting Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/15 dark:bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-24 w-[450px] h-[300px] bg-emerald-400/10 dark:bg-emerald-500/08 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Content (7 cols) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900 text-xs font-bold text-blue-700 dark:text-blue-300 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                🇻🇳 Ứng Dụng Quản Lý Tài Chính Gia Đình Việt Nam
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-900 dark:text-white leading-[1.12] mb-6 tracking-tight"
            >
              Cả nhà cùng thấy tiền đi đâu,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                ai đã chi
              </span>
              , và còn lại bao nhiêu.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-normal"
            >
              <strong>Home Ledger</strong> là trạm điều hành tài chính chung cho các cặp vợ chồng, gia đình trẻ và nhóm ở chung tại Việt Nam. Xóa bỏ nghi ngại, quản lý chi tiêu minh bạch và cùng nhau lên ngân sách dễ dàng.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10"
            >
              <Link
                href="/download"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white gradient-primary shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                Bắt đầu miễn phí ngay
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/features"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100/70 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs"
              >
                Khám phá tính năng
              </Link>
            </motion.div>

            {/* Social Proof & Trust Badges */}
            <motion.div
              variants={item}
              className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-slate-500 dark:text-slate-400 text-xs"
            >
              {/* Rating */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-900 dark:text-white">4.9/5</span>
                <span>(từ 2.000+ hộ gia đình)</span>
              </div>

              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />

              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Tuân thủ Nghị định 13/2023/NĐ-CP</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Modern iPhone Mockup (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
