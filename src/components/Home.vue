<script setup>
import Header from "./Header.vue";
import bg from "../assets/bg.mp4";
</script>

<template>
  <div class="video-container">
    <Header> </Header>
    <video autoplay muted loop playsinline>
      <source src="../assets/bg.mp4" type="video/mp4" />
    </video>
    <section class="w-full relative header-content">
      <div
        class="relative z-[3] text-white m-auto px-10 pt-24 flex flex-col items-center justify-center"
      >
        <div
          class="font-['Saira'] text-transparent bg-clip-text pt-20 text-center inset-0 uppercase lg:text-[54px] text-[32px] font-bold custom-text-gradient"
        >
          LOT SOFTWARE
        </div>
        <div
          class="font-['Saira'] text-transparent bg-clip-text pt-12px text-center uppercase lg:text-[54px] text-[32px] font-bold custom-text-gradient"
        >
          Xây dựng con đường thành công của bạn
        </div>
        <div class="text-center mt-2 pt-12px text-[25px] font-light">
          Được thành lập vào năm 2021, LOT SOFTWARE nổi bật là một trong những
          công ty phát triển phần mềm hàng đầu tại
          <br />
          Vietnam. LOT xây dựng các công nghệ giúp mọi người kết nối, tìm kiếm
          cộng đồng...
        </div>
      </div>
    </section>
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center flex-col gap-3 pb-6 mb-20px"
    >
      Cuộn để khám phá
      <span class="scroll-animate"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 17"
          width="21"
          height="17"
          fill="none"
        >
          <path d="M20.75 0H0.25L10.75 6.5L20.75 0Z" fill="#FFD27D" />
          <path
            d="M16.75 13H3.75L10.4085 17L16.75 13Z"
            fill="#FFD27D"
            fill-opacity="0.74"
          />
        </svg>
      </span>
    </div>
  </div>
  <section></section>
</template>
