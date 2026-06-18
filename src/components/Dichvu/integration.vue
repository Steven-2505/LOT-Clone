<script setup>
import Header from "../Header.vue";
import Footer from "../footer.vue";
import Headermb from "../Headermb.vue";
import { ref, onMounted } from "vue";
import { animate, stagger } from "animejs";
const selectedJob = ref(null);

onMounted(() => {
  animateSticker();
});
function animateSticker() {
  import("animejs").then(({ animate }) => {
    document.querySelectorAll(".sticker").forEach((el, i) => {
      const x = 40 + Math.random() * 40;
      const y = 40 + Math.random() * 40;
      const dir = i % 2 === 0 ? 1 : -1;

      animate(el, {
        translateX: [
          { to: 0, duration: 3000, easing: "inOutSine" },
          { to: dir * x, duration: 3000, easing: "inOutSine" },
          { to: 0, duration: 3000, easing: "inOutSine" },
        ],
        translateY: [
          { to: -y, duration: 3000, easing: "inOutSine" },
          { to: 0, duration: 3000, easing: "inOutSine" },
          { to: 0, duration: 3000, easing: "inOutSine" },
        ],
        loop: true,
        delay: i * 500,
      });
    });
  });
}
</script>
<template>
  <body
    data-aos-easing="ease"
    data-aos-duration="400"
    data-aos-delay="0"
    class="overlay-hiden"
  >
    <div id="app" data-v-app="">
      <div class="font-['Saira']" data-page="systemIntegration">
        <!---->
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
                class="w-full text-left p-3 ps-2 rounded bg-transparent border-0 flex items-center justify-between gap-3 active"
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
                  class="router-link-active router-link-exact-active service-item active"
                  aria-current="page"
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
                class="flex items-center"
                data-name="blogs"
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
        <div>
          <section
            data-v-e0dc8393=""
            class="min-h-screen bg-black text-white pb-10"
          >
            <div class="header-section">
              <Headermb></Headermb>
              <Header></Header>
            </div>
            <div data-v-e0dc8393="" class="container mx-auto px-0 md:px-10">
              <div
                data-v-5402c78a=""
                data-v-e0dc8393=""
                class="intro-service has-title-on-image"
              >
                <!---->
                <div
                  data-v-2c0a47ab=""
                  data-v-e0dc8393=""
                  class="sticker-container"
                >
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 28.19vw;
                      left: 18.88vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/cdn/sticker_3.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 61px;
                        height: 61px;
                        transform: translateX(1.8739px) translateY(-19.7069px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 20.82vw;
                      left: 21.76vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/cdn/sticker_4.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 47px;
                        height: 47px;
                        transform: translateX(-19.1858px) translateY(-10.5677px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 36.61vw;
                      left: 22.07vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/cdn/sticker_5.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 49px;
                        height: 49px;
                        transform: translateX(-1.4542px) translateY(-0.5235px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 36.09vw;
                      left: 76.31vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/cdn/sticker_4.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 63px;
                        height: 63px;
                        transform: translateX(0px) translateY(3.2627px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 21.13vw;
                      left: 76.62vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/cdn/sticker_3.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 54px;
                        height: 54px;
                        transform: translateX(0px) translateY(16.0461px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 28.19vw;
                      left: 78.24vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/cdn/sticker_5.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 49px;
                        height: 49px;
                        transform: translateX(0px) translateY(19.4138px);
                      "
                    />
                  </div>
                </div>
                <!----><!----><!----><!---->
                <div
                  data-v-5402c78a=""
                  class="intro-image-wrapper has-title-on-image"
                >
                  <div
                    data-v-5402c78a=""
                    class="top-text-wrapper top-text-on-image"
                  >
                    <img
                      data-v-5402c78a=""
                      src="../../assets/analyst/star.svg"
                      alt=""
                      class="star-icon"
                    />
                    <div data-v-5402c78a="" class="top-text-box">
                      <span data-v-5402c78a="" class="top-text"
                        >SYSTEM INTEGRATION</span
                      >
                    </div>
                    <img
                      data-v-5402c78a=""
                      src="../../assets/analyst/star.svg"
                      alt=""
                      class="star-icon"
                    />
                  </div>
                  <div data-v-5402c78a="" class="intro-title title-on-image">
                    Dịch vụ tích hợp hệ thống
                  </div>
                  <div data-v-5402c78a="" class="title-sub subtitle-on-image">
                    Kết nối liền mạch – Tối ưu vận hành – Nâng cao hiệu quả
                  </div>
                  <a
                    data-v-5402c78a=""
                    href="/contact"
                    class="experience-button button-on-image"
                    ><span data-v-5402c78a="" class="button-text"
                      >Trải nghiệm dịch vụ</span
                    ><img
                      data-v-5402c78a=""
                      src="../../assets/mailservice/title_section_1.svg"
                      alt=""
                      class="button-icon" /></a
                  ><img
                    data-v-5402c78a=""
                    src="../../assets/integration/system-integration.png"
                    alt="Dịch vụ tích hợp hệ thống"
                    class="intro-image"
                  />
                  <div data-v-e0dc8393="" class="bottom-cover-wrapper">
                    <img
                      data-v-e0dc8393=""
                      src="../../assets/mailservice/bg-cover-bottom-2.png"
                      alt=""
                      class="bottom-cover-image"
                    />
                  </div>
                </div>
                <div data-v-5402c78a="" class="container">
                  <div
                    data-v-3c53c0b0=""
                    data-v-5402c78a=""
                    class="service-stats-wrapper"
                  >
                    <img
                      src="../../assets/mailservice/line-dot.svg"
                      alt=""
                      class="stats-line-left"
                      data-v-3c53c0b0=""
                    />
                    <div class="stats-box" data-v-3c53c0b0="">
                      <div class="stat-item" data-v-3c53c0b0="">
                        <div class="stat-number" data-v-3c53c0b0="">20+</div>
                        <div class="stat-label" data-v-3c53c0b0="">
                          Năm kinh nghiệm
                        </div>
                      </div>
                      <div class="stat-divider" data-v-3c53c0b0=""></div>
                      <div class="stat-item" data-v-3c53c0b0="">
                        <div class="stat-number" data-v-3c53c0b0="">2,500+</div>
                        <div class="stat-label" data-v-3c53c0b0="">Dự án</div>
                      </div>
                      <div class="stat-divider" data-v-3c53c0b0=""></div>
                      <div class="stat-item" data-v-3c53c0b0="">
                        <div class="stat-number" data-v-3c53c0b0="">1,540K</div>
                        <div class="stat-label" data-v-3c53c0b0="">
                          Khách hàng
                        </div>
                      </div>
                      <div class="stat-divider" data-v-3c53c0b0=""></div>
                      <div class="stat-item" data-v-3c53c0b0="">
                        <div class="stat-number" data-v-3c53c0b0="">80+</div>
                        <div class="stat-label" data-v-3c53c0b0="">
                          certification
                        </div>
                      </div>
                    </div>
                    <img
                      src="../../assets/mailservice/line-dot.svg"
                      alt=""
                      class="stats-line-right"
                      data-v-3c53c0b0=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-v-e0dc8393=""
                class="introduction-section py-10 md:py-20"
              >
                <div class="intro-bg-overlay"></div>
                <div class="container mx-auto px-0 md:px-10">
                  <div class="flex flex-col gap-8 justify-center items-center">
                    <span class="intro-tag">SYSTEM INTEGRATION</span
                    ><span class="section-title">GIỚI THIỆU DỊCH VỤ</span
                    ><img
                      src="../../assets/mailservice/service_background_left.svg"
                      alt="left-bg"
                      class="left-bg-svg"
                      loading="lazy"
                    /><img
                      src="../../assets/mailservice/service_background_right.svg"
                      alt="right-bg"
                      class="right-bg-svg"
                      loading="lazy"
                    /><span class="intro-description text-center type-1"
                      >Trong thời đại số, doanh nghiệp thường sử dụng nhiều nền
                      tảng và hệ thống khác nhau như
                      <span class="highlight-text"
                        >ERP, CRM, Website, POS, ứng dụng di động…</span
                      >
                      Việc các hệ thống này hoạt động rời rạc gây ra lãng phí
                      thời gian, dữ liệu phân tán và khó quản lý.
                      <span class="highlight-text"
                        >Tích hợp hệ thống (System Integration)</span
                      >
                      là giải pháp kết nối các ứng dụng, phần mềm, và hạ tầng
                      CNTT của doanh nghiệp thành một hệ sinh thái đồng bộ, giúp
                      <span class="highlight-text"
                        >luồng dữ liệu thông suốt</span
                      >
                      và
                      <span class="highlight-text"
                        >tự động hóa quy trình.</span
                      ></span
                    ><!---->
                  </div>
                </div>
              </div>
              <div
                data-v-4cf61cd5=""
                data-v-e0dc8393=""
                class="benefit-section py-10 md:py-20"
              >
                <div data-v-4cf61cd5="" class="container mx-auto px-0 md:px-10">
                  <div
                    data-v-4cf61cd5=""
                    class="flex flex-col gap-8 justify-center items-center"
                  >
                    <span data-v-4cf61cd5="" class="section-title"
                      >LỢI ÍCH KHI SỬ DỤNG DỊCH VỤ</span
                    ><img
                      data-v-4cf61cd5=""
                      src="../../assets/mailservice/section_break_line.svg"
                      alt="divider"
                      class="divider"
                    />
                    <div
                      data-v-4cf61cd5=""
                      class="grid-wrapper mt-10 flex justify-center items-center wrap-gap grid-wrapper-large"
                    >
                      <div data-v-4cf61cd5="" class="grid-item">
                        <img
                          data-v-4cf61cd5=""
                          src="../../assets/integration/1.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TỐI ƯU HIỆU SUẤT Giảm thời gian xử lý và vận hành thủ
                          công
                        </div>
                        <img
                          data-v-4cf61cd5=""
                          class="bottom-svg"
                          src="../../assets/mailservice/benefit_section_1.svg"
                          alt="bottom"
                          loading="lazy"
                        />
                      </div>
                      <div data-v-4cf61cd5="" class="grid-item">
                        <img
                          data-v-4cf61cd5=""
                          src="../../assets/integration/2.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          DỮ LIỆU TẬP TRUNG Tất cả thông tin được đồng bộ và lưu
                          trữ tại một nơi.
                        </div>
                        <img
                          data-v-4cf61cd5=""
                          class="bottom-svg"
                          src="../../assets/mailservice/benefit_section_1.svg"
                          alt="bottom"
                          loading="lazy"
                        />
                      </div>
                      <div data-v-4cf61cd5="" class="grid-item">
                        <img
                          data-v-4cf61cd5=""
                          src="../../assets/integration/3.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TĂNG TÍNH BẢO MẬT Hệ thống kiểm soát truy cập và quản
                          lý quyền hạn rõ ràng.
                        </div>
                        <img
                          data-v-4cf61cd5=""
                          class="bottom-svg"
                          src="../../assets/mailservice/benefit_section_1.svg"
                          alt="bottom"
                          loading="lazy"
                        />
                      </div>
                      <div data-v-4cf61cd5="" class="grid-item">
                        <img
                          data-v-4cf61cd5=""
                          src="../../assets/integration/4.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          KHẢ NĂNG MỞ RỘNG Dễ dàng thêm mới module hoặc kết nối
                          với hệ thống khác.
                        </div>
                        <img
                          data-v-4cf61cd5=""
                          class="bottom-svg"
                          src="../../assets/mailservice/benefit_section_1.svg"
                          alt="bottom"
                          loading="lazy"
                        />
                      </div>
                      <div data-v-4cf61cd5="" class="grid-item">
                        <img
                          data-v-4cf61cd5=""
                          src="../../assets/integration/5.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TIẾT KIỆM CHI PHÍ Giảm nhân sự vận hành và sai sót do
                          nhập liệu thủ công.
                        </div>
                        <img
                          data-v-4cf61cd5=""
                          class="bottom-svg"
                          src="../../assets/mailservice/benefit_section_1.svg"
                          alt="bottom"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-b1f94cc2="" data-v-e0dc8393="" class="pricing-section">
              <div data-v-b1f94cc2="" class="container mx-auto">
                <h2 data-v-b1f94cc2="" class="pricing-title">
                  Chức năng gói dịch vụ
                </h2>
                <div data-v-b1f94cc2="" class="line-break">
                  <img
                    data-v-b1f94cc2=""
                    src="../../assets/mailservice/section_break_line.svg"
                    alt=""
                  />
                </div>
                <div data-v-b1f94cc2="" class="pricing-subtitle"></div>
              </div>
              <div data-v-b1f94cc2="" class="pricing-base">
                <div data-v-b1f94cc2="" class="container mx-auto">
                  <div data-v-b1f94cc2="" class="pricing-grid">
                    <div data-v-b1f94cc2="" class="pricing-box">
                      <div data-v-b1f94cc2="" class="pricing-box-inner">
                        <div data-v-b1f94cc2="" class="best-deal-badge">
                          <!---->
                        </div>
                        <div data-v-b1f94cc2="" class="pricing-card">
                          <img
                            data-v-b1f94cc2=""
                            src="../../assets/mailservice/price_list_section_1.svg"
                            alt=""
                            class="plan-icon"
                            loading="lazy"
                          />
                          <h3 data-v-b1f94cc2="" class="plan-name">Cơ Bản</h3>
                          <div data-v-b1f94cc2="" class="plan-price">
                            <span data-v-b1f94cc2="" class="price-value"
                              >Liên hệ</span
                            ><span data-v-b1f94cc2="" class="price-slash"
                              >/</span
                            ><span data-v-b1f94cc2="" class="price-period"
                              >month</span
                            >
                          </div>
                          <div data-v-b1f94cc2="" class="plan-subtitle">
                            Doanh nghiệp nhỏ
                          </div>
                          <div data-v-b1f94cc2="" class="divider"></div>
                          <ul data-v-b1f94cc2="" class="features-list">
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Tích hợp dữ liệu giữa 2-3 hệ thống</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Kết nối API cơ bản</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Đồng bộ dữ liệu theo lịch trình</span
                              >
                            </li>
                          </ul>
                          <a
                            href="/contact"
                            data-v-b1f94cc2=""
                            class="cta-button-1"
                          >
                            Liên hệ
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-v-b1f94cc2="" class="pricing-box">
                      <div
                        data-v-b1f94cc2=""
                        class="pricing-box-inner has-best-deal"
                      >
                        <div data-v-b1f94cc2="" class="best-deal-badge">
                          <img
                            data-v-b1f94cc2=""
                            src="../../assets/mailservice/enter.svg"
                            alt=""
                          /><span data-v-b1f94cc2="">Best deal</span>
                        </div>
                        <div data-v-b1f94cc2="" class="pricing-card">
                          <img
                            data-v-b1f94cc2=""
                            src="../../assets/mailservice/price_list_section_3.svg"
                            alt=""
                            class="plan-icon"
                            loading="lazy"
                          />
                          <h3 data-v-b1f94cc2="" class="plan-name">Nâng Cao</h3>
                          <div data-v-b1f94cc2="" class="plan-price">
                            <span data-v-b1f94cc2="" class="price-value"
                              >Liên hệ</span
                            ><span data-v-b1f94cc2="" class="price-slash"
                              >/</span
                            ><span data-v-b1f94cc2="" class="price-period"
                              >month</span
                            >
                          </div>
                          <div data-v-b1f94cc2="" class="plan-subtitle">
                            Doanh nghiệp vừa
                          </div>
                          <div data-v-b1f94cc2="" class="divider"></div>
                          <ul data-v-b1f94cc2="" class="features-list">
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Tích hợp dữ liệu nhiều nguồn</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Đồng bộ thời gian thực (Real-time)</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Hỗ trợ đa nền tảng (ERP, CRM, Web, App)</span
                              >
                            </li>
                          </ul>
                          <a
                            href="/contact"
                            data-v-b1f94cc2=""
                            class="cta-button cta-button-1 cta-button-highlight"
                          >
                            Bắt đầu dùng thử miễn phí
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-v-b1f94cc2="" class="pricing-box">
                      <div data-v-b1f94cc2="" class="pricing-box-inner">
                        <div data-v-b1f94cc2="" class="best-deal-badge">
                          <!---->
                        </div>
                        <div data-v-b1f94cc2="" class="pricing-card">
                          <img
                            data-v-b1f94cc2=""
                            src="../../assets/mailservice/price_list_section_1.svg"
                            alt=""
                            class="plan-icon"
                            loading="lazy"
                          />
                          <h3 data-v-b1f94cc2="" class="plan-name">
                            Chuyên Nghiệp
                          </h3>
                          <div data-v-b1f94cc2="" class="plan-price">
                            <span data-v-b1f94cc2="" class="price-value"
                              >Liên hệ</span
                            ><span data-v-b1f94cc2="" class="price-slash"
                              >/</span
                            ><span data-v-b1f94cc2="" class="price-period"
                              >month</span
                            >
                          </div>
                          <div data-v-b1f94cc2="" class="plan-subtitle">
                            Doanh nghiệp lớn
                          </div>
                          <div data-v-b1f94cc2="" class="divider"></div>
                          <ul data-v-b1f94cc2="" class="features-list">
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Giải pháp tích hợp toàn diện</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Bảo mật nâng cao, mã hóa dữ liệu</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Tùy chỉnh và mở rộng không giới hạn</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Hỗ trợ kỹ thuật 24/7</span
                              >
                            </li>
                          </ul>
                          <a
                            href="/contact"
                            data-v-b1f94cc2=""
                            class="cta-button-1"
                          >
                            Liên hệ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-e0dc8393="" class="container mx-auto px-0 md:px-10">
              <div
                data-v-f1290138=""
                data-v-e0dc8393=""
                class="flex flex-col gap-8 justify-center items-center process-section py-10 md:py-20"
              >
                <span data-v-f1290138="" class="section-title"
                  >QUY TRÌNH TRIỂN KHAI</span
                >
                <div data-v-f1290138="" class="process-container mt-10 w-full">
                  <div
                    data-v-f1290138=""
                    class="hidden md:block process-stepper"
                  >
                    <div data-v-f1290138="" class="timeline-line"></div>
                    <div data-v-f1290138="" class="steps-wrapper">
                      <div data-v-f1290138="" class="step-item">
                        <img
                          data-v-f1290138=""
                          class="step-dot"
                          src="../../assets/mailservice/deploy_process_section_1.svg"
                          alt="Step Dot"
                          loading="lazy"
                        />
                        <div data-v-f1290138="" class="step-badge">Step 1</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Khảo sát &amp; phân tích
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Đánh giá hạ tầng và nhu cầu kết nối của doanh nghiệp
                          </p>
                        </div>
                      </div>
                      <div data-v-f1290138="" class="step-item">
                        <img
                          data-v-f1290138=""
                          class="step-dot"
                          src="../../assets/mailservice/deploy_process_section_1.svg"
                          alt="Step Dot"
                          loading="lazy"
                        />
                        <div data-v-f1290138="" class="step-badge">Step 2</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Thiết kế giải pháp
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Lựa chọn kiến trúc tích hợp (API, ESB, iPaaS...)
                          </p>
                        </div>
                      </div>
                      <div data-v-f1290138="" class="step-item">
                        <img
                          data-v-f1290138=""
                          class="step-dot"
                          src="../../assets/mailservice/deploy_process_section_1.svg"
                          alt="Step Dot"
                          loading="lazy"
                        />
                        <div data-v-f1290138="" class="step-badge">Step 3</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Triển khai &amp; kiểm thử
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Cấu hình, lập trình và kiểm thử kết nối.
                          </p>
                        </div>
                      </div>
                      <div data-v-f1290138="" class="step-item">
                        <img
                          data-v-f1290138=""
                          class="step-dot"
                          src="../../assets/mailservice/deploy_process_section_1.svg"
                          alt="Step Dot"
                          loading="lazy"
                        />
                        <div data-v-f1290138="" class="step-badge">Step 4</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Vận hành &amp; bảo trì
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Giám sát, cập nhật và hỗ trợ kỹ thuật định kỳ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-f1290138="" class="block md:hidden">
                    <div
                      data-v-f1290138=""
                      class="swiper swiper-initialized swiper-horizontal process-swiper process-stepper"
                    >
                      <div
                        class="swiper-wrapper"
                        style="transition-duration: 10000ms"
                      >
                        <div data-v-f1290138="" class="swiper-slide">
                          <div data-v-f1290138="" class="step-item">
                            <img
                              data-v-f1290138=""
                              class="step-dot"
                              src="../../assets/mailservice/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 1
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Khảo sát &amp; phân tích
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Đánh giá hạ tầng và nhu cầu kết nối của doanh
                                nghiệp
                              </p>
                            </div>
                          </div>
                          <!---->
                        </div>
                        <div data-v-f1290138="" class="swiper-slide">
                          <div data-v-f1290138="" class="step-item">
                            <img
                              data-v-f1290138=""
                              class="step-dot"
                              src="../../assets/mailservice/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 2
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Thiết kế giải pháp
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Lựa chọn kiến trúc tích hợp (API, ESB, iPaaS...)
                              </p>
                            </div>
                          </div>
                          <!---->
                        </div>
                        <div data-v-f1290138="" class="swiper-slide">
                          <div data-v-f1290138="" class="step-item">
                            <img
                              data-v-f1290138=""
                              class="step-dot"
                              src="../../assets/mailservice/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 3
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Triển khai &amp; kiểm thử
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Cấu hình, lập trình và kiểm thử kết nối.
                              </p>
                            </div>
                          </div>
                          <!---->
                        </div>
                        <div data-v-f1290138="" class="swiper-slide">
                          <div data-v-f1290138="" class="step-item">
                            <img
                              data-v-f1290138=""
                              class="step-dot"
                              src="../../assets/mailservice/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 4
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Vận hành &amp; bảo trì
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Giám sát, cập nhật và hỗ trợ kỹ thuật định kỳ
                              </p>
                            </div>
                          </div>
                          <!---->
                        </div>
                      </div>
                      <!----><!----><!---->
                      <div data-v-f1290138="" class="timeline-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </div>
    </div>

    <!---->
  </body>
</template>
<style>
.top-text-on-image[data-v-5402c78a] {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
}
[data-page="systemIntegration"] .bottom-cover-wrapper {
  position: absolute;
  left: 0;
  width: 100%;
  top: 50%;
  height: auto;
  z-index: 1;
}
[data-page="systemIntegration"] .bottom-cover-image {
  width: 100%;
  display: block;
}
</style>
