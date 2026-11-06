"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";
import Link from "next/link";

const COOKIE_KEY = "home_ledger_cookie_consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-5">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-[#4f7eff]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  Chúng tôi dùng cookie 🍪
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Chúng tôi sử dụng cookie để cải thiện trải nghiệm của bạn.
                  Xem{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-[#4f7eff] hover:underline"
                  >
                    chính sách cookie
                  </Link>{" "}
                  để biết thêm.
                </p>
              </div>
              <button
                onClick={handleDecline}
                aria-label="Đóng thông báo cookie"
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleDecline}
                className="flex-1 px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                Chỉ cần thiết
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-white gradient-primary hover:opacity-90 transition-all"
              >
                <Check className="w-3.5 h-3.5" />
                Chấp nhận tất cả
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

