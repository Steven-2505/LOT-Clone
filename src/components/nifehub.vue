<script setup>
import iconTimeline from "../assets/icon-timeline.svg";
</script>

<template>
  <div
    class="col-span-8 row-span-3 col-start-2 pt-4 pl-8 row-start-1 bg-[#232323] rounded-lg relative overflow-hidden"
  >
    <div class="flex flex-col">
      <div class="flex gap-4">
        <div class="flex flex-col items-center">
          <img :src="iconTimeline" class="w-8 h-8 shrink-0" alt="" />
          <div class="w-0.5 bg-white/20 flex-1 my-1"></div>
        </div>
        <div class="pt-4">
          <p class="font-bold text-white mb-2">
            Giai đoạn 1: Khởi đầu và định hình
          </p>
          <ul
            class="list-disc pl-4 text-[14px] text-white font-['helvetica'] leading-6 space-y-1"
          >
            <li>
              The N-HUB được khởi xướng vào tháng 5/2021 dưới tên gọi Nifehub,
              với ý tưởng phát triển nền tảng giải trí về đêm.<br />
              Đến tháng 1/2023, ứng dụng chính thức đổi tên thành The N-HUB và
              ra mắt thị trường, đạt 8,000 người dùng tại TP.HCM.
            </li>
          </ul>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="flex flex-col items-center">
          <img :src="iconTimeline" class="w-8 h-8 shrink-0" alt="" />
          <div class="w-0.5 bg-white/20 flex-1 my-1"></div>
        </div>
        <div class="pt-4">
          <p class="font-bold text-white mb-2">
            Giai đoạn 2: Mở rộng trong nước
          </p>
          <ul
            class="list-disc pl-4 text-[14px] text-white font-['helvetica'] leading-6 space-y-1"
          >
            <li>
              Đến tháng 5/2024, The N-HUB đã thu hút 20,000 người dùng và mở
              rộng hoạt động sang các thành phố như Vũng Tàu, Bình Dương và Phan
              Thiết.<br />
              Đến tháng 6/2025, ứng dụng tiếp tục mở rộng ra thêm 6 thành phố
              lớn khác.
            </li>
          </ul>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="flex flex-col items-center">
          <img :src="iconTimeline" class="w-8 h-8 shrink-0" alt="" />
          <div class="w-0.5 bg-white/20 flex-1 my-1"></div>
        </div>
        <div class="pt-4">
          <p class="font-bold text-white mb-2">
            Giai đoạn 3: Vươn xa và củng cố vị thế
          </p>
          <ul
            class="list-disc pl-4 text-[14px] text-white font-['helvetica'] leading-6 space-y-1"
          >
            <li>
              Từ tháng 3/2026, The N-HUB mở rộng ra quốc tế, bắt đầu tại Thái
              Lan và sau đó là Philippines và Malaysia.<br />
              Đến cuối năm 2027, ứng dụng đã đạt hàng triệu người dùng tại Việt
              Nam và khu vực Đông Nam Á.
            </li>
          </ul>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="flex flex-col items-center">
          <img :src="iconTimeline" class="w-8 h-8 shrink-0" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
