<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
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
                class="router-link-active router-link-exact-active flex items-center active"
                data-name="blogs"
                aria-current="page"
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
        <div class="header-section">
          <Header></Header>
        </div>
        <div>
          <div
            class="flex justify-center item-center"
            :style="{
              backgroundImage: 'url(../assets/background-shadow.svg)',
              backgroundPosition: 'center center',
            }"
          >
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
                    class="swiper swiper-initialized swiper-horizontal relative scroll-custom swiper-backface-hidden"
                  >
                    <div
                      class="swiper-wrapper"
                      style="transform: translate3d(0px, 0px, 0px)"
                    >
                      <div
                        class="swiper-slide swiper-slide-active active"
                        style="width: 256px"
                      >
                        <div
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
                          class="inline-block cursor-pointer w-full text-nowrap text-center relative mb-[30px]"
                        >
                          NEX NOW
                        </div>
                        <!---->
                      </div>
                      <div class="swiper-slide" style="width: 256px">
                        <div
                          class="inline-block cursor-pointer w-full text-nowrap text-center relative mb-[30px]"
                        >
                          Địa điểm nghỉ dưỡng
                        </div>
                        <!---->
                      </div>
                      <div class="swiper-slide" style="width: 256px">
                        <div
                          class="inline-block cursor-pointer w-full text-nowrap text-center relative mb-[30px]"
                        >
                          Ẩm thực trải nghiệm
                        </div>
                        <!---->
                      </div>
                      <div class="swiper-slide" style="width: 256px">
                        <div
                          class="inline-block cursor-pointer w-full text-nowrap text-center relative mb-[30px]"
                        >
                          Kinh doanh F&amp;B
                        </div>
                        <!---->
                      </div>
                      <div class="swiper-slide" style="width: 256px">
                        <div
                          class="inline-block cursor-pointer w-full text-nowrap text-center relative mb-[30px]"
                        >
                          Tin tức nổi bật
                        </div>
                        <!---->
                      </div>
                    </div>
                    <!----><!----><!---->
                  </div>
                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                  >
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/homestay-nha-vuon-trai-nghiem-nghi-duong-xanh-mat-giua-thien-nhien"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/687/72a/83c/68772a83c0eab909423871.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">16-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/homestay-nha-vuon-trai-nghiem-nghi-duong-xanh-mat-giua-thien-nhien"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >Homestay Nhà Vườn: Trải Nghiệm Nghỉ Dưỡng Xanh Mát
                            Giữa Thiên Nhiên</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            Khám phá 10 homestay nhà vườn xanh mát! Trải nghiệm
                            thiên nhiên, nông trại độc đáo, chi phí hợp lý. Lựa
                            chọn lý tưởng cho du lịch xanh và nghỉ dưỡng thư
                            giãn.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/tron-pho-ve-voi-goc-xanh-binh-yen-tai-cherry-suites-dalat"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/687/4de/bce/6874debce9cdb192777986.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">15-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/tron-pho-ve-voi-goc-xanh-binh-yen-tai-cherry-suites-dalat"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >Trốn Phố Về Với Góc Xanh Bình Yên Tại Cherry Suites
                            Dalat</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            Cherry Suites Dalat – homestay xanh yên tĩnh, phòng
                            rộng rãi, decor tinh tế, gần trung tâm Đà Lạt, lý
                            tưởng để sống chậm và nghỉ dưỡng.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/pandora-beauty-clinic-phong-kham-da-lieu-chuyen-sau-tai-tphcm"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/687/484/f14/687484f147b3f048840560.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">14-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/pandora-beauty-clinic-phong-kham-da-lieu-chuyen-sau-tai-tphcm"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >Pandora Beauty Clinic – Phòng khám da liễu chuyên
                            sâu tại TP.HCM</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            Pandora Beauty Clinic – Phòng khám da liễu chuyên
                            sâu tại TP.HCM, ứng dụng công nghệ cao &amp; mỹ phẩm
                            y khoa. Liệu trình 1:1, hiệu quả rõ rệt.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/top-15-quan-cafe-dep-o-sai-gon-kham-pha-khong-gian-doc-dao"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/687/24f/55b/68724f55b32cc949914917.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">13-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/top-15-quan-cafe-dep-o-sai-gon-kham-pha-khong-gian-doc-dao"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >Top 15 Quán Cafe Đẹp Ở Sài Gòn: Khám Phá Không Gian
                            Độc Đáo</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            Khám phá 15 quán cafe đẹp ở Sài Gòn – từ không gian
                            cổ điển đến hiện đại, lý tưởng để thư giãn, làm việc
                            hay sống ảo giữa lòng thành phố nhộn nhịp.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/mo-stay-forest-resort-cham-den-su-tinh-lang-giua-rung-thong"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/687/0e1/eb9/6870e1eb91846941033370.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">12-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/mo-stay-forest-resort-cham-den-su-tinh-lang-giua-rung-thong"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >Mơ Stay Forest Resort: Chạm Đến Sự Tĩnh Lặng Giữa
                            Rừng Thông</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            Mơ Stay Forest Resort Đà Lạt mang đến trải nghiệm
                            nghỉ dưỡng giữa rừng thông, nhà gỗ mộc mạc, không
                            gian riêng tư và thiên nhiên đầy cảm hứng.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/nha-soi-homestay-goc-binh-yen-giua-long-da-lat"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/687/250/9b0/6872509b0ec33521563047.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">12-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/nha-soi-homestay-goc-binh-yen-giua-long-da-lat"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >Nhà Sói Homestay Góc Bình Yên Giữa Lòng Đà Lạt</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            Nhà Sói Homestay Đà Lạt – homestay view đồi kính,
                            phong cách vintage, sân vườn đầy hoa, phù hợp nghỉ
                            dưỡng và tận hưởng không khí trong lành của Đà Lạt.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/top-9-dia-diem-buffet-ngon-tai-sai-gon-dang-trai-nghiem-nhat"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/687/0d4/0a8/6870d40a8579c859556954.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">11-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/top-9-dia-diem-buffet-ngon-tai-sai-gon-dang-trai-nghiem-nhat"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >Top 9 Địa Điểm Buffet Ngon Tại Sài Gòn Đáng Trải
                            Nghiệm Nhất</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            Khám phá top 9 địa điểm buffet ngon tại Sài Gòn
                            2025: đa dạng món nướng, lẩu, sushi, từ bình dân đến
                            cao cấp, phù hợp mọi nhu cầu ăn uống.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/trai-nghiem-nghi-duong-dang-cap-tai-boutique-villa-22-dalat"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/686/f90/082/686f900821c72549683816.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">11-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/trai-nghiem-nghi-duong-dang-cap-tai-boutique-villa-22-dalat"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >Trải Nghiệm Nghỉ Dưỡng Đẳng Cấp Tại Boutique Villa
                            22 Dalat</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            Khám phá Boutique Villa 22 Dalat - biệt thự sang
                            trọng, vị trí trung tâm, tiện nghi đẳng cấp. Đặt
                            phòng dễ dàng qua Nex Now.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/5-cong-vien-giai-tri-o-tphcm-dia-diem-ly-tuong-cho-cuoi-tuan"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/686/cfd/767/686cfd7674a64844809997.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">09-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/5-cong-vien-giai-tri-o-tphcm-dia-diem-ly-tuong-cho-cuoi-tuan"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >5 Công Viên Giải Trí Ở TP.HCM - Địa Điểm Lý Tưởng
                            Cho Cuối Tuần</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            Khám phá 5 công viên giải trí ở TP.HCM - Lựa chọn
                            tuyệt vời cho cuối tuần thư giãn cùng gia đình, nhóm
                            bạn và trẻ nhỏ với nhiều hoạt động hấp dẫn!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/hair-salon-spa-leo-lam-dep-toan-dien-tai-binh-thanh"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/686/b7d/d8e/686b7dd8ea644254273937.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">07-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/hair-salon-spa-leo-lam-dep-toan-dien-tai-binh-thanh"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >Hair Salon Spa Leo – Làm Đẹp Toàn Diện Tại Bình
                            Thạnh</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            Hair Salon Spa Leo – Địa chỉ làm đẹp toàn diện tại
                            Bình Thạnh. Chăm sóc tóc, da, massage, giảm béo
                            chuyên sâu. Đặt chỗ dễ dàng qua NEX NOW.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/ga-ngon-huong-huong-quan-ga-ta-chuan-vi-tai-thu-duc"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/686/3b0/8c4/6863b08c476b8427626392.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">01-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/ga-ngon-huong-huong-quan-ga-ta-chuan-vi-tai-thu-duc"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >Gà Ngon Hương Hương - Quán Gà Ta Chuẩn Vị Tại Thủ
                            Đức</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            Khám phá Gà Ngon Hương Hương tại Thủ Đức – quán gà
                            ta tươi chuẩn VietGAP. Đặt bàn nhanh qua NEX NOW,
                            thưởng thức ẩm thực quê hương đậm đà!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-[#000] border p-4 my-3 rounded-lg"
                      style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    >
                      <a
                        target="_blank"
                        class="mr-3"
                        href="blog/detail/new-wave-resort-vung-tau-diem-den-ly-tuong-cho-ky-nghi"
                        ><img
                          src="https://res.cloudinary.com/nifehub-production/image/upload/public/686/267/431/6862674317031096624785.png"
                          alt=""
                          style="
                            aspect-ratio: 127 / 78;
                            object-fit: cover;
                            cursor: pointer;
                          "
                      /></a>
                      <div>
                        <div class="flex mb-3">
                          <img
                            class="mr-3"
                            src="../assets/icon-clock.svg"
                            alt=""
                          /><span class="text-[#FFFFFFB2]">01-07-2025</span>
                        </div>
                        <div class="flex-grow">
                          <a
                            target="_blank"
                            href="blog/detail/new-wave-resort-vung-tau-diem-den-ly-tuong-cho-ky-nghi"
                            class="hover:text-gray-600 text-[16px] font-bold line-clamp-2 h-[48px]"
                            >New Wave Resort Vũng Tàu - Điểm Đến Lý Tưởng Cho Kỳ
                            Nghỉ</a
                          >
                          <p class="mt-2 text-[#FFFFFFB2] line-clamp-2">
                            New Wave Resort Vũng Tàu điểm đến lý tưởng cho một
                            kỳ nghỉ trọn vẹn dành cho bạn và gia đình với nhiều
                            hạng phòng và tiện ích tiện nghi…
                          </p>
                        </div>
                      </div>
                    </div>
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
        <Footer></Footer>
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
