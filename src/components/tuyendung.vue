<script setup>
import Header from "./Header.vue";
import bgtuyendung from "../assets/banner-recruitment.svg";
import Footer from "./footer.vue";
import { ref } from "vue";
import Select from "primevue/select";

const selectedJob = ref(null);

const jobOptions = [
  { label: "UXUI", value: "uxui" },
  { label: "DEV", value: "dev" },
  { label: "Nhân viên kinh doanh", value: "business" },
];
</script>
<template>
  <div
    data-aos-easing="ease"
    data-aos-duration="400"
    data-aos-delay="0"
    class="bg-color"
  >
    <!--Baner-->
    <div
      class="w-full bg-cover bg-no-repeat h-[1000px] bg-bottom relative bg-recruitment"
      :style="{ backgroundImage: `url(${bgtuyendung})` }"
    >
      <Header></Header>
      <div class="relative top-[60px]">
        <div class="text-[#EBC47C] text-center text-[18px]">Who We Are</div>
        <div
          class="text-transparent bg-clip-text text-center uppercase lg:text-[50px] text-[32px] font-bold custom-text-gradient leading-normal"
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
      <!--Cột Mốc Phát Triển-->
      <div
        class="text-[#FFF1D8] text-center font-bold uppercase text-nowrap text-[24px] absolute bottom-0 start-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        Tuyển Dụng
      </div>
    </div>
    <div class="container mx-auto">
      <div class="lg:mx-10 sm:mx-5 sm:px-2 mx-4 career-home">
        <div
          class="flex items-center md:mt-5 mt-2 px-2 border border-[#FFEAC163]"
        >
          <div
            class="flex flex-grow items-center border-e border-[#FFEAC163] py-2"
          >
            <Select
              v-model="selectedJob"
              :options="jobOptions"
              optionLabel="label"
              placeholder="Chọn nghề nghiệp"
              class="w-full !bg-transparent !border-0"
            />
          </div>
          <div class="px-3">
            <button
              class="bg-linear-gradient rounded-full py-2 px-8 text-black w-fit text-white"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
        <div class="border border-[#FFEAC163] px-2 py-6">
          <span class="bg-[#FFFFFF17] rounded-full px-3 py-2 text[#F2F6FF]">
            UXUI </span
          ><span
            class="bg-[#FFFFFF17] rounded-full px-3 py-2 text[#F2F6FF] mx-3"
          >
            DEV </span
          ><span class="bg-[#FFFFFF17] rounded-full px-3 py-2 text[#F2F6FF]"
            >Nhân viên kinh doanh</span
          >
        </div>
      </div>
      <div
        class="grid sm:grid-cols-3 sm:mx-auto mx-4 my-[70px] gap-3 career-home"
      ></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.bg-color {
  background-color: black;
  overflow: hidden;
}
</style>
