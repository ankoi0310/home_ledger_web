import type { Metadata } from "next";
import { FileText, Scale, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Điều Khoản Sử Dụng Dịch Vụ",
  description:
    "Điều khoản và điều kiện sử dụng dịch vụ ứng dụng quản lý tài chính gia đình Home Ledger.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#4f7eff] text-xs font-semibold mb-4 border border-blue-100 dark:border-blue-900">
            <Scale className="w-3.5 h-3.5" />
            Hợp Đồng Điện Tử Người Dùng
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
            Điều Khoản Sử Dụng Dịch Vụ
          </h1>
          <p className="text-slate-500 text-sm">
            Có hiệu lực từ ngày 01 tháng 11 năm 2026 • Phiên bản 1.1
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-10 leading-relaxed text-sm sm:text-base">
          <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              1. Chấp Nhận Điều Khoản
            </h2>
            <p>
              Chào mừng bạn đến với <strong>{SITE_NAME}</strong>. Khi bạn tải xuống, cài đặt hoặc sử dụng ứng dụng di động cũng như trang web này, bạn đồng ý chịu sự ràng buộc pháp lý của các Điều khoản Sử dụng này (&ldquo;Điều khoản&rdquo;). Nếu bạn không đồng ý với bất kỳ phần nào, vui lòng ngừng sử dụng dịch vụ.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              2. Bản Chất Dịch Vụ Của Home Ledger
            </h2>
            <p className="mb-3">
              {SITE_NAME} cung cấp nền tảng số hỗ trợ ghi nhận, quản lý, phân bổ và lập kế hoạch ngân sách tài chính cho các thành viên trong hộ gia đình hoặc nhóm người ở chung.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
              <strong>Miễn trừ tư vấn tài chính / thuế:</strong> {SITE_NAME} là công cụ quản lý chi tiêu cá nhân và gia đình. Mọi số liệu, biểu đồ phân tích và cảnh báo chỉ mang tính chất tham khảo. Chúng tôi không cung cấp dịch vụ tư vấn đầu tư tài chính, môi giới tín dụng hoặc tư vấn quyết toán thuế chuyên nghiệp.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              3. Tài Khoản & Quản Lý Gia Đình
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Tính chính xác:</strong> Bạn cam kết cung cấp thông tin đăng ký trung thực và cập nhật số điện thoại / email khi có thay đổi.
              </li>
              <li>
                <strong>Trách nhiệm bảo mật mật khẩu:</strong> Bạn tự chịu trách nhiệm bảo vệ mật khẩu đăng nhập tài khoản cá nhân. Mọi hoạt động phát sinh từ tài khoản của bạn sẽ được coi là do bạn thực hiện.
              </li>
              <li>
                <strong>Mời thành viên vào nhóm gia đình:</strong> Khi mời một người thân vào nhóm gia đình, bạn xác nhận rằng người đó đồng ý chia sẻ và xem các khoản chi tiêu chung của gia đình. Bạn có thể phân quyền hoặc xóa thành viên khỏi nhóm bất cứ lúc nào.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              4. Gói Dịch Vụ & Thanh Toán (Nếu có)
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Gói Miễn Phí (Free):</strong> Hỗ trợ tối đa 5 thành viên và các chức năng quản lý cốt lõi mà không phát sinh bất kỳ khoản phí nào.
              </li>
              <li>
                <strong>Gói Nâng Cao (Premium):</strong> Cung cấp thêm tính năng nâng cao (báo cáo phân tích dòng tiền chuyên sâu, không giới hạn thành viên, xuất PDF/Excel). Mọi giao dịch đăng ký gói được xử lý an toàn qua cổng thanh toán của Apple In-App Purchase hoặc Google Play Billing và tuân thủ chính sách hủy/hoàn tiền của từng nền tảng tương ứng.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              5. Quyền Sở Hữu Trí Tuệ
            </h2>
            <p>
              Tất cả giao diện, biểu tượng, nhãn hiệu thương mại, mã nguồn, nội dung văn bản và đồ họa trên {SITE_NAME} là tài sản trí tuệ độc quyền của chúng tôi và được bảo hộ bởi Luật Sở hữu trí tuệ của nước CHXHCN Việt Nam và các điều ước quốc tế. Bạn không được sao chép, chỉnh sửa hoặc dịch ngược mã nguồn phần mềm vì bất kỳ mục đích nào nếu không có sự đồng ý bằng văn bản.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              6. Chấm Dứt Dịch Vụ
            </h2>
            <p>
              Bạn có thể ngừng sử dụng dịch vụ và yêu cầu xóa tài khoản bất cứ lúc nào. Chúng tôi có quyền tạm ngừng hoặc chấm dứt cung cấp dịch vụ nếu bạn vi phạm nghiêm trọng các Điều khoản này hoặc có hành vi gian lận, phá hoại an toàn hệ thống.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              7. Luật Áp Dụng & Giải Quyết Tranh Chấp
            </h2>
            <p>
              Các Điều khoản này được điều chỉnh và giải thích theo pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. Mọi tranh chấp phát sinh từ việc sử dụng dịch vụ trước hết sẽ được giải quyết thông qua thương lượng hòa giải thiện chí. Trường hợp không đạt được thỏa thuận, tranh chấp sẽ được đưa ra Tòa án có thẩm quyền tại Thành phố Hồ Chí Minh giải quyết.
            </p>
          </section>

          <section className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              8. Thông Tin Liên Hệ
            </h2>
            <p>
              Nếu có bất kỳ câu hỏi nào về Điều khoản Sử dụng, vui lòng liên hệ chúng tôi qua email:{" "}
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
