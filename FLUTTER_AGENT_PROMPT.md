# 📱 Home Ledger – Flutter Mobile App Agent Prompt
## (Đồng Bộ Thiết Kế & Tránh Quảng Cáo Sai Lệch Với Trang Giới Thiệu)

> **Mục tiêu**: Xây dựng / Cập nhật giao diện ứng dụng di động **Home Ledger (Flutter)** sao cho **100% đồng nhất** về phong cách thiết kế, bảng màu, luồng nghiệp vụ và thuộc tính hiển thị với website giới thiệu sản phẩm. Điều này đảm bảo tuân thủ nghiêm ngặt **Apple App Store Review Guidelines (Mục 2.3 - Accurate Metadata)** và **Google Play User Data Policy**, tránh việc bị từ chối phê duyệt do quảng cáo sai lệch tính năng.

---

## 1. THÔNG TIN SẢN PHẨM & LỜI HỨA CỐT LÕI (PRODUCT PROMISE)

- **Tên ứng dụng**: **Home Ledger**
- **Định vị**: *Trạm điều hành tài chính chung cho hộ gia đình* (Shared Household Money Hub).
- **Thị trường mục tiêu**: Cặp đôi, vợ chồng trẻ, gia đình và nhóm người ở chung tại Việt Nam.
- **Tiền tệ & Bản địa hóa**: 
  - Tiền tệ: **VND (₫)** – Định dạng: `#,### ₫` (ví dụ: `148.500.000 ₫`, `-485.000 ₫`).
  - Ngôn ngữ: **Tiếng Việt 100%**.
  - Các cấu trúc ngân hàng & hóa đơn đặc thù Việt Nam: *Vietcombank, MB Bank, Techcombank, MoMo, Điện lực EVN, Nước Sawaco, Cáp quang Viettel/FPT/VNPT*.
- **4 Câu hỏi then chốt ứng dụng bắt buộc phải giải đáp trực quan**:
  1. *Gia đình mình hiện có tổng cộng bao nhiêu tiền trên các tài khoản?* (Master Balance)
  2. *Tháng này cả nhà đã tiêu gì, và ai là người thực hiện từng khoản?* (Attribution Log)
  3. *Chi tiêu gia đình có đang nằm trong hạn mức ngân sách an toàn?* (Budget Adherence)
  4. *Những hóa đơn sinh hoạt nào sắp sửa đến hạn thanh toán?* (Recurring Bills Alert)

---

## 2. DESIGN SYSTEM & COLOR TOKENS (FLUTTER SPECIFICATION)

Ứng dụng Flutter cần thiết lập `ThemeData` ánh xạ chuẩn xác các mã màu và kiểu chữ từ web landing:

```dart
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppColors {
  // Brand Primary (Blue)
  static const Color primary = Color(0xFF2563EB); // Blue 600
  static const Color primaryDark = Color(0xFF1D4ED8); // Blue 700
  static const Color primaryLight = Color(0xFFEFF6FF); // Blue 50
  static const Color primaryContainer = Color(0xFFDBEAFE); // Blue 100

  // Semantic & Financial Health
  static const Color success = Color(0xFF10B981); // Emerald 500 (Thu nhập / Tăng trưởng)
  static const Color successLight = Color(0xFFECFDF5);
  static const Color warning = Color(0xFFF59E0B); // Amber 500 (Sắp đến hạn / Cảnh báo ngân sách)
  static const Color warningLight = Color(0xFFFFFBEB);
  static const Color danger = Color(0xFFEF4444); // Red 500 (Chi tiêu / Quá hạn)
  static const Color dangerLight = Color(0xFFFEF2F2);

  // Background & Surfaces (Light)
  static const Color backgroundLight = Color(0xFFF8FAFC); // Slate 50
  static const Color surfaceLight = Color(0xFFFFFFFF);
  static const Color surfaceMutedLight = Color(0xFFF1F5F9); // Slate 100
  static const Color borderLight = Color(0xFFE2E8F0); // Slate 200

  // Background & Surfaces (Dark)
  static const Color backgroundDark = Color(0xFF030712); // Slate 950
  static const Color surfaceDark = Color(0xFF0F172A); // Slate 900
  static const Color surfaceMutedDark = Color(0xFF1E293B); // Slate 800
  static const Color borderDark = Color(0xFF334155); // Slate 700

  // Text
  static const Color textPrimaryLight = Color(0xFF0F172A);
  static const Color textSecondaryLight = Color(0xFF64748B);
  static const Color textPrimaryDark = Color(0xFFF8FAFC);
  static const Color textSecondaryDark = Color(0xFF94A3B8);

  // Linear Gradients
  static const LinearGradient primaryGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFF2563EB), Color(0xFF1D4ED8), Color(0xFF1E40AF)],
  );

  static const LinearGradient cardGlowGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFF3B82F6), Color(0xFF1D4ED8)],
  );
}
```

### Typography (Google Fonts Flutter)
- **Tiêu đề (Headings, AppBar, Tên người, Số tiền lớn)**: `GoogleFonts.beVietnamPro(fontWeight: FontWeight.w700 / w800)`
- **Nội dung, Nhãn danh mục, Chú thích**: `GoogleFonts.inter(fontWeight: FontWeight.w400 / w500)`
- **Radius Chuẩn**:
  - Cards: `BorderRadius.circular(24)` hoặc `16`
  - Quick Action Buttons: `BorderRadius.circular(16)`
  - Status/Tag Pills: `BorderRadius.circular(999)` (Full circle)
  - Bottom Sheets / Dialogs: `BorderRadius.vertical(top: Radius.circular(28))`

---

## 3. CÁC MÀN HÌNH BẮT BUỘC & YÊU CẦU ĐỒNG NHẤT GIAO DIỆN (UI/UX)

### Màn hình 1: Trang Chủ / Bảng Điều Khiển Tài Chính (Home Dashboard)
*Màn hình này phải phản ánh chính xác mô hình iPhone 16 Pro Mockup trên trang web giới thiệu:*

1. **Top Custom App Bar**:
   - Avatar nhóm gia đình: Vòng tròn màu `[MT]` (Minh & Trang) gradient xanh tím.
   - Text tiêu đề: Chữ phụ `Không gian gia đình`, tiêu đề chính: `Nhà Minh & Trang 🏡` (có thể bấm vào để chuyển đổi giữa các nhóm gia đình).
   - Nút Chuông thông báo góc phải có chấm đỏ biểu thị hóa đơn sắp đến hạn.

2. **Master Balance Card (Thẻ Tổng Tài Sản Gia Đình)**:
   - Sử dụng `AppColors.primaryGradient`.
   - Tiêu đề phụ: `Tổng tài sản hộ gia đình`, kèm chip nhỏ `4 Tài khoản`.
   - Số tiền hiển thị nổi bật dạng `FontWeight.w900`: `148.500.000 ₫`.
   - Tag tăng trưởng: `↑ +8.4% tháng này` (nền `white/10`, chữ `Color(0xFF6EE7B7)`).
   - Ghi chú: `Quỹ chung & Tiết kiệm`.

3. **Quick Actions Bar (4 Phím Tắt Tròn Bo Góc)**:
   - `Ghi chép` (Icon `Icons.add_rounded`, nền `primary`, chữ trắng).
   - `Hóa đơn` (Icon `Icons.calendar_today_rounded`, nền card, viền slate).
   - `Ngân sách` (Icon `Icons.pie_chart_outline_rounded`, nền card, viền slate).
   - `Báo cáo` (Icon `Icons.trending_down_rounded`, nền card, viền slate).

4. **Monthly Budget Widget (Thanh Tiến Độ Ngân Sách Tháng)**:
   - Header: `Hạn mức Tháng 11` (trái) và `Còn 7.140.000 ₫` (phải, màu xanh).
   - Progress Bar: Bo tròn 2 đầu, gradient từ xanh dương sang tím indigo. Giá trị: `74%`.
   - Subtext: `Đã chi: 24.860.000 ₫ (74%)` • `Mục tiêu: 32.000.000 ₫`.

5. **Recent Expenses Feed (Danh Sách Chi Tiêu Theo Thời Gian Thực)**:
   - Section header: `CHI TIÊU HÔM NAY` (chữ hoa, màu slate xám) và nút `Xem tất cả`.
   - Mỗi item bao gồm:
     - Icon danh mục tròn bo góc (ví dụ: Giỏ siêu thị cam WinMart, Tia sét điện EVN, Mũ cử nhân giáo dục).
     - Tên khoản chi: `Siêu thị WinMart+ (Rau củ, thịt)`.
     - Người chi: Chữ màu xanh dương `Trang (Vợ)` hoặc `Minh (Chồng)`.
     - Thời gian: `09:20` hoặc `Hôm qua`.
     - Số tiền màu đen/đỏ đậm: `-485.000 ₫`.

---

### Màn hình 2: Màn Hình Tài Khoản Gia Đình (Accounts Screen - Trả Lời Câu Hỏi 1)
- Hiển thị danh sách các tài khoản đang theo dõi theo dạng thẻ ngân hàng thu nhỏ:
  - **Vietcombank Digibank** (Thẻ gradient xanh lá cây - `62.400.000 ₫` - Tag `Chính`).
  - **Techcombank Quỹ dự phòng** (Thẻ đỏ - `75.000.000 ₫` - Tag `Tiết kiệm`).
  - **MB Bank Priority** (Thẻ xanh dương - `42.000.000 ₫` - Tag `Thu nhập`).
  - **Ví MoMo & Tiền mặt trong két** (Thẻ hồng/tím - `4.850.000 ₫`).
- Nút `+ Thêm tài khoản theo dõi mới`.

---

### Màn hình 3: Màn Hình Thêm Giao Dịch Chi Tiêu (Add Expense Modal - Trả Lời Câu Hỏi 2)
- Bàn phím số lớn, hiển thị số tiền VND to rõ ngay lập tức.
- **Người chi tiền (Attribution)**: Widget chọn người chi bằng avatar tròn (Minh / Trang / Khác).
- **Phân loại trách nhiệm**:
  - `Quỹ chung cả nhà` (Mặc định).
  - `Chi tiêu cá nhân riêng`.
  - `Chia đều (Split bill)`.
- **Đính kèm hóa đơn**: Nút camera/chọn ảnh chụp hóa đơn siêu thị/phiếu thu để lưu trữ minh chứng.

---

### Màn hình 4: Màn Hình Ngân Sách Thông Minh (Budget Screen - Trả Lời Câu Hỏi 3)
- Tổng hạn mức tháng: `32.000.000 ₫`.
- Danh mục chi tiết với thanh tiến độ riêng biệt:
  - `Ăn uống & Đi chợ`: `10.800.000 ₫ / 12.000.000 ₫` (90% - Đổi màu thanh tiến độ sang màu **Hổ phách Amber** cảnh báo).
  - `Học tập & Nuôi con`: `6.200.000 ₫ / 8.000.000 ₫` (77% - Xanh dương an toàn).
  - `Hóa đơn & Nhà ở`: `3.100.000 ₫ / 4.500.000 ₫` (68% - Xanh dương an toàn).
  - `Giải trí & Mua sắm`: `3.400.000 ₫ / 4.000.000 ₫` (85%).

---

### Màn hình 5: Màn Hình Hóa Đơn Định Kỳ (Bills & Subscriptions - Trả Lời Câu Hỏi 4)
- Danh sách hóa đơn sắp đến hạn được nhóm theo mức độ khẩn cấp:
  - **EVN TP.HCM** (`1.450.000 ₫` - Hạn ngày mai - Tag đỏ: *Khẩn cấp* - Phụ trách: *Hoàng Minh*).
  - **Cáp quang Internet Viettel/VNPT** (`286.000 ₫` - Còn 3 ngày - Tag cam: *Sắp đến* - Phụ trách: *Thu Trang*).
  - **Phí quản lý chung cư & gửi xe** (`2.800.000 ₫` - Còn 5 ngày).
  - **Nước Sawaco** (Trạng thái: `✓ Đã thanh toán ngày 04/11` - Màu xanh lá).
- Tích hợp tính năng: Bấm vào một chạm để "Đánh dấu đã thanh toán", tự động gửi thông báo đến các thành viên còn lại.

---

### Màn hình 6: Cài Đặt Tài Khoản & Quyền Riêng Tư (Privacy & Account Deletion)
*(Bắt buộc để vượt qua kiểm duyệt Apple Guideline 5.1.1)*
- Trong menu `Cài đặt > Tài khoản`:
  - Mục `Xuất dữ liệu gia đình (Excel/CSV)`.
  - Mục `Chính sách quyền riêng tư` (Mở webview trỏ về `https://homeledger.vn/privacy-policy`).
  - Mục `Điều khoản sử dụng` (Mở `https://homeledger.vn/terms-of-service`).
  - Nút **`Xóa tài khoản vĩnh viễn` (Delete Account)** màu đỏ: Có hộp thoại xác nhận 2 bước, xóa sạch dữ liệu khỏi đám mây.

---

### Màn hình 7: Màn Hình Khởi Động / Splash Screen (Chuẩn Android 12+ & iOS)
- Sử dụng file ảnh tách nền trong suốt: `public/splash-icon-transparent.png` (RGBA 1024x1024).
- Cấu hình package `flutter_native_splash` trong `pubspec.yaml`:
  ```yaml
  flutter_native_splash:
    color: "#030712" # Nền tối sang trọng chuẩn Fintech
    color_dark: "#030712"
    image: assets/icons/splash-icon-transparent.png
    android_12:
      image: assets/icons/splash-icon-transparent.png
      icon_background_color: "#030712"
    web: false
  ```
- Biểu tượng Home Ledger nổi bật ở trung tâm, không bị viền hộp, hiển thị mượt mà trong quá trình tải dữ liệu ban đầu.

---

## 4. QUY TẮC CÔNG NGHỆ & STATE MANAGEMENT TRONG FLUTTER

- **Package gợi ý**:
  - `google_fonts`: Tải font Be Vietnam Pro và Inter.
  - `intl`: Định dạng tiền tệ `NumberFormat.currency(locale: 'vi_VN', symbol: '₫', decimalDigits: 0)`.
  - `fl_chart`: Biểu đồ cột/tròn cho báo cáo phân tích chi tiêu.
  - `image_picker`: Chụp hóa đơn thanh toán.
  - `flutter_local_notifications` / `firebase_messaging`: Nhắc hạn hóa đơn định kỳ.
- **State Management**: Ưu tiên **Bloc** (`flutter_bloc`) hoặc **Riverpod** (`flutter_riverpod`) với kiến trúc Clean Architecture rõ ràng:
  - `data/` (models, datasources, repositories)
  - `domain/` (entities, usecases)
  - `presentation/` (bloc/notifier, screens, widgets)
- **Hỗ trợ giao diện Sáng / Tối (Light/Dark Theme)**: Đồng bộ với cấu hình `ThemeMode.system`.

---

## 5. HƯỚNG DẪN THỰC THI CHO AGENT (STEP-BY-STEP)

1. **Khởi tạo Constants & Theme**: Định nghĩa toàn bộ `AppColors`, `AppTypography`, `AppTheme` trong `lib/core/theme/`.
2. **Xây dựng Reusable Components**:
   - `MasterBalanceCard`: Thẻ hiển thị số dư gia đình gradient xanh.
   - `ExpenseTile`: Dòng chi tiêu hiển thị avatar người chi (`Minh (Chồng)`/`Trang (Vợ)`).
   - `ProgressBarWidget`: Thanh tiến độ ngân sách bo tròn hỗ trợ đổi màu khi đạt 80%+.
   - `BillReminderCard`: Thẻ nhắc hóa đơn với tag mức độ khẩn cấp.
3. **Hoàn thiện các Screen theo đúng Mockup**:
   - `HomeScreen` -> `AccountsScreen` -> `AddExpenseScreen` -> `BudgetScreen` -> `BillsScreen` -> `SettingsScreen`.
4. **Kiểm tra Consistency Gate**:
   - [ ] Mọi số tiền hiển thị đều có ký hiệu `₫` và định dạng phân tách hàng nghìn bằng dấu chấm (`.`).
   - [ ] Màu xanh chủ đạo trùng khớp `#2563EB`.
   - [ ] Có đầy đủ chức năng gắn tên người chi vào từng khoản tiền.
   - [ ] Có mục Xóa tài khoản vĩnh viễn trong Cài đặt.
