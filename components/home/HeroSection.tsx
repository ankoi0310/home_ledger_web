"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Users } from "lucide-react";
import { PhoneMockup } from "@/components/shared/PhoneMockup";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-400/08 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-violet-400/08 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 text-sm font-medium text-[#4f7eff]">
                <span className="w-2 h-2 rounded-full bg-[#4f7eff] animate-pulse" />
                🇻🇳 Dành riêng cho thị trường Việt Nam
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-900 dark:text-white leading-tight mb-6"
            >
              Cả nhà cùng{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f7eff] to-[#3b63e8]">
                quản lý tài chính
              </span>{" "}
              – minh bạch, dễ dàng
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={item}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Home Ledger giúp vợ chồng, gia đình và những người ở chung theo
              dõi chi tiêu chung, lên ngân sách và hiểu rõ tài chính hộ gia
              đình – mọi lúc, mọi nơi.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <Link
                href="/download"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-primary shadow-lg hover:shadow-xl hover:scale-[1.02] hover:opacity-95 transition-all duration-200"
              >
                Bắt đầu miễn phí
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/features"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
              >
                Xem tính năng
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              {/* Avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[
                    { text: "NTH", bg: "bg-blue-500" },
                    { text: "TMT", bg: "bg-green-500" },
                    { text: "LTT", bg: "bg-purple-500" },
                    { text: "PVH", bg: "bg-orange-500" },
                  ].map((avatar, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full border-2 border-white dark:border-slate-900 ${avatar.bg} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {avatar.text.slice(0, 1)}
                    </div>
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-500">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      2.000+
                    </span>{" "}
                    gia đình đang dùng
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-700" />

              {/* Store rating */}
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  4.9 ⭐
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  App Store & Google Play
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

