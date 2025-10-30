import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.piggi.vn" },
      { protocol: "https", hostname: "s.shopee.vn" },
      // nếu còn host khác, thêm tương tự
      // { protocol: 'https', hostname: 'cf.shopee.vn' },
    ],
    // Nếu bạn dùng SVG ngoài domain, cần bật dòng dưới (cân nhắc bảo mật):
    // dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
