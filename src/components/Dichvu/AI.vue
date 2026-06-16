<script setup>
import Header from "../Header.vue";
import footer from "../footer.vue";
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
  <body data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
    <div id="app" data-v-app="">
      <div class="font-['Saira']" data-page="smartAlertAi">
        <div>
          <section
            data-v-b62e7a28=""
            class="min-h-screen bg-black text-white pb-10"
          >
            <div class="header-section">
              <Header></Header>
            </div>
            <div data-v-b62e7a28="" class="container mx-auto px-0 md:px-10">
              <div data-v-5402c78a="" data-v-b62e7a28="" class="intro-service">
                <div data-v-5402c78a="" class="intro-bg-cover">
                  <img
                    data-v-5402c78a=""
                    src="../../assets/AI/bg-intro-2.png"
                    alt=""
                    class="intro-bg-cover-image"
                  />
                </div>
                <div
                  data-v-2c0a47ab=""
                  data-v-b62e7a28=""
                  class="sticker-container"
                >
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 26.15vw;
                      left: 18.31vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/AI/sticker_1.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 36px;
                        height: 36px;
                        transform: translateX(11.4979px) translateY(-19.9985px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 20.92vw;
                      left: 23.54vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/AI/sticker_2.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 88px;
                        height: 88px;
                        transform: translateX(-19.9957px) translateY(-13.74px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 30.28vw;
                      left: 28.77vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/AI/sticker_3.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 61px;
                        height: 61px;
                        transform: translateX(-4.6422px) translateY(-1.6712px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 30.28vw;
                      left: 65.38vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/AI/sticker_4.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 44px;
                        height: 44px;
                        transform: translateX(0px) translateY(1.5304px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 20.92vw;
                      left: 70.61vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/AI/sticker_6.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 78px;
                        height: 78px;
                        transform: translateX(0px) translateY(13.4584px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 18.31vw;
                      left: 78.45vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/AI/sticker_12.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 36px;
                        height: 36px;
                        transform: translateX(0px) translateY(19.9992px);
                      "
                    />
                  </div>
                </div>
                <!---->
                <div data-v-5402c78a="" class="intro-title">
                  <span data-v-5402c78a=""
                    ><span data-v-5402c78a=""
                      >Hệ thống cảnh báo thông minh, ứng dụng công nghệ
                    </span></span
                  ><span data-v-5402c78a=""
                    ><img
                      data-v-5402c78a=""
                      src="../../assets/AI/text-ai.png"
                      alt="AI"
                      class="ai-text-image"
                  /></span>
                </div>
                <!----><a
                  data-v-5402c78a=""
                  href="/lienhe"
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
                    src="../../assets/AI/smart-alert-ai.png"
                    alt="Hệ thống cảnh báo thông minh, ứng dụng công nghệ AI"
                    class="intro-image w-full"
                  />
                  <div data-v-b62e7a28="" class="bottom-cover-wrapper">
                    <img
                      data-v-b62e7a28=""
                      src="../../assets/AI/bg-cover-bottom-2.png"
                      alt=""
                      class="bottom-cover-image"
                    />
                  </div>
                </div>
                <!---->
              </div>
              <div
                data-v-b62e7a28=""
                class="introduction-section py-10 md:py-20"
              >
                <div class="intro-bg-overlay"></div>
                <div class="container mx-auto px-0 md:px-10">
                  <div class="flex flex-col gap-8 justify-center items-center">
                    <span class="intro-tag"
                      >HỆ THỐNG CẢNH BÁO THÔNG MINH AI</span
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
                    /><span class="intro-description text-center type-2"
                      >Hệ thống cảnh báo thông minh ứng dụng Trí tuệ nhân tạo
                      (AI) là giải pháp giúp phát hiện sớm, phân tích và đưa ra
                      cảnh báo kịp thời về các sự cố, rủi ro hoặc bất thường
                      trong hoạt động của doanh nghiệp và tổ chức. Công nghệ AI
                      cho phép hệ thống học hỏi từ dữ liệu, tự động nhận diện
                      các mẫu (patterns), dự đoán xu hướng và đưa ra cảnh báo
                      chính xác hơn so với các phương pháp truyền thống.</span
                    >
                    <div class="intro-grid-wrapper mt-10">
                      <div class="intro-grid-container">
                        <div class="intro-grid-title">
                          ỨNG DỤNG TRONG NHIỀU LĨNH VỰC
                        </div>
                        <div class="intro-grid-item">
                          <div class="grid-item-title">
                            AN NINH &amp; GIÁM SÁT
                          </div>
                          <img
                            src="../../assets/analyst/introduction_box_section_2.svg"
                            alt="sperate"
                            loading="lazy"
                          />
                          <div class="grid-item-description">
                            Cảnh báo xâm nhập, hành vi bất thường.
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
                            SẢN XUẤT &amp; CÔNG NGHIỆP
                          </div>
                          <img
                            src="../../assets/analyst/introduction_box_section_2.svg"
                            alt="sperate"
                            loading="lazy"
                          />
                          <div class="grid-item-description">
                            Cảnh báo thiết bị sắp hỏng, tối ưu bảo trì
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
                          <div class="grid-item-title">Y TẾ</div>
                          <img
                            src="../../assets/analyst/introduction_box_section_2.svg"
                            alt="sperate"
                            loading="lazy"
                          />
                          <div class="grid-item-description">
                            Phát hiện sớm các chỉ số bất thường của bệnh nhân
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
                          <div class="grid-item-title">TÀI CHÍNH</div>
                          <img
                            src="../../assets/analyst/introduction_box_section_2.svg"
                            alt="sperate"
                            loading="lazy"
                          />
                          <div class="grid-item-description">
                            Cảnh báo giao dịch gian lận
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
                data-v-b62e7a28=""
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
                          src="../../assets/AI/1.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          PHÁT HIỆN SỚM &amp; CHÍNH XÁC nhờ khả năng phân tích
                          dữ liệu thời gian thực.
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
                          src="../../assets/AI/2.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          GIẢM THIỂU RỦI RO &amp; THIỆT HẠI nhờ hành động kịp
                          thời.
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
                          src="../../assets/AI/3.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TỐI ƯU NHÂN LỰC khi hệ thống tự động giám sát 24/7
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
                          src="../../assets/AI/4.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          KHẢ NĂNG MỞ RỘNG &amp; TÙY BIẾN theo nhu cầu từng
                          ngành.
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
            <div data-v-b1f94cc2="" data-v-b62e7a28="" class="pricing-section">
              <div data-v-b1f94cc2="" class="container mx-auto">
                <h2 data-v-b1f94cc2="" class="pricing-title">
                  BẢNG GIÁ DỊCH VỤ
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
                                >Cảnh báo qua email/SMS</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Theo dõi dữ liệu từ 1 nguồn</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Báo cáo cảnh báo hàng ngày</span
                              >
                            </li>
                          </ul>
                          <a
                            href="/lienhe"
                            data-v-b1f94cc2=""
                            class="cta-button"
                            ><button>Liên hệ</button></a
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
                            Doanh nghiệp vừa, hệ thống cần giám sát đa dạng
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
                                >Cảnh báo đa kênh (Email, SMS, App)</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Kết nối &amp; phân tích dữ liệu từ nhiều
                                nguồn</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >AI học máy để giảm cảnh báo sai</span
                              >
                            </li>
                          </ul>
                          <a
                            href="/lienhe"
                            class="cta-button cta-button-highlight"
                          >
                            <button data-v-b1f94cc2="">
                              Bắt đầu dùng thử miễn phí
                            </button></a
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
                            Doanh nghiệp lớn, tổ chức yêu cầu độ chính xác cao
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
                                >Tích hợp sâu vào hệ thống quản trị</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Phân tích dữ liệu lớn (Big Data)</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Dự đoán và cảnh báo sớm theo mô hình AI nâng
                                cao</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Hỗ trợ 24/7 &amp; bảo mật cao</span
                              >
                            </li>
                          </ul>
                          <a
                            href="/lienhe"
                            data-v-b1f94cc2=""
                            class="cta-button"
                            ><button>Liên hệ</button></a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-b62e7a28="" class="container mx-auto px-0 md:px-10">
              <div
                data-v-f1290138=""
                data-v-b62e7a28=""
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
                          src="../../assets/analyst/deploy_process_section_1.svg"
                          alt="Step Dot"
                          loading="lazy"
                        />
                        <div data-v-f1290138="" class="step-badge">Step 1</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Khảo sát &amp; phân tích yêu cầu
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Xác định nguồn dữ liệu, loại cảnh báo cần thiết.
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
                        <div data-v-f1290138="" class="step-badge">Step 2</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Thiết kế hệ thống AI
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Lựa chọn thuật toán, hạ tầng và giao diện cảnh báo.
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
                        <div data-v-f1290138="" class="step-badge">Step 3</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Triển khai &amp; đào tạo
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Cài đặt, huấn luyện AI, hướng dẫn người dùng.
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
                        <div data-v-f1290138="" class="step-badge">Step 4</div>
                        <div data-v-f1290138="" class="step-content">
                          <h3 data-v-f1290138="" class="step-title">
                            Giám sát &amp; tối ưu
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Liên tục cập nhật mô hình để nâng cao độ chính xác.
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
                                Khảo sát &amp; phân tích yêu cầu
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Xác định nguồn dữ liệu, loại cảnh báo cần thiết.
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
                                Thiết kế hệ thống AI
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Lựa chọn thuật toán, hạ tầng và giao diện cảnh
                                báo.
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
                                Triển khai &amp; đào tạo
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Cài đặt, huấn luyện AI, hướng dẫn người dùng.
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
                                Giám sát &amp; tối ưu
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Liên tục cập nhật mô hình để nâng cao độ chính
                                xác.
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
.ai-text-image {
  display: inline-block;
  width: 74px;
  height: 61px;
  vertical-align: middle;
}
[data-page="smartAlertAi"] .bottom-cover-wrapper {
  position: absolute;
  left: 0px;
  width: 100%;
  top: 40%;
  height: auto;
  z-index: 1;
}
[data-page="smartAlertAi"] .bottom-cover-image {
  width: 100%;
  display: block;
}
.introduction-section .intro-grid-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
}
@media (max-width: 1535px) {
  .introduction-section .intro-grid-container {
    background-size: inherit;
    background-repeat: repeat;
    background-position: unset;
    flex-wrap: wrap;
  }
}
.introduction-section .intro-grid-container {
  min-width: max-content;
}
</style>
