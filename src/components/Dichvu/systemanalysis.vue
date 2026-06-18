<script setup>
import Header from "../Header.vue";
import Footer from "../footer.vue";
import Headermb from "../Headermb.vue";
import Select from "primevue/select";
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
      <div class="font-['Saira']" data-page="systemAnalysis">
        <div>
          <section class="min-h-screen bg-black text-white pb-10">
            <div class="header-section">
              <Header></Header>
              <Headermb></Headermb>
            </div>
            <div>
              <section
                data-v-6fa1e004=""
                class="min-h-screen bg-black text-white pb-10"
              >
                <div data-v-6fa1e004="" class="px-0 md:px-10">
                  <div
                    data-v-5402c78a=""
                    data-v-6fa1e004=""
                    class="intro-service"
                  >
                    <!---->
                    <div
                      data-v-2c0a47ab=""
                      data-v-6fa1e004=""
                      class="sticker-container"
                    >
                      <div
                        data-v-2c0a47ab=""
                        class="sticker-wrapper"
                        style="
                          position: absolute;
                          top: 26.15vw;
                          left: 4.97vw;
                          pointer-events: none;
                        "
                      >
                        <img
                          data-v-2c0a47ab=""
                          src="../../assets/mailservice/sticker_11.png"
                          alt=""
                          class="sticker"
                          style="
                            width: 47px;
                            height: 47px;
                            transform: translateX(0px) translateY(0.0083px);
                          "
                        />
                      </div>
                      <div
                        data-v-2c0a47ab=""
                        class="sticker-wrapper"
                        style="
                          position: absolute;
                          top: 17.21vw;
                          left: 11.51vw;
                          pointer-events: none;
                        "
                      >
                        <img
                          data-v-2c0a47ab=""
                          src="../../assets/mailservice/sticker_5.png"
                          alt=""
                          class="sticker"
                          style="
                            width: 46px;
                            height: 46px;
                            transform: translateX(0px) translateY(6.8691px);
                          "
                        />
                      </div>
                      <div
                        data-v-2c0a47ab=""
                        class="sticker-wrapper"
                        style="
                          position: absolute;
                          top: 15.95vw;
                          left: 67.99vw;
                          pointer-events: none;
                        "
                      >
                        <img
                          data-v-2c0a47ab=""
                          src="../../assets/mailservice/sticker_9.png"
                          alt=""
                          class="sticker"
                          style="
                            width: 29px;
                            height: 41px;
                            transform: translateX(0px) translateY(18.628px);
                          "
                        />
                      </div>
                      <div
                        data-v-2c0a47ab=""
                        class="sticker-wrapper"
                        style="
                          position: absolute;
                          top: 16.79vw;
                          left: 86.3vw;
                          pointer-events: none;
                        "
                      >
                        <img
                          data-v-2c0a47ab=""
                          src="../../assets/mailservice/sticker_10.png"
                          alt=""
                          class="sticker"
                          style="
                            width: 46px;
                            height: 46px;
                            transform: translateX(0.0243px)
                              translateY(16.3089px);
                          "
                        />
                      </div>
                    </div>
                    <div data-v-5402c78a="" class="top-text-wrapper">
                      <img
                        data-v-5402c78a=""
                        src="../../assets/analyst/star.svg"
                        alt=""
                        class="star-icon"
                      />
                      <div data-v-5402c78a="" class="top-text-box">
                        <span data-v-5402c78a="" class="top-text"
                          >SYSTEM ANALYSIS AND DESIGN</span
                        >
                      </div>
                      <img
                        data-v-5402c78a=""
                        src="../../assets/analyst/star.svg"
                        alt=""
                        class="star-icon"
                      />
                    </div>
                    <div data-v-5402c78a="" class="intro-title">
                      Phân tích, thiết kế hệ thống
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
                        src="../../assets/analyst/system-analysis.png"
                        alt="Phân tích, thiết kế hệ thống"
                        class="intro-image w-full"
                      />
                      <div data-v-6fa1e004="" class="bottom-cover-wrapper">
                        <img
                          data-v-6fa1e004=""
                          src="../../assets/analyst/bg-cover-bottom-1.png"
                          alt=""
                          class="bottom-cover-image"
                        />
                      </div>
                    </div>
                    <!---->
                  </div>
                  <div
                    data-v-6fa1e004=""
                    class="introduction-section py-10 md:py-20"
                  >
                    <div class="intro-bg-overlay"></div>
                    <div class="container mx-auto px-0 md:px-10">
                      <div
                        class="flex flex-col gap-8 justify-center items-center"
                      >
                        <span class="intro-tag"
                          >PHÂN TÍCH - THIẾT KẾ HỆ THỐNG</span
                        ><span class="section-title">GIỚI THIỆU DỊCH VỤ</span
                        ><img
                          src="../../assets/mailservice/service_background_left.svg"
                          alt="left-bg"
                          class="left-bg-svg"
                          loading="lazy"
                        /><span class="intro-description text-center type-2"
                          >Phân tích và thiết kế hệ thống là bước quan trọng
                          trong quá trình phát triển phần mềm và triển khai giải
                          pháp CNTT. Dịch vụ của chúng tôi giúp doanh nghiệp
                          <span class="highlight-text"
                            >hiểu rõ yêu cầu, xây dựng kiến trúc hệ thống phù
                            hợp</span
                          >
                          và
                          <span class="highlight-text"
                            >tối ưu hóa quy trình</span
                          >
                          để đảm bảo giải pháp CNTT hoạt động hiệu quả, dễ mở
                          rộng và bảo trì.</span
                        >
                        <div class="intro-grid-wrapper mt-10">
                          <div class="intro-grid-container">
                            <div class="intro-grid-title">
                              Hỗ trợ doanh nghiệp
                            </div>
                            <div class="intro-grid-item">
                              <div class="grid-item-title">
                                XÁC ĐỊNH YÊU CẦU
                              </div>
                              <img
                                src="../../assets/analyst/introduction_box_section_2.svg"
                                alt="sperate"
                                loading="lazy"
                              />
                              <div class="grid-item-description">
                                Xác định yêu cầu chính xác từ người dùng và
                                khách hàng.
                              </div>
                            </div>
                            <div class="grid-connector">
                              <img
                                src="../../assets/analyst/introduction_box_section_1.svg"
                                alt="connector"
                                loading="lazy"
                              />
                            </div>
                            <div class="intro-grid-item">
                              <div class="grid-item-title">
                                ĐỀ XUẤT GIẢI PHÁP
                              </div>
                              <img
                                src="../../assets/analyst/introduction_box_section_2.svg"
                                alt="sperate"
                                loading="lazy"
                              />
                              <div class="grid-item-description">
                                Đề xuất giải pháp tối ưu về kiến trúc hệ thống,
                                cơ sở dữ liệu, quy trình vận hành.
                              </div>
                            </div>
                            <div class="grid-connector">
                              <img
                                src="../../assets/analyst/introduction_box_section_1.svg"
                                alt="connector"
                                loading="lazy"
                              />
                            </div>
                            <div class="intro-grid-item">
                              <div class="grid-item-title">
                                THIẾT KẾ MÔ HÌNH
                              </div>
                              <img
                                src="../../assets/analyst/introduction_box_section_2.svg"
                                alt="sperate"
                                loading="lazy"
                              />
                              <div class="grid-item-description">
                                Thiết kế mô hình trực quan để các bên liên quan
                                dễ hiểu và thống nhất trước khi triển khai.
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-4cf61cd5=""
                    data-v-6fa1e004=""
                    class="benefit-section py-10 md:py-20"
                  >
                    <div
                      data-v-4cf61cd5=""
                      class="container mx-auto px-0 md:px-10"
                    >
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
                              src="../../assets/analyst/1.png"
                              alt="benefit icon"
                              loading="lazy"
                            />
                            <div
                              data-v-4cf61cd5=""
                              class="description"
                              style="white-space: pre-line"
                            >
                              GIẢM RỦI RO DO PHÂN TÍCH KỸ LƯỠNG TRƯỚC KHI PHÁT
                              TRIỂN.
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
                              src="../../assets/analyst/2.png"
                              alt="benefit icon"
                              loading="lazy"
                            />
                            <div
                              data-v-4cf61cd5=""
                              class="description"
                              style="white-space: pre-line"
                            >
                              TIẾT KIỆM CHI PHÍ BẰNG CÁCH TRÁNH SỬA ĐỔI NHIỀU
                              LẦN SAU TRIỂN KHAI.
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
                              src="../../assets/analyst/3.png"
                              alt="benefit icon"
                              loading="lazy"
                            />
                            <div
                              data-v-4cf61cd5=""
                              class="description"
                              style="white-space: pre-line"
                            >
                              ĐẢM BẢO TÍNH KHẢ THI CỦA DỰ ÁN VÀ KHẢ NĂNG MỞ RỘNG
                              TRONG TƯƠNG LAI.
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
                              src="../../assets/analyst/4.png"
                              alt="benefit icon"
                              loading="lazy"
                            />
                            <div
                              data-v-4cf61cd5=""
                              class="description"
                              style="white-space: pre-line"
                            >
                              TĂNG HIỆU QUẢ PHỐI HỢP GIỮA NHÓM KỸ THUẬT, QUẢN LÝ
                              DỰ ÁN VÀ KHÁCH HÀNG.
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
                <div
                  data-v-b1f94cc2=""
                  data-v-6fa1e004=""
                  class="pricing-section"
                >
                  <div data-v-b1f94cc2="" class="container mx-auto">
                    <h2 data-v-b1f94cc2="" class="pricing-title">
                      Bảng Giá Dịch Vụ Phân Tích Và Thiết Kế Hệ Thống
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
                              <h3 data-v-b1f94cc2="" class="plan-name">
                                Cơ Bản
                              </h3>
                              <div data-v-b1f94cc2="" class="plan-price">
                                <span data-v-b1f94cc2="" class="price-value"
                                  >$0</span
                                ><span data-v-b1f94cc2="" class="price-slash"
                                  >/</span
                                ><span data-v-b1f94cc2="" class="price-period"
                                  >month</span
                                >
                              </div>
                              <div data-v-b1f94cc2="" class="plan-subtitle">
                                Dự án nhỏ, startup
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
                                    >Thu thập yêu cầu</span
                                  >
                                </li>
                                <li data-v-b1f94cc2="" class="feature-item">
                                  <img
                                    data-v-b1f94cc2=""
                                    src="../../assets/mailservice/price_list_section_2.svg"
                                    alt=""
                                    loading="lazy"
                                  /><span data-v-b1f94cc2=""
                                    >Vẽ sơ đồ quy trình nghiệp vụ (BPMN)</span
                                  >
                                </li>
                                <li data-v-b1f94cc2="" class="feature-item">
                                  <img
                                    data-v-b1f94cc2=""
                                    src="../../assets/mailservice/price_list_section_2.svg"
                                    alt=""
                                    loading="lazy"
                                  /><span data-v-b1f94cc2=""
                                    >Báo cáo phân tích yêu cầu</span
                                  >
                                </li>
                              </ul>
                              <a
                                href="/contact"
                                data-v-b1f94cc2=""
                                class="cta-button-1"
                              >
                                Liên hệ</a
                              >
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
                              <h3 data-v-b1f94cc2="" class="plan-name">
                                Nâng Cao
                              </h3>
                              <div data-v-b1f94cc2="" class="plan-price">
                                <span data-v-b1f94cc2="" class="price-value"
                                  >$29</span
                                ><span data-v-b1f94cc2="" class="price-slash"
                                  >/</span
                                ><span data-v-b1f94cc2="" class="price-period"
                                  >month</span
                                >
                              </div>
                              <div data-v-b1f94cc2="" class="plan-subtitle">
                                Doanh nghiệp vừa, dự án phần mềm web/app
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
                                    >Phân tích yêu cầu chi tiết</span
                                  >
                                </li>
                                <li data-v-b1f94cc2="" class="feature-item">
                                  <img
                                    data-v-b1f94cc2=""
                                    src="../../assets/mailservice/price_list_section_2.svg"
                                    alt=""
                                    loading="lazy"
                                  /><span data-v-b1f94cc2=""
                                    >Thiết kế mô hình dữ liệu</span
                                  >
                                </li>
                                <li data-v-b1f94cc2="" class="feature-item">
                                  <img
                                    data-v-b1f94cc2=""
                                    src="../../assets/mailservice/price_list_section_2.svg"
                                    alt=""
                                    loading="lazy"
                                  /><span data-v-b1f94cc2=""
                                    >Sơ đồ kiến trúc hệ thống</span
                                  >
                                </li>
                              </ul>
                              <a
                                href="/contact"
                                data-v-b1f94cc2=""
                                class="cta-button cta-button-1 cta-button-highlight"
                              >
                                Bắt đầu dùng thử miễn phí</a
                              >
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
                                Doanh nghiệp lớn, dự án phức tạp
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
                                    >Phân tích &amp; thiết kế toàn diện</span
                                  >
                                </li>
                                <li data-v-b1f94cc2="" class="feature-item">
                                  <img
                                    data-v-b1f94cc2=""
                                    src="../../assets/mailservice/price_list_section_2.svg"
                                    alt=""
                                    loading="lazy"
                                  /><span data-v-b1f94cc2=""
                                    >Tài liệu SRS (Software Requirement
                                    Specification)</span
                                  >
                                </li>
                                <li data-v-b1f94cc2="" class="feature-item">
                                  <img
                                    data-v-b1f94cc2=""
                                    src="../../assets/mailservice/price_list_section_2.svg"
                                    alt=""
                                    loading="lazy"
                                  /><span data-v-b1f94cc2=""
                                    >Mô hình UML đầy đủ (Use Case, Sequence,
                                    Class Diagram…)</span
                                  >
                                </li>
                                <li data-v-b1f94cc2="" class="feature-item">
                                  <img
                                    data-v-b1f94cc2=""
                                    src="../../assets/mailservice/price_list_section_2.svg"
                                    alt=""
                                    loading="lazy"
                                  /><span data-v-b1f94cc2=""
                                    >Tư vấn kiến trúc &amp; bảo mật hệ
                                    thống</span
                                  >
                                </li>
                              </ul>
                              <a
                                href="/contact"
                                data-v-b1f94cc2=""
                                class="cta-button-1"
                              >
                                Liên hệ</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-6fa1e004="" class="px-0 md:px-10">
                  <div
                    data-v-f1290138=""
                    data-v-6fa1e004=""
                    class="flex flex-col gap-8 justify-center items-center process-section py-10 md:py-20"
                  >
                    <span data-v-f1290138="" class="section-title"
                      >QUY TRÌNH TRIỂN KHAI</span
                    >
                    <div
                      data-v-f1290138=""
                      class="process-container mt-10 w-full"
                    >
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
                              src="../../assets/analyst/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 1
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Tiếp nhận &amp; khảo sát
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Thu thập thông tin, mục tiêu, yêu cầu từ khách
                                hàng.
                              </p>
                            </div>
                          </div>
                          <div data-v-f1290138="" class="step-item">
                            <img
                              data-v-f1290138=""
                              class="step-dot"
                              src="../../assets/analyst/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 2
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Phân tích hệ thống
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Đánh giá hiện trạng, xác định nhu cầu &amp; giải
                                pháp.
                              </p>
                            </div>
                          </div>
                          <div data-v-f1290138="" class="step-item">
                            <img
                              data-v-f1290138=""
                              class="step-dot"
                              src="../../assets/analyst/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 3
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Thiết kế mô hình
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Lập sơ đồ, kiến trúc, tài liệu mô tả.
                              </p>
                            </div>
                          </div>
                          <div data-v-f1290138="" class="step-item">
                            <img
                              data-v-f1290138=""
                              class="step-dot"
                              src="../../assets/analyst/deploy_process_section_1.svg"
                              alt="Step Dot"
                              loading="lazy"
                            />
                            <div data-v-f1290138="" class="step-badge">
                              Step 4
                            </div>
                            <div data-v-f1290138="" class="step-content">
                              <h3 data-v-f1290138="" class="step-title">
                                Bàn giao &amp; tư vấn triển khai
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Hỗ trợ nhóm phát triển đưa hệ thống vào hoạt
                                động.
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
                                  src="../../assets/analyst/deploy_process_section_1.svg"
                                  alt="Step Dot"
                                  loading="lazy"
                                />
                                <div data-v-f1290138="" class="step-badge">
                                  Step 1
                                </div>
                                <div data-v-f1290138="" class="step-content">
                                  <h3 data-v-f1290138="" class="step-title">
                                    Tiếp nhận &amp; khảo sát
                                  </h3>
                                  <p
                                    data-v-f1290138=""
                                    class="step-description"
                                  >
                                    Thu thập thông tin, mục tiêu, yêu cầu từ
                                    khách hàng.
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
                                  src="../../assets/analyst/deploy_process_section_1.svg"
                                  alt="Step Dot"
                                  loading="lazy"
                                />
                                <div data-v-f1290138="" class="step-badge">
                                  Step 2
                                </div>
                                <div data-v-f1290138="" class="step-content">
                                  <h3 data-v-f1290138="" class="step-title">
                                    Phân tích hệ thống
                                  </h3>
                                  <p
                                    data-v-f1290138=""
                                    class="step-description"
                                  >
                                    Đánh giá hiện trạng, xác định nhu cầu &amp;
                                    giải pháp.
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
                                  src="../../assets/analyst/deploy_process_section_1.svg"
                                  alt="Step Dot"
                                  loading="lazy"
                                />
                                <div data-v-f1290138="" class="step-badge">
                                  Step 3
                                </div>
                                <div data-v-f1290138="" class="step-content">
                                  <h3 data-v-f1290138="" class="step-title">
                                    Thiết kế mô hình
                                  </h3>
                                  <p
                                    data-v-f1290138=""
                                    class="step-description"
                                  >
                                    Lập sơ đồ, kiến trúc, tài liệu mô tả.
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
                                  src="../../assets/analyst/deploy_process_section_1.svg"
                                  alt="Step Dot"
                                  loading="lazy"
                                />
                                <div data-v-f1290138="" class="step-badge">
                                  Step 4
                                </div>
                                <div data-v-f1290138="" class="step-content">
                                  <h3 data-v-f1290138="" class="step-title">
                                    Bàn giao &amp; tư vấn triển khai
                                  </h3>
                                  <p
                                    data-v-f1290138=""
                                    class="step-description"
                                  >
                                    Hỗ trợ nhóm phát triển đưa hệ thống vào hoạt
                                    động.
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
          </section>
        </div>
        <Footer></Footer>
      </div>
    </div>

    <!---->
  </body>
</template>
<style scoped>
.bg-color {
  background-color: black;
  overflow: hidden;
}
[data-page="systemAnalysis"] .bottom-cover-wrapper {
  position: absolute;
  left: 0;
  width: 100%;
  top: 50%;
  height: auto;
  z-index: 1;
}
[data-page="systemAnalysis"] .bottom-cover-image {
  width: 100%;
  display: block;
}
.introduction-section .intro-description.type-2 .highlight-text {
  font-family: Saira;
  font-weight: 500;
  font-style: SemiBold;
  line-height: 28px;
  letter-spacing: 0%;
  text-align: center;
  color: #ffd279;
}
.introduction-section .intro-grid-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
}
.introduction-section .grid-connector {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
@media (max-width: 1535px) {
  .introduction-section .intro-grid-container .grid-connector {
    display: none;
  }
}
</style>
