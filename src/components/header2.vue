<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const servicesOpen = ref(false);

function toggleServices() {
  servicesOpen.value = !servicesOpen.value;
}

function handleClickOutside(e) {
  if (!e.target.closest(".services-menu-wrapper")) {
    servicesOpen.value = false;
  }
}

onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));
</script>
<template>
  <section data-v-4384b71e>
    <div
      class="xl:block hidden bg-[#211f1e] px-10 py-4 rounded rounded-[38px] border border-[#3A3A3A]"
    >
      <div class="flex justify-between items-center">
        <a
          href="/vi"
          class="router-link-active router-link-exact-active"
          aria-current="page"
          ><img src="../assets/logo.svg" alt=""
        /></a>
        <div class="flex text-white gap-5">
          <a href="/vi/about-us" class="flex items-center" data-name="about"
            >Về LOT</a
          ><img src="../assets/icon-header.svg" alt="" /><a
            href="/vi/environment"
            class="flex items-center"
            data-name="environment"
            >Hệ sinh thái LOT</a
          ><img class="" src="../assets/icon-header.svg" alt="" />
          <div class="relative flex items-center services-menu-wrapper">
            <span
              class="cursor-pointer"
              data-name="services"
              @click="toggleServices"
            >
              Dịch vụ</span
            >
            <div class="services-dropdown">
              <div class="services-dropdown-container">
                <div class="services-dropdown-header">DỊCH VỤ LOT SOFTWARE</div>
                <div class="services-dropdown-content">
                  <div class="services-column">
                    <a href="/vi/services/email-server" class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-email-server.svg"
                        alt="Quản trị email server"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">Quản trị email server</div>
                        <div class="service-subtitle">
                          Quản lý và bảo mật email server.
                        </div>
                      </div></a
                    ><a href="/vi/services/system-analysis" class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-system-analysis.svg"
                        alt="Phân tích, thiết kế hệ thống"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Phân tích, thiết kế hệ thống
                        </div>
                        <div class="service-subtitle">
                          Phân tích, thiết kế kiến trúc phần mềm.
                        </div>
                      </div></a
                    ><a
                      href="/vi/services/cdn-infrastructure"
                      class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-cdn-infrastructure.svg"
                        alt="Hạ tầng dịch vụ mạng lưới phân phối dữ liệu (CDN)"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Hạ tầng dịch vụ mạng lưới phân phối dữ liệu (CDN)
                        </div>
                        <div class="service-subtitle">
                          Xây dựng hạ tầng CDN, phân phối nội dung nhanh.
                        </div>
                      </div></a
                    ><a
                      href="/vi/services/international-datacenter"
                      class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-international-datacenter.svg"
                        alt="Hạ tầng dịch vụ datacenter quốc tế"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Hạ tầng dịch vụ datacenter quốc tế
                        </div>
                        <div class="service-subtitle">
                          Cung cấp datacenter quốc tế hiệu suất cao.
                        </div>
                      </div></a
                    ><a href="/vi/services/smart-alert-ai" class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-smart-alert-ai.svg"
                        alt="Hệ thống cảnh báo thông minh, ứng dụng công nghệ AI"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Hệ thống cảnh báo thông minh, ứng dụng công nghệ AI
                        </div>
                        <div class="service-subtitle">
                          Giám sát an toàn, dự đoán rủi ro
                        </div>
                      </div></a
                    >
                  </div>
                  <div class="services-column">
                    <a
                      href="/vi/services/domestic-datacenter"
                      class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-domestic-datacenter.svg"
                        alt="Hạ tầng dịch vụ datacenter nội địa"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Hạ tầng dịch vụ datacenter nội địa
                        </div>
                        <div class="service-subtitle">
                          Xây dựng datacenter tại Việt Nam.
                        </div>
                      </div></a
                    ><a href="/vi/services/data-collection" class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-data-collection.svg"
                        alt="Giải pháp thu thập dữ liệu phục vụ xây dựng cơ sở dữ liệu số"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Giải pháp thu thập dữ liệu phục vụ xây dựng cơ sở dữ
                          liệu số
                        </div>
                        <div class="service-subtitle">
                          Công cụ thu thập dữ liệu cho CSDL số.
                        </div>
                      </div></a
                    ><a
                      href="/vi/services/system-integration"
                      class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-system-integration.svg"
                        alt="Dịch vụ tích hợp hệ thống"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Dịch vụ tích hợp hệ thống
                        </div>
                        <div class="service-subtitle">
                          Tích hợp hệ thống, tối ưu quy trình.
                        </div>
                      </div></a
                    ><a
                      href="/vi/services/wireframe-design"
                      class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-wireframe-design.svg"
                        alt="Dịch vụ thiết kế wireframe / mockup / prototype chuyên nghiệp"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Dịch vụ thiết kế wireframe / mockup / prototype chuyên
                          nghiệp
                        </div>
                        <div class="service-subtitle">
                          Thiết kế UI/UX, wireframe, mockup.
                        </div>
                      </div></a
                    ><a href="/vi/services/ios-development" class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-ios-development.svg"
                        alt="Dịch vụ phát triển ứng dụng dành cho IOS"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Dịch vụ phát triển ứng dụng dành cho IOS
                        </div>
                        <div class="service-subtitle">
                          Phát triển ứng dụng cho iOS.
                        </div>
                      </div></a
                    >
                  </div>
                  <div class="services-column">
                    <a
                      href="/vi/services/android-development"
                      class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-android-development.svg"
                        alt="Dịch vụ phát triển ứng dụng dành cho Android"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Dịch vụ phát triển ứng dụng dành cho Android
                        </div>
                        <div class="service-subtitle">
                          Phát triển ứng dụng cho Android.
                        </div>
                      </div></a
                    ><a href="/vi/services/cloud-platform" class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-cloud-platform.svg"
                        alt="Dịch vụ nền tảng điện toán đám mây (CLOUD)"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Dịch vụ nền tảng điện toán đám mây (CLOUD)
                        </div>
                        <div class="service-subtitle">
                          Triển khai và quản lý dịch vụ đám mây.
                        </div>
                      </div></a
                    ><a
                      href="/vi/services/technical-support"
                      class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-technical-support.svg"
                        alt="Dịch vụ hỗ trợ kỹ thuật"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">Dịch vụ hỗ trợ kỹ thuật</div>
                        <div class="service-subtitle">
                          Hỗ trợ kỹ thuật 24/7.
                        </div>
                      </div></a
                    ><a href="/vi/services/cloud-computing" class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-cloud-computing.svg"
                        alt="Dịch vụ điện toán đám mây"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Dịch vụ điện toán đám mây
                        </div>
                        <div class="service-subtitle">
                          Tư vấn, triển khai giải pháp đám mây.
                        </div>
                      </div></a
                    ><a
                      href="/vi/services/website-maintenance"
                      class="service-item"
                      ><img
                        src="../assets/icondichvu/icon-website-maintenance.svg"
                        alt="Dịch vụ chăm sóc website chuyên nghiệp"
                        class="service-icon"
                      />
                      <div class="service-text">
                        <div class="service-title">
                          Dịch vụ chăm sóc website chuyên nghiệp
                        </div>
                        <div class="service-subtitle">
                          Bảo trì, tối ưu và bảo mật website.
                        </div>
                      </div></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="" src="../assets/icon-header.svg" alt="" /><a
            href="/vi/recruitment"
            class="flex items-center"
            data-name="recruitment"
            >Tuyển dụng</a
          ><img src="../assets/icon-header.svg" alt="" /><a
            href="/vi/blogs"
            class="flex items-center"
            data-name="blogs"
            >Tin tức</a
          ><img src="../assets/icon-header.svg" alt="" /><a
            href="/vi/contact"
            class="flex items-center"
            data-name="contact"
            >Liên hệ</a
          >
        </div>
        <div class="flex items-center gap-2">
          <div class="me-2 hidden">
            <div
              class="p-select p-component p-inputwrapper p-inputwrapper-filled w-full !bg-transparent !border-0 !outline-0 justify-end !p-0"
              data-pc-name="select"
              pc1=""
              data-pc-section="root"
              id="pv_id_1"
            >
              <span
                class="p-select-label"
                tabindex="0"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="pv_id_1_list"
                aria-disabled="false"
                data-pc-section="label"
                aria-label="vi"
                ><div class="flex items-center">
                  <img
                    src="../assets/icon-vi.svg"
                    class="mr-2 flag"
                    style="width: 18px"
                  />
                  <div>vi</div>
                </div></span
              ><!---->
              <div class="p-select-dropdown" data-pc-section="dropdown">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="p-icon p-select-dropdown-icon"
                  aria-hidden="true"
                  data-pc-section="dropdownicon"
                >
                  <path
                    d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="flex items-center w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
              >
                <img src="../assets/icon-vi.svg" alt="" /><span
                  class="text-dark uppercase mx-2"
                  >vi</span
                ><svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0766221 1.24951L3.75862 5.13451C3.79356 5.17124 3.83559 5.20049 3.88218 5.22047C3.92877 5.24046 3.97893 5.25076 4.02962 5.25076C4.08031 5.25076 4.13048 5.24046 4.17706 5.22047C4.22365 5.20049 4.26569 5.17124 4.30062 5.13451L7.98662 1.24951C8.02455 1.20722 8.0497 1.15502 8.05912 1.099C8.06855 1.04297 8.06188 0.985425 8.03988 0.933045C8.01788 0.880666 7.98146 0.83561 7.93485 0.803119C7.88825 0.770628 7.83338 0.752038 7.77662 0.749512H0.287622C0.230782 0.751859 0.17578 0.770319 0.129033 0.80274C0.0822867 0.83516 0.0457216 0.880204 0.0236033 0.932617C0.00148498 0.98503 -0.00527468 1.04265 0.00411276 1.09876C0.0135002 1.15487 0.0386478 1.20715 0.0766221 1.24951Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </div>
            <!---->
          </div>
          <a href="/vi/contact" class=""
            ><div
              class="text-[#EBC57B] rounded rounded-3xl px-8 py-3"
              style="box-shadow: rgb(128, 98, 40) 0px -1px 22.1px 0px inset"
            >
              Liên hệ
            </div></a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.services-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 12px;
  z-index: 9999;
}
.services-dropdown-container {
  background: #1a1a1ab3;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px #0000004d;
}
.services-dropdown-container {
  background: #1a1a1ab3;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px #0000004d;
}
.services-dropdown-content {
  display: flex;
  gap: 20px;
  padding: 20px;
}
.services-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.service-item:hover,
.service-item.active {
  background: #ffffff0d;
  transform: translate(5px);
}
.service-item {
  display: flex;
  gap: 8px;
  padding: 6px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  animation: slideIn-20b9afde 0.3s ease forwards;
  opacity: 0;
}
.service-item:nth-child(2) {
  animation-delay: 0.1s;
}
.service-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  -o-object-fit: contain;
  object-fit: contain;
}
.service-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.service-title[data-v-20b9afde] {
  font-family: Saira, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #fff;
}
.service-subtitle[data-v-20b9afde] {
  font-family:
    SVN-Helvetica Now Display,
    Helvetica,
    sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
  color: #fffc;
}
</style>
