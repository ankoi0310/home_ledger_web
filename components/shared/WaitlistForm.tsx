"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check, Loader2 } from "lucide-react";

type WaitlistFormProps = {
  compact?: boolean;
  className?: string;
};

export function WaitlistForm({ compact = false, className = "" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Vui lòng nhập địa chỉ email hợp lệ.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-3 ${compact ? "justify-center" : ""} ${className}`}
      >
        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
          <Check className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            Đăng ký thành công! 🎉
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Chúng tôi sẽ thông báo khi ứng dụng ra mắt.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className={`flex ${compact ? "flex-row" : "flex-col sm:flex-row"} gap-3`}>
        <div className="flex-1 relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="email@example.com"
            aria-label="Địa chỉ email"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f7eff] focus:border-transparent transition"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-primary hover:opacity-90 disabled:opacity-70 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Nhận thông báo
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-500">{errorMessage}</p>
      )}
      <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
        Miễn phí · Không spam · Hủy bất kỳ lúc nào
      </p>
    </form>
  );
}

