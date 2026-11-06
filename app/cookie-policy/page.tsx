import type { Metadata } from "next";
import { Cookie, CheckCircle2, Shield, Settings } from "lucide-react";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chính Sách Cookie",
  description:
    "Tìm hiểu cách thức Home Ledger sử dụng cookie và công nghệ lưu trữ dữ liệu cục bộ.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#4f7eff] text-xs font-semibold mb-4 border border-blue-100 dark:border-blue-900">
            <Cookie className="w-3.5 h-3.5" />
            Minh Bạch Công Nghệ Lưu Trữ
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
            Chính Sách Cookie & Lưu Trữ
          </h1>
          <p className="text-slate-500 text-sm">
            Cập nhật lần cuối: Tháng 11 năm 2026
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-10 leading-relaxed text-sm sm:text-base">
          <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              1. Cookie Là Gì?
            </h2>
            <p>
              Cookie là các tệp văn bản nhỏ được lưu trữ trên trình duyệt hoặc thiết bị của bạn khi bạn truy cập trang web {SITE_NAME}. Cookie giúp trang web ghi nhớ tùy chọn của bạn (như chế độ Sáng/Tối, ngôn ngữ hiển thị) và hỗ trợ duy trì phiên đăng nhập an toàn.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              2. Các Loại Cookie Chúng Tôi Sử Dụng
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2.5 mb-2">
                  <Shield className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Cookie Thiết Yếu (Bắt buộc)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Những cookie này là cần thiết để trang web hoạt động bình thường, bao gồm việc ghi nhớ trạng thái đồng ý cookie của bạn và duy trì tính bảo mật của biểu mẫu liên hệ. Không thể tắt các cookie này.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2.5 mb-2">
                  <Settings className="w-5 h-5 text-[#4f7eff]" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Cookie Tùy Chọn & Phân Tích Hiệu Suất
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Giúp chúng tôi đo lường số lượt truy cập và lưu lượng để cải thiện tốc độ và trải nghiệm giao diện người dùng. Mọi dữ liệu thu thập hoàn toàn ẩn danh và không liên kết với thông tin định danh cá nhân của bạn.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              3. Quyền Kiểm Soát Của Bạn
            </h2>
            <p>
              Bạn có thể thay đổi tùy chọn cookie bất cứ lúc nào bằng cách xóa lịch sử duyệt web và cookie trên trình duyệt của mình (Chrome, Safari, Edge, Firefox). Xin lưu ý rằng việc tắt một số cookie có thể ảnh hưởng đến khả năng hiển thị giao diện hoặc lưu trữ cài đặt cá nhân của bạn.
            </p>
          </section>

          <section className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              4. Liên Hệ
            </h2>
            <p>
              Mọi thắc mắc về chính sách sử dụng cookie, vui lòng gửi email về:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#4f7eff] font-semibold hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

