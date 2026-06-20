<script setup>
import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { ref, onMounted, onUnmounted } from "vue";

const thumbsSwiper = ref(null);
const isBeginning = ref(true);
const isEnd = ref(false);
function setThumbsSwiper(swiper) {
  thumbsSwiper.value = swiper;
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
  swiper.on("slideChange", () => {
    isBeginning.value = swiper.isBeginning;
    isEnd.value = swiper.isEnd;
  });
}

function slidePrev() {
  if (!isBeginning.value) {
    thumbsSwiper.value?.slidePrev();
  }
}

function slideNext() {
  if (!isEnd.value) {
    thumbsSwiper.value?.slideNext();
  }
}
const isDesktop = ref(window.innerWidth >= 1024);
onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => window.removeEventListener("resize", handleResize));
function handleResize() {
  isDesktop.value = window.innerWidth >= 1024;
}

import doitac1 from "../assets/doitac/doitac1.png";
import doitac2 from "../assets/doitac/doitac2.png";
import doitac3 from "../assets/doitac/doitac3.png";
import doitac4 from "../assets/doitac/doitac4.png";
import doitac5 from "../assets/doitac/doitac5.png";
import doitac6 from "../assets/doitac/doitac6.png";
import doitac7 from "../assets/doitac/doitac7.png";
import doitac8 from "../assets/doitac/doitac8.png";
import doitac9 from "../assets/doitac/doitac9.png";
import doitac10 from "../assets/doitac/doitac10.png";
import doitac11 from "../assets/doitac/doitac11.png";
import doitac12 from "../assets/doitac/doitac12.png";
import doitac13 from "../assets/doitac/doitac13.png";
import doitac14 from "../assets/doitac/doitac14.png";

const partners = [
  { name: "NICE VIP", img: doitac4 },
  { name: "haiminh hotel", img: doitac5 },
  { name: "LƯNG CHỪNG MÂY", img: doitac6 },
  { name: "phở sâm 70", img: doitac7 },
  { name: "AN DI", img: doitac8 },
  { name: "Syn Spa", img: doitac9 },
  { name: "the sense", img: doitac10 },
  { name: "sea game", img: doitac11 },
  { name: "lam coffee", img: doitac12 },
  { name: "DÌN KÝ GROUP", img: doitac13 },
  { name: "LÀNG TÂM GIAO", img: doitac14 },
  { name: "KING BEER", img: doitac1 },
  { name: "4 season", img: doitac2 },
  { name: "NOVA COFFEE", img: doitac3 },
];

const partners2 = [...partners].reverse();
</script>
<template>
  <div
    data-aos="fade-up"
    data-aos-duration="2500"
    class="aos-init aos-animate overlay-hiden"
  >
    <div data-v-90a935dd="" class="container mx-auto py-20">
      <div data-v-90a935dd="">
        <div data-v-90a935dd="" class="text-[#EBC47C] text-center text-[18px]">
          Trải nghiệm kết hợp
        </div>
        <div
          data-v-90a935dd=""
          class="mb-4 text-transparent bg-clip-text text-center uppercase lg:text-[54px] text-[32px] font-bold custom-text-gradient"
        >
          Trải nghiệm sự kết hợp giữa hệ thống<br />
          booking và POS trong một ứng dụng
        </div>
        <div
          class="flex justify-center md:flex-row gap-10 mt-14 flex-col-reverse lg:ms-[150px]"
        >
          <!-- ✅ Swiper chính -->
          <div class="w-full max-w-[900px] bg-circle relative">
            <Swiper
              :modules="[Autoplay, Thumbs]"
              :slides-per-view="1"
              :space-between="20"
              :speed="3000"
              :loop="true"
              :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :thumbs="{ swiper: thumbsSwiper }"
              style="height: 100%"
            >
              <SwiperSlide>
                <div class="h-full mx-auto">
                  <div
                    class="lg:h-[350px] bg-center h-[150px] bg-contain bg-no-repeat mt-[30px]"
                    :style="{ backgroundImage: `url(${Slide1})` }"
                  ></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="h-full mx-auto">
                  <div
                    class="lg:h-[350px] bg-center h-[150px] bg-contain bg-no-repeat mt-[30px]"
                    :style="{ backgroundImage: `url(${Slide2})` }"
                  ></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="h-full mx-auto">
                  <div
                    class="lg:h-[350px] bg-center h-[150px] bg-contain bg-no-repeat mt-[30px]"
                    :style="{ backgroundImage: `url(${Slide3})` }"
                  ></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <!-- ✅ Thumbs + nút prev/next -->
          <div
            class="h-desktop flex lg:flex-col flex-row items-center lg:h-[500px] lg:w-[120px] w-full gap-2"
          >
            <!-- Nút prev -->
            <span
              class="pre-mf cursor-pointer flex-shrink-0 flex items-center justify-center lg:pb-2 pr-2 lg:pr-0"
              :class="
                isBeginning ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
              "
              @click="slidePrev"
            >
              <!-- Desktop: mũi tên lên -->
              <svg
                class="hidden lg:block"
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
              >
                <path
                  d="M8.757 1.23688C9.58758 -0.201731 11.664 -0.201733 12.4946 1.23688L20.5928 15.2634C21.4234 16.702 20.3852 18.5002 18.724 18.5002H2.52762C0.866455 18.5002 -0.171778 16.702 0.658806 15.2634L8.757 1.23688Z"
                  fill="#FFDE9C"
                />
              </svg>
              <svg
                class="block lg:hidden"
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
              >
                <path
                  d="M1.23688 12.243C-0.201731 11.4124 -0.201733 9.336 1.23688 8.5054L15.2634 0.407197C16.702 -0.423387 18.5002 0.614847 18.5002 2.276V18.4724C18.5002 20.1335 16.702 21.1718 15.2634 20.3412L1.23688 12.243Z"
                  fill="#FFDE9C"
                />
              </svg>
            </span>

            <Swiper
              :key="isDesktop ? 'vertical' : 'horizontal'"
              :modules="[Thumbs]"
              :direction="isDesktop ? 'vertical' : 'horizontal'"
              :slides-per-view="2"
              :space-between="20"
              :watch-slides-progress="true"
              :loop="false"
              :allow-touch-move="false"
              class="swiper-thumbs flex-1"
              style="width: 100%; height: 200px"
              @swiper="setThumbsSwiper"
            >
              <SwiperSlide>
                <div class="w-full h-full">
                  <div
                    class="h-full bg-contain bg-center bg-no-repeat min-h-[140px]"
                    :style="{ backgroundImage: `url(${Slide1})` }"
                  ></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="w-full h-full">
                  <div
                    class="h-full bg-contain bg-center bg-no-repeat min-h-[140px]"
                    :style="{ backgroundImage: `url(${Slide2})` }"
                  ></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="w-full h-full">
                  <div
                    class="h-full bg-contain bg-center bg-no-repeat min-h-[140px]"
                    :style="{ backgroundImage: `url(${Slide3})` }"
                  ></div>
                </div>
              </SwiperSlide>
            </Swiper>

            <span
              class="next-mr cursor-pointer flex-shrink-0 flex items-center justify-center lg:pt-2 pl-2 lg:pl-0"
              :class="isEnd ? 'opacity-30 cursor-not-allowed' : 'opacity-100'"
              @click="slideNext"
            >
              <svg
                class="hidden lg:block"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M8.757 17.9741C9.58758 19.4127 11.664 19.4127 12.4946 17.9741L20.5928 3.94758C21.4234 2.50896 20.3852 0.710693 18.724 0.710693H2.52762C0.866455 0.710693 -0.171778 2.50896 0.658806 3.94757L8.757 17.9741Z"
                  fill="#FFDE9C"
                />
              </svg>
              <svg
                class="block lg:hidden"
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
              >
                <path
                  d="M17.7631 8.757C19.2017 9.58758 19.2017 11.664 17.7631 12.4946L3.73658 20.5928C2.29796 21.4234 0.499693 20.3852 0.499693 18.724V2.52762C0.499693 0.866455 2.29796 -0.171778 3.73657 0.658806L17.7631 8.757Z"
                  fill="#FFDE9C"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div
        data-v-90a935dd=""
        class="bg-gradient-to-r from-transparent via-[#6d562a] to-transparent text-center"
      >
        <div
          data-v-90a935dd=""
          class="flex items-center justify-center text-[#FFF1D8] uppercase font-bold py-2 lg:text-[24px] text-[16px] pt-3"
        >
          Sản phẩm của lot việt
        </div>
      </div>
    </div>
  </div>
  <!-- slide đối tác -->
  <div class="px-4">
    <div
      class="font-['Saira'] text-3xl w-1/2 mx-auto text-center text-white mt-4 text-transparent w-fit bg-clip-text uppercase lg:text-[48px] text-[32px] font-bold leading-normal custom-text-gradient"
    >
      Đối tác
    </div>

    <!-- Slide hàng 1 - chạy sang trái -->
    <Swiper
      :modules="[Autoplay]"
      :breakpoints="{
        0: { slidesPerView: 2 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 8 },
      }"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
      }"
      :speed="3000"
      :loop="true"
      :slides-per-view="'auto'"
      :space-between="24"
      :allow-touch-move="false"
      class="my-swiper"
    >
      <SwiperSlide
        v-for="item in partners"
        :key="item.name"
        style="width: 203px"
      >
        <div
          class="flex items-center bg-[#0f0f0f] gap-2 border-[#454134] border rounded-xl p-4"
        >
          <img
            class="h-[80px] min-w-[80px] rounded-full object-cover"
            :src="item.img"
            alt=""
          />
          <div
            class="uppercase font-bold font-['Saira'] text-[24px] text-white"
          >
            {{ item.name }}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Slide hàng 2 - chạy sang phải -->
    <Swiper
      :modules="[Autoplay]"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      }"
      :speed="3000"
      :loop="true"
      :slides-per-view="'auto'"
      :space-between="24"
      :allow-touch-move="false"
      class="my-swiper mt-4"
    >
      <SwiperSlide
        v-for="item in partners2"
        :key="item.name"
        style="width: 203px"
      >
        <div
          class="flex items-center bg-[#0f0f0f] gap-2 border-[#454134] border rounded-xl p-4"
        >
          <img
            class="h-[80px] min-w-[80px] rounded-full object-cover"
            :src="item.img"
            alt=""
          />
          <div
            class="uppercase font-bold font-['Saira'] text-[24px] text-white"
          >
            {{ item.name }}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style scoped>
.bg-circle.bg-circle:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(../assets/sun.svg);
}
.my-swiper {
  overflow: hidden;
}
@media (max-width: 768px) {
  .prev-icon {
    left: 5px;
    transform: translateY(-50%) rotate(30deg);
    top: 50%;
    margin-left: 20px;
  }
  .prev-icon,
  .next-icon {
    position: absolute;
  }
  .next-icon {
    right: 5px;
    transform: translateY(-50%) rotate(30deg);
    top: 50%;
    margin-left: 20px;
  }
  .pre-mf {
    margin-left: 20px;
  }
  .next-mr {
    margin-right: 20px;
  }
  .swiper-thumbs {
    height: auto !important;
    width: 100% !important;
  }
  .h-desktop {
    height: 100px;
  }
}
</style>
