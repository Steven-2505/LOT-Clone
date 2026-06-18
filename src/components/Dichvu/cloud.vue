<script setup>
import Header from "../Header.vue";
import Footer from "../footer.vue";
import Headermb from "../Headermb.vue";
</script>
<template>
  <body
    data-aos-easing="ease"
    data-aos-duration="400"
    data-aos-delay="0"
    class="overlay-hiden"
  >
    <div id="app" data-v-app="">
      <div class="font-['Saira']" data-page="cloudPlatform">
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
                  class="router-link-active router-link-exact-active service-item active"
                  style="padding: 8px !important"
                  aria-current="page"
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
            data-v-3b3a86a5=""
            class="min-h-screen bg-black text-white pb-10"
          >
            <div class="header-section">
              <Header></Header>
              <Headermb></Headermb>
            </div>
            <div data-v-3b3a86a5="" class="container mx-auto px-0 md:px-10">
              <div
                data-v-5402c78a=""
                data-v-3b3a86a5=""
                class="intro-service has-title-on-image"
              >
                <!----><!----><!----><!----><!---->
                <div
                  data-v-5402c78a=""
                  class="intro-image-wrapper has-title-on-image"
                >
                  <!---->
                  <div data-v-5402c78a="" class="intro-title title-on-image">
                    Dịch vụ nền tảng điện toán đám mây (CLOUD)
                  </div>
                  <div data-v-5402c78a="" class="title-sub subtitle-on-image">
                    OpenStack OPC – Giải pháp hạ tầng đám mây mạnh mẽ, linh hoạt
                    và tiết kiệm chi phí
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
                    src="../../assets/cloud/cloud-platform.png"
                    alt="Dịch vụ nền tảng điện toán đám mây (CLOUD)"
                    class="intro-image w-full pb-180px"
                  />
                  <div data-v-3b3a86a5="" class="bottom-cover-wrapper">
                    <img
                      data-v-3b3a86a5=""
                      src="../../assets/ios/bg-cover-bottom-3.png"
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
                data-v-3b3a86a5=""
                class="introduction-section py-10 md:py-20"
              >
                <div class="intro-bg-overlay"></div>
                <div class="container mx-auto px-0 md:px-10">
                  <div class="flex flex-col gap-8 justify-center items-center">
                    <span class="intro-tag">OPENSTACK OPC</span
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
                      ><span class="highlight-text"
                        >OpenStack OPC (Open-Private-Cloud)</span
                      >
                      là dịch vụ điện toán đám mây được phát triển dựa trên nền
                      tảng công nghệ mở OpenStack - giải pháp được nhiều công ty
                      công nghệ trong và ngoài nước nghiên cứu, triển khai để
                      đáp ứng nhu cầu lưu trữ, quản lý và xử lý dữ liệu hiện
                      đại. Nhờ tính
                      <span class="highlight-text"
                        >mở, linh hoạt và khả năng mở rộng</span
                      >, OpenStack hiện là một trong những công nghệ được các
                      nhà cung cấp dịch vụ Cloud hàng đầu trên thế giới tin
                      dùng. Với OPC, doanh nghiệp có thể dễ dàng xây dựng hạ
                      tầng điện toán đám mây riêng, đảm bảo
                      <span class="highlight-text"
                        >bảo mật, hiệu suất cao và chi phí tối ưu.</span
                      ></span
                    ><!---->
                  </div>
                </div>
              </div>
              <div
                data-v-c615a816=""
                data-v-3b3a86a5=""
                class="key-advantages-section"
              >
                <h2 data-v-c615a816="" class="section-title">
                  ƯU ĐIỂM NỔI BẬT
                </h2>
                <div data-v-c615a816="" class="line-break">
                  <img
                    data-v-c615a816=""
                    src="../../assets/mailservice/section_break_line.svg"
                    alt=""
                  />
                </div>
                <div data-v-c615a816="" class="advantages-container">
                  <div data-v-c615a816="" class="advantages-content">
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Tiết kiệm chi phí
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Không cần đầu tư hạ tầng vật lý tốn kém
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-1.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Khả năng xử lý mạnh mẽ
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Đáp ứng nhu cầu tính toán và lưu trữ lớn
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-2.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Dễ dàng chuyển đổi
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Hỗ trợ di chuyển dữ liệu, hệ thống linh hoạt
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-3.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Giao diện quản trị trực quan, dễ sử dụng
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Thân thiện với cả người mới
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-4.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Dễ dàng tích hợp (API)
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Kết nối mượt mà với các ứng dụng và hệ thống khác
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-5.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Tài liệu hướng dẫn rõ ràng
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Hỗ trợ người dùng nhanh chóng làm chủ hệ thống
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-6.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Tính linh hoạt trong quản lý
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Tùy chỉnh cấu hình theo nhu cầu
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-7.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Nhiều công cụ và tiện ích hỗ trợ
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Giúp quản trị và vận hành hiệu quả hơn
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-8.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Tính sẵn sàng cao
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Đảm bảo dịch vụ hoạt động liên tục, không gián đoạn
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-9.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Bảng điều khiển trực quan
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Quản lý dễ dàng, theo dõi hiệu suất tức thì
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-10.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Tương thích cao với nhiều thiết bị
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Server, Network, Storage đa dạng
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-11.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                    <div data-v-c615a816="" class="advantage-box">
                      <h3 data-v-c615a816="" class="advantage-title">
                        Mở rộng và nâng cấp dễ dàng
                      </h3>
                      <p data-v-c615a816="" class="advantage-description">
                        Không ảnh hưởng đến dịch vụ khi bảo trì
                      </p>
                      <img
                        data-v-c615a816=""
                        src="../../assets/cloud/cloud-platform-12.png"
                        alt=""
                        class="advantage-image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div data-v-c615a816="" class="advantages-footer">
                    <img
                      data-v-c615a816=""
                      src="../../assets/cloud/bottom-line-left.svg"
                      alt=""
                      class="footer-line-left"
                      loading="lazy"
                    /><a href="/contact" data-v-b1f94cc2="" class="cta-button">
                      <button>Liên hệ ngay</button></a
                    >
                    <img
                      data-v-c615a816=""
                      src="../../assets/cloud/bottom-line-right.svg"
                      alt=""
                      class="footer-line-right"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div
                data-v-4cf61cd5=""
                data-v-3b3a86a5=""
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
                          src="../../assets/cloud/1.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          CHỦ ĐỘNG QUẢN LÝ HẠ TẦNG mà không phụ thuộc vào bên
                          thứ ba.
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
                          src="../../assets/cloud/1.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          MỞ RỘNG DỄ DÀNG khi nhu cầu tăng cao.
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
                          src="../../assets/cloud/1.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          ĐẢM BẢO AN TOÀN DỮ LIỆU với hạ tầng Cloud riêng
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
                          src="../../assets/cloud/1.png"
                          alt="benefit icon"
                          loading="lazy"
                        />
                        <div
                          data-v-4cf61cd5=""
                          class="description"
                          style="white-space: pre-line"
                        >
                          TỐI ƯU CHI PHÍ so với đầu tư hạ tầng vật lý
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
            <div data-v-b1f94cc2="" data-v-3b3a86a5="" class="pricing-section">
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
                            Cá nhân, startup nhỏ
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
                                >Hạ tầng Cloud riêng</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2="">Quản trị cơ bản</span>
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Hỗ trợ kỹ thuật giờ hành chính</span
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
                                >Tài nguyên mở rộng</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Quản trị nâng cao</span
                              >
                            </li>
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Hỗ trợ API &amp; tích hợp hệ thống</span
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
                            Doanh nghiệp lớn, tổ chức yêu cầu cao
                          </div>
                          <div data-v-b1f94cc2="" class="divider"></div>
                          <ul data-v-b1f94cc2="" class="features-list">
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2="">Hiệu suất tối đa</span>
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
                            <li data-v-b1f94cc2="" class="feature-item">
                              <img
                                data-v-b1f94cc2=""
                                src="../../assets/mailservice/price_list_section_2.svg"
                                alt=""
                                loading="lazy"
                              /><span data-v-b1f94cc2=""
                                >Bảo mật nâng cao &amp; giám sát liên tục</span
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
          </section>
        </div>
        <Footer></Footer>
      </div>
    </div>

    <!---->
  </body>
</template>
<style>
[data-page="cloudPlatform"] .bottom-cover-wrapper {
  position: absolute;
  left: 0px;
  width: 100%;
  top: 80%;
  height: auto;
  z-index: 1;
}
[data-page="cloudPlatform"] .bottom-cover-image {
  width: 100%;
  display: block;
}
[data-page="cloudPlatform"] .subtitle-on-image {
  top: 265px;
}
[data-page="cloudPlatform"] .button-on-image {
  top: 315px;
}
</style>
