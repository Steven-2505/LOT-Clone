<script setup>
import logo from "../assets/logo.svg";
import iconheader from "../assets/icon-header.svg";
import iconvi from "../assets/icon-vi.svg";
import iconen from "../assets/icon-en.svg";

import { ref, onMounted, onUnmounted } from "vue";

// Reactive state to manage menu visibility
const isOpen = ref(false);

// Function to toggle menu visibility
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Function to close the dropdown if a user clicks outside the component
const closeDropdown = (element) => {
  if (!element.target.closest(".relative")) {
    isOpen.value = false;
  }
};

// Life cycle hooks to catch global clicks for closing "on click outside"
onMounted(() => {
  window.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  window.removeEventListener("click", closeDropdown);
});
</script>
<template>
  <header class="navbar">
    <div class="navbar-inner">
      <div class="logo">
        <img :src="logo" alt="Logo" />
      </div>

      <nav class="navbar-menu">
        <a class="menu" href="https://lotviet.com/vi/about-us">Về LOT</a>
        <img :src="iconheader" alt="" />
        <a
          class="menu"
          href="https://lotviet.com/vi/environment"
          target="_blank"
          >Hệ Sinh Thái LOT</a
        >
        <img :src="iconheader" alt="" />
        <a class="menu" href="https://lotviet.com/vi/contact">Dịch Vụ</a>
        <img :src="iconheader" alt="" />
        <a class="menu" href="https://lotviet.com/vi/recruitment">Tuyển Dụng</a>
        <img :src="iconheader" alt="" />
        <a class="menu" href="https://lotviet.com/vi/blogs">Tin Tức</a>
        <img :src="iconheader" alt="" />
        <a class="menu" href="https://lotviet.com/vi/contact">Liên hệ</a>
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
  </header>
</template>
