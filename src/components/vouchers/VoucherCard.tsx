// components/vouchers/VoucherCard.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

type Action =
  | { type: "primary"; label: string; href?: string }
  | { type: "secondary"; label: string; copy: string }
  | { type: "ghost"; label: string; href: string };

type Props = {
  shopBadge?: string | null;
  shopName: string;
  title: string; // "Giảm"
  highlight: string; // "20%" / "25K" / "30K"
  minOrder: string; // "100.000đ"
  note: string; // dòng lưu ý
  due: string; // "HSD: 31/10"
  actions: Action[];
};

export default function VoucherCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  {
    /* <a className="italic underline pl-2 text-[14px]" onclick="event.stopPropagation(); event.preventDefault(); window.open('https://s.shopee.vn/an_redir?utm_medium=affiliates&amp;affiliate_id=17350340019&amp;sub_id=----VOUCHER--&amp;origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1255512764092416%26signature%3D574086aa97a1cac2b09c7f7f176ffe3425282581c6290e0c647695ab57da1c7a%26source%3D0', '_blank', 'noreferrer,noopener');"><p className="italic underline">List áp dụng</p></a> */
  }

  return (
    <div
      id="voucher-38476"
      className="ticket-wrap relative h-full min-h-[140px] shadow-md"
    >
      <div className="ticket w-full rounded-lg">
        <div
          id="not-detail-38476"
          className="relative mx-auto flex h-full cursor-pointer flex-col justify-start"
        >
          <div className="flex h-full">
            {/* LEFT */}
            <div
              className="
              left-voucher ml-2 max-[390px]:hidden
              border-r-2 border-dashed border-white
              flex w-[115px] flex-col justify-between
              pl-2 pr-2 pt-2 py-3
            "
            >
              <div className="logo-supplier">
                <div className="flex flex-col items-center justify-start">
                  <Image
                    className="rounded-full"
                    width={40}
                    height={40}
                    style={{
                      backgroundColor: "#FE5722",
                      padding: 4,
                      border: "2px solid #fff",
                    }}
                    src="https://images.piggi.vn/1720708484611-shopee_bg.webp"
                    alt="Shopee"
                  />

                  <div className="flex flex-col justify-end">
                    <span className="md:leading-7 text-center text-[14px] font-semibold leading-5 text-white">
                      Toàn Sàn
                    </span>
                  </div>
                </div>
              </div>

              <div className="expried-date flex min-w-[106px] justify-center">
                <div className="flex flex-wrap items-center justify-center text-white">
                  <span className="mr-1 text-right text-[12px] leading-4">
                    <i className="fa fa-clock-o font-normal" /> HSD:
                  </span>
                  <span className="text-left text-[12px] italic leading-4">
                    31/10
                  </span>
                </div>

                {/* Ẩn theo thiết kế gốc */}
                <div className="text_custom hidden w-full items-center md:max-w-[95px] md:justify-center">
                  <span className="mr-1 text-center text-[12px] leading-4 text-white">
                    <i className="fa fa-clock-o font-normal" /> Hiệu lực:
                  </span>
                  <span
                    className="md:mx-auto text-center text-[12px] italic leading-4 text-white"
                    style={{ fontSize: 12 }}
                  >
                    Đang cập nhật
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="right-voucher relative flex w-full min-h-[92px] flex-col justify-between overflow-hidden pb-[8px] pr-[8px] pt-4">
              <div className="pl-3 pr-5">
                <div>
                  <div>
                    <div className="mini-title-supplier relative text-left text-[14px] font-semibold leading-5">
                      <span>Toàn Sàn</span>

                      {/* badge góc phải */}
                      <Image
                        className="absolute right-0 top-0 rounded-full p-1"
                        width={40}
                        height={40}
                        style={{
                          backgroundColor: "#FE5722",
                          padding: 4,
                        }}
                        src="https://images.piggi.vn/1720708484611-shopee_bg.webp"
                        alt="Shopee"
                      />
                    </div>
                  </div>

                  <div className="mb-1 flex items-center text-[12px] leading-4 max-[280px]:text-[11px] md:mb-0">
                    {/* tiêu đề phụ ẩn */}
                    <div className="hidden text-[14px] font-semibold leading-5">
                      <span>Mã giảm 22% tối đa 250K đơn từ 150K</span>
                    </div>

                    <div className="block text-[14px] font-semibold leading-4">
                      Giảm
                    </div>
                    <div className="ml-1 block text-[18px] font-bold leading-7 text-[#FE5722] md:text-[24px] md:leading-8">
                      <span>22%</span>
                    </div>
                  </div>
                </div>

                <div className="mb-1 block text-[12px] leading-4 max-[280px]:text-[11px]">
                  <span className="font-normal">ĐH tối thiểu: </span>
                  <span className="font-semibold">150.000đ</span>
                </div>

                <div className="mb-1 hidden text-[12px] leading-4 max-[280px]:text-[11px]">
                  <span className="font-normal">Đối tượng: </span>
                  <span className="font-semibold">Tất cả khách hàng</span>
                </div>

                <div className="mb-1 flex items-center">
                  <span className="text-[12px] leading-4 italic max-[280px]:text-[11px] text-left font-semibold text-[#ff5722]">
                    Lưu ý:{" "}
                    <span className="text-[#464646]">
                      Voucher lên mới mỗi ngày các khung ...
                    </span>{" "}
                    <span className="text-[11px] font-normal text-black">
                      Xem chi tiết
                    </span>
                  </span>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="mini-action flex justify-between">
                <div
                  className="flex w-full items-center justify-between gap-1"
                  style={{ color: "#086A5E" }}
                >
                  {/* nút phụ ẩn */}
                  <div
                    className="ml-1 hidden items-baseline border border-solid px-1"
                    style={{ borderColor: "#086A5E" }}
                  >
                    <span className="font-mono text-[14px] italic leading-5">
                      #
                    </span>
                    <p className="m-0 font-sans text-[12px] italic leading-4">
                      Lưu trên banner
                    </p>
                  </div>

                  <div className="flex" />

                  <div className="hidden" />

                  <div className="flex cursor-pointer">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="
                      flex h-7 w-[105px] items-center justify-center
                      rounded-lg px-1 py-1 text-center text-[12px] font-medium
                      text-white transition-all duration-300
                      bg-[#26ab9a] hover:bg-[#26ab9a]
                    "
                      onClick={(e) => {
                        // nếu cần chặn bubble:
                        // e.stopPropagation();
                      }}
                    >
                      Đến Banner
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* END RIGHT */}
          </div>
        </div>
      </div>
    </div>
  );
}
