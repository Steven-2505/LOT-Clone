<script setup>
import { onMounted, onUnmounted } from "vue";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

let swiperInstance = null;

onMounted(() => {
  swiperInstance = new Swiper(".my-swiper", {
    modules: [Navigation, Autoplay],
    loop: true,
    centeredSlides: true,
    slidesPerView: 3.2,
    spaceBetween: 0,
    speed: 1200,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next-arrow",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    },
  });
});

onUnmounted(() => {
  if (swiperInstance) swiperInstance.destroy();
});
</script>
<template>
  <div class="mb-8 mx-auto" style="width: 101%">
    <div class="w-[1px] h-[60px] bg-[#cebfa0] relative start-1/2"></div>
    <div class="grid-section relative cursor-pointer">
      <div class="absolute next-arrow cursor-pointer">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="19.5"
            fill="#292929"
            fill-opacity="0.72"
            stroke="url(#paint0_linear_20202_19811)"
          ></circle>
          <path
            d="M12.293 10.0894V30.5894L18.793 20.0894L12.293 10.0894Z"
            fill="#FFD27D"
          ></path>
          <path
            d="M25.2812 14.4282V27.4282L29.2812 20.7697L25.2812 14.4282Z"
            fill="#FFD27D"
            fill-opacity="0.74"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_20202_19811"
              x1="8.00857e-09"
              y1="20"
              x2="53.297"
              y2="20.2948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BFB89F"></stop>
              <stop offset="1" stop-color="#59564A" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        class="swiper swiper-initialized swiper-horizontal my-swiper swiper-backface-hidden"
      >
        <div
          class="swiper-wrapper"
          style="
            transition-duration: 0ms;
            transform: translate3d(-2255.5px, 0px, 0px);
            transition-delay: 0ms;
          "
        >
          <div
            class="swiper-slide"
            data-swiper-slide-index="9"
            style="width: 347px"
          >
            <div class="d-flex position-relative" style="position: relative">
              <div class="px-3 flex justify-center pt-4 grow">
                <div class="flex gap-8 items-center justify-center">
                  <div class="flex flex-col items-center">
                    <img src="../../assets/slideabout/number10.svg" alt="" />
                    <div class="text-white font-bold">03/2027</div>
                    <div class="text-center">
                      LOT đưa bốn dự án đẩy mạnh và mở rộng thêm cho thị trường
                      Châu Á tiếp theo: Malaysia và Philippines
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="md:block hidden position-absolute"
                style="position: absolute; left: 0px; top: 30px"
                ><svg
                  width="2"
                  height="203"
                  viewBox="0 0 2 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0L1 203"
                    stroke="url(#paint0_radial_13940_21890)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_13940_21890"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.5 90.103) rotate(-90) scale(83.9352 152.026)"
                    >
                      <stop stop-color="#FFEABF"></stop>
                      <stop offset="1" stop-color="#211600"></stop>
                    </radialGradient>
                  </defs></svg
              ></span>
            </div>
            <!---->
          </div>
          <div
            class="swiper-slide"
            data-swiper-slide-index="0"
            style="width: 347px"
          >
            <div class="d-flex position-relative" style="position: relative">
              <div class="px-3 flex justify-center pt-4 grow">
                <div class="flex gap-8 items-center justify-center">
                  <div class="flex flex-col items-center">
                    <img src="../../assets/slideabout/number1.svg" alt="" />
                    <div class="text-white font-bold">08/2020</div>
                    <div class="text-center">
                      LOT được thành lập. Tiến hành khảo sát thị trường với số
                      lượng 04 thành viên.
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="md:block hidden position-absolute"
                style="position: absolute; left: 0px; top: 30px"
                ><svg
                  width="2"
                  height="203"
                  viewBox="0 0 2 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0L1 203"
                    stroke="url(#paint0_radial_13940_21890)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_13940_21890"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.5 90.103) rotate(-90) scale(83.9352 152.026)"
                    >
                      <stop stop-color="#FFEABF"></stop>
                      <stop offset="1" stop-color="#211600"></stop>
                    </radialGradient>
                  </defs></svg
              ></span>
            </div>
            <!---->
          </div>
          <div
            class="swiper-slide"
            data-swiper-slide-index="1"
            style="width: 347px"
          >
            <div class="d-flex position-relative" style="position: relative">
              <div class="px-3 flex justify-center pt-4 grow">
                <div class="flex gap-8 items-center justify-center">
                  <div class="flex flex-col items-center">
                    <img src="../../assets/slideabout/number2.svg" alt="" />
                    <div class="text-white font-bold">05/2021</div>
                    <div class="text-center">
                      LOT lên ý tưởng và phát triển dự án ứng dụng NEX-NOW và
                      THE N-HUB dịch vụ giải trí cho khách hàng
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="md:block hidden position-absolute"
                style="position: absolute; left: 0px; top: 30px"
                ><svg
                  width="2"
                  height="203"
                  viewBox="0 0 2 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0L1 203"
                    stroke="url(#paint0_radial_13940_21890)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_13940_21890"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.5 90.103) rotate(-90) scale(83.9352 152.026)"
                    >
                      <stop stop-color="#FFEABF"></stop>
                      <stop offset="1" stop-color="#211600"></stop>
                    </radialGradient>
                  </defs></svg
              ></span>
            </div>
            <!---->
          </div>
          <div
            class="swiper-slide"
            data-swiper-slide-index="2"
            style="width: 347px"
          >
            <div class="d-flex position-relative" style="position: relative">
              <div class="px-3 flex justify-center pt-4 grow">
                <div class="flex gap-8 items-center justify-center">
                  <div class="flex flex-col items-center">
                    <img src="../../assets/slideabout/number3.svg" alt="" />
                    <div class="text-white font-bold">01/2023</div>
                    <div class="text-center">
                      Dự án NEX-NOW và THE N-HUB phát triển thành công. Tung ra
                      thị trường để khách hàng sử dụng
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="md:block hidden position-absolute"
                style="position: absolute; left: 0px; top: 30px"
                ><svg
                  width="2"
                  height="203"
                  viewBox="0 0 2 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0L1 203"
                    stroke="url(#paint0_radial_13940_21890)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_13940_21890"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.5 90.103) rotate(-90) scale(83.9352 152.026)"
                    >
                      <stop stop-color="#FFEABF"></stop>
                      <stop offset="1" stop-color="#211600"></stop>
                    </radialGradient>
                  </defs></svg
              ></span>
            </div>
            <!---->
          </div>
          <div
            class="swiper-slide"
            data-swiper-slide-index="3"
            style="width: 347px"
          >
            <div class="d-flex position-relative" style="position: relative">
              <div class="px-3 flex justify-center pt-4 grow">
                <div class="flex gap-8 items-center justify-center">
                  <div class="flex flex-col items-center">
                    <img src="../../assets/slideabout/number4.svg" alt="" />
                    <div class="text-white font-bold">05/2024</div>
                    <div class="text-center">
                      NEX-NOW và THE N-HUB đạt 20.000 khách hàng sử dụng ứng
                      dụng tại TP. Hồ Chí Minh, Thủ Đức và Bình Dương. Dự án
                      N-BUSINESS chính thức hoạt động, triển khai phân phối và
                      truyền thông đến các doanh nghiệp trong khu vực.
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="md:block hidden position-absolute"
                style="position: absolute; left: 0px; top: 30px"
                ><svg
                  width="2"
                  height="203"
                  viewBox="0 0 2 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0L1 203"
                    stroke="url(#paint0_radial_13940_21890)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_13940_21890"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.5 90.103) rotate(-90) scale(83.9352 152.026)"
                    >
                      <stop stop-color="#FFEABF"></stop>
                      <stop offset="1" stop-color="#211600"></stop>
                    </radialGradient>
                  </defs></svg
              ></span>
            </div>
            <!---->
          </div>
          <div
            class="swiper-slide"
            data-swiper-slide-index="4"
            style="width: 347px"
          >
            <div class="d-flex position-relative" style="position: relative">
              <div class="px-3 flex justify-center pt-4 grow">
                <div class="flex gap-8 items-center justify-center">
                  <div class="flex flex-col items-center">
                    <img src="../../assets/slideabout/number5.svg" alt="" />
                    <div class="text-white font-bold">12/2024</div>
                    <div class="text-center">
                      NEX-NOW và THE N-HUB đạt 50.000 khách hàng tại TP. Hồ Chí
                      Minh, Thủ Đức và Bình Dương. N-BUSINESS thu hút 100 doanh
                      nghiệp sử dụng ứng dụng/phần mềm.
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="md:block hidden position-absolute"
                style="position: absolute; left: 0px; top: 30px"
                ><svg
                  width="2"
                  height="203"
                  viewBox="0 0 2 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0L1 203"
                    stroke="url(#paint0_radial_13940_21890)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_13940_21890"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.5 90.103) rotate(-90) scale(83.9352 152.026)"
                    >
                      <stop stop-color="#FFEABF"></stop>
                      <stop offset="1" stop-color="#211600"></stop>
                    </radialGradient>
                  </defs></svg
              ></span>
            </div>
            <!---->
          </div>
          <div
            class="swiper-slide"
            data-swiper-slide-index="5"
            style="width: 347px"
          >
            <div class="d-flex position-relative" style="position: relative">
              <div class="px-3 flex justify-center pt-4 grow">
                <div class="flex gap-8 items-center justify-center">
                  <div class="flex flex-col items-center">
                    <img src="../../assets/slideabout/number6.svg" alt="" />
                    <div class="text-white font-bold">06/2025</div>
                    <div class="text-center">
                      Dự án NEX-NOW, THE N-HUB VÀ N-BUSINESS mở rộng phát triển
                      thêm các khu vực lân cận như: Vũng Tàu, Phan Thiết, Phú
                      Quốc, Nha Trang, Đà Lạt
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="md:block hidden position-absolute"
                style="position: absolute; left: 0px; top: 30px"
                ><svg
                  width="2"
                  height="203"
                  viewBox="0 0 2 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0L1 203"
                    stroke="url(#paint0_radial_13940_21890)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_13940_21890"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.5 90.103) rotate(-90) scale(83.9352 152.026)"
                    >
                      <stop stop-color="#FFEABF"></stop>
                      <stop offset="1" stop-color="#211600"></stop>
                    </radialGradient>
                  </defs></svg
              ></span>
            </div>
            <!---->
          </div>
          <div
            class="swiper-slide swiper-slide-prev"
            data-swiper-slide-index="6"
            style="width: 347px"
          >
            <div class="d-flex position-relative" style="position: relative">
              <div class="px-3 flex justify-center pt-4 grow">
                <div class="flex gap-8 items-center justify-center">
                  <div class="flex flex-col items-center">
                    <img src="../../assets/slideabout/number7.svg" alt="" />
                    <div class="text-white font-bold">10/2025</div>
                    <div class="text-center">
                      LOT lên ý tưởng và phát triển dự án ứng dụng/phần mềm
                      tuyển dụng N-CAREER
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="md:block hidden position-absolute"
                style="position: absolute; left: 0px; top: 30px"
                ><svg
                  width="2"
                  height="203"
                  viewBox="0 0 2 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0L1 203"
                    stroke="url(#paint0_radial_13940_21890)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_13940_21890"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.5 90.103) rotate(-90) scale(83.9352 152.026)"
                    >
                      <stop stop-color="#FFEABF"></stop>
                      <stop offset="1" stop-color="#211600"></stop>
                    </radialGradient>
                  </defs></svg
              ></span>
            </div>
            <!---->
          </div>
          <div
            class="swiper-slide swiper-slide-active"
            data-swiper-slide-index="7"
            style="width: 347px"
          >
            <div class="d-flex position-relative" style="position: relative">
              <div class="px-3 flex justify-center pt-4 grow">
                <div class="flex gap-8 items-center justify-center">
                  <div class="flex flex-col items-center">
                    <img src="../../assets/slideabout/number8.svg" alt="" />
                    <div class="text-white font-bold">03/2026</div>
                    <div class="text-center">
                      Dự án NEX-NOW, THE N-HUB VÀ N-BUSINESS mở rộng phát triển
                      thêm các nước Châu Á. Cụ thể Thái Lan
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="md:block hidden position-absolute"
                style="position: absolute; left: 0px; top: 30px"
                ><svg
                  width="2"
                  height="203"
                  viewBox="0 0 2 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0L1 203"
                    stroke="url(#paint0_radial_13940_21890)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_13940_21890"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.5 90.103) rotate(-90) scale(83.9352 152.026)"
                    >
                      <stop stop-color="#FFEABF"></stop>
                      <stop offset="1" stop-color="#211600"></stop>
                    </radialGradient>
                  </defs></svg
              ></span>
            </div>
            <!---->
          </div>
          <div
            class="swiper-slide swiper-slide-next"
            data-swiper-slide-index="8"
            style="width: 347px"
          >
            <div class="d-flex position-relative" style="position: relative">
              <div class="px-3 flex justify-center pt-4 grow">
                <div class="flex gap-8 items-center justify-center">
                  <div class="flex flex-col items-center">
                    <img src="../../assets/slideabout/number9.svg" alt="" />
                    <div class="text-white font-bold">08/2026</div>
                    <div class="text-center">
                      Dự án N-CAREER chính thức hoạt động, tiến hành phân phối
                      và truyền thông đến doanh nghiệp kinh doanh khu vực cùng
                      với ba dự án mà LOT đã phát triển trước đó.
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="md:block hidden position-absolute"
                style="position: absolute; left: 0px; top: 30px"
                ><svg
                  width="2"
                  height="203"
                  viewBox="0 0 2 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0L1 203"
                    stroke="url(#paint0_radial_13940_21890)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_13940_21890"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.5 90.103) rotate(-90) scale(83.9352 152.026)"
                    >
                      <stop stop-color="#FFEABF"></stop>
                      <stop offset="1" stop-color="#211600"></stop>
                    </radialGradient>
                  </defs></svg
              ></span>
            </div>
            <!---->
          </div>
        </div>
        <!----><!----><!---->
      </div>
    </div>
  </div>
</template>
