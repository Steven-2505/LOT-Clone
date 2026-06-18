<script setup>
import logo from "../assets/logo.svg";
import iconheader from "../assets/icon-header.svg";
import iconvi from "../assets/icon-vi.svg";
import iconen from "../assets/icon-en.svg";
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const isServicesActive = computed(() => route.path.startsWith("/services"));
const servicesOpen = ref(false);
const isOpen = ref(false);

function toggleServices(e) {
  e.stopPropagation();
  servicesOpen.value = !servicesOpen.value;
  isOpen.value = false; // đóng dropdown ngôn ngữ nếu đang mở
}

function toggleDropdown(e) {
  e.stopPropagation();
  isOpen.value = !isOpen.value;
  servicesOpen.value = false; // đóng dropdown dịch vụ nếu đang mở
}

function handleClickOutside(e) {
  if (!e.target.closest(".services-menu-wrapper")) {
    servicesOpen.value = false;
  }
  if (!e.target.closest(".relative")) {
    isOpen.value = false;
  }
}

function handleScroll() {
  servicesOpen.value = false;
  isOpen.value = false;
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <header class="navbar">
    <div class="navbar-inner">
      <RouterLink class="logo" to="/">
        <img :src="logo" alt="Logo" />
      </RouterLink>

      <nav class="navbar-menu">
        <RouterLink class="menu" to="/About-us">Về LOT</RouterLink>
        <img :src="iconheader" alt="" />
        <RouterLink to="/environment">Hệ Sinh Thái LOT</RouterLink>
        <img :src="iconheader" alt="" />
        <div class="relative flex items-center services-menu-wrapper">
          <span
            :class="{ 'is-active': isServicesActive }"
            class="cursor-pointer dich-vu-link"
            data-name="services"
            @click="toggleServices"
          >
            Dịch vụ</span
          >
        </div>
        <img :src="iconheader" alt="" />
        <RouterLink class="menu" to="/tuyendung">Tuyển Dụng</RouterLink>
        <img :src="iconheader" alt="" />
        <RouterLink class="menu" to="/blogs">Tin Tức</RouterLink>
        <img :src="iconheader" alt="" />
        <RouterLink class="menu" to="/contact">Liên Hệ</RouterLink>
        <img :src="iconheader" alt="" />
      </nav>
      <div class="flex items-center gap-3">
        <div class="relative inline-block text-left">
          <button
            @click="toggleDropdown"
            class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-base font-saita"
            aria-haspopup="true"
            :aria-expanded="isOpen"
          >
            <img :src="iconvi" />
            VI
            <svg
              class="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <Transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <div
              v-if="isOpen"
              class="p-4 absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
            >
              <div
                class="flex-col inline-flex w-full justify-center gap-x-1.5 bg-white font-saita text-gray-900 text-base"
              >
                <div class="inline-flex w-full justify-center gap-x-3">
                  <img :src="iconvi" />
                  <span>VI</span>
                </div>
                <div class="inline-flex w-full justify-center gap-x-3">
                  <img :src="iconen" />
                  <span>EN</span>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <div class="btn-contact">
          <button>Liên Hệ</button>
        </div>
      </div>
    </div>
    <div class="services-dropdown" v-show="servicesOpen">
      <div class="services-dropdown-container">
        <div class="services-dropdown-header">DỊCH VỤ LOT SOFTWARE</div>
        <div class="services-dropdown-content">
          <div class="services-column">
            <a href="/services/email-server" class="service-item"
              ><img
                src="../assets/icondichvu/bg-content.svg"
                alt="Quản trị email server"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/"
                  >Quản trị email server</Routerlink
                >
                <div class="service-subtitle">
                  Quản lý và bảo mật email server.
                </div>
              </div></a
            ><a href="/services/system-analysis" class="service-item"
              ><img
                src="../assets/icondichvu/icon-system-analysis.svg"
                alt="Phân tích, thiết kế hệ thống"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/"
                  >Phân tích, thiết kế hệ thống</Routerlink
                >
                <div class="service-subtitle">
                  Phân tích, thiết kế kiến trúc phần mềm.
                </div>
              </div></a
            ><a href="/services/cdn" class="service-item"
              ><img
                src="../assets/icondichvu/icon-cdn-infrastructure.svg"
                alt="Hạ tầng dịch vụ mạng lưới phân phối dữ liệu (CDN)"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/cdn">
                  Hạ tầng dịch vụ mạng lưới phân phối dữ liệu (CDN)
                </Routerlink>
                <div class="service-subtitle">
                  Xây dựng hạ tầng CDN, phân phối nội dung nhanh.
                </div>
              </div></a
            ><a href="/services/international" class="service-item"
              ><img
                src="../assets/icondichvu/icon-international-datacenter.svg"
                alt="Hạ tầng dịch vụ datacenter quốc tế"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title">
                  Hạ tầng dịch vụ datacenter quốc tế
                </Routerlink>
                <div class="service-subtitle">
                  Cung cấp datacenter quốc tế hiệu suất cao.
                </div>
              </div></a
            ><a href="/services/AI" class="service-item"
              ><img
                src="../assets/icondichvu/icon-smart-alert-ai.svg"
                alt="Hệ thống cảnh báo thông minh, ứng dụng công nghệ AI"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/">
                  Hệ thống cảnh báo thông minh, ứng dụng công nghệ AI
                </Routerlink>
                <div class="service-subtitle">
                  Giám sát an toàn, dự đoán rủi ro
                </div>
              </div></a
            >
          </div>
          <div class="services-column">
            <a href="/services/domestic" class="service-item"
              ><img
                src="../assets/icondichvu/icon-domestic-datacenter.svg"
                alt="Hạ tầng dịch vụ datacenter nội địa"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/">
                  Hạ tầng dịch vụ datacenter nội địa
                </Routerlink>
                <div class="service-subtitle">
                  Xây dựng datacenter tại Việt Nam.
                </div>
              </div></a
            ><a href="/services/data-collection" class="service-item"
              ><img
                src="../assets/icondichvu/icon-data-collection.svg"
                alt="Giải pháp thu thập dữ liệu phục vụ xây dựng cơ sở dữ liệu số"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/">
                  Giải pháp thu thập dữ liệu phục vụ xây dựng cơ sở dữ liệu số
                </Routerlink>
                <div class="service-subtitle">
                  Công cụ thu thập dữ liệu cho CSDL số.
                </div>
              </div></a
            ><a href="/services/system-integration" class="service-item"
              ><img
                src="../assets/icondichvu/icon-system-integration.svg"
                alt="Dịch vụ tích hợp hệ thống"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/"
                  >Dịch vụ tích hợp hệ thống</Routerlink
                >
                <div class="service-subtitle">
                  Tích hợp hệ thống, tối ưu quy trình.
                </div>
              </div></a
            ><a href="/services/wireframe-design" class="service-item"
              ><img
                src="../assets/icondichvu/icon-wireframe-design.svg"
                alt="Dịch vụ thiết kế wireframe / mockup / prototype chuyên nghiệp"
                class="service-icon"
              />
              <div class="service-text">
                <div class="service-title">
                  Dịch vụ thiết kế wireframe / mockup / prototype chuyên nghiệp
                </div>
                <div class="service-subtitle">
                  Thiết kế UI/UX, wireframe, mockup.
                </div>
              </div></a
            ><a href="/services/ios-development" class="service-item"
              ><img
                src="../assets/icondichvu/icon-ios-development.svg"
                alt="Dịch vụ phát triển ứng dụng dành cho IOS"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/">
                  Dịch vụ phát triển ứng dụng dành cho IOS
                </Routerlink>
                <div class="service-subtitle">Phát triển ứng dụng cho iOS.</div>
              </div></a
            >
          </div>
          <div class="services-column">
            <a href="/services/android-development" class="service-item"
              ><img
                src="../assets/icondichvu/icon-android-development.svg"
                alt="Dịch vụ phát triển ứng dụng dành cho Android"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/">
                  Dịch vụ phát triển ứng dụng dành cho Android
                </Routerlink>
                <div class="service-subtitle">
                  Phát triển ứng dụng cho Android.
                </div>
              </div></a
            ><a href="/services/cloud-platform" class="service-item"
              ><img
                src="../assets/icondichvu/icon-cloud-platform.svg"
                alt="Dịch vụ nền tảng điện toán đám mây (CLOUD)"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/">
                  Dịch vụ nền tảng điện toán đám mây (CLOUD)
                </Routerlink>
                <div class="service-subtitle">
                  Triển khai và quản lý dịch vụ đám mây.
                </div>
              </div></a
            ><a href="/services/technical-support" class="service-item"
              ><img
                src="../assets/icondichvu/icon-technical-support.svg"
                alt="Dịch vụ hỗ trợ kỹ thuật"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/"
                  >Dịch vụ hỗ trợ kỹ thuật</Routerlink
                >
                <div class="service-subtitle">Hỗ trợ kỹ thuật 24/7.</div>
              </div></a
            ><a href="/services/cloud-computing" class="service-item"
              ><img
                src="../assets/icondichvu/icon-cloud-computing.svg"
                alt="Dịch vụ điện toán đám mây"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/"
                  >Dịch vụ điện toán đám mây</Routerlink
                >
                <div class="service-subtitle">
                  Tư vấn, triển khai giải pháp đám mây.
                </div>
              </div></a
            ><a href="/services/website-maintenance" class="service-item"
              ><img
                src="../assets/icondichvu/icon-website-maintenance.svg"
                alt="Dịch vụ chăm sóc website chuyên nghiệp"
                class="service-icon"
              />
              <div class="service-text">
                <Routerlink class="service-title" to="/">
                  Dịch vụ chăm sóc website chuyên nghiệp
                </Routerlink>
                <div class="service-subtitle">
                  Bảo trì, tối ưu và bảo mật website.
                </div>
              </div></a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      data-v-20b9afde=""
      class="absolute h-[3px] bottom-aim bottom-0"
      style="left: 373.562px; width: 53px; transition: 0.5s"
    ></div>
  </header>
</template>
<style scoped>
.services-dropdown {
  position: fixed;
  top: 110px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: calc(100% - 80px);
  max-width: 1600px;
  z-index: 9999;
}
.services-dropdown-container {
  background: rgba(15, 15, 15, 0.75);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border-radius: 12px;
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
.service-title {
  font-family: Saira, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #fff;
}
.service-subtitle {
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
.services-menu-wrapper {
  position: static;
}
.services-dropdown-header {
  font-family: Saira, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  text-transform: uppercase;
  color: #fff;
  padding: 20px;
  border-bottom: 1px solid rgb(86, 79, 64);
}

.navbar {
  position: relative;
}
@media (max-width: 768px) {
  .navbar {
    display: none;
  }
}
</style>
