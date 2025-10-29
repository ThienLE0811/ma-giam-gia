// components/vouchers/VoucherSection.tsx

import VoucherCard from "./VoucherCard";

const vouchers = [
  {
    shopBadge: "/icons/shopee.svg", // thay bằng icon của bạn, hoặc null
    shopName: "Shopee Choice",
    title: "Giảm",
    highlight: "20%",
    minOrder: "100.000đ",
    note: "Chỉ áp dụng trên App cho một số sản phẩm…",
    due: "HSD: 31/10",
    actions: [
      { type: "ghost", label: "List áp dụng", href: "#" },
      { type: "primary", label: "Mở App Ngay" },
    ],
  },
  {
    shopBadge: "/icons/shopee.svg",
    shopName: "Shop Nổi Bật",
    title: "Giảm",
    highlight: "25K",
    minOrder: "99.000đ",
    note: "Chỉ áp dụng trên App cho một số sản phẩm…",
    due: "HSD: 31/10",
    actions: [
      { type: "ghost", label: "List áp dụng", href: "#" },
      { type: "secondary", label: "Copy mã", copy: "VOUCHER25K" },
    ],
  },
  // ...thêm item khác
];

export default function VoucherSection() {
  return (
    <section className="mt-2">
      <div className="rounded-xl  bg-white p-2 md:p-4 shadow-sm">
        <div>
          <h3 className="text-xl font-semibold text-[#464646]">
            Mã giảm giá HOT nhất
          </h3>
        </div>

        <div className="mt-2 grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {vouchers.map((v, i) => (
            <VoucherCard key={i} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="i-lucide-chevron-down h-8 w-8 text-gray-500">
            {/* nếu dùng lucide-react, thay bằng <ChevronDown /> */}
          </div>
          <a
            href="#"
            className="block w-full rounded-2xl border bg-white py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50 md:w-1/2"
          >
            Xem thêm Voucher
          </a>
        </div>
      </div>
    </section>
  );
}
