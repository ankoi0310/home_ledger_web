import type { Metadata } from "next";
import { BookOpen, Calendar, Clock, ArrowRight, User, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cẩm Nang Tài Chính Gia Đình",
  description:
    "Chia sẻ kinh nghiệm quản lý chi tiêu, lập ngân sách gia đình và mẹo tiết kiệm tiền hiệu quả cho các cặp vợ chồng Việt.",
};

const BLOG_POSTS = [
  {
    title: "5 bước quản lý tài chính giúp vợ chồng trẻ không còn cãi nhau vì tiền",
    slug: "quan-ly-tai-chinh-vo-chong-tre",
    excerpt:
      "Tiền bạc là một trong những nguyên nhân hàng đầu dẫn đến mâu thuẫn hôn nhân. Khám phá cách các cặp đôi xây dựng quỹ chung minh bạch mà vẫn tôn trọng không gian cá nhân.",
    category: "Hôn nhân & Gia đình",
    readTime: "5 phút đọc",
    date: "02/11/2026",
    author: "Thu Trang (Chuyên viên Tài chính cá nhân)",
  },
  {
    title: "Ứng dụng quy tắc 50/30/20 với mức thu nhập trung bình tại Việt Nam",
    slug: "quy-tac-50-30-20-viet-nam",
    excerpt:
      "Quy tắc 50/30/20 của phương Tây có thực sự hiệu quả với chi phí sinh hoạt tại TP.HCM và Hà Nội? Hướng dẫn điều chỉnh tỷ lệ sao cho phù hợp nhất với gia đình bạn.",
    category: "Lập ngân sách",
    readTime: "7 phút đọc",
    date: "28/10/2026",
    author: "Hoàng Minh",
  },
  {
    title: "Ở ghép không ngại ngùng: Bí quyết chia tiền phòng, tiền chợ công bằng",
    slug: "o-ghep-chia-tien-cong-bang",
    excerpt:
      "Làm thế nào để nhắc nhở tiền điện nước mà không làm rạn nứt tình bạn? Cách ứng dụng công nghệ để mọi khoản chi tiêu của phòng trọ đều minh bạch từ ngày đầu.",
    category: "Người ở ghép",
    readTime: "4 phút đọc",
    date: "22/10/2026",
    author: "Minh Tuấn",
  },
  {
    title: "Xây dựng Quỹ Dự Phòng Khẩn Cấp: Lá chắn an toàn trước mọi rủi ro",
    slug: "quy-du-phong-khan-cap",
    excerpt:
      "Bao nhiêu tiền là đủ cho một quỹ khẩn cấp gia đình? Nên để ở đâu: tiền mặt, tài khoản thanh toán hay gửi tiết kiệm linh hoạt?",
    category: "Tích lũy & Đầu tư",
    readTime: "6 phút đọc",
    date: "15/10/2026",
    author: "Đội ngũ Home Ledger",
  },
];

export default function BlogPage() {
  return (
    <div className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#4f7eff] text-xs font-semibold mb-4 border border-blue-100 dark:border-blue-900">
            <BookOpen className="w-3.5 h-3.5" />
            Cẩm Nang & Kinh Nghiệm
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
            Blog Tài Chính Gia Đình
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Những bài viết thực tế về cách vun vén chi tiêu, tiết kiệm thông minh và duy trì sự hòa thuận trong tổ ấm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {BLOG_POSTS.map((post, idx) => (
            <article
              key={idx}
              className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-7 border border-slate-200/80 dark:border-slate-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="font-bold text-[#4f7eff] bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3 group-hover:text-[#4f7eff] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">{post.author}</span>
                <span className="text-xs font-bold text-[#4f7eff] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Đọc tiếp <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
