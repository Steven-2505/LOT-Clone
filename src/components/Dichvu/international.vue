<script setup>
import Header from "../Header.vue";
import Footer from "../footer.vue";
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
      <div class="font-['Saira']" data-page="internationalDatacenter">
        <!---->
        <div>
          <section
            data-v-7899acc0=""
            class="min-h-screen bg-black text-white pb-10"
          >
            <div class="header-section">
              <Header></Header>
            </div>
            <div data-v-7899acc0="" class="container mx-auto px-0 md:px-10">
              <div data-v-5402c78a="" data-v-7899acc0="" class="intro-service">
                <!---->
                <div
                  data-v-2c0a47ab=""
                  data-v-7899acc0=""
                  class="sticker-container"
                >
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 32.47vw;
                      left: 31.54vw;
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
                        transform: translateX(-19.5506px) translateY(-11.403px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 19.19vw;
                      left: 35.03vw;
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
                        transform: translateX(-2.0672px) translateY(-0.7442px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 22.8vw;
                      left: 63.81vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/cdn/sticker_3.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 38px;
                        height: 38px;
                        transform: translateX(0px) translateY(2.7794px);
                      "
                    />
                  </div>
                  <div
                    data-v-2c0a47ab=""
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 30.49vw;
                      left: 65.27vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      data-v-2c0a47ab=""
                      src="../../assets/cdn/sticker_4.png"
                      alt=""
                      class="sticker"
                      style="
                        width: 44px;
                        height: 44px;
                        transform: translateX(0px) translateY(15.4734px);
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
                      >AWS, Azure, Google Cloud</span
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
                  Hạ tầng dịch vụ datacenter quốc tế
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
                    src="../../assets/national/international-datacenter.png"
                    alt="Hạ tầng dịch vụ datacenter quốc tế"
                    class="intro-image"
                  />
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
                data-v-7899acc0=""
                class="introduction-section py-10 md:py-20"
              >
                <div class="intro-bg-overlay"></div>
                <div class="container mx-auto px-0 md:px-10">
                  <div class="flex flex-col gap-8 justify-center items-center">
                    <span class="intro-tag">DATACENTER QUỐC TẾ</span
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
                      >Dịch vụ
                      <span class="highlight-text">Datacenter quốc tế</span>
                      cung cấp hạ tầng máy chủ và lưu trữ dữ liệu trên các nền
                      tảng hàng đầu thế giới như
                      <span class="highlight-text"
                        >Amazon Web Services (AWS), Microsoft Azure và Google
                        Cloud Platform (GCP).</span
                      >
                      Giải pháp này giúp doanh nghiệp khai thác
                      <span class="highlight-text"
                        >hiệu năng toàn cầu, bảo mật cấp doanh nghiệp</span
                      >, và
                      <span class="highlight-text"
                        >khả năng mở rộng vô hạn</span
                      >
                      để đáp ứng mọi nhu cầu về hệ thống và ứng dụng.</span
                    ><!---->
                  </div>
                </div>
              </div>
              <div
                data-v-4cf61cd5=""
                data-v-7899acc0=""
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
                      src="../../assets/national/section_break_line.svg"
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
                          src="../../assets/national/1.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          HIỆU NĂNG TOÀN CẦU Máy chủ đặt tại nhiều khu vực trên
                          thế giới, tối ưu tốc độ truy cập ở bất kỳ đâu.
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
                          src="../../assets/national/2.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          MỞ RỘNG LINH HOẠT Tăng giảm tài nguyên (CPU, RAM,
                          Storage) theo nhu cầu thực tế
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
                          src="../../assets/national/3.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          BẢO MẬT TIÊU CHUẨN QUỐC TẾ Đạt các chứng chỉ ISO
                          27001, SOC 2, PCI DSS
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
                          src="../../assets/national/4.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          KHẢ NĂNG TÍCH HỢP MẠNH MẼ Hỗ trợ API, DevOps, AI, Big
                          Data, IoT…
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
                          src="../../assets/national/5.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          HỖ TRỢ ĐA NỀN TẢNG Windows Server, Linux, Kubernetes,
                          Docker…
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
                          src="../../assets/national/6.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          GIẢM CHI PHÍ VẬN HÀNH Không cần đầu tư hạ tầng vật lý,
                          trả phí theo mức sử dụng.
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
            <div data-v-b1f94cc2="" data-v-7899acc0="" class="pricing-section">
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
                            Website, ứng dụng nhỏ, test/demo
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
                                >Máy chủ ảo/VPS quốc tế</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Dung lượng lưu trữ cơ bản</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2="">Triển khai nhanh</span>
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Hỗ trợ giờ hành chính</span
                              >
                            </li>
                          </ul>
                          <a href="/lienhe" class="cta-button"
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
                            Doanh nghiệp vừa, hệ thống web/app
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
                                >Máy chủ chuyên dụng hoặc Cloud cao cấp</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Băng thông toàn cầu</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2="">Firewall bảo mật</span>
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2="">Backup tự động</span>
                            </li>
                          </ul>
                          <a
                            href="/lienhe"
                            class="cta-button cta-button-highlight"
                            ><button>Bắt đầu dùng thử miễn phí</button></a
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
                            Doanh nghiệp lớn, ứng dụng quốc tế, hệ thống AI/Big
                            Data
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
                                >Hạ tầng đa vùng (Multi-region)</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Anti-DDoS, bảo mật nâng cao</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Khả năng mở rộng vô hạn</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Giám sát 24/7 với SLA cam kết</span
                              >
                            </li>
                          </ul>
                          <a href="/lienhe" class="cta-button"
                            ><button>Liên hệ</button></a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-7899acc0="" class="container mx-auto px-0 md:px-10">
              <div
                data-v-f1290138=""
                data-v-7899acc0=""
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
                            Tư vấn &amp; xác định nhu cầu
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Lựa chọn nền tảng phù hợp (AWS, Azure, Google
                            Cloud).
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
                            Cấu hình &amp; triển khai
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Thiết lập máy chủ, mạng, bảo mật và các dịch vụ liên
                            quan
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
                            Kiểm thử &amp; bàn giao
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Đảm bảo hệ thống hoạt động trơn tru trước khi đưa
                            vào vận hành.
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
                            Vận hành &amp; hỗ trợ
                          </h3>
                          <p data-v-f1290138="" class="step-description">
                            Giám sát, bảo trì và nâng cấp khi cần thiết.
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
                                Tư vấn &amp; xác định nhu cầu
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Lựa chọn nền tảng phù hợp (AWS, Azure, Google
                                Cloud).
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
                                Cấu hình &amp; triển khai
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Thiết lập máy chủ, mạng, bảo mật và các dịch vụ
                                liên quan
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
                                Kiểm thử &amp; bàn giao
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Đảm bảo hệ thống hoạt động trơn tru trước khi
                                đưa vào vận hành.
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
                                Vận hành &amp; hỗ trợ
                              </h3>
                              <p data-v-f1290138="" class="step-description">
                                Giám sát, bảo trì và nâng cấp khi cần thiết.
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
