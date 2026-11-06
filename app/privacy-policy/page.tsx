import type { Metadata } from "next";
import { ShieldCheck, Lock, Eye, Trash2, FileText, Mail, Phone, MapPin } from "lucide-react";
import { SITE_NAME, CONTACT_EMAIL, DPO_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật & Quyền Riêng Tư",
  description:
    "Chính sách bảo mật thông tin và quyền riêng tư của Home Ledger. Tuân thủ Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân tại Việt Nam.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#4f7eff] text-xs font-semibold mb-4 border border-blue-100 dark:border-blue-900">
            <ShieldCheck className="w-3.5 h-3.5" />
            Tuân thủ Nghị định 13/2023/NĐ-CP
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
            Chính Sách Bảo Mật Quyền Riêng Tư
          </h1>
          <p className="text-slate-500 text-sm">
            Cập nhật lần cuối: Ngày 01 tháng 11 năm 2026 • Phiên bản hiệu lực 1.2
          </p>
        </div>

        {/* Content Box */}
        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-10 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 mb-3">
              <Eye className="w-5 h-5 text-[#4f7eff]" />
              1. Cam Kết Quyền Riêng Tư Của Home Ledger
            </h2>
            <p>
              Tại <strong>{SITE_NAME}</strong> (&ldquo;chúng tôi&rdquo;), chúng tôi hiểu rằng dữ liệu tài chính gia đình là một trong những thông tin nhạy cảm và thiêng liêng nhất. Chúng tôi cam kết bảo vệ toàn vẹn quyền riêng tư của bạn theo đúng quy định pháp luật của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam, đặc biệt là <strong>Nghị định số 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân</strong>, Luật An ninh mạng 2018 và các tiêu chuẩn kiểm duyệt nghiêm ngặt của <strong>Apple App Store</strong> và <strong>Google Play Store</strong>.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              2. Dữ Liệu Chúng Tôi Thu Thập
            </h2>
            <p className="mb-3">
              Chúng tôi chỉ thu thập các dữ liệu thực sự cần thiết nhằm phục vụ tính năng quản lý chi tiêu của gia đình bạn:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Thông tin tài khoản cơ bản:</strong> Họ tên, địa chỉ email, số điện thoại, ảnh đại diện (nếu bạn tự nguyện tải lên) và mật khẩu đã được mã hóa một chiều (băm bằng thuật toán bcrypt).
              </li>
              <li>
                <strong>Dữ liệu tài chính do bạn ghi nhận:</strong> Các khoản thu nhập, chi tiêu, số tiền, danh mục (thực phẩm, hóa đơn, học phí,...), ngày tháng phát sinh, tên tài khoản theo dõi (Vietcombank, MB, tiền mặt,...), và ghi chú kèm theo.
              </li>
              <li>
                <strong>Hình ảnh hóa đơn:</strong> Chỉ khi bạn chủ động chụp hoặc chọn ảnh từ thư viện để đính kèm vào giao dịch cụ thể.
              </li>
              <li>
                <strong>Dữ liệu nhóm gia đình:</strong> Danh sách các thành viên được mời tham gia cùng ngôi nhà số của bạn và vai trò phân quyền (Chủ hộ, Thành viên, Xem).
              </li>
              <li>
                <strong>Thông tin kỹ thuật thiết bị:</strong> Loại thiết bị, hệ điều hành (iOS/Android), ngôn ngữ hiển thị và mã định danh gửi thông báo đẩy (FCM/APNs token) để gửi thông báo nhắc hạn hóa đơn.
              </li>
            </ul>
            <div className="mt-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 text-xs sm:text-sm text-blue-900 dark:text-blue-200">
              <strong>Lưu ý quan trọng:</strong> Home Ledger <u>KHÔNG</u> lưu trữ mật khẩu ngân hàng, mã OTP, số thẻ tín dụng hay mã bảo mật CVV của bạn. Chúng tôi không yêu cầu và không bao giờ yêu cầu bạn cung cấp thông tin đăng nhập ngân hàng nội bộ.
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              3. Mục Đích Sử Dụng Dữ Liệu
            </h2>
            <p className="mb-3">Dữ liệu cá nhân của bạn chỉ được xử lý cho các mục đích hợp pháp sau:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Cung cấp và duy trì dịch vụ quản lý tài chính hộ gia đình theo đúng cam kết sản phẩm.</li>
              <li>Đồng bộ hóa dữ liệu tức thì giữa các thiết bị của các thành viên trong cùng một gia đình.</li>
              <li>Tính toán tổng số dư, báo cáo thống kê chi tiêu và trạng thái ngân sách của gia đình.</li>
              <li>Gửi thông báo nhắc nhở ngày đến hạn của hóa đơn định kỳ (điện, nước, internet,...).</li>
              <li>Hỗ trợ kỹ thuật và giải quyết thắc mắc khi bạn gửi yêu cầu cho đội ngũ chăm sóc khách hàng.</li>
              <li>Phát hiện, ngăn chặn các hành vi gian lận hoặc truy cập trái phép.</li>
            </ol>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              4. Bảo Mật & Lưu Trữ Dữ Liệu
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Mã hóa đầu cuối & truyền tải:</strong> Mọi dữ liệu truyền tải giữa thiết bị di động của bạn và máy chủ được mã hóa qua giao thức an toàn TLS/HTTPS với chứng chỉ bảo mật cao cấp.
              </li>
              <li>
                <strong>Mã hóa dữ liệu lưu trữ (Data at Rest):</strong> Cơ sở dữ liệu được mã hóa bằng tiêu chuẩn mã hóa nâng cao <strong>AES-256</strong>.
              </li>
              <li>
                <strong>Vị trí máy chủ:</strong> Máy chủ và bản sao lưu dữ liệu được đặt tại các trung tâm dữ liệu đạt chuẩn Tier 3 tại Việt Nam và khu vực Châu Á - Thái Bình Dương, tuân thủ quy định lưu trữ dữ liệu trong nước theo pháp luật Việt Nam.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              5. Nguyên Tắc Tuyệt Đối Không Bán Dữ Liệu
            </h2>
            <p>
              Chúng tôi <strong>KHÔNG BAO GIỜ</strong> bán, cho thuê, trao đổi hay tiết lộ dữ liệu tài chính của gia đình bạn cho bất kỳ công ty quảng cáo, bên thứ ba hay tổ chức cho vay tín dụng nào vì mục đích thương mại. Dữ liệu tài chính thuộc sở hữu duy nhất của chính gia đình bạn.
            </p>
          </section>

          {/* Section 6 */}
          <section className="p-6 rounded-2xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/60">
            <h2 className="text-xl font-bold text-red-900 dark:text-red-200 flex items-center gap-2 mb-3">
              <Trash2 className="w-5 h-5 text-red-600" />
              6. Quyền Của Bạn & Quy Trình Xóa Dữ Liệu Hoàn Toàn
            </h2>
            <p className="mb-3">
              Theo quy định của pháp luật và chính sách của Apple/Google, bạn có toàn quyền đối với dữ liệu của mình:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Quyền xem & truy xuất:</strong> Bạn có thể xuất toàn bộ dữ liệu giao dịch dưới dạng file bất kỳ lúc nào.</li>
              <li><strong>Quyền chỉnh sửa:</strong> Bạn có quyền tự do sửa đổi các thông tin cá nhân và hồ sơ gia đình.</li>
              <li>
                <strong>Quyền xóa tài khoản vĩnh viễn (Account Deletion):</strong> Bạn có thể trực tiếp thực hiện trong ứng dụng tại mục: <code>Cài đặt &gt; Tài khoản &gt; Xóa tài khoản vĩnh viễn</code> hoặc gửi email yêu cầu tới <code>{DPO_EMAIL}</code>.
              </li>
            </ul>
            <p className="text-xs text-red-700 dark:text-red-300 mt-3">
              Khi bạn yêu cầu xóa tài khoản, toàn bộ dữ liệu cá nhân, nhật ký chi tiêu và hóa đơn đính kèm sẽ bị xóa vĩnh viễn khỏi toàn bộ hệ thống máy chủ và các bản sao lưu trong vòng tối đa 30 ngày. Hành động này không thể hoàn tác.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              7. Thông Tin Liên Hệ Bộ Phận Bảo Vệ Dữ Liệu (DPO)
            </h2>
            <p className="mb-4">
              Nếu bạn có bất kỳ câu hỏi, khiếu nại hoặc muốn thực thi quyền bảo vệ dữ liệu cá nhân của mình, vui lòng liên hệ trực tiếp với Cán bộ Bảo vệ Dữ liệu của chúng tôi:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-sm">
              <p><strong>Cơ quan chủ quản:</strong> Home Ledger Việt Nam</p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#4f7eff]" />
                <strong>Email DPO:</strong> <a href={`mailto:${DPO_EMAIL}`} className="text-[#4f7eff] hover:underline">{DPO_EMAIL}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <strong>Hỗ trợ khách hàng:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#4f7eff] hover:underline">{CONTACT_EMAIL}</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <strong>Địa chỉ:</strong> Tòa nhà văn phòng tài chính, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
