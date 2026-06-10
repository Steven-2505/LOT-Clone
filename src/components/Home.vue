<script setup>
import Header from "./Header.vue";
import bg from "../assets/bg.mp4";
</script>

<template>
  <div class="video-container">
    <Header> </Header>
    <video autoplay muted loop playsinline>
      <source src="../assets/bg.mp4" type="video/mp4" />
    </video>
    <section class="w-full relative header-content">
      <div
        class="relative z-[3] text-white m-auto px-10 pt-24 flex flex-col items-center justify-center"
      >
        <div
          class="font-['Saira'] text-transparent bg-clip-text pt-20 text-center inset-0 uppercase lg:text-[65px] text-[32px] font-bold custom-text-gradient"
        >
          LOT SOFTWARE
        </div>
        <div
          class="font-['Saira'] text-transparent bg-clip-text pt-12px text-center uppercase lg:text-[65px] text-[36px] font-bold custom-text-gradient"
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
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center flex-col gap-3 pb-6 mb-20px"
    >
      Cuộn để khám phá
      <span class="scroll-animate"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 17"
          width="21"
          height="17"
          fill="none"
        >
          <path d="M20.75 0H0.25L10.75 6.5L20.75 0Z" fill="#FFD27D" />
          <path
            d="M16.75 13H3.75L10.4085 17L16.75 13Z"
            fill="#FFD27D"
            fill-opacity="0.74"
          />
        </svg>
      </span>
    </div>
  </div>
  <section>
    <div>
      <section
        class="text-center bg-black from-[#000000] to-[#1E1E1E] pt-60px pb-60px"
      >
        <div class="px-6 md:px-10 mx-auto z-10 relative">
          <div class="text-[#EBC47C] text-center text-[25px] font-['Saira']">
            Who We Are
          </div>
          <div
            class="text-transparent bg-clip-text text-center uppercase pt-12px sm:text-[65px] text-[36px] font-bold custom-text-gradient font-['Saira']"
          >
            Khám phá bản sắc của chúng tôi, tạo dựng
          </div>
          <div
            class="text-transparent bg-clip-text text-center uppercase pt-20px mb-100px sm:text-[65px] text-[36px] font-bold custom-text-gradient font-['Saira']"
          >
            tương lai với sự xuất sắc.
          </div>
          <div class="w-fit m-auto mt-10 max-w-full display-ruby">
            <div class="relative border-multiple">
              <div
                class="w-[120px] h-[120px] bg-[#FFDE9C] rounded-full flex items-center justify-center"
              >
                <svg
                  width="79"
                  height="43"
                  viewBox="0 0 79 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.8923 34.792L12.0469 18.9823L28.8348 0L34.466 4.8381L22.5162 18.3213L34.8361 29.2136L29.8923 34.792Z"
                    fill="url(#paint0_linear_16764_19152)"
                  ></path>
                  <path
                    d="M38.5338 42.0883L32.8233 37.2502L44.7731 23.7934L32.4531 12.9011L37.3706 7.32275L55.2425 23.1325L38.5338 42.0883Z"
                    fill="url(#paint1_linear_16764_19152)"
                  ></path>
                  <path
                    d="M78.7387 5.55225V12.6111H67.3705V41.2696H58.8576V12.6111H49.5515L41.5938 5.55225H78.7387Z"
                    fill="url(#paint2_linear_16764_19152)"
                  ></path>
                  <path
                    d="M29.4348 41.2698H0.40625V6.02832H8.91917V34.158H21.6622L29.4348 41.2698Z"
                    fill="url(#paint3_linear_16764_19152)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_16764_19152"
                      x1="24.6008"
                      y1="40.9731"
                      x2="2.12351"
                      y2="33.2707"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#563D0A"></stop>
                      <stop offset="1" stop-color="#BC8516"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_16764_19152"
                      x1="45.007"
                      y1="48.2647"
                      x2="22.5333"
                      y2="40.5576"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#563D0A"></stop>
                      <stop offset="1" stop-color="#BC8516"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_16764_19152"
                      x1="62.0557"
                      y1="47.615"
                      x2="30.4677"
                      y2="30.4289"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#563D0A"></stop>
                      <stop offset="1" stop-color="#BC8516"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_16764_19152"
                      x1="16.3972"
                      y1="47.5307"
                      x2="-10.5854"
                      y2="35.9031"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#563D0A"></stop>
                      <stop offset="1" stop-color="#BC8516"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                class="absolute top-0 left-0 sm:-translate-x-1/2 translate-y-1/2 -ms-3 z-10"
              >
                <div
                  class="scroll-animate sm:ps-8 ps-4 p-2 rounded-full w-fit flex items-center gap-2 me-10"
                  style="
                    background: linear-gradient(
                      -90deg,
                      rgba(211, 175, 103, 0.8) 0%,
                      rgba(109, 90, 53, 0.647) 100%
                    );
                  "
                >
                  <span class="title-info">50+</span
                  ><span class="flex pt-1 content-infor">Thành viên IT</span
                  ><img
                    class="sm:w-[40px] w-[30px]"
                    src="../assets/about-icon.svg"
                    alt=""
                  />
                </div>
              </div>
              <div
                class="absolute bottom-0 left-0 sm:-translate-x-1/2 translate-y-1/2 mb-4"
              >
                <div
                  class="scroll-animate sm:ps-8 ps-4 p-2 rounded-full w-fit flex items-center gap-2"
                  style="
                    background: linear-gradient(
                      -90deg,
                      rgba(211, 175, 103, 0.8) 0%,
                      rgba(109, 90, 53, 0.647) 100%
                    );
                  "
                >
                  <span class="title-info">100+</span
                  ><span class="flex pt-1 content-infor">Đối tác</span
                  ><img
                    class="sm:w-[40px] w-[30px]"
                    src="../assets/about-icon.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="absolute top-0 right-0 sm:translate-x-1/2">
                <div
                  class="scroll-animate sm:pe-8 pe-6 p-2 rounded-full w-fit flex items-center gap-2"
                  style="
                    background: linear-gradient(
                      90deg,
                      rgba(211, 175, 103, 0.8) 0%,
                      rgba(109, 90, 53, 0.647) 100%
                    );
                  "
                >
                  <img
                    class="sm:w-[40px] w-[30px]"
                    src="../assets/about-icon.svg"
                    alt=""
                  /><span class="title-info">5</span
                  ><span class="flex pt-1 content-infor">Năm sản xuất</span>
                </div>
              </div>
              <div
                class="absolute bottom-0 right-0 sm:translate-x-1/2 mb-10 z-10"
              >
                <div
                  class="scroll-animate duration-700 sm:pe-8 pe-6 p-2 rounded-full w-fit flex items-center gap-2 ms-10"
                  style="
                    background: linear-gradient(
                      90deg,
                      rgba(211, 175, 103, 0.8) 0%,
                      rgba(109, 90, 53, 0.647) 100%
                    );
                  "
                >
                  <img
                    class="sm:w-[40px] w-[30px]"
                    src="../assets/about-icon.svg"
                    alt=""
                  /><span class="title-info">24/7</span
                  ><span class="flex sm:pt-1 content-infor"
                    >Đội ngũ hỗ trợ</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-black pt-20">
            <div class="lg:px-10 px-4 pt-10 pb-10 mx-auto">
              <div
                class="text-[#EBC47C] text-center text-[25px] font-['Saira']"
              >
                Dẫn đầu công nghệ
              </div>
              <div
                class="text-transparent bg-clip-text uppercase pt-12px lg:text-[65px] text-[32px] font-bold custom-text-gradient text-center"
              >
                Hệ thống 360 Vr độc quyền <br />
              </div>
              <div
                class="text-transparent bg-clip-text uppercase pt-20px lg:text-[65px] text-[32px] font-bold custom-text-gradient text-center"
              >
                cho đối tác
              </div>
            </div>
          </div>
          <div
            class="relative z-0 h-[800px] aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div
              class="bg-2"
              style="
                background-image: url(&quot;/images/demo/nifehub/banner2.png&quot;);
              "
            ></div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
