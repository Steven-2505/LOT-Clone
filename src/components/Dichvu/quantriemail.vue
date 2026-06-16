<script setup>
import Header from "../Header.vue";
import Mailservice from "../../assets/mailservice/email-server.png";
import Footer from "../footer.vue";
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
      <div class="font-['Saira']" data-page="emailServer">
        <div>
          <section class="min-h-screen bg-black text-white pb-10">
            <div class="header-section">
              <Header></Header>
            </div>
            <div class="container mx-auto px-0 md:px-10">
              <div class="intro-service has-title-on-image">
                <!---->
                <div class="sticker-container">
                  <div
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 15.59vw;
                      left: 21.81vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      src="../../assets/mailservice/sticker_5.png"
                      alt=""
                      class="sticker"
                      style="width: 46px; height: 46px"
                    />
                  </div>
                  <div
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 25.78vw;
                      left: 22.96vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      src="../../assets/mailservice/sticker_7.png"
                      alt=""
                      class="sticker"
                      style="width: 58px; height: 50px"
                    />
                  </div>
                  <div
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 13.39vw;
                      left: 32.95vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      src="../../assets/mailservice/sticker_8.png"
                      alt=""
                      class="sticker"
                      style="width: 29px; height: 41px"
                    />
                  </div>
                  <div
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 14.33vw;
                      left: 64.64vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      src="../../assets/mailservice/sticker_9.png"
                      alt=""
                      class="sticker"
                      style="width: 29px; height: 41px"
                    />
                  </div>
                  <div
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 13.13vw;
                      left: 73.9vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      src="../../assets/mailservice/sticker_10.png"
                      alt=""
                      class="sticker"
                      style="width: 46px; height: 46px"
                    />
                  </div>
                  <div
                    class="sticker-wrapper"
                    style="
                      position: absolute;
                      top: 26.36vw;
                      left: 75.94vw;
                      pointer-events: none;
                    "
                  >
                    <img
                      src="../../assets/mailservice/sticker_11.png"
                      alt=""
                      class="sticker"
                      style="width: 47px; height: 51px"
                    />
                  </div>
                </div>

                <!----><!----><!----><!---->

                <div class="intro-image-wrapper has-title-on-image">
                  <!---->
                  <div class="intro-title title-on-image">
                    Quản trị email server
                  </div>
                  <div class="title-sub subtitle-on-image">
                    Hỗ trợ nhanh chóng – Giải quyết triệt để – Vận hành ổn định
                  </div>
                  <a href="/lienhe" class="experience-button button-on-image"
                    ><span class="button-text">Trải nghiệm dịch vụ</span
                    ><img
                      src="../../assets/mailservice/title_section_1.svg"
                      alt=""
                      class="button-icon" /></a
                  ><img
                    src="../../assets/mailservice/email-server.png"
                    alt="Quản trị email server"
                    class="intro-image"
                  />
                </div>
                <!---->
              </div>
              <div class="introduction-section py-10 md:py-20">
                <div class="intro-bg-overlay"></div>
                <div class="container mx-auto px-0 md:px-10">
                  <div class="flex flex-col gap-8 justify-center items-center">
                    <span class="intro-tag">EMAIL SERVER</span
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
                      >Email là công cụ liên lạc không thể thiếu đối với mọi
                      doanh nghiệp. Tuy nhiên, trong quá trình sử dụng, các sự
                      cố phát sinh từ phía người dùng như không gửi/nhận được
                      email, cấu hình sai, hoặc lỗi bảo mật... có thể ảnh hưởng
                      nghiêm trọng đến công việc.
                      <span class="highlight-text"
                        >Dịch vụ Quản trị Email Server</span
                      >
                      của chúng tôi giúp xử lý
                      <span class="highlight-text"
                        >nhanh chóng, chính xác các sự cố</span
                      >, đảm bảo hệ thống email luôn thông suốt, an toàn và tối
                      ưu hiệu suất.</span
                    ><!---->
                  </div>
                </div>
              </div>
              <div class="benefit-section py-10 md:py-20">
                <div class="container mx-auto px-0 md:px-10">
                  <div class="flex flex-col gap-8 justify-center items-center">
                    <span class="section-title text-nowrap"
                      >LỢI ÍCH KHI SỬ DỤNG DỊCH VỤ</span
                    ><img
                      src="../../assets/mailservice/section_break_line.svg"
                      alt="divider"
                      class="divider"
                    />
                    <div
                      class="grid-wrapper mt-10 flex justify-center items-center wrap-gap"
                    >
                      <div class="grid-item">
                        <img
                          src="../../assets/mailservice/1.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div class="description" style="white-space: pre-line">
                          GIỮ CHO HỆ THỐNG EMAIL LUÔN HOẠT ĐỘNG ỔN ĐỊNH.
                        </div>
                        <img
                          class="bottom-svg"
                          src="../../assets/mailservice/benefit_section_1.svg"
                          alt="bottom"
                          loading="lazy"
                        />
                      </div>
                      <div class="grid-item">
                        <img
                          src="../../assets/mailservice/2.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div class="description" style="white-space: pre-line">
                          BẢO MẬT CAO, TRÁNH MẤT DỮ LIỆU QUAN TRỌNG
                        </div>
                        <img
                          class="bottom-svg"
                          src="../../assets/mailservice/benefit_section_1.svg"
                          alt="bottom"
                          loading="lazy"
                        />
                      </div>
                      <div class="grid-item">
                        <img
                          src="../../assets/mailservice/3.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div class="description" style="white-space: pre-line">
                          TIẾT KIỆM THỜI GIAN &amp; CHI PHÍ CHO DOANH NGHIỆP
                        </div>
                        <img
                          class="bottom-svg"
                          src="../../assets/mailservice/benefit_section_1.svg"
                          alt="bottom"
                          loading="lazy"
                        />
                      </div>
                      <div class="grid-item">
                        <img
                          src="../../assets/mailservice/4.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div class="description" style="white-space: pre-line">
                          ĐƯỢC HỖ TRỢ BỞI ĐỘI NGŨ KỸ THUẬT CHUYÊN MÔN CAO.
                        </div>
                        <img
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
            <div class="pricing-section">
              <div class="container mx-auto">
                <h2 class="pricing-title">
                  Bảng giá dịch vụ Quản trị Email Server
                </h2>
                <div class="line-break">
                  <img
                    src="../../assets/mailservice/section_break_line.svg"
                    alt=""
                  />
                </div>
                <div class="pricing-subtitle">
                  Hỗ trợ theo sự cố lẻ:
                  <span>Từ 200.000 – 500.000 VNĐ/lần</span> (tùy mức độ phức
                  tạp).
                </div>
              </div>
              <div class="pricing-base">
                <div class="container mx-auto">
                  <div class="pricing-grid">
                    <div class="pricing-box">
                      <div class="pricing-box-inner">
                        <div class="best-deal-badge">
                          <!---->
                        </div>
                        <div class="pricing-card">
                          <img
                            src="../../assets/mailservice/price_list_section_1.svg"
                            alt=""
                            class="plan-icon"
                            loading="lazy"
                          />
                          <h3 class="plan-name">Free</h3>
                          <div class="plan-price">
                            <span class="price-value">$0</span
                            ><span class="price-slash">/</span
                            ><span class="price-period">month</span>
                          </div>
                          <!---->
                          <div class="divider"></div>
                          <ul class="features-list">
                            <li class="feature-item">
                              <img
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span>Hỗ trợ xử lý sự cố</span>
                            </li>
                            <li class="feature-item">
                              <img
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span>Hướng dẫn cấu hình cơ bản</span>
                            </li>
                          </ul>
                          <a href="/lienhe" class="cta-button"
                            ><button>Bắt Đầu</button></a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="pricing-box">
                      <div class="pricing-box-inner has-best-deal">
                        <div class="best-deal-badge">
                          <img
                            src="../../assets/mailservice/enter.svg"
                            alt=""
                          /><span>Best deal</span>
                        </div>
                        <div class="pricing-card">
                          <img
                            src="../../assets/mailservice/price_list_section_3.svg"
                            alt=""
                            class="plan-icon"
                            loading="lazy"
                          />
                          <h3 class="plan-name">Pro</h3>
                          <div class="plan-price">
                            <span class="price-value">$29</span
                            ><span class="price-slash">/</span
                            ><span class="price-period">month</span>
                          </div>
                          <!---->
                          <div class="divider"></div>
                          <ul class="features-list">
                            <li class="feature-item">
                              <img
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span>Hỗ trợ TeamViewer/UltraViewer</span>
                            </li>
                            <li class="feature-item">
                              <img
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span>Phân tích lỗi chuyên sâu</span>
                            </li>
                            <li class="feature-item">
                              <img
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span>Cấu hình nâng cao</span>
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
                    <div class="pricing-box">
                      <div class="pricing-box-inner">
                        <div class="best-deal-badge">
                          <!---->
                        </div>
                        <div class="pricing-card">
                          <img
                            src="../../assets/mailservice/price_list_section_1.svg"
                            alt=""
                            class="plan-icon"
                            loading="lazy"
                          />
                          <h3 class="plan-name">Enterprise</h3>
                          <div class="plan-price">
                            <span class="price-value"></span
                            ><!---->
                          </div>
                          <!---->
                          <div class="divider"></div>
                          <ul class="features-list">
                            <li class="feature-item">
                              <img
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span>Toàn bộ dịch vụ</span>
                            </li>
                            <li class="feature-item">
                              <img
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span>Hỗ trợ ưu tiên cao 24/7</span>
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
            <div class="container mx-auto px-0 md:px-10">
              <div class="service-content-section">
                <h2 class="section-title">Nội dung dịch vụ</h2>
                <div class="line-break">
                  <img
                    src="../../assets/mailservice/section_break_line.svg"
                    alt=""
                  />
                </div>
                <div class="content-grid">
                  <div class="content-box box-5-12">
                    <div class="box-top">
                      <img
                        src="../../assets/mailservice/email-server-content-1.png"
                        alt=""
                        class="box-image box-image-5-12"
                        loading="lazy"
                      />
                    </div>
                    <div class="box-number">01</div>
                    <h3 class="box-title">
                      Hỗ trợ khách hàng xử lý sự cố email
                    </h3>
                    <div class="box-text-list">
                      <ul>
                        <li>Tiếp nhận và phân tích lỗi từ phía người dùng.</li>
                        <li>
                          Đưa ra giải pháp khắc phục nhanh, giảm thiểu thời gian
                          gián đoạn.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="content-box box-7-12">
                    <div class="box-top">
                      <img
                        src="../../assets/mailservice/email-server-content-2.png"
                        alt=""
                        class="box-image box-image-7-12"
                        loading="lazy"
                      />
                    </div>
                    <div class="box-number">02</div>
                    <h3 class="box-title">
                      Kiểm tra &amp; phân tích lỗi chuyên sâu
                    </h3>
                    <div class="box-text-list box-text-list-7-12">
                      <ul>
                        <li>
                          Xác định nguyên nhân gốc rễ (cấu hình, phần mềm, bảo
                          mật…).
                        </li>
                        <li>
                          Đưa ra hướng xử lý triệt để, ngăn ngừa tái phát.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="content-box box-equal">
                    <div class="box-top">
                      <img
                        src="../../assets/mailservice/email-server-content-3.png"
                        alt=""
                        class="box-image box-image-equal"
                        loading="lazy"
                      />
                    </div>
                    <div class="box-number">03</div>
                    <h3 class="box-title">
                      Hướng dẫn cấu hình &amp; sử dụng email
                    </h3>
                    <div class="box-text-list">
                      <ul>
                        <li>
                          Cài đặt email trên các thiết bị và ứng dụng quản lý.
                        </li>
                        <li>
                          Hướng dẫn sử dụng các tính năng nâng cao (lọc thư rác,
                          sao lưu, nhóm người nhận…).
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="content-box box-equal">
                    <div class="box-top">
                      <img
                        src="../../assets/mailservice/email-server-content-4.png"
                        alt=""
                        class="box-image box-image-equal"
                        loading="lazy"
                      />
                    </div>
                    <div class="box-number">04</div>
                    <h3 class="box-title">
                      Hỗ trợ từ xa qua TeamViewer / UltraViewer
                    </h3>
                    <div class="box-text-list">
                      <ul>
                        <li>
                          Kết nối và xử lý trực tiếp trên thiết bị của khách
                          hàng.
                        </li>
                        <li>Tiết kiệm thời gian, đảm bảo hiệu quả.</li>
                      </ul>
                    </div>
                  </div>
                  <div class="content-box box-equal">
                    <div class="box-top">
                      <img
                        src="../../assets/mailservice/email-server-content-5.png"
                        alt=""
                        class="box-image box-image-equal"
                        loading="lazy"
                      />
                    </div>
                    <div class="box-number">05</div>
                    <h3 class="box-title">Hỗ trợ kỹ thuật ưu tiên cao</h3>
                    <div class="box-text-list">
                      <ul>
                        <li>
                          Phản hồi nhanh, tiếp nhận yêu cầu khẩn cấp 24/7.
                        </li>
                      </ul>
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
.bg-color {
  background-color: black;
  overflow: hidden;
}
.intro-service > *:not(.intro-bg-cover):not(.sticker-container) {
  position: relative;
  z-index: 2;
}
[data-page="emailServer"] .intro-image {
  max-width: 1368px;
  width: 100%;
}
[data-page="emailServer"] .intro-image-wrapper {
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  max-width: none;
}
[data-page="emailServer"] header {
  z-index: 10;
  height: auto;
}
</style>
