<script setup>
import Header from "../Header.vue";
import Footer from "../footer.vue";
import Headermb from "../Headermb.vue";
import { ref, onMounted, nextTick } from "vue";
import { Autoplay } from "swiper/modules";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const selectedJob = ref(null);

onMounted(async () => {
  await nextTick();
  initSwiper();
});
function initSwiper() {
  new Swiper(".process-swiper", {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 4000,
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
      <div class="font-['Saira']" data-page="technicalSupport">
        <div>
          <section
            data-v-b193a261=""
            class="min-h-screen bg-black text-white pb-10"
          >
            <div class="header-section">
              <Headermb></Headermb>
              <Header></Header>
            </div>
            <div data-v-b193a261="" class="container mx-auto px-0 md:px-10">
              <div data-v-5402c78a="" data-v-b193a261="" class="intro-service">
                <div data-v-5402c78a="" class="top-text-wrapper">
                  <img
                    data-v-5402c78a=""
                    src="../../assets/mailservice/star.svg"
                    alt=""
                    class="star-icon"
                  />
                  <div data-v-5402c78a="" class="top-text-box">
                    <span data-v-5402c78a="" class="top-text"
                      >IT SUPPORT SERVICE</span
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
                  Dịch vụ hỗ trợ kỹ thuật
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
                    src="../../assets/technical/technical-support.png"
                    alt="Dịch vụ hỗ trợ kỹ thuật"
                    class="intro-image"
                  />
                  <div data-v-b193a261="" class="bottom-cover-wrapper">
                    <img
                      data-v-b193a261=""
                      src="../../assets/android/bg-cover-bottom-3.png"
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
                data-v-b193a261=""
                class="introduction-section py-10 md:py-20"
              >
                <div class="intro-bg-overlay"></div>
                <div class="container mx-auto px-0 md:px-10">
                  <div class="flex flex-col gap-8 justify-center items-center">
                    <span class="intro-tag">IT SUPPORT SERVICE</span
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
                      >Trong môi trường kinh doanh hiện đại, công nghệ thông tin
                      đóng vai trò then chốt trong mọi hoạt động. Tuy nhiên, các
                      sự cố kỹ thuật như
                      <span class="highlight-text"
                        >mất kết nối mạng, lỗi phần mềm, trục trặc phần cứng, sự
                        cố bảo mật...</span
                      >
                      có thể xảy ra bất kỳ lúc nào, gây gián đoạn công việc và
                      thiệt hại cho doanh nghiệp.
                      <span class="highlight-text"
                        >Dịch vụ Hỗ trợ kỹ thuật (IT Support Service)</span
                      >
                      của chúng tôi mang đến
                      <span class="highlight-text"
                        >giải pháp nhanh chóng, chuyên nghiệp</span
                      >
                      nhằm đảm bảo hệ thống CNTT của bạn luôn hoạt động ổn định
                      và an toàn.</span
                    ><!---->
                  </div>
                </div>
              </div>
              <div
                data-v-4cf61cd5=""
                data-v-b193a261=""
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
                          src="../../assets/technical/1.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          GIẢM THỜI GIAN CHẾT HỆ THỐNG nhờ phản hồi và xử lý sự
                          cố nhanh.
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
                          src="../../assets/technical/2.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TIẾT KIỆM CHI PHÍ so với việc duy trì đội ngũ IT toàn
                          thời gian.
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
                          src="../../assets/technical/3.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          CHUYÊN MÔN CAO với đội ngũ kỹ thuật viên giàu kinh
                          nghiệm.
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
                          src="../../assets/technical/4.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          CHỦ ĐỘNG BẢO TRÌ ĐỊNH KỲ để ngăn ngừa sự cố.
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
                          src="../../assets/technical/5.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TƯ VẤN NÂNG CẤP HỆ THỐNG phù hợp với nhu cầu và xu
                          hướng công nghệ mới.
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
            <div data-v-b1f94cc2="" data-v-b193a261="" class="pricing-section">
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
                  Giá dịch vụ tùy thuộc vào
                  <span style="color: rgba(235, 197, 123, 1)"
                    >cấu hình CPU, RAM, Storage, băng thông</span
                  >
                  và yêu cầu bảo mật của khách hàng
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
                            Cá nhân, doanh nghiệp nhỏ
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
                                >Hỗ trợ sự cố phần mềm cơ bản</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Cấu hình email, máy in, mạng LAN</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Hỗ trợ từ xa trong giờ hành chính</span
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
                                >Hỗ trợ sự cố phần mềm &amp; phần cứng</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Kiểm tra, tối ưu hiệu suất hệ thống</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Hỗ trợ từ xa &amp; tại chỗ (8h–22h)</span
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
                            Doanh nghiệp lớn, hệ thống quan trọng
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
                                >Quản trị hệ thống toàn diện</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2="">Giám sát 24/7</span>
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Bảo mật nâng cao và sao lưu dữ liệu</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Hỗ trợ ưu tiên cao, phản hồi &lt;30 phút</span
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
            <div data-v-b193a261="" class="container mx-auto px-0 md:px-10">
              <div
                data-v-f1290138=""
                data-v-b193a261=""
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
                            Tiếp nhận yêu cầu
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            qua hotline, email, ticket hoặc hệ thống chat hỗ
                            trợ.
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
                            Chẩn đoán sự cố
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            kiểm tra nguyên nhân qua remote hoặc onsite
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
                            Xử lý &amp; khắc phục
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            đảm bảo khôi phục hệ thống nhanh nhất
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
                            Báo cáo &amp; khuyến nghị
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            đưa ra giải pháp phòng tránh sự cố tương lai.
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
                                Tiếp nhận yêu cầu
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                qua hotline, email, ticket hoặc hệ thống chat hỗ
                                trợ.
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
                                Chẩn đoán sự cố
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                kiểm tra nguyên nhân qua remote hoặc onsite
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
                                Xử lý &amp; khắc phục
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                đảm bảo khôi phục hệ thống nhanh nhất
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
                                Báo cáo &amp; khuyến nghị
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                đưa ra giải pháp phòng tránh sự cố tương lai.
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
<style scoped>
[data-page="technicalSupport"] .bottom-cover-wrapper {
  position: absolute;
  left: 0px;
  width: 100%;
  top: 65%;
  height: auto;
  z-index: 1;
}

[data-page="technicalSupport"] .bottom-cover-image {
  width: 100%;
  display: block;
}
@media (max-width: 768px) {
  .intro-image {
    margin-top: 0;
  }
  [data-page="technicalSupport"] .bottom-cover-image {
    margin-top: 10px;
  }
  .advantages-footer {
    display: none;
  }
  .mobile-cta {
    display: block;
    margin-right: 40px;
    margin-left: 40px;
  }
}
</style>
