<script setup>
import Header from "../Header.vue";
import Footer from "../footer.vue";
import { ref, onMounted } from "vue";
import { animate, stagger } from "animejs";
import wireframe1 from "../../assets/design/wireframe-commitment-1.png";
import wireframe2 from "../../assets/design/wireframe-commitment-2.png";
import wireframe3 from "../../assets/design/wireframe-commitment-3.png";
import wireframe4 from "../../assets/design/wireframe-commitment-4.png";
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
  <body data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
    <div id="app" data-v-app="">
      <div class="font-['Saira']" data-page="wireframeDesign">
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
                href="/vi/about-us"
                class="flex items-center"
                data-name="about"
                >Về LOT</a
              ><a
                data-v-20b9afde=""
                href="/vi/environment"
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
                  href="/vi/services/email-server"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">Quản trị email server</div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/system-analysis"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Phân tích, thiết kế hệ thống
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/cdn-infrastructure"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Hạ tầng dịch vụ mạng lưới phân phối dữ liệu (CDN)
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/international-datacenter"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Hạ tầng dịch vụ datacenter quốc tế
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/smart-alert-ai"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Hệ thống cảnh báo thông minh, ứng dụng công nghệ AI
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/domestic-datacenter"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Hạ tầng dịch vụ datacenter nội địa
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/data-collection"
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
                  href="/vi/services/system-integration"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ tích hợp hệ thống
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/wireframe-design"
                  class="router-link-active router-link-exact-active service-item active"
                  aria-current="page"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ thiết kế wireframe / mockup / prototype chuyên
                      nghiệp
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/ios-development"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ phát triển ứng dụng dành cho IOS
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/android-development"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ phát triển ứng dụng dành cho Android
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/cloud-platform"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ nền tảng điện toán đám mây (CLOUD)
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/technical-support"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ hỗ trợ kỹ thuật
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/cloud-computing"
                  class="service-item"
                  style="padding: 8px !important"
                  ><div data-v-20b9afde="" class="service-text">
                    <div data-v-20b9afde="" class="">
                      Dịch vụ điện toán đám mây
                    </div>
                  </div></a
                ><a
                  data-v-20b9afde=""
                  href="/vi/services/website-maintenance"
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
                href="/vi/recruitment"
                class="flex items-center"
                data-name="recruitment"
                >Tuyển dụng</a
              ><a
                data-v-20b9afde=""
                href="/vi/blogs"
                class="flex items-center"
                data-name="blogs"
                >Tin tức</a
              ><a
                data-v-20b9afde=""
                href="/vi/contact"
                class="flex items-center"
                data-name="contact"
                >Liên hệ</a
              >
            </div>
          </div>
        </section>
        <div>
          <section
            data-v-f7e9f39d=""
            class="min-h-screen bg-black text-white pb-10"
          >
            <div class="header-section">
              <Header></Header>
            </div>
            <div data-v-f7e9f39d="" class="container mx-auto px-0 md:px-10">
              <div data-v-5402c78a="" data-v-f7e9f39d="" class="intro-service">
                <!---->
                <div
                  data-v-2c0a47ab=""
                  data-v-f7e9f39d=""
                  class="sticker-container"
                >
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 28.19vw;
                      left: 15.69vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/stickers/sticker_13.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 61px;
                        height: 61px;
                        transform: translateX(0px) translateY(0.0314px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 20.82vw;
                      left: 19.14vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/stickers/sticker_14.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 47px;
                        height: 47px;
                        transform: translateX(0px) translateY(7.3274px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 36.24vw;
                      left: 18.51vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/stickers/sticker_5.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 49px;
                        height: 49px;
                        transform: translateX(0px) translateY(18.8166px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 20.71vw;
                      left: 76.83vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/stickers/sticker_15.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 54px;
                        height: 54px;
                        transform: translateX(0.0871px) translateY(15.8413px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 36.03vw;
                      left: 77.41vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/stickers/sticker_16.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 63px;
                        height: 63px;
                        transform: translateX(16.7282px) translateY(-8.9531px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 28.19vw;
                      left: 79.44vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/stickers/sticker_5.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 49px;
                        height: 49px;
                        transform: translateX(8.4074px) translateY(-19.9677px);
                      "
                    />
                  </div>
                </div>
                <div data-v-5402c78a="" class="top-text-wrapper">
                  <img
                    data-v-5402c78a=""
                    src="../../assets/mailservice/star.svg"
                    alt=""
                    class="star-icon"
                  />
                  <div data-v-5402c78a="" class="top-text-box">
                    <span data-v-5402c78a="" class="top-text"
                      >WIREFRAME / MOCK-UP / PROTOTYPE</span
                    >
                  </div>
                  <img
                    data-v-5402c78a=""
                    src="../../assets/mailservice/star.svg"
                    alt=""
                    class="star-icon"
                  />
                </div>
                <div data-v-5402c78a="" class="intro-title">
                  Dịch vụ thiết kế wireframe / mockup / prototype chuyên nghiệp
                </div>
                <!----><a
                  data-v-5402c78a=""
                  href="/vi/contact"
                  class="experience-button"
                  ><span data-v-5402c78a="" class="button-text"
                    >Trải nghiệm dịch vụ</span
                  ><img
                    data-v-5402c78a=""
                    src="../../assets/mailservice/title_section_1.svg"
                    alt=""
                    class="button-icon"
                /></a>
                <div data-v-5402c78a="" class="intro-image-wrapper">
                  <!----><!----><!----><!----><img
                    data-v-5402c78a=""
                    src="../../assets/design/wireframe-design.png"
                    alt="Dịch vụ thiết kế wireframe / mockup / prototype chuyên nghiệp"
                    class="intro-image w-full"
                  />
                  <div data-v-f7e9f39d="" class="bottom-cover-wrapper">
                    <img
                      data-v-f7e9f39d=""
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
                data-v-f7e9f39d=""
                class="introduction-section py-10 md:py-20"
              >
                <div class="intro-bg-overlay"></div>
                <div class="container mx-auto px-0 md:px-10">
                  <div class="flex flex-col gap-8 justify-center items-center">
                    <span class="intro-tag"
                      >WIREFRAME / MOCK-UP / PROTOTYPE</span
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
                      >Chúng tôi sử dụng các công cụ hiện đại như
                      <span class="highlight-text"
                        >Figma, Adobe XD, Sketch, InVision</span
                      >
                      để tạo ra bản thiết kế trực quan, chuyên nghiệp và dễ dàng
                      chỉnh sửa theo yêu cầu. Từ
                      <span class="highlight-text"
                        >wireframe đơn giản đến prototype tương tác</span
                      >
                      đầy đủ, chúng tôi giúp bạn hình dung rõ ràng sản phẩm
                      trước khi phát triển, tiết kiệm thời gian và chi
                      phí.</span
                    ><!---->
                  </div>
                </div>
              </div>
              <div
                data-v-4cf61cd5=""
                data-v-f7e9f39d=""
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
                      class="line-break"
                    />
                    <div
                      data-v-4cf61cd5=""
                      class="grid-wrapper mt-10 flex justify-center items-center wrap-gap"
                    >
                      <div data-v-4cf61cd5="" class="grid-item">
                        <img
                          data-v-4cf61cd5=""
                          src="../../assets/design/1.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TIẾT KIỆM CHI PHÍ PHÁT TRIỂN Giảm rủi ro chỉnh sửa tốn
                          kém sau khi lập trình.
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
                          src="../../assets/design/2.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          RÚT NGẮN THỜI GIAN TRIỂN KHAI Định hình rõ luồng chức
                          năng và bố cục ngay từ đầu.
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
                          src="../../assets/design/3.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TỐI ƯU TRẢI NGHIỆM NGƯỜI DÙNG (UX) Dễ dàng thử nghiệm
                          và cải thiện trước khi ra mắt
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
                          src="../../assets/design/4.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TĂNG KHẢ NĂNG THUYẾT PHỤC NHÀ ĐẦU TƯ/KHÁCH HÀNG Có bản
                          mẫu trực quan để trình bày.
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
            <div data-v-b1f94cc2="" data-v-f7e9f39d="" class="pricing-section">
              <div data-v-b1f94cc2="" class="container mx-auto">
                <h2 data-v-b1f94cc2="" class="pricing-title">
                  Bảng giá tham khảo
                </h2>
                <div data-v-b1f94cc2="" class="line-break">
                  <img
                    data-v-b1f94cc2=""
                    src="../../assets/mailservice/section_break_line.svg"
                    alt=""
                  />
                </div>
                <div data-v-b1f94cc2="" class="pricing-subtitle">
                  Gói trọn bộ dự án website/app:
                  <span style="color: rgba(235, 197, 123, 1)"
                    >Từ 3.000.000 – 15.000.000 VNĐ</span
                  >
                  (tuỳ quy mô và số lượng trang)
                </div>
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
                          <h3 data-v-b1f94cc2="" class="plan-name">
                            Wireframe
                          </h3>
                          <div data-v-b1f94cc2="" class="plan-price">
                            <span data-v-b1f94cc2="" class="price-value"
                              >300.000 – 800.000</span
                            ><!---->
                          </div>
                          <div data-v-b1f94cc2="" class="plan-subtitle">
                            Phác thảo bố cục &amp; chức năng
                          </div>
                          <div data-v-b1f94cc2="" class="divider"></div>
                          <ul data-v-b1f94cc2="" class="features-list"></ul>
                          <button data-v-b1f94cc2="" class="cta-button">
                            Bắt đầu
                          </button>
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
                          <h3 data-v-b1f94cc2="" class="plan-name">Mock-up</h3>
                          <div data-v-b1f94cc2="" class="plan-price">
                            <span data-v-b1f94cc2="" class="price-value"
                              >500.000 – 1.200.000</span
                            ><!---->
                          </div>
                          <div data-v-b1f94cc2="" class="plan-subtitle">
                            Giao diện hoàn thiện (UI)
                          </div>
                          <div data-v-b1f94cc2="" class="divider"></div>
                          <ul data-v-b1f94cc2="" class="features-list"></ul>
                          <button
                            data-v-b1f94cc2=""
                            class="cta-button cta-button-highlight"
                          >
                            Bắt đầu dùng thử miễn phí
                          </button>
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
                            Prototype
                          </h3>
                          <div data-v-b1f94cc2="" class="plan-price">
                            <span data-v-b1f94cc2="" class="price-value"
                              >500.000 – 1.500.000</span
                            ><!---->
                          </div>
                          <div data-v-b1f94cc2="" class="plan-subtitle">
                            Bản mẫu tương tác
                          </div>
                          <div data-v-b1f94cc2="" class="divider"></div>
                          <ul data-v-b1f94cc2="" class="features-list"></ul>
                          <button data-v-b1f94cc2="" class="cta-button">
                            Bắt đầu
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-f7e9f39d="" class="container mx-auto px-0 md:px-10">
              <div
                data-v-63260224=""
                data-v-f7e9f39d=""
                class="flex flex-col gap-8 justify-center items-center implement-time-section py-10 md:py-20"
              >
                <span data-v-63260224="" class="section-title"
                  >THỜI GIAN TRIỂN KHAI</span
                >
                <div
                  data-v-63260224=""
                  class="grid-wrapper mt-2 flex justify-center items-center wrap-gap"
                >
                  <div data-v-63260224="" class="grid-item overlay-hiden">
                    <img
                      data-v-63260224=""
                      class="item-bg-image"
                      src="../../assets/design/calendar.svg"
                      alt="Project Image"
                    /><span data-v-63260224="" class="label"
                      ><span data-v-63260224="" class="highlight-label"
                        >Dự án nhỏ</span
                      >(5-10 trang)</span
                    ><span data-v-63260224="" class="time"
                      >5-7 ngày làm việc</span
                    >
                  </div>
                  <div data-v-63260224="" class="grid-item overlay-hiden">
                    <img
                      data-v-63260224=""
                      class="item-bg-image"
                      src="../../assets/design/calendar.svg"
                      alt="Project Image"
                    /><span data-v-63260224="" class="label"
                      ><span data-v-63260224="" class="highlight-label"
                        >Dự án vừa</span
                      >(10-20 trang)</span
                    ><span data-v-63260224="" class="time"
                      >10-15 ngày làm việc</span
                    >
                  </div>
                  <div data-v-63260224="" class="grid-item overlay-hiden">
                    <img
                      data-v-63260224=""
                      class="item-bg-image"
                      src="../../assets/design/calendar.svg"
                      alt="Project Image"
                    /><span data-v-63260224="" class="label"
                      ><span data-v-63260224="" class="highlight-label"
                        >Dự án lớn</span
                      >(&gt;20 trang)</span
                    ><span data-v-63260224="" class="time"
                      >15-25 ngày làm việc</span
                    >
                  </div>
                </div>
              </div>
              <div
                data-v-f1290138=""
                data-v-f7e9f39d=""
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
                            Tiếp nhận yêu cầu &amp; tư vấn
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Xác định yêu cầu về tài nguyên, bảng thống và bảo
                            mật.
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
                            Thiết kế Wireframe
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Bố cục và luồng chức năng (2-5 ngày)
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
                            Thiết kế Mock-up
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Hoàn thiện giao diện với màu sắc, font, hình ảnh
                            (3-7 ngày)
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
                            Tạo Prototype
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Bản mẫu tương tác để mô phỏng trải nghiệm (2-5 ngày)
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
                        <div data-v-f1290138="" class="step-badge">Step 5</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Bàn giao &amp; chỉnh sửa
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            theo phản hồi khách hàng (1-3 ngày)
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
                                Tiếp nhận yêu cầu &amp; tư vấn
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Xác định yêu cầu về tài nguyên, bảng thống và
                                bảo mật.
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
                                Thiết kế Wireframe
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Bố cục và luồng chức năng (2-5 ngày)
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
                                Thiết kế Mock-up
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Hoàn thiện giao diện với màu sắc, font, hình ảnh
                                (3-7 ngày)
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
                                Tạo Prototype
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Bản mẫu tương tác để mô phỏng trải nghiệm (2-5
                                ngày)
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
                              Step 5
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Bàn giao &amp; chỉnh sửa
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                theo phản hồi khách hàng (1-3 ngày)
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
              <div
                data-v-c460166a=""
                data-v-f7e9f39d=""
                class="flex flex-col gap-8 justify-center items-center commitment-section wrap-gap py-10 md:py-20"
              >
                <span data-v-c460166a="" class="section-title"
                  >CAM KẾT CỦA CHÚNG TÔI</span
                >
                <div
                  data-v-c460166a=""
                  class="commitment-container mt-2 w-full"
                >
                  <div
                    data-v-c460166a=""
                    class="hidden md:flex grid-wrapper justify-center items-center"
                  >
                    <div
                      data-v-c460166a=""
                      class="grid-item big-screen"
                      :style="{ backgroundImage: `url(${wireframe1})` }"
                    >
                      <span data-v-c460166a="" class="text"
                        >Thiết kế chuẩn UX/UI và đúng yêu cầu.</span
                      >
                    </div>
                    <div
                      data-v-c460166a=""
                      class="grid-item big-screen"
                      :style="{ backgroundImage: `url(${wireframe2})` }"
                    >
                      <span data-v-c460166a="" class="text"
                        >File gốc đầy đủ (Figma / Adobe XD) để dễ dàng chỉnh
                        sửa.</span
                      >
                    </div>
                    <div
                      data-v-c460166a=""
                      class="grid-item big-screen"
                      :style="{ backgroundImage: `url(${wireframe3})` }"
                    >
                      <span data-v-c460166a="" class="text"
                        >Hỗ trợ chỉnh sửa miễn phí 2 lần sau bàn giao.</span
                      >
                    </div>
                    <div
                      data-v-c460166a=""
                      class="grid-item big-screen"
                      :style="{ backgroundImage: `url(${wireframe4})` }"
                    >
                      <span data-v-c460166a="" class="text"
                        >Bảo mật tuyệt đối thông tin dự án</span
                      >
                    </div>
                  </div>
                  <div
                    data-v-c460166a=""
                    class="flex md:hidden grid-wrapper swiper-type"
                  >
                    <div
                      data-v-c460166a=""
                      class="swiper swiper-initialized swiper-horizontal commitment-swiper"
                    >
                      <div
                        class="swiper-wrapper"
                        style="transition-duration: 0ms; transition-delay: 0ms"
                      >
                        <div data-v-c460166a="" class="swiper-slide">
                          <div
                            data-v-c460166a=""
                            class="grid-item"
                            :style="{ backgroundImage: `url(${wireframe1})` }"
                          >
                            <span data-v-c460166a="" class="text"
                              >Thiết kế chuẩn UX/UI và đúng yêu cầu.</span
                            >
                          </div>
                          <!---->
                        </div>
                        <div data-v-c460166a="" class="swiper-slide">
                          <div
                            data-v-c460166a=""
                            class="grid-item"
                            :style="{ backgroundImage: `url(${wireframe2})` }"
                          >
                            <span data-v-c460166a="" class="text"
                              >File gốc đầy đủ (Figma / Adobe XD) để dễ dàng
                              chỉnh sửa.</span
                            >
                          </div>
                          <!---->
                        </div>
                        <div data-v-c460166a="" class="swiper-slide">
                          <div
                            data-v-c460166a=""
                            class="grid-item"
                            :style="{ backgroundImage: `url(${wireframe3})` }"
                          >
                            <span data-v-c460166a="" class="text"
                              >Hỗ trợ chỉnh sửa miễn phí 2 lần sau bàn
                              giao.</span
                            >
                          </div>
                          <!---->
                        </div>
                        <div data-v-c460166a="" class="swiper-slide">
                          <div
                            data-v-c460166a=""
                            class="grid-item"
                            :style="{ backgroundImage: `url(${wireframe4})` }"
                          >
                            <span data-v-c460166a="" class="text"
                              >Bảo mật tuyệt đối thông tin dự án</span
                            >
                          </div>
                          <!---->
                        </div>
                      </div>
                      <!----><!----><!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer class="bg-[#1E1E1E]">
          <div class="container px-10 m-auto pb-4">
            <div
              class="bg-gradient-to-r from-transparent via-[#6d562a] to-transparent"
            >
              <div class="w-fit m-auto ps-3 relative start-0 py-2">
                <img src="../../assets/logo-no-text.svg" alt="" />
              </div>
            </div>
            <div
              class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:w-full gap-4 py-6 lg:px-32 px-4"
            >
              <div class="ns:text-center md:text-left">
                <span class="text-white font-medium text-[20px]"
                  >Doanh nghiệp</span
                >
                <div class="flex flex-col gap-2 mt-3">
                  <div class="text-[#9C9C9C] text-[16px]">
                    <a href="/vi/about-us" class="">Về LOTVIET </a>
                  </div>
                  <div class="text-[#9C9C9C] text-[16px] cursor-pointer">
                    Điều khoản và chính sách
                  </div>
                  <div class="text-[#9C9C9C] text-[16px]">
                    <a target="_blank" href="https://lotviet.com/en/contact"
                      >Liên hệ</a
                    >
                  </div>
                  <div class="text-[#9C9C9C] text-[16px]">
                    <a href="/vi/recruitment" class="">Tuyển dụng LOTVIET </a>
                  </div>
                </div>
              </div>
              <div class="ns:text-center md:text-left">
                <span class="text-white font-medium text-[20px]">Sản phẩm</span>
                <div class="flex flex-col gap-2 mt-3">
                  <div class="text-[#9C9C9C] text-[16px]">
                    <a target="_blank" href="https://thenhub.com/">N-HUB</a>
                  </div>
                  <div class="text-[#9C9C9C] text-[16px]">
                    <a target="_blank" href="https://nex-now.com/vi/">NEX</a>
                  </div>
                  <div class="text-[#9C9C9C] text-[16px]">
                    <a href="https://ndashboard.com/" target="_blank"
                      >Nex-DASHBOARD</a
                    >
                  </div>
                  <div class="text-[#9C9C9C] text-[16px]">
                    <a class="cursor-pointer">N-CAREER (Coming soon)</a>
                  </div>
                </div>
              </div>
              <div class="ns:text-center md:text-left">
                <span class="text-white font-medium text-[20px]">Hỗ trợ</span>
                <div class="flex flex-col gap-2 mt-3">
                  <div class="text-[#9C9C9C] text-[16px]">
                    <a href="/vi/blogs" class="">Tin tức</a>
                  </div>
                  <div class="text-[#9C9C9C] text-[16px]">
                    <a href="/vi/questions" class="">Câu hỏi thường gặp</a>
                  </div>
                </div>
              </div>
              <div class="ns:text-center md:text-left">
                <span class="text-white font-medium text-[20px]"
                  >Tư vấn bán hàng</span
                >
                <div class="flex flex-col gap-2 mt-3">
                  <div class="text-[#fff] text-[16px]">Hotline: 19002818</div>
                  <div class="text-[#fff] text-[16px]">
                    Email: Contact@lotviet.com
                  </div>
                </div>
              </div>
            </div>
            <hr class="border-[#4b4b4b]" />
            <div class="pt-3 text-center text-white">
              Copyright © 2023-2026 LOT SOFTWARE
            </div>
          </div>
        </footer>
      </div>
    </div>

    <!---->
  </body>
</template>
<style>
.implement-time-section .grid-item:hover {
  transform: translateY(-4px);
  border-color: #e4ca9680;
  box-shadow: 0 8px 24px #bfb89f33;
}
@media (min-width: 1024px) {
  .commitment-section.wrap-gap .grid-wrapper {
    gap: 20px;
  }
}
.commitment-section .grid-wrapper {
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  padding: 0 20px;
}
@media (min-width: 1024px) {
  .commitment-section .grid-item.big-screen {
    width: 283px;
    height: 403px;
    padding-top: 250px;
  }
}
.commitment-section .grid-item.big-screen {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  padding: 250px 20px 20px;
  width: 224px;
  height: 324px;
  background: linear-gradient(135deg, #bfb89f1a, #8b7e5e0d);
  border-radius: 16px;
  transition: all 0.3s ease;
  min-height: 200px;
  position: relative;
  background-size: cover;
}
@media (min-width: 1024px) {
  .commitment-section .grid-item.big-screen .text {
    font-size: 20px;
    line-height: 33.6px;
  }
}
.commitment-section .grid-item.big-screen .text {
  font-family: Saira;
  font-weight: 400;
  font-style: Regular;
  line-height: 25px;
  font-size: 15px;
}
</style>
