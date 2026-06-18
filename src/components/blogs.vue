<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { onMounted, onUnmounted, ref, shallowRef } from "vue";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Nexnow from "./blogs/nexnow.vue";
import Nghiduong from "./blogs/nghiduong.vue";
import Amthuc from "./blogs/amthuc.vue";
import Kinhdoanh from "./blogs/kinhdoanh.vue";
import Noibat from "./blogs/noibat.vue";
import All from "./blogs/all.vue";
import Headermb from "./Headermb.vue";
let swiperInstance = null;

onMounted(() => {
  swiperInstance = new Swiper(".my-swiper", {
    modules: [Navigation],
    slidesPerView: 3.2,
    spaceBetween: 0,
    speed: 1200,
    navigation: {
      nextEl: ".next-arrow",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    },
  });
});

onUnmounted(() => {
  if (swiperInstance) swiperInstance.destroy();
});

const activeBlogs = ref("all");
const currentComponentBlogs = shallowRef(All);

function selectBlogs(name, component) {
  activeBlogs.value = name;
  currentComponentBlogs.value = component;
}
</script>
<template>
  <body
    data-aos-easing="ease"
    data-aos-duration="400"
    data-aos-delay="0"
    class="overlay-hiden bg-black"
  >
    <div id="app" data-v-app="">
      <div class="font-['Saira']" data-page="blogs">
        <section
          data-v-20b9afde=""
          class="translate-x-[100%] bg-[#1b1b1b] fixed top-0 right-0 h-screen z-[99999] transition overflow-y-auto mobile-nav"
        >
          <div data-v-20b9afde="" class="w-fit ms-auto me-4 mt-2">
            <svg
              data-v-20b9afde=""
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                data-v-20b9afde=""
                fill="white"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              ></path>
            </svg>
          </div>
          <div data-v-20b9afde="">
            <div
              data-v-20b9afde=""
              class="flex text-white flex-col text-start px-3 pt-4 navbar"
            >
              <a
                data-v-20b9afde=""
                href="/about-us"
                class="flex items-center"
                data-name="about"
                >Về LOT</a
              ><a
                data-v-20b9afde=""
                href="/environment"
                class="flex items-center"
                data-name="environment"
                >Hệ sinh thái LOT</a
              ><button
                data-v-20b9afde=""
                class="w-full text-left p-3 ps-2 rounded bg-transparent border-0 flex items-center justify-between gap-3"
              >
                Dịch vụ
                <svg
                  data-v-20b9afde=""
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="-mr-1 size-5 text-gray-400 transition-transform duration-300"
                >
                  <path
                    data-v-20b9afde=""
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                data-v-20b9afde=""
                class="pl-10 transition-all duration-200"
                style="display: none"
              ></div>
              <div
                data-v-20b9afde=""
                class="pl-3 mt-1 flex flex-col gap-1"
                style="display: none"
              >
                <a
                  data-v-20b9afde=""
                  href="/services/email-server"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">Quản trị email server</div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/system-analysis"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Phân tích, thiết kế hệ thống
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/cdn-infrastructure"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Hạ tầng dịch vụ mạng lưới phân phối dữ liệu (CDN)
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/international-datacenter"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Hạ tầng dịch vụ datacenter quốc tế
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/smart-alert-ai"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Hệ thống cảnh báo thông minh, ứng dụng công nghệ AI
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/domestic-datacenter"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Hạ tầng dịch vụ datacenter nội địa
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/data-collection"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Giải pháp thu thập dữ liệu phục vụ xây dựng cơ sở dữ liệu
                      số
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/system-integration"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ tích hợp hệ thống
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/wireframe-design"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ thiết kế wireframe / mockup / prototype chuyên
                      nghiệp
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/ios-development"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ phát triển ứng dụng dành cho IOS
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/android-development"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ phát triển ứng dụng dành cho Android
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/cloud-platform"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ nền tảng điện toán đám mây (CLOUD)
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/technical-support"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ hỗ trợ kỹ thuật
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/cloud-computing"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ điện toán đám mây
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/services/website-maintenance"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ chăm sóc website chuyên nghiệp
                    </div>
                  </div></a
                >
              </div>
              <a
                data-v-20b9afde=""
                href="/recruitment"
                class="flex items-center"
                data-name="recruitment"
                >Tuyển dụng</a
              ><a
                data-v-20b9afde=""
                href="/blogs"
                class="router-link-active router-link-exact-active flex items-center active"
                data-name="blogs"
                aria-current="page"
                >Tin tức</a
              ><a
                data-v-20b9afde=""
                href="/contact"
                class="flex items-center"
                data-name="contact"
                >Liên hệ</a
              >
            </div>
          </div>
        </section>
        <div class="header-section">
          <Header></Header>
          <Headermb></Headermb>
        </div>

        <div>
          <div
            class="flex justify-center item-center"
            :style="{
              backgroundImage: 'url(../assets/background-shadow.svg)',
              backgroundPosition: 'center center',
            }"
          >
            <div class="container">
              <div
                class="w-full bg-cover bg-no-repeat bg-bottom relative flex align-center justify-center"
              >
                <div
                  class="absolute"
                  style="
                    background-image: url(&quot;../assets/bannerblog.svg&quot;);
                    width: 100%;
                    aspect-ratio: 620 / 340;
                    background-position: center top;
                    z-index: -1;
                    background-size: cover;
                    background-repeat: no-repeat;
                  "
                ></div>
                <div class="container">
                  <div
                    class="relative text-4xl font-bold my-5 text-center"
                    style="margin-top: 100px"
                  >
                    <h1
                      class="intro-title uppercase text-[54px] mb-5 leading-normal"
                    >
                      Tin tức
                    </h1>
                  </div>
                  <div
                    class="swiper my-swiper swiper-horizontal relative scroll-custom swiper-backface-hidden"
                  >
                    <div
                      class="swiper-wrapper"
                      style="transform: translate3d(0px, 0px, 0px)"
                    >
                      <div
                        class="swiper-slide swiper-slide-active"
                        style="width: 256px"
                      >
                        <div
                          :class="{ active: activeBlogs === 'all' }"
                          @click="selectBlogs('all', All)"
                          class="inline-block cursor-pointer w-full text-nowrap text-center relative mb-[30px]"
                        >
                          All
                        </div>
                        <!---->
                      </div>
                      <div
                        class="swiper-slide swiper-slide-next"
                        style="width: 256px"
                      >
                        <div
                          :class="{ active: activeBlogs === 'nexnow' }"
                          @click="selectBlogs('nexnow', Nexnow)"
                          class="inline-block cursor-pointer w-full text-nowrap text-center relative mb-[30px]"
                        >
                          NEX NOW
                        </div>
                        <!---->
                      </div>
                      <div class="swiper-slide" style="width: 256px">
                        <div
                          :class="{ active: activeBlogs === 'nghiduong' }"
                          @click="selectBlogs('nghiduong', Nghiduong)"
                          class="inline-block cursor-pointer w-full text-nowrap text-center relative mb-[30px]"
                        >
                          Địa điểm nghỉ dưỡng
                        </div>
                        <!---->
                      </div>
                      <div class="swiper-slide" style="width: 256px">
                        <div
                          :class="{ active: activeBlogs === 'amthuc' }"
                          @click="selectBlogs('amthuc', Amthuc)"
                          class="inline-block cursor-pointer w-full text-nowrap text-center relative mb-[30px]"
                        >
                          Ẩm thực trải nghiệm
                        </div>
                        <!---->
                      </div>
                      <div class="swiper-slide" style="width: 256px">
                        <div
                          :class="{ active: activeBlogs === 'kinhdoanh' }"
                          @click="selectBlogs('kinhdoanh', Kinhdoanh)"
                          class="inline-block cursor-pointer w-full text-nowrap text-center relative mb-[30px]"
                        >
                          Kinh doanh F&amp;B
                        </div>
                        <!---->
                      </div>
                      <div class="swiper-slide" style="width: 256px">
                        <div
                          :class="{ active: activeBlogs === 'noibat' }"
                          @click="selectBlogs('noibat', Noibat)"
                          class="inline-block cursor-pointer w-full text-nowrap text-center relative mb-[30px]"
                        >
                          Tin tức nổi bật
                        </div>
                        <!---->
                      </div>
                    </div>
                    <!----><!----><!---->
                  </div>
                  <div>
                    <component
                      :is="currentComponentBlogs"
                      name="blur-fade"
                      mode="out-in"
                    />
                  </div>
                </div>
              </div>
              <div
                class="more flex flex-col justify-center w-full align-center my-5"
              >
                <h3 class="m-auto mb-2" style="margin-bottom: 1rem !important">
                  Cuộn xuống để xem thêm
                </h3>
                <img
                  width="30px"
                  class="m-auto"
                  src="../assets/icon-double-arrowdown.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="max-md:text-center"><Footer></Footer></div>
      </div>
    </div>

    <!---->
  </body>
</template>
<style>
.font-bold {
  font-weight: 700px;
}
</style>
