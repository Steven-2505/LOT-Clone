<script setup>
import logo from "../assets/logo.svg";
import iconvi from "../assets/icon-vi.svg";
import iconen from "../assets/icon-en.svg";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const isServicesActive = computed(() => route.path.startsWith("/services"));

const drawerOpen = ref(false);
const servicesOpen = ref(false);
const langOpen = ref(false);

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
  if (!drawerOpen.value) {
    servicesOpen.value = false;
    langOpen.value = false;
  }
}

function closeDrawer() {
  drawerOpen.value = false;
  servicesOpen.value = false;
  langOpen.value = false;
}

function toggleServices() {
  servicesOpen.value = !servicesOpen.value;
}

function toggleLang() {
  langOpen.value = !langOpen.value;
}
</script>

<template>
  <header class="mobile-header">
    <div class="mobile-header-inner">
      <RouterLink class="logo" to="/" @click="closeDrawer">
        <img :src="logo" alt="Logo" />
      </RouterLink>
      <!--Hamberger luôn có dấu 3 gạch-->
      <button class="hamburger" @click="toggleDrawer">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="drawerOpen" class="drawer-overlay" @click="closeDrawer" />
      </Transition>
      <Transition name="slide">
        <nav v-if="drawerOpen" class="drawer pt-20px">
          <button class="drawer-close" @click="closeDrawer">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div class="drawer-inner">
            <!--Thành phần hamberger-->
            <RouterLink class="drawer-link" to="/About-us" @click="closeDrawer"
              >Về LOT</RouterLink
            >
            <RouterLink
              class="drawer-link"
              to="/environment"
              @click="closeDrawer"
              >Hệ Sinh Thái LOT</RouterLink
            >

            <!-- dropdown -->
            <div class="drawer-accordion">
              <button
                class="drawer-link drawer-accordion-toggle"
                :class="{ 'is-active': isServicesActive }"
                @click="toggleServices"
              >
                Dịch vụ
                <svg
                  class="accordion-arrow"
                  :class="{ rotated: servicesOpen }"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <Transition name="accordion">
                <div v-if="servicesOpen" class="drawer-services">
                  <a
                    href="/services/email-server"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/bg-content.svg"
                      class="drawer-service-icon"
                    />
                    <span>Quản trị email server</span>
                  </a>
                  <a
                    href="/services/system-analysis"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-system-analysis.svg"
                      class="drawer-service-icon"
                    />
                    <span>Phân tích, thiết kế hệ thống</span>
                  </a>
                  <a
                    href="/services/cdn"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-cdn-infrastructure.svg"
                      class="drawer-service-icon"
                    />
                    <span
                      >Hạ tầng dịch vụ mạng lưới phân phối dữ liệu (CDN)</span
                    >
                  </a>
                  <a
                    href="/services/international"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-international-datacenter.svg"
                      class="drawer-service-icon"
                    />
                    <span>Hạ tầng dịch vụ datacenter quốc tế</span>
                  </a>
                  <a
                    href="/services/AI"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-smart-alert-ai.svg"
                      class="drawer-service-icon"
                    />
                    <span
                      >Hệ thống cảnh báo thông minh, ứng dụng công nghệ AI</span
                    >
                  </a>
                  <a
                    href="/services/domestic"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-domestic-datacenter.svg"
                      class="drawer-service-icon"
                    />
                    <span>Hạ tầng dịch vụ datacenter nội địa</span>
                  </a>
                  <a
                    href="/services/data-collection"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-data-collection.svg"
                      class="drawer-service-icon"
                    />
                    <span
                      >Giải pháp thu thập dữ liệu phục vụ xây dựng cơ sở dữ liệu
                      số</span
                    >
                  </a>
                  <a
                    href="/services/system-integration"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-system-integration.svg"
                      class="drawer-service-icon"
                    />
                    <span>Dịch vụ tích hợp hệ thống</span>
                  </a>
                  <a
                    href="/services/wireframe-design"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-wireframe-design.svg"
                      class="drawer-service-icon"
                    />
                    <span
                      >Dịch vụ thiết kế Wireframe / Mockup / prototype chuyên
                      nghiệp
                    </span>
                  </a>
                  <a
                    href="/services/ios-development"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-ios-development.svg"
                      class="drawer-service-icon"
                    />
                    <span>Dịch vụ phát triển ứng dụng dành cho IOS</span>
                  </a>
                  <a
                    href="/services/android-development"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-android-development.svg"
                      class="drawer-service-icon"
                    />
                    <span>Dịch vụ phát triển ứng dụng dành cho Android</span>
                  </a>
                  <a
                    href="/services/cloud-platform"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-cloud-platform.svg"
                      class="drawer-service-icon"
                    />
                    <span>Dịch vụ nền tảng điện toán đám mây ( CLOUD )</span>
                  </a>
                  <a
                    href="/services/technical-support"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-technical-support.svg"
                      class="drawer-service-icon"
                    />
                    <span>Dịch vụ hỗ trợ kỹ thuật</span>
                  </a>
                  <a
                    href="/services/cloud-computing"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-cloud-computing.svg"
                      class="drawer-service-icon"
                    />
                    <span>Dịch vụ điện toán đám mây</span>
                  </a>
                  <a
                    href="/services/website-maintenance"
                    class="drawer-service-item"
                    @click="closeDrawer"
                  >
                    <img
                      src="../assets/icondichvu/icon-website-maintenance.svg"
                      class="drawer-service-icon"
                    />
                    <span>Chăm sóc website</span>
                  </a>
                </div>
              </Transition>
            </div>

            <RouterLink class="drawer-link" to="/tuyendung" @click="closeDrawer"
              >Tuyển Dụng</RouterLink
            >
            <RouterLink class="drawer-link" to="/blogs" @click="closeDrawer"
              >Tin Tức</RouterLink
            >
            <RouterLink class="drawer-link" to="/contact" @click="closeDrawer"
              >Liên Hệ</RouterLink
            >

            <!-- Ngôn ngữ -->
            <div class="drawer-lang">
              <button class="drawer-lang-toggle" @click="toggleLang">
                <img :src="iconvi" />
                <span>VI</span>
                <svg
                  class="accordion-arrow"
                  :class="{ rotated: langOpen }"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <Transition name="accordion">
                <div v-if="langOpen" class="drawer-lang-options">
                  <button class="drawer-lang-option">
                    <img :src="iconvi" /> <span>VI</span>
                  </button>
                  <button class="drawer-lang-option">
                    <img :src="iconen" /> <span>EN</span>
                  </button>
                </div>
              </Transition>
            </div>
            <div class="drawer-cta">
              <RouterLink
                to="/contact"
                class="btn-contact-mobile"
                @click="closeDrawer"
              >
                Liên Hệ
              </RouterLink>
            </div>
          </div>
        </nav>
      </Transition>
    </Teleport>
  </header>
</template>

<style>
.mobile-header {
  display: none;
}

@media (max-width: 768px) {
  .mobile-header {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .mobile-header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 64px;
  }

  .logo img {
    height: 36px;
    width: auto;
  }
  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
  }

  .hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .drawer-close:hover {
    color: #fff;
  }

  .drawer-close svg {
    width: 24px;
    height: 24px;
  }

  .drawer-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 998;
  }

  .drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 75%;
    z-index: 999;
    background: rgba(12, 12, 12, 0.97);
    backdrop-filter: blur(20px);
    overflow-y: auto;
  }

  .drawer-inner {
    display: flex;
    flex-direction: column;
    padding: 52px 0 40px;
  }

  .drawer-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 24px;
    font-family: Saira, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    transition:
      color 0.2s,
      background 0.2s;
  }

  .drawer-link:hover,
  .drawer-link.router-link-active,
  .drawer-link.is-active {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
  }

  .accordion-arrow {
    width: 18px;
    height: 18px;
    color: rgba(255, 255, 255, 0.5);
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }
  .accordion-arrow.rotated {
    transform: rotate(180deg);
  }

  .drawer-accordion {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .drawer-accordion-toggle {
    border-bottom: none;
  }

  .drawer-services {
    display: flex;
    flex-direction: column;
    padding: 4px 0 8px;
    background: rgba(255, 255, 255, 0.03);
  }

  .drawer-service-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 32px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
    font-family: Saira, sans-serif;
    font-size: 14px;
    transition:
      background 0.2s,
      color 0.2s;
    overflow-wrap: break-word;
  }

  .drawer-service-item:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }

  .drawer-service-icon {
    width: 28px;
    height: 28px;
    object-fit: contain;
    flex-shrink: 0;
  }

  .drawer-lang {
    margin-top: 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .drawer-lang-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 14px 24px;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.85);
    font-family: Saira, sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }

  .drawer-lang-toggle img {
    width: 20px;
    height: 20px;
  }

  .drawer-lang-toggle .accordion-arrow {
    margin-left: auto;
  }

  .drawer-lang-options {
    display: flex;
    flex-direction: column;
    padding: 4px 0 8px;
    background: rgba(255, 255, 255, 0.03);
  }

  .drawer-lang-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 32px;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.75);
    font-family: Saira, sans-serif;
    font-size: 15px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .drawer-lang-option img {
    width: 20px;
    height: 20px;
  }

  .drawer-lang-option:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }

  /* === CTA BUTTON === */
  .drawer-cta {
    padding: 24px 24px 0;
  }

  .btn-contact-mobile {
    display: block;
    text-align: center;
    padding: 14px;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: #fff;
    font-family: Saira, sans-serif;
    font-weight: 600;
    font-size: 15px;
    border-radius: 10px;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .btn-contact-mobile:hover {
    opacity: 0.9;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.accordion-enter-active,
.accordion-leave-active {
  transition:
    opacity 0.25s ease,
    max-height 0.3s ease;
  max-height: 600px;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
