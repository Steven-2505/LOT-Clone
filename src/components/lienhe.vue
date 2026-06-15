<script setup>
import Header from "./Header.vue";
import AppFooter from "./footer.vue";
</script>
<template>
  <section class="bg-black">
    <Header></Header>
    <div
      class="w-full bg-no-repeat bg-cover background-contact sm:pb-auto pb-10 px-evi"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:pt-20 pt-10 container px-10 m-auto relative z-10 text-white"
      >
        <div class="w-fit md:pe-5">
          <div class="text-[20px] text-[#EBC47C] font-medium leading-normal">
            Liên hệ với chúng tôi
          </div>
          <div
            class="text-transparent bg-clip-text uppercase lg:text-[54px] text-[46px] font-bold custom-text-gradient leading-normal"
          >
            Chúng tôi có thể <br />
            giúp gì cho bạn?
          </div>
          <div class="py-1 leading-normal">
            Điền vào mẫu để gửi tin nhắn hoặc báo cáo cho chúng tôi. Hoặc, gửi
            email cho chúng tôi tới
          </div>
          <div class="bg-linear-gradient relative w-fit -z-1 p-[1px] mt-2">
            <svg
              class="bottom-0 end-0 translate-y-1/2 translate-x-1/2 absolute z-30"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="4"
                height="4"
                fill="#010101"
                stroke="url(#paint0_linear_14384_21051)"
              ></rect>
              <defs>
                <linearGradient
                  id="paint0_linear_14384_21051"
                  x1="11.3795"
                  y1="10.4363"
                  x2="-1.52449"
                  y2="-3.74468"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#673500"></stop>
                  <stop offset="0.3527" stop-color="#B0884B"></stop>
                  <stop offset="0.5195" stop-color="#CEAB6A"></stop>
                  <stop offset="1" stop-color="#FBEBC7"></stop>
                </linearGradient>
              </defs></svg
            ><svg
              class="start-0 -translate-x-1/2 -translate-y-1/2 absolute z-30"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="4"
                height="4"
                fill="#010101"
                stroke="url(#paint0_linear_14384_21051)"
              ></rect>
              <defs>
                <linearGradient
                  id="paint0_linear_14384_21051"
                  x1="11.3795"
                  y1="10.4363"
                  x2="-1.52449"
                  y2="-3.74468"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#673500"></stop>
                  <stop offset="0.3527" stop-color="#B0884B"></stop>
                  <stop offset="0.5195" stop-color="#CEAB6A"></stop>
                  <stop offset="1" stop-color="#FBEBC7"></stop>
                </linearGradient>
              </defs></svg
            ><svg
              class="end-0 translate-x-1/2 -translate-y-1/2 absolute z-30"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="4"
                height="4"
                fill="#010101"
                stroke="url(#paint0_linear_14384_21051)"
              ></rect>
              <defs>
                <linearGradient
                  id="paint0_linear_14384_21051"
                  x1="11.3795"
                  y1="10.4363"
                  x2="-1.52449"
                  y2="-3.74468"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#673500"></stop>
                  <stop offset="0.3527" stop-color="#B0884B"></stop>
                  <stop offset="0.5195" stop-color="#CEAB6A"></stop>
                  <stop offset="1" stop-color="#FBEBC7"></stop>
                </linearGradient>
              </defs></svg
            ><svg
              class="bottom-0 start-0 -translate-x-1/2 translate-y-1/2 absolute z-30"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="4"
                height="4"
                fill="#010101"
                stroke="url(#paint0_linear_14384_21051)"
              ></rect>
              <defs>
                <linearGradient
                  id="paint0_linear_14384_21051"
                  x1="11.3795"
                  y1="10.4363"
                  x2="-1.52449"
                  y2="-3.74468"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#673500"></stop>
                  <stop offset="0.3527" stop-color="#B0884B"></stop>
                  <stop offset="0.5195" stop-color="#CEAB6A"></stop>
                  <stop offset="1" stop-color="#FBEBC7"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div class="uppercase underline py-2 px-3 relative z-1 bg-black">
              contact@lotviet.com
            </div>
          </div>
        </div>
        <div class="relative z-1 p-[1px] rounded-md bg-linear-gradient">
          <form
            novalidate=""
            class="relative z-2 rounded rounded-md bg-[#000] p-5"
          >
            <div class="pb-3">
              Tầm nhìn của bạn, Sứ mệnh của chúng tôi: Hãy cùng nhau <br />
              định hình thành công.
            </div>
            <div>
              <input
                class="w-full rounded p-3 bg-[#ffffff1a] text-white"
                type="text"
                placeholder="Tên"
                name="name"
                value=""
              /><!---->
            </div>
            <div class="my-4">
              <input
                class="w-full rounded p-3 bg-[#ffffff1a] text-white"
                type="text"
                placeholder="Tên công ty"
                name="company_name"
                value=""
              /><!---->
            </div>
            <div class="mb-4">
              <input
                class="w-full rounded p-3 bg-[#ffffff1a] text-white"
                type="text"
                placeholder="Email"
                name="email"
                value=""
              /><!---->
            </div>
            <div class="mb-4">
              <input
                class="w-full rounded p-3 bg-[#ffffff1a] text-white"
                type="text"
                placeholder="Số điện thoại"
                name="phone"
                value=""
              /><!---->
            </div>
            <div>
              <textarea
                class="w-full rounded p-3 bg-[#ffffff1a] text-white"
                placeholder="Nội dung"
                name="describe"
                value=""
              ></textarea>
            </div>
            <button
              type="submit"
              class="ms-auto block bg-linear-gradient rounded-full py-3 px-8 text-dark w-fit mt-3"
            >
              <div class="flex items-center gap-2">
                <span class="text-black font-medium">Gửi</span
                ><span
                  ><svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7498 12.0078H4.75"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M15.0898 17.6678C15.0898 14.7581 17.6524 12.0078 20.7499 12.0078"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M15.0898 6.34766C15.0898 9.25741 17.6524 12.0077 20.7499 12.0077"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="square"
                    ></path></svg
                ></span>
              </div>
            </button>
          </form>
        </div>
      </div>
      <div
        class="hidden grid-cols-2 gap-4 container px-10 m-auto mt-10 text-white"
      >
        <div>
          <div class="text-[20px] font-medium mb-3">
            Trụ sở chính (Văn phòng tại Mỹ)
          </div>
          <div class="text-[14px]">
            782 Archer Dr<br />
            Marion, Iowa, United States<br />
            Chăm sóc khách hàng: (028) 7777 7999 ext 3
          </div>
        </div>
        <div>
          <div class="text-[20px] font-medium mb-3">Văn phòng tại Việt Nam</div>
          <div class="text-[14px]">
            56 Quang Trung<br />
            Phường Tăng Nhơn Phú B, TP. Thủ Đức<br />
            Chăm sóc khách hàng: (028) 7777 7999
          </div>
        </div>
      </div>
    </div>
    <AppFooter></AppFooter>
  </section>
</template>
