<script setup>
import Header from "../Header.vue";
import Footer from "../footer.vue";
import Headermb from "../Headermb.vue";
import { ref, onMounted, nextTick } from "vue";
import { animate, stagger } from "animejs";
import "swiper/css";
import "swiper/css/pagination";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

const selectedJob = ref(null);

onMounted(async () => {
  animateSticker();
  await nextTick();
  initSwiper();
});

function initSwiper() {
  new Swiper(".process-swiper", {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 4000,
  });
}
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
      <div class="font-['Saira']" data-page="dataCollection">
        <div>
          <section
            data-v-4ef2f574=""
            class="min-h-screen bg-black text-white pb-10"
          >
            <div class="header-section">
              <Headermb></Headermb>
              <Header></Header>
            </div>
            <div data-v-4ef2f574="" class="container mx-auto px-0 md:px-10">
              <div data-v-5402c78a="" data-v-4ef2f574="" class="intro-service">
                <!---->
                <div
                  data-v-2c0a47ab=""
                  data-v-4ef2f574=""
                  class="sticker-container"
                >
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 29.86vw;
                      left: 21.08vw;
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
                        transform: translateX(0px) translateY(3.4199px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 16.58vw;
                      left: 21.97vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/cdn/sticker_4.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 53px;
                        height: 53px;
                        transform: translateX(0px) translateY(16.2153px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 14.96vw;
                      left: 74.27vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/cdn/sticker_3.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 52px;
                        height: 52px;
                        transform: translateX(0px) translateY(19.317px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 29.96vw;
                      left: 76.36vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/cdn/sticker_4.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 52px;
                        height: 52px;
                        transform: translateX(9.4998px) translateY(0.6034px);
                      "
                    />
                  </div>
                </div>
                <!---->
                <div data-v-5402c78a="" class="intro-title">
                  Giải pháp thu thập dữ liệu phục vụ xây dựng cơ sở dữ liệu số
                </div>
                <!----><a
                  data-v-5402c78a=""
                  href="/contact"
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
                    src="../../assets/collection/data-collection.png"
                    alt="Giải pháp thu thập dữ liệu phục vụ xây dựng cơ sở dữ liệu số"
                    class="intro-image"
                  />
                  <div data-v-4ef2f574="" class="bottom-cover-wrapper">
                    <img
                      data-v-4ef2f574=""
                      src="../../assets/collection/bg-cover-bottom-2.png"
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
                      src="../../assets/cdn/line-dot.svg"
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
                      src="../../assets/cdn/line-dot.svg"
                      alt=""
                      class="stats-line-right"
                      data-v-3c53c0b0=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-v-4ef2f574=""
                class="introduction-section py-10 md:py-20"
              >
                <div class="intro-bg-overlay"></div>
                <div class="container mx-auto px-0 md:px-10">
                  <div class="flex flex-col gap-8 justify-center items-center">
                    <span class="intro-tag">GIẢI PHÁP THU THẬP DỮ LIỆU SỐ</span
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
                      >Trong thời đại chuyển đổi số, dữ liệu là tài sản quan
                      trọng của mọi tổ chức. Dịch vụ
                      <span class="highlight-text"
                        >Giải pháp thu thập dữ liệu</span
                      >
                      của chúng tôi giúp doanh nghiệp và tổ chức thu thập, chuẩn
                      hóa và lưu trữ thông tin một cách
                      <span class="highlight-text"
                        >khoa học, chính xác và bảo mật</span
                      >, phục vụ cho việc xây dựng
                      <span class="highlight-text"
                        >Cơ sở Dữ liệu số toàn diện</span
                      >. Chúng tôi ứng dụng công nghệ hiện đại, kết hợp phương
                      pháp thu thập thủ công và tự động, nhằm đảm bảo dữ liệu
                      luôn
                      <span class="highlight-text"
                        >đầy đủ - chính xác - cập nhật - sẵn sàng khai
                        thác.</span
                      ></span
                    ><!---->
                  </div>
                </div>
              </div>
              <div
                data-v-4cf61cd5=""
                data-v-4ef2f574=""
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
                      class="grid-wrapper mt-10 flex justify-center items-center wrap-gap"
                    >
                      <div data-v-4cf61cd5="" class="grid-item">
                        <img
                          data-v-4cf61cd5=""
                          src="../../assets/collection/1.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TIẾT KIỆM THỜI GIAN VÀ NHÂN LỰC trong khâu thu thập và
                          nhập liệu.
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
                          src="../../assets/collection/2.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TỐI ƯU ĐỘ CHÍNH XÁC nhờ quy trình kiểm tra – xác thực
                          nhiều bước
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
                          src="../../assets/collection/3.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          CHUẨN HÓA DỮ LIỆU theo tiêu chuẩn quốc tế.
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
                          src="../../assets/collection/4.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          DỄ DÀNG TÍCH HỢP vào hệ thống quản lý, phần mềm phân
                          tích, AI.
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
            <div data-v-b1f94cc2="" data-v-4ef2f574="" class="pricing-section">
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
                            Doanh nghiệp nhỏ, dự án thử nghiệm
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
                                >Thu thập dữ liệu thủ công hoặc bán tự
                                động</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Nhập liệu cơ bản vào hệ thống</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Báo cáo kết quả dạng bảng tính</span
                              >
                            </li>
                          </ul>
                          <a href="" data-v-b1f94cc2="" class="cta-button-1">
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
                            Doanh nghiệp vừa, dự án dữ liệu mở rộng
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
                                >Thu thập dữ liệu đa nguồn (web, API, file, khảo
                                sát…)</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Chuẩn hóa và làm sạch dữ liệu</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Xuất dữ liệu dưới nhiều định dạng</span
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
                            Doanh nghiệp lớn, cơ quan nhà nước, dự án Big Data
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
                                >Thu thập dữ liệu tự động quy mô lớn</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Tích hợp trực tiếp với hệ thống CSDL &amp; phần
                                mềm quản trị</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Bảo mật nâng cao &amp; sao lưu định kỳ</span
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
            <div data-v-4ef2f574="" class="container mx-auto px-0 md:px-10">
              <div
                data-v-f1290138=""
                data-v-4ef2f574=""
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
                          src="../../assets/cdn/deploy_process_section_1.svg"
                          alt="Step Dot"
                          loading="lazy"
                        />
                        <div data-v-f1290138="" class="step-badge">Step 1</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Khảo sát &amp; xác định yêu cầu
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Xác định loại dữ liệu, nguồn thu thập, mục tiêu sử
                            dụng.
                          </p>
                        </div>
                      </div>
                      <div data-v-f1290138="" class="step-item">
                        <img
                          data-v-f1290138=""
                          class="step-dot"
                          src="../../assets/cdn/deploy_process_section_1.svg"
                          alt="Step Dot"
                          loading="lazy"
                        />
                        <div data-v-f1290138="" class="step-badge">Step 2</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Lập kế hoạch thu thập
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Chọn phương pháp, công cụ, thời gian và nhân sự.
                          </p>
                        </div>
                      </div>
                      <div data-v-f1290138="" class="step-item">
                        <img
                          data-v-f1290138=""
                          class="step-dot"
                          src="../../assets/cdn/deploy_process_section_1.svg"
                          alt="Step Dot"
                          loading="lazy"
                        />
                        <div data-v-f1290138="" class="step-badge">Step 3</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Thu thập &amp; xử lý dữ liệu
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Lọc, chuẩn hóa, kiểm tra tính chính xác.
                          </p>
                        </div>
                      </div>
                      <div data-v-f1290138="" class="step-item">
                        <img
                          data-v-f1290138=""
                          class="step-dot"
                          src="../../assets/cdn/deploy_process_section_1.svg"
                          alt="Step Dot"
                          loading="lazy"
                        />
                        <div data-v-f1290138="" class="step-badge">Step 4</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Bàn giao &amp; tích hợp
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Chuyển giao dữ liệu và hỗ trợ tích hợp vào hệ thống
                            của khách hàng.
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
                              src="../../assets/cdn/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 1
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Khảo sát &amp; xác định yêu cầu
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Xác định loại dữ liệu, nguồn thu thập, mục tiêu
                                sử dụng.
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
                              src="../../assets/cdn/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 2
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Lập kế hoạch thu thập
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Chọn phương pháp, công cụ, thời gian và nhân sự.
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
                              src="../../assets/cdn/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 3
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Thu thập &amp; xử lý dữ liệu
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Lọc, chuẩn hóa, kiểm tra tính chính xác.
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
                              src="../../assets/cdn/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 4
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Bàn giao &amp; tích hợp
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Chuyển giao dữ liệu và hỗ trợ tích hợp vào hệ
                                thống của khách hàng.
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
            <Footer></Footer>
          </section>
        </div>
      </div>
    </div>

    <!---->
  </body>
</template>
<style>
[data-page="dataCollection"] .bottom-cover-wrapper {
  position: absolute;
  left: 0px;
  width: 100%;
  top: 0%;
  height: auto;
  z-index: 1;
}
[data-page="dataCollection"] .bottom-cover-image {
  width: 100%;
  display: block;
}
.intro-service > *:not(.intro-bg-cover):not(.sticker-container) {
  position: relative;
  z-index: 2;
}
@media (max-width: 768px) {
  [data-page="dataCollection"] .sticker-wrapper {
    transform: translateY(120px) scale(0.478) !important;
  }
}
@media (max-width: 768px) {
  [data-page="dataCollection"] .bottom-cover-wrapper {
    top: 50%;
  }
}
</style>
