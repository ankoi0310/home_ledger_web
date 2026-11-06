import {
  Wallet,
  Users,
  PieChart,
  Bell,
  Shield,
  Smartphone,
  TrendingUp,
  RefreshCw,
  Tag,
  Calendar,
  BarChart3,
  Share2,
} from "lucide-react";

export const FEATURES = [
  {
    icon: Wallet,
    title: "Tổng quan tài khoản hộ gia đình",
    description:
      "Xem tổng số dư từ tất cả tài khoản của cả nhà trong một màn hình duy nhất. Không cần hỏi, không cần đoán.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Chi tiêu minh bạch – biết ai chi gì",
    description:
      "Mỗi khoản chi tiêu đều được ghi lại cùng tên người thực hiện. Mọi thành viên đều có thể xem và tin tưởng vào dữ liệu.",
    color: "green",
  },
  {
    icon: PieChart,
    title: "Ngân sách thông minh theo danh mục",
    description:
      "Đặt ngân sách cho từng danh mục và theo dõi tiến độ theo thời gian thực. Nhận cảnh báo khi sắp vượt ngân sách.",
    color: "purple",
  },
  {
    icon: Bell,
    title: "Nhắc nhở hóa đơn tự động",
    description:
      "Thêm hóa đơn định kỳ một lần, ứng dụng sẽ nhắc nhở trước ngày đến hạn. Không bao giờ bỏ lỡ hóa đơn nào nữa.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Bảo mật dữ liệu chuẩn ngân hàng",
    description:
      "Dữ liệu được mã hóa AES-256 và tuân thủ Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân tại Việt Nam.",
    color: "red",
  },
  {
    icon: Smartphone,
    title: "Đồng bộ thời gian thực",
    description:
      "Mọi thành viên nhận cập nhật ngay khi có giao dịch mới. Không cần chờ, không cần hỏi.",
    color: "teal",
  },
  {
    icon: TrendingUp,
    title: "Báo cáo chi tiêu chi tiết",
    description:
      "Phân tích xu hướng chi tiêu theo tháng, quý và năm. Hiểu rõ tiền của gia đình đang đi đâu.",
    color: "indigo",
  },
  {
    icon: RefreshCw,
    title: "Giao dịch định kỳ",
    description:
      "Tạo giao dịch tự động lặp lại cho các khoản chi tiêu định kỳ như tiền thuê nhà, học phí, bảo hiểm.",
    color: "pink",
  },
  {
    icon: Tag,
    title: "Phân loại danh mục linh hoạt",
    description:
      "Hơn 30 danh mục có sẵn hoặc tự tạo danh mục theo nhu cầu gia đình. Gắn nhãn và lọc dễ dàng.",
    color: "yellow",
  },
  {
    icon: Calendar,
    title: "Lịch chi tiêu",
    description:
      "Xem chi tiêu theo lịch để dễ dàng nhận ra các ngày chi nhiều và lên kế hoạch tốt hơn.",
    color: "cyan",
  },
  {
    icon: BarChart3,
    title: "So sánh tháng này vs tháng trước",
    description:
      "Nhanh chóng so sánh chi tiêu giữa các tháng để thấy sự cải thiện hoặc điều chỉnh kịp thời.",
    color: "emerald",
  },
  {
    icon: Share2,
    title: "Chia sẻ báo cáo",
    description:
      "Xuất và chia sẻ báo cáo tài chính gia đình dưới dạng PDF hoặc hình ảnh với người thân.",
    color: "violet",
  },
];

export const FEATURE_HIGHLIGHTS = [
  {
    id: "balance",
    headline: "Cả nhà biết tổng số dư ngay lập tức",
    description:
      "Không cần hỏi \"tiền còn bao nhiêu?\". Home Ledger hiển thị tổng số dư từ tất cả tài khoản của gia đình – từ tiền mặt, tài khoản ngân hàng đến ví điện tử – trong một màn hình đẹp và rõ ràng.",
    badge: "Câu hỏi 1",
    badgeColor: "blue",
    stats: [
      { label: "Tài khoản theo dõi", value: "Không giới hạn" },
      { label: "Cập nhật", value: "Thời gian thực" },
    ],
  },
  {
    id: "spending",
    headline: "Minh bạch từng đồng – ai chi gì đều rõ",
    description:
      "Mỗi khoản chi tiêu được gắn tên người ghi lại, danh mục và ghi chú. Không còn tranh luận \"hôm qua ai trả tiền chợ?\". Lịch sử chi tiêu của cả nhà luôn minh bạch và dễ tra cứu.",
    badge: "Câu hỏi 2",
    badgeColor: "green",
    stats: [
      { label: "Danh mục", value: "30+" },
      { label: "Ghi chú", value: "Hỗ trợ ảnh" },
    ],
  },
  {
    id: "budget",
    headline: "Ngân sách thông minh, cảnh báo kịp thời",
    description:
      "Đặt ngân sách cho từng danh mục và xem tiến độ bằng biểu đồ trực quan. Nhận thông báo khi chi tiêu đạt 80% ngân sách để điều chỉnh kịp thời. Không còn tình trạng \"hết tiền giữa tháng\".",
    badge: "Câu hỏi 3",
    badgeColor: "purple",
    stats: [
      { label: "Cảnh báo", value: "Tự động" },
      { label: "Điều chỉnh", value: "Linh hoạt" },
    ],
  },
  {
    id: "bills",
    headline: "Không bao giờ quên hóa đơn đến hạn",
    description:
      "Thêm các hóa đơn định kỳ một lần – điện, nước, internet, học phí – và để Home Ledger nhắc nhở trước 3–7 ngày. Xem tất cả hóa đơn sắp đến hạn trong tuần hoặc tháng tới.",
    badge: "Câu hỏi 4",
    badgeColor: "orange",
    stats: [
      { label: "Nhắc nhở trước", value: "3–7 ngày" },
      { label: "Lặp lại", value: "Tự động" },
    ],
  },
];

