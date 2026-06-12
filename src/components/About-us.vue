<script>
import header2 from "./header2.vue";
import bgabout from "../assets/bg-about.svg";
</script>
<template>
  <div data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
    <!--<Header> </Header>-->
    <div
      class="w-full bg-cover bg-no-repeat h-[900px] bg-bottom relative bg-recruitment"
      :style="{ backgroundImage: `url(${bgabout})` }"
    >
      <div class="relative top-[60px]">
        <div class="text-[#EBC47C] text-center text-[18px]">Who We Are</div>
        <div
          class="text-transparent bg-clip-text text-center uppercase lg:text-[54px] text-[32px] font-bold custom-text-gradient"
        >
          Đưa các giải pháp công nghệ<br />
          vào cuộc sống của bạn
        </div>
        <div class="text-center text-sm mt-3 text-[#A8A8A8] leading-6">
          Được thành lập vào năm 2021, LOT SOFTWARE nổi bật là một trong những
          công ty phát triển phần mềm hàng đầu tại Việt Nam. <br />
          LOT xây dựng các công nghệ giúp mọi người kết nối, tìm kiếm cộng đồng
          và phát triển doanh nghiệp của họ. <br />
          Đội ngũ kỹ sư giàu kinh nghiệm của chúng tôi mang đến trải nghiệm
          khách hàng tuyệt vời trên từng sản phẩm.
        </div>
      </div>
      <div
        class="text-[#FFF1D8] text-center font-bold uppercase text-nowrap text-[24px] absolute bottom-0 start-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        Cột mốc phát triển
      </div>
    </div>
    <header2></header2>
  </div>
</template>
