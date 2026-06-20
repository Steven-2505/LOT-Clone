<script setup>
import Header from "./Header.vue";
import "../style.css";
import { ref, shallowRef, onMounted } from "vue";
import banner2 from "../assets/banner2.png";
import nifehub from "../assets/nifehub.svg";
import nex from "../assets/nex.svg";
import ndashboard from "../assets/ndashboard.svg";
import iconTimeline from "../assets/icon-timeline.svg";
import Slidehome from "./Slidehome.vue";
import footer from "./footer.vue";
const timeline = iconTimeline;
import Nifehub from "./nifehub.vue";
import Nex from "./nex.vue";
import Ndashboard from "./ndashboard.vue";
import NifehubApp from "./nifehubApp.vue";
import NexApp from "./nexApp.vue";
import NdashboardApp from "./ndashboardApp.vue";
import ImageCompare from "image-compare-viewer";
import "image-compare-viewer/dist/image-compare-viewer.min.css";
import Baocao from "./Chucnang/baocao.vue";
import Thanhtoan from "./Chucnang/thanhtoan.vue";
import Ngoaituyen from "./Chucnang/ngoaituyen.vue";
import Pos from "./Chucnang/pos.vue";
import Qlnv from "./Chucnang/qlnv.vue";
import Tuychinhmatbang from "./Chucnang/tuychinhmatbang.vue";
import Tuychinhmenu from "./Chucnang/tuychinhmenu.vue";
import Footer from "./footer.vue";
import Headermb from "./Headermb.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import reportIcon from "../assets/report.svg";
import paymentIcon from "../assets/payment.svg";
import modeIcon from "../assets/mode.svg";
import posIcon from "../assets/pos.svg";
import staffIcon from "../assets/staff.svg";
import floorIcon from "../assets/floor.svg";
import menuIcon from "../assets/menu.svg";

const chucnangList = [
  {
    key: "baocao",
    name: "Báo cáo",
    desc: "Hệ thống cung cấp khả năng tích hợp thông tin từ các giao dịch đặt lịch",
    icon: reportIcon,
    component: Baocao,
  },
  {
    key: "thanhtoan",
    name: "Thanh toán",
    desc: "NEX-DASHBOARD hỗ trợ chủ shop kiểm tra chi tiết doanh thu dựa trên mã",
    icon: paymentIcon,
    component: Thanhtoan,
  },
  {
    key: "ngoaituyen",
    name: "Ngoại tuyến",
    desc: "Tính năng OFFLINE MODE cho phép hệ thống xử lý các giao dịch",
    icon: modeIcon,
    component: Ngoaituyen,
  },
  {
    key: "pos",
    name: "Tích hợp POS",
    desc: "Tích hợp POS giúp hệ thống kết nối và đồng bộ dữ liệu từ các giao dịch bán lẻ",
    icon: posIcon,
    component: Pos,
  },
  {
    key: "qlnv",
    name: "Quản lý NV",
    desc: "Tính năng STAFF MANAGEMENT cung cấp các công cụ quản lý nhân sự toàn diện",
    icon: staffIcon,
    component: Qlnv,
  },
  {
    key: "tuychinhmatbang",
    name: "Mặt bằng",
    desc: "Tính năng CUSTOM FLOOR PLAN cho phép doanh nghiệp tự thiết kế mặt bằng cửa hàng một cách linh hoạt.",
    icon: floorIcon,
    component: Tuychinhmatbang,
  },
  {
    key: "tuychinhmenu",
    name: "Menu",
    desc: "Tính năng MENU CUSTOMIZE hỗ trợ doanh nghiệp dễ dàng tùy chỉnh danh sách sản phẩm",
    icon: menuIcon,
    component: Tuychinhmenu,
  },
];

const activeCard = ref("nifehub");
const currentComponent = shallowRef(Nifehub);

function selectCard(name, component) {
  activeCard.value = name;
  currentComponent.value = component;
}

const activeApp = ref("ndashboardApp");
const currentComponentApp = shallowRef(NdashboardApp);

function selectApp(name, component) {
  activeApp.value = name;
  currentComponentApp.value = component;
}

const activeChucnang = ref("baocao");
const currentComponentChucnang = shallowRef(Baocao);

function selectChucnang(name, component) {
  activeChucnang.value = name;
  currentComponentChucnang.value = component;
}

const compareEl = ref(null);
onMounted(() => {
  new ImageCompare(compareEl.value).mount();
});
</script>

<template>
  <div
    data-aos-easing="ease"
    data-aos-duration="400"
    data-aos-delay="0"
    class="video-container"
  >
    <div class="overlay-hiden">
      <Header> </Header>
      <Headermb></Headermb>
    </div>
    <video autoplay muted loop playsinline class="overlay-hiden">
      <source src="../assets/bg.mp4" type="video/mp4" />
    </video>
    <section class="w-full relative header-content">
      <div
        class="relative z-3 text-white m-auto px-10 flex flex-col items-center justify-center"
      >
        <div
          class="font-['Saira'] text-transparent bg-clip-text pt-20 text-center inset-0 uppercase lg:text-[56px] text-[32px] font-bold custom-text-gradient"
        >
          LOT SOFTWARE
        </div>
        <div
          class="font-['Saira'] text-transparent bg-clip-text pt-12px text-center uppercase lg:text-[56px] text-[36px] font-bold custom-text-gradient"
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
      class="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center flex-col gap-3 pb-6 mb-20px overlay-hiden"
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
  <section class="bg-black overlay-hiden">
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
                  <span class="title-info md:pl-20px">50+</span
                  ><span class="flex content-infor">Thành viên IT</span
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
                  <span class="title-info md:pl-20px">100+</span
                  ><span class="flex content-infor">Đối tác</span
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
                  ><span class="flex content-infor md:pr-20px"
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
                  ><span class="flex sm:pt-1 content-infor md:pr-20px"
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
                class="text-transparent bg-clip-text uppercase pt-12px lg:text-[56px] text-[32px] font-bold custom-text-gradient text-center"
              >
                Hệ thống 360 Vr độc quyền <br />
              </div>
              <div
                class="text-transparent bg-clip-text uppercase pt-20px pb-60px lg:text-[56px] text-[32px] font-bold custom-text-gradient text-center"
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
        <div class="flex flex-col md:grid md:grid-cols-9 md:grid-rows-3 gap-3">
          <div class="grid grid-cols-2 gap-3 md:contents">
            <!-- N-HUB -->
            <div
              class="relative overplay-display cursor-pointer md:row-start-1 md:col-start-1"
              :class="{ active: activeCard === 'nifehub' }"
              @click="selectCard('nifehub', Nifehub)"
            >
              <div
                class="grid-item flex flex-col items-center gap-2 bg-[#232323] min-h-33.5 p-2 rounded-md justify-center relative"
              >
                <div
                  class="shadow-[0_5px_20px_3px_#FFD25F] bg-[#F6CD7E] h-1.25 w-15 rounded-full absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
                ></div>
                <img width="50px" :src="nifehub" alt="" />
                <div class="text-[14px]">N-HUB</div>
              </div>
            </div>

            <!-- NEX -->
            <div
              class="relative overplay-display cursor-pointer md:col-start-1 md:row-start-2"
              :class="{ active: activeCard === 'nex' }"
              @click="selectCard('nex', Nex)"
            >
              <div
                class="grid-item flex flex-col items-center gap-2 bg-[#232323] min-h-33.5 p-2 rounded-md justify-center relative"
              >
                <img width="50px" :src="nex" alt="" />
                <div class="text-[14px]">NEX</div>
                <div
                  class="bg-[#F6CD7E] h-1.25 w-15 rounded-full absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
                ></div>
              </div>
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
      <section class="py-10 md:py-16 overflow-hidden">
        <div class="mx-auto">
          <div
            class="container mx-auto px-10 aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            <div
              class="text-[#FFE2AB] text-center mb-8 font-medium text-[20px]"
            >
              TRẢI NGHIỆM SẢN PHẨM CỦA CHÚNG TÔI
            </div>
            <div
              class="flex lg:justify-center m-auto gap-2 md:gap-4 md:px-0 container pb-10 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="2500"
              style="overflow: hidden"
            >
              <div
                :class="{ active: activeApp === 'ndashboardApp' }"
                @click="selectApp('ndashboardApp', NdashboardApp)"
                class="flex items-center justify-center cursor-pointer min-w-0 transition bg-[#F0E7CF] rounded rounded-3 w-full hover:bg-[#ffff] over-play"
              >
                <div class="">
                  <div class="flex items-center gap-3">
                    <img
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
                class="flex items-center justify-center cursor-pointer min-w-0 transition bg-[#F0E7CF] rounded rounded-3 w-full hover:bg-[#ffff] over-play"
              >
                <div class="">
                  <div class="flex items-center gap-3">
                    <img
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
                class="flex items-center justify-center cursor-pointer min-w-0 transition bg-[#F0E7CF] rounded rounded-3 w-full hover:bg-[#ffff] over-play"
              >
                <div class="">
                  <div class="flex items-center gap-3">
                    <img
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
    <!-- Sáng tối-->
    <div
      data-aos="fade-up"
      data-aos-duration="2500"
      class="aos-init aos-animate"
    >
      <div>
        <div class="container mx-auto">
          <div
            class="text-[32px] w-1/2 mx-auto text-center text-white mt-4 text-transparent w-fit bg-clip-text uppercase lg:text-[48px] text-[18px] font-bold leading-normal custom-text-gradient"
          >
            Hệ thống Quản lý Doanh nghiệp &amp; POS <br />
            Tất cả trong một cho nhà hàng, spa, quán bar, khách sạn.
          </div>
          <img class="m-auto my-5" src="../assets/divider-home.svg" alt="" />
          <div
            class="text-[#FFF1D8] text-center font-bold lg:text-[36px] text-[24px] uppercase"
          >
            Chế độ tối - Chế độ sáng
          </div>
        </div>
        <div
          ref="compareEl"
          id="image-compare"
          class="lg:my-28 my-20 icv icv__icv--horizontal standard"
        >
          <img
            width="100%"
            src="../assets/banner-light.png"
            style="min-height: 180px; object-fit: cover"
            class="icv__img icv__img-a"
          />
          <div
            class="icv__wrapper"
            style="width: 50%; height: 50%; transition: 100ms ease-out"
          >
            <img
              width="100%"
              src="../assets/banner-dark.png"
              style="min-height: 180px; object-fit: cover"
              class="icv__img icv__img-b"
            />
          </div>
          <div
            class="icv__control"
            style="
              width: 50px;
              left: calc(50% - 25px);
              transition: 100ms ease-out;
            "
          >
            <div
              class="icv__control-line"
              style="
                width: 2px;
                background: rgb(255, 255, 255);
                box-shadow: rgba(0, 0, 0, 0.33) 0px 0px 15px;
              "
            ></div>
            <div class="icv__theme-wrapper">
              <div
                class="icv__arrow-wrapper"
                style="transform: translateX(8px)"
              >
                <svg
                  height="15"
                  width="15"
                  style="
                    transform: scale(1.5) rotateZ(180deg);
                    height: 20px;
                    width: 20px;

                    -webkit-filter: drop-shadow(
                      0px 3px 5px rgba(0, 0, 0, 0.33)
                    );
                    filter: drop-shadow(0px -3px 5px rgba(0, 0, 0, 0.33));
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="#FFFFFF"
                    stroke="#FFFFFF"
                    stroke-linecap="round"
                    stroke-width="0"
                    d="M4.5 1.9L10 7.65l-5.5 5.4"
                  ></path>
                </svg>
              </div>
              <div
                class="icv__arrow-wrapper"
                style="transform: translateX(-8px)"
              >
                <svg
                  height="15"
                  width="15"
                  style="
                    transform: scale(1.5) rotateZ(0deg);
                    height: 20px;
                    width: 20px;

                    -webkit-filter: drop-shadow(
                      0px 3px 5px rgba(0, 0, 0, 0.33)
                    );
                    filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.33));
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="#FFFFFF"
                    stroke="#FFFFFF"
                    stroke-linecap="round"
                    stroke-width="0"
                    d="M4.5 1.9L10 7.65l-5.5 5.4"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              class="icv__control-line"
              style="
                width: 2px;
                background: rgb(255, 255, 255);
                box-shadow: rgba(0, 0, 0, 0.33) 0px 0px 15px;
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!--chức năng-->
    <div
      data-aos="fade-up"
      data-aos-duration="2500"
      class="aos-init aos-animate"
    >
      <!-- chức năng desktop-->
      <div class="function-dsk grid-gradient">
        <div class="container mx-auto xl:px-10 px-6 mt-10 py-6">
          <div class="xl:flex">
            <div class="xl:flex grow w-full justify-end">
              <div class="flex flex-col gap-6">
                <div class="xl:block hidden">
                  <div class="col-start-1 row-start-1">
                    <div
                      :class="{ active: activeChucnang === 'baocao' }"
                      @click="selectChucnang('baocao', Baocao)"
                      class="overplayitem flex items-center gap-8 flex-wrap xl:flex-nowrap"
                    >
                      <div
                        class="overplay-item before:rounded-full cursor-pointer"
                      >
                        <div
                          class="rounded-full border-[#c8bd96] w-fit border p-7 drop-shadow-2xl max-w-[100px]"
                        >
                          <img width="100%" src="../assets/report.svg" alt="" />
                        </div>
                      </div>
                      <div
                        class="item-description overplay-item cursor-pointer p-10px"
                      >
                        <div class="pl-10px">
                          <div
                            class="text-[#c9be97] uppercase xl:text-[16px] text-[14px] font-bold"
                          >
                            báo cáo
                          </div>
                          <div
                            class="max-w-[360px] mt-1 line-clamp-1 text-white"
                          >
                            Hệ thống cung cấp khả năng tích hợp thông tin từ các
                            giao dịch đặt lịch
                          </div>
                        </div>
                        <div class="flex items-center gap-2 justify-end">
                          <span
                            class="font-bold text-[14px] bg-clip-text text-transparent learn-text drop-shadow-2xl capitalize custom-text-gradient"
                            >Tìm hiểu thêm</span
                          ><span
                            ><svg
                              width="42"
                              height="26"
                              viewBox="0 0 42 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g filter="url(#filter0_d_15987_32778)">
                                <path
                                  d="M31.1582 13L26.1582 10.1132V15.8868L31.1582 13ZM10.1582 13.5L26.6582 13.5V12.5L10.1582 12.5V13.5Z"
                                  fill="url(#paint0_radial_15987_32778)"
                                ></path>
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_15987_32778"
                                  x="0.158203"
                                  y="0.113281"
                                  width="41"
                                  height="25.7734"
                                  filterUnits="userSpaceOnUse"
                                  color-interpolation-filters="sRGB"
                                >
                                  <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feGaussianBlur
                                    stdDeviation="5"
                                  ></feGaussianBlur>
                                  <feComposite
                                    in2="hardAlpha"
                                    operator="out"
                                  ></feComposite>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 0.5 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_15987_32778"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_15987_32778"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <radialGradient
                                  id="paint0_radial_15987_32778"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(22.0589 13.2846) rotate(4.11485) scale(8.46888 1.90236)"
                                >
                                  <stop
                                    offset="0.00502064"
                                    stop-color="white"
                                  ></stop>
                                  <stop
                                    offset="0.775"
                                    stop-color="#DBCEA0"
                                  ></stop>
                                  <stop
                                    offset="0.98"
                                    stop-color="#C9BE97"
                                  ></stop>
                                </radialGradient>
                              </defs></svg
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xl:block hidden">
                  <div class="col-start-1 row-start-2">
                    <div
                      :class="{ active: activeChucnang === 'thanhtoan' }"
                      @click="selectChucnang('thanhtoan', Thanhtoan)"
                      class="overplayitem flex items-center gap-8 flex-wrap xl:flex-nowrap"
                    >
                      <div
                        class="overplay-item before:rounded-full cursor-pointer"
                      >
                        <div
                          class="rounded-full border-[#c8bd96] w-fit border p-7 drop-shadow-2xl max-w-[100px]"
                        >
                          <img
                            width="100%"
                            src="../assets/payment.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div
                        class="item-description overplay-item cursor-pointer p-10px"
                      >
                        <div class="pl-10px">
                          <div
                            class="text-[#c9be97] uppercase xl:text-[16px] text-[14px] font-bold"
                          >
                            thanh toán
                          </div>
                          <div
                            class="max-w-[360px] mt-1 line-clamp-1 text-white"
                          >
                            NEX-DASHBOARD hỗ trợ chủ shop kiểm tra chi tiết
                            doanh thu dựa trên mã
                          </div>
                        </div>
                        <div class="flex items-center gap-2 justify-end">
                          <span
                            class="font-bold text-[14px] bg-clip-text text-transparent learn-text drop-shadow-2xl capitalize custom-text-gradient"
                            >Tìm hiểu thêm</span
                          ><span
                            ><svg
                              width="42"
                              height="26"
                              viewBox="0 0 42 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g filter="url(#filter0_d_15987_32778)">
                                <path
                                  d="M31.1582 13L26.1582 10.1132V15.8868L31.1582 13ZM10.1582 13.5L26.6582 13.5V12.5L10.1582 12.5V13.5Z"
                                  fill="url(#paint0_radial_15987_32778)"
                                ></path>
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_15987_32778"
                                  x="0.158203"
                                  y="0.113281"
                                  width="41"
                                  height="25.7734"
                                  filterUnits="userSpaceOnUse"
                                  color-interpolation-filters="sRGB"
                                >
                                  <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feGaussianBlur
                                    stdDeviation="5"
                                  ></feGaussianBlur>
                                  <feComposite
                                    in2="hardAlpha"
                                    operator="out"
                                  ></feComposite>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 0.5 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_15987_32778"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_15987_32778"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <radialGradient
                                  id="paint0_radial_15987_32778"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(22.0589 13.2846) rotate(4.11485) scale(8.46888 1.90236)"
                                >
                                  <stop
                                    offset="0.00502064"
                                    stop-color="white"
                                  ></stop>
                                  <stop
                                    offset="0.775"
                                    stop-color="#DBCEA0"
                                  ></stop>
                                  <stop
                                    offset="0.98"
                                    stop-color="#C9BE97"
                                  ></stop>
                                </radialGradient>
                              </defs></svg
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xl:block hidden">
                  <div class="col-start-1 row-start-3">
                    <div
                      :class="{ active: activeChucnang === 'ngoaituyen' }"
                      @click="selectChucnang('ngoaituyen', Ngoaituyen)"
                      class="overplayitem flex items-center gap-8 flex-wrap xl:flex-nowrap"
                    >
                      <div
                        class="overplay-item before:rounded-full cursor-pointer"
                      >
                        <div
                          class="rounded-full border-[#c8bd96] w-fit border p-7 drop-shadow-2xl max-w-[100px]"
                        >
                          <img width="100%" src="../assets/mode.svg" alt="" />
                        </div>
                      </div>
                      <div
                        class="item-description overplay-item cursor-pointer p-10px"
                      >
                        <div class="pl-10px">
                          <div
                            class="text-[#c9be97] uppercase xl:text-[16px] text-[14px] font-bold"
                          >
                            chế độ ngoại tuyến
                          </div>
                          <div
                            class="max-w-[360px] mt-1 line-clamp-1 text-white"
                          >
                            Tính năng OFFLINE MODE cho phép hệ thống xử lý các
                            giao dịch
                          </div>
                        </div>
                        <div class="flex items-center gap-2 justify-end">
                          <span
                            class="font-bold text-[14px] bg-clip-text text-transparent learn-text drop-shadow-2xl capitalize custom-text-gradient"
                            >Tìm hiểu thêm</span
                          ><span
                            ><svg
                              width="42"
                              height="26"
                              viewBox="0 0 42 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g filter="url(#filter0_d_15987_32778)">
                                <path
                                  d="M31.1582 13L26.1582 10.1132V15.8868L31.1582 13ZM10.1582 13.5L26.6582 13.5V12.5L10.1582 12.5V13.5Z"
                                  fill="url(#paint0_radial_15987_32778)"
                                ></path>
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_15987_32778"
                                  x="0.158203"
                                  y="0.113281"
                                  width="41"
                                  height="25.7734"
                                  filterUnits="userSpaceOnUse"
                                  color-interpolation-filters="sRGB"
                                >
                                  <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feGaussianBlur
                                    stdDeviation="5"
                                  ></feGaussianBlur>
                                  <feComposite
                                    in2="hardAlpha"
                                    operator="out"
                                  ></feComposite>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 0.5 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_15987_32778"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_15987_32778"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <radialGradient
                                  id="paint0_radial_15987_32778"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(22.0589 13.2846) rotate(4.11485) scale(8.46888 1.90236)"
                                >
                                  <stop
                                    offset="0.00502064"
                                    stop-color="white"
                                  ></stop>
                                  <stop
                                    offset="0.775"
                                    stop-color="#DBCEA0"
                                  ></stop>
                                  <stop
                                    offset="0.98"
                                    stop-color="#C9BE97"
                                  ></stop>
                                </radialGradient>
                              </defs></svg
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xl:block hidden">
                  <div class="col-start-1 row-start-4">
                    <div
                      :class="{ active: activeChucnang === 'pos' }"
                      @click="selectChucnang('pos', Pos)"
                      class="overplayitem flex items-center gap-8 flex-wrap xl:flex-nowrap"
                    >
                      <div
                        class="overplay-item before:rounded-full cursor-pointer"
                      >
                        <div
                          class="rounded-full border-[#c8bd96] w-fit border p-7 drop-shadow-2xl max-w-[100px]"
                        >
                          <img width="100%" src="../assets/pos.svg" alt="" />
                        </div>
                      </div>
                      <div
                        class="item-description overplay-item cursor-pointer p-10px"
                      >
                        <div class="pl-10px">
                          <div
                            class="text-[#c9be97] uppercase xl:text-[16px] text-[14px] font-bold"
                          >
                            Tích hợp POS
                          </div>
                          <div
                            class="max-w-[360px] mt-1 line-clamp-1 text-white"
                          >
                            Tích hợp POS giúp hệ thống kết nối và đồng bộ dữ
                            liệu từ các giao dịch bán lẻ
                          </div>
                        </div>
                        <div class="flex items-center gap-2 justify-end">
                          <span
                            class="font-bold text-[14px] bg-clip-text text-transparent learn-text drop-shadow-2xl capitalize custom-text-gradient"
                            >Tìm hiểu thêm</span
                          ><span
                            ><svg
                              width="42"
                              height="26"
                              viewBox="0 0 42 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g filter="url(#filter0_d_15987_32778)">
                                <path
                                  d="M31.1582 13L26.1582 10.1132V15.8868L31.1582 13ZM10.1582 13.5L26.6582 13.5V12.5L10.1582 12.5V13.5Z"
                                  fill="url(#paint0_radial_15987_32778)"
                                ></path>
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_15987_32778"
                                  x="0.158203"
                                  y="0.113281"
                                  width="41"
                                  height="25.7734"
                                  filterUnits="userSpaceOnUse"
                                  color-interpolation-filters="sRGB"
                                >
                                  <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feGaussianBlur
                                    stdDeviation="5"
                                  ></feGaussianBlur>
                                  <feComposite
                                    in2="hardAlpha"
                                    operator="out"
                                  ></feComposite>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 0.5 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_15987_32778"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_15987_32778"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <radialGradient
                                  id="paint0_radial_15987_32778"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(22.0589 13.2846) rotate(4.11485) scale(8.46888 1.90236)"
                                >
                                  <stop
                                    offset="0.00502064"
                                    stop-color="white"
                                  ></stop>
                                  <stop
                                    offset="0.775"
                                    stop-color="#DBCEA0"
                                  ></stop>
                                  <stop
                                    offset="0.98"
                                    stop-color="#C9BE97"
                                  ></stop>
                                </radialGradient>
                              </defs></svg
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xl:block hidden">
                  <div class="col-start-1 row-start-5">
                    <div
                      :class="{ active: activeChucnang === 'qlnv' }"
                      @click="selectChucnang('qlnv', Qlnv)"
                      class="overplayitem flex items-center gap-8 flex-wrap xl:flex-nowrap"
                    >
                      <div
                        class="overplay-item before:rounded-full cursor-pointer"
                      >
                        <div
                          class="rounded-full border-[#c8bd96] w-fit border p-7 drop-shadow-2xl max-w-[100px]"
                        >
                          <img width="100%" src="../assets/staff.svg" alt="" />
                        </div>
                      </div>
                      <div
                        class="item-description overplay-item cursor-pointer p-10px"
                      >
                        <div class="pl-10px">
                          <div
                            class="text-[#c9be97] uppercase xl:text-[16px] text-[14px] font-bold"
                          >
                            Quản lý nhân viên
                          </div>
                          <div
                            class="max-w-[360px] mt-1 line-clamp-1 text-white"
                          >
                            Tính năng STAFF MANAGEMENT cung cấp các công cụ quản
                            lý nhân sự toàn diện
                          </div>
                        </div>
                        <div class="flex items-center gap-2 justify-end">
                          <span
                            class="font-bold text-[14px] bg-clip-text text-transparent learn-text drop-shadow-2xl capitalize custom-text-gradient"
                            >Tìm hiểu thêm</span
                          ><span
                            ><svg
                              width="42"
                              height="26"
                              viewBox="0 0 42 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g filter="url(#filter0_d_15987_32778)">
                                <path
                                  d="M31.1582 13L26.1582 10.1132V15.8868L31.1582 13ZM10.1582 13.5L26.6582 13.5V12.5L10.1582 12.5V13.5Z"
                                  fill="url(#paint0_radial_15987_32778)"
                                ></path>
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_15987_32778"
                                  x="0.158203"
                                  y="0.113281"
                                  width="41"
                                  height="25.7734"
                                  filterUnits="userSpaceOnUse"
                                  color-interpolation-filters="sRGB"
                                >
                                  <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feGaussianBlur
                                    stdDeviation="5"
                                  ></feGaussianBlur>
                                  <feComposite
                                    in2="hardAlpha"
                                    operator="out"
                                  ></feComposite>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 0.5 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_15987_32778"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_15987_32778"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <radialGradient
                                  id="paint0_radial_15987_32778"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(22.0589 13.2846) rotate(4.11485) scale(8.46888 1.90236)"
                                >
                                  <stop
                                    offset="0.00502064"
                                    stop-color="white"
                                  ></stop>
                                  <stop
                                    offset="0.775"
                                    stop-color="#DBCEA0"
                                  ></stop>
                                  <stop
                                    offset="0.98"
                                    stop-color="#C9BE97"
                                  ></stop>
                                </radialGradient>
                              </defs></svg
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xl:block hidden">
                  <div class="col-start-1 row-start-6">
                    <div
                      :class="{ active: activeChucnang === 'tuychinhmatbang' }"
                      @click="
                        selectChucnang('tuychinhmatbang', Tuychinhmatbang)
                      "
                      class="overplayitem flex items-center gap-8 flex-wrap xl:flex-nowrap"
                    >
                      <div
                        class="overplay-item before:rounded-full cursor-pointer"
                      >
                        <div
                          class="rounded-full border-[#c8bd96] w-fit border p-7 drop-shadow-2xl max-w-[100px]"
                        >
                          <img width="100%" src="../assets/floor.svg" alt="" />
                        </div>
                      </div>
                      <div
                        class="item-description overplay-item cursor-pointer p-10px"
                      >
                        <div class="pl-10px">
                          <div
                            class="text-[#c9be97] uppercase xl:text-[16px] text-[14px] font-bold"
                          >
                            tùy chỉnh mặt bằng
                          </div>
                          <div
                            class="max-w-[360px] mt-1 line-clamp-1 text-white"
                          >
                            Tính năng CUSTOM FLOOR PLAN cho phép doanh nghiệp tự
                            thiết kế mặt bằng cửa hàng một cách linh hoạt.
                          </div>
                        </div>
                        <div class="flex items-center gap-2 justify-end">
                          <span
                            class="font-bold text-[14px] bg-clip-text text-transparent learn-text drop-shadow-2xl capitalize custom-text-gradient"
                            >Tìm hiểu thêm</span
                          ><span
                            ><svg
                              width="42"
                              height="26"
                              viewBox="0 0 42 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g filter="url(#filter0_d_15987_32778)">
                                <path
                                  d="M31.1582 13L26.1582 10.1132V15.8868L31.1582 13ZM10.1582 13.5L26.6582 13.5V12.5L10.1582 12.5V13.5Z"
                                  fill="url(#paint0_radial_15987_32778)"
                                ></path>
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_15987_32778"
                                  x="0.158203"
                                  y="0.113281"
                                  width="41"
                                  height="25.7734"
                                  filterUnits="userSpaceOnUse"
                                  color-interpolation-filters="sRGB"
                                >
                                  <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feGaussianBlur
                                    stdDeviation="5"
                                  ></feGaussianBlur>
                                  <feComposite
                                    in2="hardAlpha"
                                    operator="out"
                                  ></feComposite>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 0.5 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_15987_32778"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_15987_32778"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <radialGradient
                                  id="paint0_radial_15987_32778"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(22.0589 13.2846) rotate(4.11485) scale(8.46888 1.90236)"
                                >
                                  <stop
                                    offset="0.00502064"
                                    stop-color="white"
                                  ></stop>
                                  <stop
                                    offset="0.775"
                                    stop-color="#DBCEA0"
                                  ></stop>
                                  <stop
                                    offset="0.98"
                                    stop-color="#C9BE97"
                                  ></stop>
                                </radialGradient>
                              </defs></svg
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xl:block hidden">
                  <div class="col-start-1 row-start-7">
                    <div
                      :class="{ active: activeChucnang === 'tuychinhmenu' }"
                      @click="selectChucnang('tuychinhmenu', Tuychinhmenu)"
                      class="overplayitem flex items-center gap-8 flex-wrap xl:flex-nowrap"
                    >
                      <div
                        class="overplay-item before:rounded-full cursor-pointer"
                      >
                        <div
                          class="rounded-full border-[#c8bd96] w-fit border p-7 drop-shadow-2xl max-w-[100px]"
                        >
                          <img width="100%" src="../assets/menu.svg" alt="" />
                        </div>
                      </div>
                      <div
                        class="item-description overplay-item cursor-pointer p-10px"
                      >
                        <div class="pl-10px">
                          <div
                            class="text-[#c9be97] uppercase xl:text-[16px] text-[14px] font-bold"
                          >
                            tùy chỉnh menu
                          </div>
                          <div
                            class="max-w-[360px] mt-1 line-clamp-1 text-white"
                          >
                            Tính năng MENU CUSTOMIZE hỗ trợ doanh nghiệp dễ dàng
                            tùy chỉnh danh sách sản phẩm
                          </div>
                        </div>
                        <div class="flex items-center gap-2 justify-end">
                          <span
                            class="font-bold text-[14px] bg-clip-text text-transparent learn-text drop-shadow-2xl capitalize custom-text-gradient"
                            >Tìm hiểu thêm</span
                          ><span
                            ><svg
                              width="42"
                              height="26"
                              viewBox="0 0 42 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g filter="url(#filter0_d_15987_32778)">
                                <path
                                  d="M31.1582 13L26.1582 10.1132V15.8868L31.1582 13ZM10.1582 13.5L26.6582 13.5V12.5L10.1582 12.5V13.5Z"
                                  fill="url(#paint0_radial_15987_32778)"
                                ></path>
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_15987_32778"
                                  x="0.158203"
                                  y="0.113281"
                                  width="41"
                                  height="25.7734"
                                  filterUnits="userSpaceOnUse"
                                  color-interpolation-filters="sRGB"
                                >
                                  <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feGaussianBlur
                                    stdDeviation="5"
                                  ></feGaussianBlur>
                                  <feComposite
                                    in2="hardAlpha"
                                    operator="out"
                                  ></feComposite>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 0.5 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_15987_32778"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_15987_32778"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <radialGradient
                                  id="paint0_radial_15987_32778"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(22.0589 13.2846) rotate(4.11485) scale(8.46888 1.90236)"
                                >
                                  <stop
                                    offset="0.00502064"
                                    stop-color="white"
                                  ></stop>
                                  <stop
                                    offset="0.775"
                                    stop-color="#DBCEA0"
                                  ></stop>
                                  <stop
                                    offset="0.98"
                                    stop-color="#C9BE97"
                                  ></stop>
                                </radialGradient>
                              </defs></svg
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:!block !hidden !mx-[40px] self-stretch">
                <div
                  style="
                    width: 1px;
                    height: 100%;
                    background: radial-gradient(
                      8.22% 183.39% at 56.67% 28.46%,
                      #fff 0.5%,
                      #dbcea0 77.5%,
                      #c9be97 98%
                    );
                  "
                ></div>
              </div>
            </div>
            <div class="xl:hidden block">
              <div
                class="swiper swiper-initialized swiper-horizontal !ps-4 !py-3"
              >
                <div
                  class="swiper-wrapper"
                  style="transition-duration: 0ms; transition-delay: 0ms"
                >
                  <div class="swiper-slide">
                    <div
                      class="rounded-full border-[#c8bd96] w-fit border p-5 drop-shadow-2xl shadow-[0_0px_13px_10px_#ffd25f3d]"
                    >
                      <img width="100%" src="../assets/report.svg" alt="" />
                    </div>
                    <!---->
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="rounded-full border-[#c8bd96] w-fit border p-5 drop-shadow-2xl"
                    >
                      <img width="100%" src="../assets/payment.svg" alt="" />
                    </div>
                    <!---->
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="rounded-full border-[#c8bd96] w-fit border p-5 drop-shadow-2xl"
                    >
                      <img width="100%" src="../assets/mode.svg" alt="" />
                    </div>
                    <!---->
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="rounded-full border-[#c8bd96] w-fit border p-5 drop-shadow-2xl"
                    >
                      <img width="100%" src="../assets/pos.svg" alt="" />
                    </div>
                    <!---->
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="rounded-full border-[#c8bd96] w-fit border p-5 drop-shadow-2xl"
                    >
                      <img width="100%" src="../assets/staff.svg" alt="" />
                    </div>
                    <!---->
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="rounded-full border-[#c8bd96] w-fit border p-5 drop-shadow-2xl"
                    >
                      <img width="100%" src="../assets/floor.svg" alt="" />
                    </div>
                    <!---->
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="rounded-full border-[#c8bd96] w-fit border p-5 drop-shadow-2xl"
                    >
                      <img width="100%" src="../assets/menu.svg" alt="" />
                    </div>
                    <!---->
                  </div>
                </div>
                <!----><!----><!---->
              </div>
              <div class="item-description mt-4">
                <div class="overplay">
                  <div
                    class="text-[#c9be97] uppercase xl:text-[16px] text-[14px] font-bold"
                  >
                    report
                  </div>
                  <div class="max-w-[360px] mt-1 min-h-[45px] text-[12px]">
                    <div class="line-clamp-1 text-white">
                      Hệ thống cung cấp khả năng tích hợp thông tin từ các giao
                      dịch đặt lịch
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2 justify-end see-lern">
                  <span
                    class="font-bold text-[14px] bg-clip-text text-transparent learn-text drop-shadow-2xl capitalize"
                    >Learn more</span
                  ><span
                    ><svg
                      width="41"
                      height="26"
                      viewBox="0 0 41 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_16272_22032)">
                        <path
                          d="M31 13L26 10.1132V15.8868L31 13ZM10 13.5L26.5 13.5V12.5L10 12.5V13.5Z"
                          fill="url(#paint0_radial_16272_22032)"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_16272_22032"
                          x="0"
                          y="0.113281"
                          width="41"
                          height="25.7734"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          ></feComposite>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 0.5 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_16272_22032"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_16272_22032"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <radialGradient
                          id="paint0_radial_16272_22032"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(21.9007 13.2846) rotate(4.11485) scale(8.46888 1.90236)"
                        >
                          <stop offset="0.00502064" stop-color="white"></stop>
                          <stop offset="0.775" stop-color="#DBCEA0"></stop>
                          <stop offset="0.98" stop-color="#C9BE97"></stop>
                        </radialGradient>
                      </defs></svg
                  ></span>
                </div>
              </div>
            </div>
            <div class="xl:m-0 mt-6 w-full">
              <component :is="currentComponentChucnang" />
            </div>
          </div>
        </div>
      </div>
      <!--chức năng mobile-->
      <div class="function-mb grid-gradient">
        <div class="container mx-auto xl:px-10 px-6 mt-10 py-6">
          <!-- Swiper icon hàng ngang -->
          <Swiper
            :modules="[Swiper]"
            :direction="'horizontal'"
            :slides-per-view="3"
            :space-between="60"
            class="!ps-4 !py-3"
            @swiper="setChucnangSwiper"
            @slideChange="onChucnangSlideChange"
          >
            <SwiperSlide
              v-for="(item, index) in chucnangList"
              :key="item.name"
              style="width: auto"
            >
              <div
                class="rounded-full border-[#c8bd96] w-fit border p-5 drop-shadow-2xl cursor-pointer"
                :class="{
                  'shadow-[0_0px_13px_10px_#ffd25f3d]':
                    activeChucnang === item.key,
                }"
                @click="selectChucnang(item.key, item.component)"
              >
                <img width="40" :src="item.icon" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>

          <!-- Description active -->
          <div class="item-description mt-4">
            <div class="text-[#c9be97] uppercase text-[14px] font-bold">
              {{ chucnangList.find((i) => i.key === activeChucnang)?.name }}
            </div>
            <div class="text-white text-[12px] line-clamp-1">
              {{ chucnangList.find((i) => i.key === activeChucnang)?.desc }}
            </div>
            <div class="flex items-center justify-end gap-2 mt-2">
              <span
                class="font-bold text-[13px] bg-clip-text text-transparent custom-text-gradient capitalize"
              >
                Learn More
              </span>
              <span>
                <svg
                  width="42"
                  height="26"
                  viewBox="0 0 42 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter_mb_arrow)">
                    <path
                      d="M31.1582 13L26.1582 10.1132V15.8868L31.1582 13ZM10.1582 13.5L26.6582 13.5V12.5L10.1582 12.5V13.5Z"
                      fill="url(#paint_mb_arrow)"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter_mb_arrow"
                      x="0.158203"
                      y="0.113281"
                      width="41"
                      height="25.7734"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 0.5 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_mb_arrow"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_mb_arrow"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <radialGradient
                      id="paint_mb_arrow"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(22.0589 13.2846) rotate(4.11485) scale(8.46888 1.90236)"
                    >
                      <stop offset="0.00502064" stop-color="white"></stop>
                      <stop offset="0.775" stop-color="#DBCEA0"></stop>
                      <stop offset="0.98" stop-color="#C9BE97"></stop>
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>

          <!-- Dynamic component -->
          <div class="mt-6 w-full">
            <component :is="currentComponentChucnang" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <Slidehome></Slidehome>
    </div>
    <Footer></Footer>
  </section>
</template>
<style>
@media (max-width: 768px) {
  .function-dsk {
    display: none;
  }
  .function-mb {
    display: block;
  }
  .item-description {
    position: relative;
    padding: 16px 20px;
    z-index: 0;
  }

  .item-description::after {
    content: "";
    position: absolute;
    inset: 0;
    background: url("../assets/bg-content.svg") no-repeat center center;
    background-size: 100% 100%;
    z-index: -1;
    margin-top: 40px;
    pointer-events: none;
  }
}
</style>
