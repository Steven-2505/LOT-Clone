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
            class="list-disc pl-4 text-[12px] text-white font-['helvetica'] leading-6 space-y-1"
          >
            <li>
              Dự án được khởi xướng vào tháng 5/2021 với ý tưởng phát triển nền
              tảng dịch vụ ăn uống, lưu trú và làm đẹp.<br />
              Ứng dụng chính thức ra mắt vào tháng 7/2021 và sau đó được đổi tên
              thành NEX NOW vào tháng 1/2023, đạt 8,000 người dùng tại TP.HCM.
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
            class="list-disc pl-4 text-[12px] text-white font-['helvetica'] leading-6 space-y-1"
          >
            <li>
              Đến tháng 5/2024, NEX NOW đạt 20,000 người dùng và chính thức ra
              mắt độc lập trong hệ sinh thái LOT.<br />
              Đến tháng 12/2024, ứng dụng mở rộng hoạt động ra các thành phố lớn
              như Vũng Tàu, Bình Dương và Phan Thiết.
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
            class="list-disc pl-4 text-[12px] text-white font-['helvetica'] leading-6 space-y-1"
          >
            <li>
              NEX NOW mở rộng ra thị trường quốc tế vào tháng 8/2026, bắt đầu
              tại Thái Lan và tiếp tục phát triển mạnh mẽ tại các quốc gia Đông
              Nam Á.<br />
              Đến tháng 12/2027, NEX NOW trở thành nền tảng đặt chỗ hàng đầu tại
              Việt Nam và khu vực.
            </li>
          </ul>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex flex-col items-center">
          <img :src="iconTimeline" class="w-8 h-8 shrink-0" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
