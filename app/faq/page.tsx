"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, HelpCircle, MessageSquare, Mail, Sparkles } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";
import { CONTACT_EMAIL } from "@/lib/constants";
import Link from "next/link";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({ "Tổng quan-0": true });

  const categories = useMemo(() => {
    return ["Tất cả", ...FAQ_ITEMS.map((c) => c.category)];
  }, []);

  const filteredItems = useMemo(() => {
    let result: { category: string; question: string; answer: string; id: string }[] = [];

    FAQ_ITEMS.forEach((cat) => {
      if (selectedCategory === "Tất cả" || selectedCategory === cat.category) {
        cat.questions.forEach((q, idx) => {
          const matchQuery =
            !searchQuery ||
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase());

          if (matchQuery) {
            result.push({
              category: cat.category,
              question: q.question,
              answer: q.answer,
              id: `${cat.category}-${idx}`,
            });
          }
        });
      }
    });

    return result;
  }, [selectedCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#4f7eff] text-xs font-semibold mb-4 border border-blue-100 dark:border-blue-900">
            <HelpCircle className="w-3.5 h-3.5" />
            Trung Tâm Trợ Giúp & Giải Đáp
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
            Câu Hỏi Thường Gặp
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
            Tìm câu trả lời nhanh chóng cho tất cả thắc mắc về cách sử dụng, tính năng, bảo mật và tài khoản gia đình.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-10">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm câu hỏi (vd: ngân hàng, xóa tài khoản, VND, bảo mật)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f7eff] transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-[#4f7eff] text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-8 border border-slate-200/60 dark:border-slate-800">
            <HelpCircle className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Không tìm thấy câu hỏi phù hợp
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Bạn có thể thử tìm với từ khóa khác hoặc liên hệ trực tiếp với chúng tôi để được giải đáp.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-white text-xs font-bold"
            >
              <Mail className="w-4 h-4" />
              Gửi câu hỏi cho chúng tôi
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item) => {
              const isOpen = !!openItems[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-slate-50/70 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-5 text-left gap-4"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-[#4f7eff] uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-blue-50 text-[#4f7eff]" : "text-slate-400"
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
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800 pt-3">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        {/* Still have questions CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-blue-950/40 border border-blue-100 dark:border-slate-800 text-center">
          <MessageSquare className="w-10 h-10 text-[#4f7eff] mx-auto mb-3" />
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
            Vẫn còn thắc mắc cần hỗ trợ?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto mb-6">
            Đội ngũ hỗ trợ của Home Ledger luôn sẵn sàng lắng nghe và giải đáp mọi câu hỏi của gia đình bạn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl gradient-primary text-white text-sm font-bold shadow-md hover:shadow-lg transition"
            >
              Liên hệ chúng tôi
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-sm font-bold hover:bg-slate-50 transition"
            >
              Gửi email: {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

