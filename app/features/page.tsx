import type { Metadata } from "next";
import {
  Wallet,
  Users,
  PieChart,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Receipt,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { FEATURES } from "@/data/features";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tính Năng Nổi Bật",
  description:
    "Khám phá trọn bộ tính năng thông minh của Home Ledger – trạm điều hành tài chính minh bạch cho gia đình bạn.",
};

const COMPARISON_ROWS = [
  {
    criteria: "Dành riêng cho nhiều thành viên trong gia đình",
    homeLedger: "Được thiết kế cốt lõi từ đầu cho hộ gia đình",
    spreadsheet: "Khó thao tác trên điện thoại, dễ mất công thức",
    soloApp: "Chỉ thiết kế cho một người dùng đơn lẻ",
  },
  {
    criteria: "Biết ai đã chi trả cho từng khoản tiền",
    homeLedger: "Gắn thẻ người chi rõ ràng, tự động tính hoàn tiền",
    spreadsheet: "Phải tự tạo cột và viết hàm tính toán",
    soloApp: "Không hỗ trợ ghi nhận người thực hiện",
  },
  {
    criteria: "Nhắc nhở hóa đơn sinh hoạt định kỳ",
    homeLedger: "Thông báo đẩy trước 3-7 ngày cho đúng người",
    spreadsheet: "Không có tính năng thông báo",
    soloApp: "Nhắc nhở đơn điệu, không chia sẻ cho người khác",
  },
  {
    criteria: "Hỗ trợ VND & Ngân hàng Việt Nam",
    homeLedger: "100% tiếng Việt, tiền VND, cấu trúc chi tiêu Việt",
    spreadsheet: "Phải tự định dạng",
    soloApp: "Thường là app dịch máy, ngoại tệ, không chuẩn Việt",
  },
  {
    criteria: "Đính kèm ảnh chụp hóa đơn đi chợ/siêu thị",
    homeLedger: "Lưu trữ đám mây, tra cứu lại trong 1 giây",
    spreadsheet: "Rất nặng file, khó chèn ảnh",
    soloApp: "Hạn chế hoặc phải trả phí đắt",
  },
];

export default function FeaturesPage() {
  return (
    <div className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#4f7eff] text-xs font-semibold mb-4 border border-blue-100 dark:border-blue-900">
            <Sparkles className="w-3.5 h-3.5" />
            Tính Năng Toàn Diện
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">
            Mọi Công Cụ Cần Thiết Để Làm Chủ Tài Chính Tổ Ấm
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Từ việc ghi chép bữa cơm hằng ngày cho đến việc lập kế hoạch mua nhà, sinh con. Home Ledger đồng hành cùng bạn trên từng chặng đường phát triển của gia đình.
          </p>
        </div>

        {/* Feature Grid (12 items) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
          {FEATURES.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-900/60 p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-[#4f7eff] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2.5">
                    {f.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-3">
              Tại sao không nên dùng Excel hay sổ tay?
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Bảng so sánh trực quan giữa Home Ledger và các giải pháp truyền thống.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-4 font-bold text-slate-900 dark:text-white w-2/5">Tiêu chí so sánh</th>
                  <th className="pb-4 font-bold text-[#4f7eff] text-center w-1/5">Home Ledger</th>
                  <th className="pb-4 font-bold text-slate-500 text-center w-1/5">Google Sheet / Excel</th>
                  <th className="pb-4 font-bold text-slate-500 text-center w-1/5">App chi tiêu đơn lẻ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/60 dark:hover:bg-slate-800/30">
                    <td className="py-4 font-semibold text-slate-900 dark:text-white pr-4">{row.criteria}</td>
                    <td className="py-4 text-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 px-3 rounded-xl">
                      {row.homeLedger}
                    </td>
                    <td className="py-4 text-center text-xs text-slate-500 px-3">{row.spreadsheet}</td>
                    <td className="py-4 text-center text-xs text-slate-500 px-3">{row.soloApp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white gradient-primary shadow-lg hover:shadow-xl transition"
          >
            Trải nghiệm toàn bộ tính năng miễn phí
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

