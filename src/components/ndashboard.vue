<script setup>
import iconTimeline from "../assets/icon-timeline.svg";
</script>

<template>
  <div
    class="col-span-8 row-span-3 col-start-2 pt-4 pl-8 row-start-1 bg-[#232323] rounded-lg relative overflow-hidden"
  >
    <div class="flex flex-col">
      <!-- Event 1 -->
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
            class="list-disc pl-4 text-[12px] text-white font-['helvetica'] leading-6 space-y-1"
          >
            <li>
              Nex-DASHBOARD, dự án thứ hai trong hệ sinh thái LOT, được phát
              triển từ các nền tảng The N-HUB và NEX NOW vào tháng 1/2023.<br />
              Với mục tiêu cung cấp các giải pháp kinh doanh thông minh,
              Nex-DASHBOARD tập trung hỗ trợ quản lý cho các đối tác doanh
              nghiệp trong lĩnh vực FnB và AirBnB.
            </li>
          </ul>
        </div>
      </div>

      <!-- Event 2 -->
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
            class="list-disc pl-4 text-[12px] text-white font-['helvetica'] leading-6 space-y-1"
          >
            <li>
              Tháng 5/2024, Nex-DASHBOARD chính thức ra mắt tại TP.HCM, kết nối
              hơn 100 đối tác doanh nghiệp.
            </li>
            <li>
              Đến tháng 12/2024, ứng dụng mở rộng ra các thành phố lớn như Vũng
              Tàu, Bình Dương và Phan Thiết.
            </li>
            <li>
              Đến tháng 6/2025, Nex-DASHBOARD tiếp tục mở rộng ra thêm 6 thành
              phố lớn khác.
            </li>
          </ul>
        </div>
      </div>

      <!-- Event 3 -->
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
            class="list-disc pl-4 text-[12px] text-white font-['helvetica'] leading-6 space-y-1"
          >
            <li>
              Vào tháng 8/2026, Nex-DASHBOARD mở rộng ra thị trường quốc tế, bắt
              đầu tại Philippines và Malaysia.
            </li>
            <li>
              Đến cuối năm 2027, ứng dụng đã hoàn thiện và trở thành giải pháp
              quản lý toàn diện cho các doanh nghiệp tại Việt Nam và quốc tế.
            </li>
          </ul>
        </div>
      </div>

      <!-- Event cuối (chỉ icon, không có line) -->
      <div class="flex gap-4">
        <div class="flex flex-col items-center">
          <img :src="iconTimeline" class="w-8 h-8 shrink-0" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
