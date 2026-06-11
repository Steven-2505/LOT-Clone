<script setup>
import Header from "./Header.vue";
import "../style.css";
import { ref, shallowRef } from "vue";
import banner2 from "../assets/banner2.png";
import nifehub from "../assets/nifehub.svg";
import nex from "../assets/nex.svg";
import ndashboard from "../assets/ndashboard.svg";
import iconTimeline from "../assets/icon-timeline.svg";
const timeline = iconTimeline;
import Nifehub from "./nifehub.vue";
import Nex from "./nex.vue";
import Ndashboard from "./ndashboard.vue";
import NifehubApp from "./nifehubApp.vue";
import NexApp from "./nexApp.vue";
import NdashboardApp from "./ndashboardApp.vue";

const activeCard = ref("nifehub");
const currentComponent = shallowRef(Nifehub); // ✅ lưu component object, không phải string

function selectCard(name, component) {
  activeCard.value = name;
  currentComponent.value = component;
}

const activeApp = ref("ndashboardApp");
const currentComponentApp = shallowRef(NdashboardApp); // ✅ lưu component object, không phải string

function selectApp(name, component) {
  activeApp.value = name;
  currentComponentApp.value = component;
}
</script>

<template>
  <div
    data-aos-easing="ease"
    data-aos-duration="400"
    data-aos-delay="0"
    class="video-container"
  >
    <Header> </Header>
    <video autoplay muted loop playsinline>
      <source src="../assets/bg.mp4" type="video/mp4" />
    </video>
    <section class="w-full relative header-content">
      <div
        class="relative z-3 text-white m-auto px-10 pt-24 flex flex-col items-center justify-center"
      >
        <div
          class="font-['Saira'] text-transparent bg-clip-text pt-20 text-center inset-0 uppercase lg:text-[65px] text-[32px] font-bold custom-text-gradient"
        >
          LOT SOFTWARE
        </div>
        <div
          class="font-['Saira'] text-transparent bg-clip-text pt-12px text-center uppercase lg:text-[65px] text-[36px] font-bold custom-text-gradient"
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
  <section class="bg-black">
    <div
      class="text-center bg-black from-[#000000] to-[#1E1E1E] pt-60px pb-60px aos-init aos-animate"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <section>
        <div class="px-6 md:px-10 mx-auto z-10 relative">
          <div class="text-[#EBC47C] text-center text-[25px] font-['Saira']">
            Who We Are
          </div>
          <div
            class="text-transparent bg-clip-text text-center uppercase pt-12px sm:text-[65px] text-[36px] font-bold custom-text-gradient font-['Saira']"
          >
            Khám phá bản sắc của chúng tôi, tạo dựng
          </div>
          <div
            class="text-transparent bg-clip-text text-center uppercase pt-20px mb-100px sm:text-[65px] text-[36px] font-bold custom-text-gradient font-['Saira']"
          >
            tương lai với sự xuất sắc.
          </div>
          <div class="w-fit m-auto mt-10 max-w-full display-ruby">
            <div class="relative border-multiple">
              <div
                class="w-30 h-30 bg-[#FFDE9C] rounded-full flex items-center justify-center"
              >
                <svg
                  width="79"
                  height="43"
                  viewBox="0 0 79 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.8923 34.792L12.0469 18.9823L28.8348 0L34.466 4.8381L22.5162 18.3213L34.8361 29.2136L29.8923 34.792Z"
                    fill="url(#paint0_linear_16764_19152)"
                  ></path>
                  <path
                    d="M38.5338 42.0883L32.8233 37.2502L44.7731 23.7934L32.4531 12.9011L37.3706 7.32275L55.2425 23.1325L38.5338 42.0883Z"
                    fill="url(#paint1_linear_16764_19152)"
                  ></path>
                  <path
                    d="M78.7387 5.55225V12.6111H67.3705V41.2696H58.8576V12.6111H49.5515L41.5938 5.55225H78.7387Z"
                    fill="url(#paint2_linear_16764_19152)"
                  ></path>
                  <path
                    d="M29.4348 41.2698H0.40625V6.02832H8.91917V34.158H21.6622L29.4348 41.2698Z"
                    fill="url(#paint3_linear_16764_19152)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_16764_19152"
                      x1="24.6008"
                      y1="40.9731"
                      x2="2.12351"
                      y2="33.2707"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#563D0A"></stop>
                      <stop offset="1" stop-color="#BC8516"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_16764_19152"
                      x1="45.007"
                      y1="48.2647"
                      x2="22.5333"
                      y2="40.5576"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#563D0A"></stop>
                      <stop offset="1" stop-color="#BC8516"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_16764_19152"
                      x1="62.0557"
                      y1="47.615"
                      x2="30.4677"
                      y2="30.4289"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#563D0A"></stop>
                      <stop offset="1" stop-color="#BC8516"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_16764_19152"
                      x1="16.3972"
                      y1="47.5307"
                      x2="-10.5854"
                      y2="35.9031"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#563D0A"></stop>
                      <stop offset="1" stop-color="#BC8516"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                class="absolute top-0 left-0 sm:-translate-x-1/2 translate-y-1/2 -ms-3 z-10"
              >
                <div
                  class="scroll-animate sm:ps-8 ps-4 p-2 rounded-full w-fit flex items-center gap-2 me-10"
                  style="
                    background: linear-gradient(
                      -90deg,
                      rgba(211, 175, 103, 0.8) 0%,
                      rgba(109, 90, 53, 0.647) 100%
                    );
                  "
                >
                  <span class="title-info pl-20px">50+</span
                  ><span class="flex pt-1 content-infor">Thành viên IT</span
                  ><img
                    class="sm:w-10 w-7.5"
                    src="../assets/about-icon.svg"
                    alt=""
                  />
                </div>
              </div>
              <div
                class="absolute bottom-0 left-0 sm:-translate-x-1/2 translate-y-1/2 mb-4"
              >
                <div
                  class="scroll-animate sm:ps-8 ps-4 p-2 rounded-full w-fit flex items-center gap-2"
                  style="
                    background: linear-gradient(
                      -90deg,
                      rgba(211, 175, 103, 0.8) 0%,
                      rgba(109, 90, 53, 0.647) 100%
                    );
                  "
                >
                  <span class="title-info pl-20px">100+</span
                  ><span class="flex pt-1 content-infor">Đối tác</span
                  ><img
                    class="sm:w-10 w-7.5"
                    src="../assets/about-icon.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="absolute top-0 right-0 sm:translate-x-1/2">
                <div
                  class="scroll-animate sm:pe-8 pe-6 p-2 rounded-full w-fit flex items-center gap-2"
                  style="
                    background: linear-gradient(
                      90deg,
                      rgba(211, 175, 103, 0.8) 0%,
                      rgba(109, 90, 53, 0.647) 100%
                    );
                  "
                >
                  <img
                    class="sm:w-10 w-7.5"
                    src="../assets/about-icon.svg"
                    alt=""
                  /><span class="title-info">5</span
                  ><span class="flex pt-1 content-infor pr-20px"
                    >Năm sản xuất</span
                  >
                </div>
              </div>
              <div
                class="absolute bottom-0 right-0 sm:translate-x-1/2 mb-10 z-10"
              >
                <div
                  class="scroll-animate duration-700 sm:pe-8 pe-6 p-2 rounded-full w-fit flex items-center gap-2 ms-10"
                  style="
                    background: linear-gradient(
                      90deg,
                      rgba(211, 175, 103, 0.8) 0%,
                      rgba(109, 90, 53, 0.647) 100%
                    );
                  "
                >
                  <img
                    class="sm:w-10 w-7.5"
                    src="../assets/about-icon.svg"
                    alt=""
                  /><span class="title-info">24/7</span
                  ><span class="flex sm:pt-1 content-infor pr-20px"
                    >Đội ngũ hỗ trợ</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-black pt-20">
            <div class="lg:px-10 px-4 pt-10 pb-10 mx-auto">
              <div
                class="text-[#EBC47C] text-center text-[25px] font-['Saira']"
              >
                Dẫn đầu công nghệ
              </div>
              <div
                class="text-transparent bg-clip-text uppercase pt-12px lg:text-[65px] text-[32px] font-bold custom-text-gradient text-center"
              >
                Hệ thống 360 Vr độc quyền <br />
              </div>
              <div
                class="text-transparent bg-clip-text uppercase pt-20px pb-60px lg:text-[65px] text-[32px] font-bold custom-text-gradient text-center"
              >
                cho đối tác
              </div>
            </div>
          </div>
          <div
            class="relative z-0 h-200 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div
              class="bg-2"
              :style="{ backgroundImage: `url(${banner2})` }"
            ></div>
          </div>
        </div>
      </section>
    </div>
    <!--Phần quánh trình hình thành app -->
    <div data-aos="fade-up" data-aos-duration="2500" class="bg-black pb-60px">
      <div class="max-w-7xl mx-auto w-full px-10">
        <div class="grid grid-cols-9 grid-rows-3 gap-3 pt-8 px-10">
          <div
            class="relative grow overplay-display cursor-pointer"
            :class="{ active: activeCard === 'nifehub' }"
            @click="selectCard('nifehub', Nifehub)"
          >
            <div
              class="grid-item flex flex-col items-center gap-2 bg-[#232323] min-h-33.5 p-2 rounded-md justify-center"
            >
              <div
                class="shadow-[0_5px_20px_3px_#FFD25F] line bg-[#F6CD7E] h-1.25 w-15 rounded-full absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
              ></div>
              <img width="50px" :src="nifehub" alt="" />
              <div class="text-[14px]">N-HUB</div>
            </div>
          </div>

          <!-- th NEX -->
          <div
            class="grow col-start-1 row-start-2 relative overplay-display cursor-pointer"
            :class="{ active: activeCard === 'nex' }"
            @click="selectCard('nex', Nex)"
          >
            <div
              class="grid-item flex flex-col items-center gap-2 bg-[#232323] p-2 min-h-33.5 p-4 rounded-md justify-center"
            >
              <img width="50px" :src="nex" alt="" />
              <div class="text-[14px]">NEX</div>
              <div
                class="line bg-[#F6CD7E] h-1.25 w-15 rounded-full absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
              ></div>
            </div>
          </div>

          <!-- Card NEX-DASHBOARD -->
          <div
            class="col-start-1 row-start-3 relative overplay-display cursor-pointer grow"
            :class="{ active: activeCard === 'ndashboard' }"
            @click="selectCard('ndashboard', Ndashboard)"
          >
            <div
              class="grid-item flex flex-col items-center gap-2 bg-[#232323] p-2 min-h-33.5 rounded-md justify-center"
            >
              <img width="80px" :src="ndashboard" alt="" />
              <div class="text-[14px] xl:whitespace-nowrap">NEX-DASHBOARD</div>
              <div
                class="line bg-[#F6CD7E] h-1.25 w-15 rounded-full absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
              ></div>
            </div>
          </div>

          <!-- Dynamic component bên phải -->
          <div
            class="col-span-8 row-span-3 col-start-2 row-start-1 bg-[#232323] pt-4 rounded-lg relative overflow-hidden"
          >
            <component :is="currentComponent" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <!--Phần Sản Phẩm Cty -->
      <section data-v-ab0c01a8="" class="py-10 md:py-16 overflow-hidden">
        <div data-v-ab0c01a8="" class="mx-auto">
          <div
            data-v-ab0c01a8=""
            class="container mx-auto px-10 aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            <div
              data-v-ab0c01a8=""
              class="text-[#FFE2AB] text-center mb-8 font-medium text-[20px]"
            >
              TRẢI NGHIỆM SẢN PHẨM CỦA CHÚNG TÔI
            </div>
            <div
              data-v-ab0c01a8=""
              class="flex lg:justify-center m-auto gap-2 md:gap-4 md:px-0 container pb-10 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="2500"
              style="overflow: auto"
            >
              <div
                :class="{ active: activeApp === 'ndashboardApp' }"
                @click="selectApp('ndashboardApp', NdashboardApp)"
                data-v-ab0c01a8=""
                class="flex items-center justify-center cursor-pointer transition bg-[#F0E7CF] rounded rounded-3 w-full hover:bg-[#ffff] over-play bg-[#ffff] shadow-[0_0px_14px_4px_#ffff] active"
              >
                <div data-v-ab0c01a8="" class="">
                  <div data-v-ab0c01a8="" class="flex items-center gap-3">
                    <img
                      data-v-ab0c01a8=""
                      class="py-6 px-14 p-12"
                      :src="ndashboard"
                      alt=""
                      style="min-width: 180px"
                    />
                  </div>
                </div>
              </div>
              <div
                :class="{ active: activeApp === 'nifehubApp' }"
                @click="selectApp('nifehubApp', NifehubApp)"
                data-v-ab0c01a8=""
                class="flex items-center justify-center cursor-pointer transition bg-[#F0E7CF] rounded rounded-3 w-full hover:bg-[#ffff] over-play"
              >
                <div data-v-ab0c01a8="" class="">
                  <div data-v-ab0c01a8="" class="flex items-center gap-3">
                    <img
                      data-v-ab0c01a8=""
                      class="py-6 px-14 p-12"
                      :src="nifehub"
                      alt=""
                      style="min-width: 180px"
                    />
                  </div>
                </div>
              </div>
              <div
                :class="{ active: activeApp === 'nexApp' }"
                @click="selectApp('nexApp', NexApp)"
                data-v-ab0c01a8=""
                class="flex items-center justify-center cursor-pointer transition bg-[#F0E7CF] rounded rounded-3 w-full hover:bg-[#ffff] over-play"
              >
                <div data-v-ab0c01a8="" class="">
                  <div data-v-ab0c01a8="" class="flex items-center gap-3">
                    <img
                      data-v-ab0c01a8=""
                      class="py-6 px-14 p-12"
                      :src="nex"
                      alt=""
                      style="min-width: 180px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <component :is="currentComponentApp" />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
