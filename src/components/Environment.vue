<script setup>
import Header from "./Header.vue";
import AppFooter from "./footer.vue";
import Nhub from "./environment/nhub.vue";
import Nexnow from "./environment/nexnow.vue";
import Nexdash from "./environment/nexdash.vue";
import { ref, shallowRef, onMounted } from "vue";
import nifehub from "../assets/nifehub.svg";
import nex from "../assets/nex.svg";
import ndashboard from "../assets/ndashboard.svg";
import Headermb from "./Headermb.vue";

const activeApp = ref("nhub");
const currentComponentApp = shallowRef(Nhub);

function selectApp(name, component) {
  activeApp.value = name;
  currentComponentApp.value = component;
}
</script>
<template>
  <div
    data-aos-easing="ease"
    data-aos-duration="400"
    data-aos-delay="0"
    class="video-container"
  >
    <Header> </Header>
    <div class="mb-20px">
      <Headermb></Headermb>
    </div>
    <video autoplay muted loop playsinline>
      <source src="../assets/bg.mp4" type="video/mp4" />
    </video>
    <section class="w-full relative header-content">
      <div
        class="relative z-3 text-white m-auto px-10 flex flex-col items-center justify-center"
      >
        <div
          class="font-['Saira'] text-transparent bg-clip-text pt-20 text-center inset-0 uppercase lg:text-[56px] text-[32px] font-bold custom-text-gradient"
        >
          LOT SOFTWARE
        </div>
        <div
          class="font-['Saira'] text-transparent bg-clip-text pt-12px text-center uppercase lg:text-[56px] text-[36px] font-bold custom-text-gradient"
        >
          Xây dựng con đường thành công của bạn
        </div>
        <div class="text-center mt-2 pt-12px text-[25px] font-light">
          Được thành lập vào năm 2021, LOT SOFTWARE nổi bật là một trong những
          công ty phát triển phần mềm hàng đầu tại
          <br />
          Vietnam. LOT xây dựng các công nghệ giúp mọi người kết nối, tìm kiếm
          cộng đồng...
        </div>
      </div>
    </section>
  </div>
  <section class="bg-black">
    <div
      class="text-center bg-black from-[#000000] to-[#1E1E1E] aos-init aos-animate"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <section class="py-10 md:py-16 overflow-hidden">
        <div class="mx-auto">
          <div
            class="container mx-auto px-10 aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div
              class="flex lg:justify-center m-auto gap-2 app-selector md:gap-4 md:px-0 container lg:pb-10 aos-init aos-animate overlay-hiden"
              data-aos="fade-left"
              data-aos-duration="1500"
              style="overflow: hidden"
            >
              <div
                :class="{ active: activeApp === 'nexdash' }"
                @click="selectApp('nexdash', Nexdash)"
                class="flex items-center justify-center cursor-pointer min-w-0 transition bg-[#F0E7CF] rounded rounded-3 w-full hover:bg-[#ffff] over-play"
              >
                <div class="">
                  <div class="flex items-center gap-3">
                    <img
                      class="py-6 px-14 p-12"
                      :src="ndashboard"
                      alt=""
                      style="min-width: 180px"
                    />
                  </div>
                </div>
              </div>
              <div
                :class="{ active: activeApp === 'nhub' }"
                @click="selectApp('nhub', Nhub)"
                class="flex items-center justify-center cursor-pointer min-w-0 transition bg-[#F0E7CF] rounded rounded-3 w-full hover:bg-[#ffff] over-play"
              >
                <div class="">
                  <div class="flex items-center gap-3">
                    <img
                      class="py-6 px-14 p-12"
                      :src="nifehub"
                      alt=""
                      style="min-width: 180px"
                    />
                  </div>
                </div>
              </div>
              <div
                :class="{ active: activeApp === 'nexnow' }"
                @click="selectApp('nexnow', Nexnow)"
                class="flex items-center justify-center cursor-pointer min-w-0 transition bg-[#F0E7CF] rounded rounded-3 w-full hover:bg-[#ffff] over-play"
              >
                <div class="">
                  <div class="flex items-center gap-3">
                    <img
                      class="py-6 px-14 p-12"
                      :src="nex"
                      alt=""
                      style="min-width: 180px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <component :is="currentComponentApp" />
          </div>
        </div>
      </section>
    </div>
    <AppFooter></AppFooter>
  </section>
</template>
<style scoped></style>
