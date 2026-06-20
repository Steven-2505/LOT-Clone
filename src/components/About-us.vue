<script setup>
import Header from "./Header.vue";
import bgabout from "../assets/bg-about.svg";
import Slideabout from "./Aboutus/slideabout.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Footer from "./footer.vue";
import Headermb from "./Headermb.vue";

import doitac1 from "../assets/doitac/doitac1.png";
import doitac2 from "../assets/doitac/doitac2.png";
import doitac3 from "../assets/doitac/doitac3.png";
import doitac4 from "../assets/doitac/doitac4.png";
import doitac5 from "../assets/doitac/doitac5.png";
import doitac6 from "../assets/doitac/doitac6.png";
import doitac7 from "../assets/doitac/doitac7.png";
import doitac8 from "../assets/doitac/doitac8.png";
import doitac9 from "../assets/doitac/doitac9.png";
import doitac10 from "../assets/doitac/doitac10.png";
import doitac11 from "../assets/doitac/doitac11.png";
import doitac12 from "../assets/doitac/doitac12.png";
import doitac13 from "../assets/doitac/doitac13.png";
import doitac14 from "../assets/doitac/doitac14.png";

const partners = [
  { name: "NICE VIP", img: doitac4 },
  { name: "haiminh hotel", img: doitac5 },
  { name: "LƯNG CHỪNG MÂY", img: doitac6 },
  { name: "phở sâm 70", img: doitac7 },
  { name: "AN DI", img: doitac8 },
  { name: "Syn Spa", img: doitac9 },
  { name: "the sense", img: doitac10 },
  { name: "sea game", img: doitac11 },
  { name: "lam coffee", img: doitac12 },
  { name: "DÌN KÝ GROUP", img: doitac13 },
  { name: "LÀNG TÂM GIAO", img: doitac14 },
  { name: "KING BEER", img: doitac1 },
  { name: "4 season", img: doitac2 },
  { name: "NOVA COFFEE", img: doitac3 },
];
</script>
<template>
  <div
    data-aos-easing="ease"
    data-aos-duration="400"
    data-aos-delay="0"
    class="bg-color"
  >
    <!--Baner-->
    <div
      class="w-full bg-cover bg-no-repeat h-[1000px] bg-bottom relative bg-recruitment"
      :style="{ backgroundImage: `url(${bgabout})` }"
    >
      <Header></Header>
      <Headermb></Headermb>
      <div class="relative top-[60px] mt-20px mfr">
        <div class="text-[#EBC47C] text-center text-[18px]">Who We Are</div>
        <div
          class="text-transparent bg-clip-text text-center uppercase lg:text-[50px] text-[32px] font-bold custom-text-gradient leading-normal"
        >
          Đưa các giải pháp công nghệ<br />
          vào cuộc sống của bạn
        </div>
        <div class="text-center text-sm mt-3 text-[#A8A8A8] leading-6">
          Được thành lập vào năm 2021, LOT SOFTWARE nổi bật là một trong những
          công ty phát triển phần mềm hàng đầu tại Việt Nam. <br />
          LOT xây dựng các công nghệ giúp mọi người kết nối, tìm kiếm cộng đồng
          và phát triển doanh nghiệp của họ. <br />
          Đội ngũ kỹ sư giàu kinh nghiệm của chúng tôi mang đến trải nghiệm
          khách hàng tuyệt vời trên từng sản phẩm.
        </div>
      </div>
      <!--Cột Mốc Phát Triển-->
      <div
        class="text-[#FFF1D8] text-center font-bold uppercase text-nowrap text-[24px] absolute bottom-0 start-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        Cột mốc phát triển
      </div>
    </div>
    <slideabout />
    <!--business-->
    <div id="pageBusiness">
      <div>
        <div class="container md:pb-32 mx-auto">
          <div class="mt-8">
            <div class="w-100 flex-1 rounded-lg p-4">
              <div
                class="max-md:mx-auto mb-20px text-transparent w-fit bg-clip-text uppercase lg:text-[48px] text-[32px] font-bold custom-text-gradient whitespace-nowrap"
              >
                giá trị cốt lõi
              </div>
            </div>
          </div>
          <div>
            <div class="mb-4 border-custom">
              <div class="background-content-group">
                <div class="right-aim">
                  <div
                    class="z-10 relative items-baseline flex gap-4 lg:items-center lg:rounded-l-full rounded-lg lg:flex-row flex-col"
                  >
                    <div class="flex items-center gap-4 w-full-1024">
                      <svg
                        width="187"
                        height="187"
                        viewBox="0 0 187 187"
                        class="bg-shadaw"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_14148_30154)">
                          <circle
                            cx="93.5"
                            cy="93.5"
                            r="88.5"
                            fill="#F5F2E5"
                            stroke="#EAC57C"
                            stroke-width="10"
                          ></circle>
                          <circle
                            cx="93.5"
                            cy="93.5"
                            r="61.5"
                            fill="#E4CA96"
                            fill-opacity="0.29"
                          ></circle>
                          <path
                            d="M94 59.9988C75.7876 59.9988 61 74.7865 61 92.9988C61 111.211 75.7876 125.999 94 125.999C112.212 125.999 127 111.211 127 92.9988C127 87.9369 125.855 83.1401 123.814 78.8512L120.537 82.1277C119.919 82.7499 119.075 83.1007 118.198 83.1008H117.287C118.584 86.1424 119.302 89.487 119.302 92.9988C119.302 106.959 107.96 118.301 94 118.301C80.0402 118.301 68.6979 106.959 68.6979 92.9988C68.6979 79.0391 80.0402 67.6965 94 67.6965C97.5124 67.6965 100.858 68.4147 103.9 69.7118V68.8009C103.9 67.9235 104.251 67.08 104.873 66.4613L108.147 63.185C103.859 61.1442 99.0619 59.9988 94 59.9988ZM114.87 59.9988C114.588 60.0072 114.321 60.1232 114.122 60.323L106.424 68.0208C106.322 68.1231 106.24 68.2447 106.184 68.3785C106.129 68.5123 106.1 68.6558 106.1 68.8007V76.0475L91.5744 90.5731C90.2429 91.9046 90.2429 94.0991 91.5744 95.4307C92.906 96.7622 95.094 96.7558 96.4256 95.4223L110.949 80.8989H118.198C118.343 80.8989 118.486 80.8703 118.62 80.8147C118.754 80.759 118.876 80.6775 118.978 80.5747L126.676 72.8768C126.829 72.7227 126.933 72.5267 126.975 72.3136C127.017 72.1004 126.995 71.8795 126.911 71.6789C126.828 71.4783 126.687 71.3069 126.506 71.1863C126.325 71.0657 126.113 71.0012 125.896 71.0012H120.847L121.723 70.1247C123.055 68.7931 123.061 66.605 121.73 65.2735C121.064 64.6077 120.182 64.2744 119.3 64.2744C118.419 64.2744 117.538 64.6078 116.872 65.2735L115.998 66.1479V61.0926C115.997 60.9462 115.968 60.8013 115.91 60.6665C115.853 60.5317 115.77 60.4097 115.664 60.3077C115.559 60.2056 115.435 60.1255 115.299 60.0722C115.162 60.0188 115.016 59.9951 114.87 59.9988ZM94 75.3945C84.2928 75.3945 76.3957 83.2917 76.3957 92.9988C76.3957 102.706 84.2928 110.595 94 110.595C103.707 110.595 111.596 102.706 111.596 92.9988C111.596 90.1982 110.924 87.5572 109.757 85.2042L103.73 91.2306C103.835 91.8053 103.898 92.3946 103.898 92.9988C103.898 98.4534 99.4546 102.897 94 102.897C88.5454 102.897 84.1022 98.4534 84.1022 92.9988C84.1022 87.5442 88.5454 83.1008 94 83.1008C94.6042 83.1008 95.1934 83.1641 95.7682 83.2684L101.797 77.2399C99.4435 76.0701 96.8024 75.3945 94 75.3945Z"
                            fill="#B29058"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_14148_30154">
                            <rect width="187" height="187" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <div class="font-medium lg:hidden block text-lg">
                        ĐÓN NHẬN THÁCH THỨC
                      </div>
                    </div>
                    <div class="xl:ml-5">
                      <div class="font-medium lg:block hidden text-lg xl:ml-5">
                        ĐÓN NHẬN THÁCH THỨC
                      </div>
                      <div
                        class="mt-2 xl:ml-5"
                        style="color: rgba(255, 255, 255, 0.59)"
                      >
                        Phương châm "Đón nhận thách thức" đã gắn liền với LOT
                        ngay từ những ngày đầu thành lập.<br />
                        Để biến giấc mơ thành hiện thực, chúng tôi kiên định xây
                        dựng một văn hóa mà ở đó thách<br />
                        thức luôn được đón nhận như những cơ hội để mọi người
                        cùng rèn luyện và phát triển.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-custom">
              <div class="background-content-group">
                <div class="right-aim">
                  <div
                    class="z-10 relative items-baseline flex gap-4 lg:items-center lg:rounded-l-full rounded-lg lg:flex-row flex-col"
                  >
                    <div class="flex items-center gap-4 w-full-1024">
                      <svg
                        width="187"
                        height="187"
                        viewBox="0 0 187 187"
                        fill="none"
                        class="bg-shadaw"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_14148_30140)">
                          <circle
                            cx="93.5"
                            cy="93.5"
                            r="88.5"
                            fill="#F5F2E5"
                            stroke="#EAC57C"
                            stroke-width="10"
                          ></circle>
                          <circle
                            cx="93.5"
                            cy="93.5"
                            r="61.5"
                            fill="#E4CA96"
                            fill-opacity="0.29"
                          ></circle>
                          <path
                            d="M107.711 96.5953L102.114 93.5547L95.3828 121.667H110.586V101.447C110.586 100.454 110.32 99.4804 109.814 98.6269C109.308 97.7733 108.582 97.0716 107.711 96.5953Z"
                            fill="#B29058"
                          ></path>
                          <path
                            d="M85.7118 71.9106C85.7118 70.5438 85.3065 69.2077 84.5471 68.0713C83.7878 66.9348 82.7085 66.0491 81.4458 65.526C80.183 65.003 78.7935 64.8661 77.453 65.1328C76.1125 65.3994 74.8811 66.0576 73.9147 67.0241C72.9482 67.9905 72.2901 69.2219 72.0234 70.5624C71.7568 71.9029 71.8936 73.2924 72.4167 74.5551C72.9397 75.8179 73.8255 76.8972 74.9619 77.6565C76.0983 78.4158 77.4344 78.8211 78.8012 78.8211C80.2643 78.8063 81.6839 78.3217 82.8508 77.439C83.4795 76.1518 84.3258 74.9829 85.3524 73.9837C85.5841 73.3168 85.7054 72.6166 85.7118 71.9106Z"
                            fill="#B29058"
                          ></path>
                          <path
                            d="M94.0029 92.6426C99.3462 92.6426 103.678 88.311 103.678 82.9678C103.678 77.6245 99.3462 73.293 94.0029 73.293C88.6597 73.293 84.3281 77.6245 84.3281 82.9678C84.3281 88.311 88.6597 92.6426 94.0029 92.6426Z"
                            fill="#B29058"
                          ></path>
                          <path
                            d="M116.118 71.9106C116.118 70.0778 115.39 68.32 114.094 67.0241C112.798 65.7281 111.04 65 109.207 65C107.375 65 105.617 65.7281 104.321 67.0241C103.025 68.32 102.297 70.0778 102.297 71.9106C102.297 72.6351 102.419 73.3545 102.656 74.039C103.678 75.0216 104.524 76.1714 105.158 77.439C106.325 78.3217 107.744 78.8062 109.207 78.8211C110.115 78.8211 111.014 78.6424 111.852 78.2951C112.69 77.9478 113.452 77.4388 114.094 76.7971C114.736 76.1554 115.245 75.3936 115.592 74.5551C115.939 73.7167 116.118 72.8181 116.118 71.9106Z"
                            fill="#B29058"
                          ></path>
                          <path
                            d="M81.562 82.9672C81.5635 82.3514 81.6143 81.7367 81.7141 81.129C80.7705 81.4272 79.7873 81.5809 78.7978 81.5851C76.8218 81.5873 74.8925 80.9844 73.2693 79.8574L68.5701 81.5851C67.5098 81.9812 66.5966 82.6933 65.9539 83.6252C65.3113 84.557 64.9702 85.6637 64.9767 86.7956V106.463H74.6515V101.446C74.6537 99.9576 75.0565 98.4971 75.8177 97.218C76.5789 95.9388 77.6703 94.8881 78.9775 94.1761L84.6027 91.094C82.6465 88.8378 81.5673 85.9533 81.562 82.9672Z"
                            fill="#B29058"
                          ></path>
                          <path
                            d="M119.431 81.5851L114.732 79.8574C113.109 80.9844 111.179 81.5873 109.203 81.5851C108.214 81.5809 107.231 81.4272 106.287 81.129C106.387 81.7367 106.438 82.3514 106.439 82.9672C106.434 85.9533 105.355 88.8378 103.398 91.094L109.024 94.1761C110.331 94.8881 111.422 95.9388 112.183 97.218C112.945 98.4971 113.347 99.9576 113.35 101.446V106.463H123.024V86.7956C123.031 85.6637 122.69 84.557 122.047 83.6252C121.405 82.6933 120.491 81.9812 119.431 81.5851Z"
                            fill="#B29058"
                          ></path>
                          <path
                            d="M95.3892 98.1712V109.892L94.0071 115.696L92.625 109.892V98.1712C92.625 97.8046 92.7706 97.4531 93.0298 97.1939C93.289 96.9347 93.6406 96.7891 94.0071 96.7891C94.3737 96.7891 94.7252 96.9347 94.9844 97.1939C95.2436 97.4531 95.3892 97.8046 95.3892 98.1712Z"
                            fill="#B29058"
                          ></path>
                          <path
                            d="M95.3892 98.1712V109.892L94.0071 115.696L92.625 109.892V98.1712C92.625 97.8046 92.7706 97.4531 93.0298 97.1939C93.289 96.9347 93.6406 96.7891 94.0071 96.7891C94.3737 96.7891 94.7252 96.9347 94.9844 97.1939C95.2436 97.4531 95.3892 97.8046 95.3892 98.1712Z"
                            fill="#B29058"
                          ></path>
                          <path
                            d="M80.2889 96.5953C79.4185 97.0716 78.6923 97.7733 78.1864 98.6269C77.6806 99.4804 77.4138 100.454 77.4141 101.447V121.667H92.6173L85.8864 93.5547L80.2889 96.5953Z"
                            fill="#B29058"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_14148_30140">
                            <rect width="187" height="187" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <div class="lg:hidden block font-medium text-lg">
                        PHÁT TRIỂN ĐỐI TÁC
                      </div>
                    </div>
                    <div class="xl:ml-5">
                      <div class="font-medium text-lg lg:block hidden xl:ml-5">
                        PHÁT TRIỂN ĐỐI TÁC
                      </div>
                      <div
                        class="mt-2 xl:ml-5"
                        style="color: rgba(255, 255, 255, 0.59)"
                      >
                        Đối với LOT, "Quan hệ đối tác" không chỉ đơn thuần là
                        quá trình làm việc nhóm và hợp tác song phương trên cơ
                        sở lợi ích, <br />
                        mà còn là quá trình xây dựng các mối quan hệ vững bền
                        trên cơ sở lòng tin.<br />
                        Giá trị cốt lõi này được áp dụng cho toàn bộ các quan hệ
                        hợp tác của LOT, xuyên suốt từ nội bộ đến bên ngoài.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Slide đối tác-->
    <div class="px-4 mt-4 max-w-7xl mx-auto">
      <div
        class="font-['Saira'] text-3xl w-1/2 mx-auto text-center text-white mt-4 text-transparent w-fit bg-clip-text uppercase lg:text-[48px] text-[32px] font-bold leading-normal custom-text-gradient"
      >
        Đối tác
      </div>
      <div class="px-4 mt-4">
        <Swiper
          :modules="[Autoplay]"
          :slides-per-view="5"
          :space-between="16"
          :loop="true"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            0: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }"
        >
          <SwiperSlide v-for="(item, index) in partners" :key="index">
            <div
              class="flex items-center bg-[#0f0f0f] gap-2 border-[#454134] border rounded-xl p-4"
            >
              <img
                class="h-[50px] w-[50px] min-w-[50px] md:h-[70px] md:w-[70px] md:min-w-[70px] rounded-full object-cover"
                :src="item.img"
                :alt="item.name"
              />
              <div
                class="uppercase font-bold font-['Saira'] text-[14px] md:text-[16px] text-white md:whitespace-nowrap"
              >
                {{ item.name }}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <!-- Đội Ngũ Nhân Viên-->
    <div>
      <div class="section-partner pb-10 m-auto md:mb-60px">
        <div
          class="text-transparent w-fit bg-clip-text text-center mx-auto uppercase text-[30px] md:text-[54px] font-bold custom-text-gradient mb-1 mt-20px mb-20px"
        >
          Đội ngũ chúng tôi
        </div>
        <div
          class="relative z-0 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <img
            src="/src/assets/slideabout/aboutcty.png"
            alt="Đội ngũ LOT Software"
            class="w-full h-auto block rounded-xl"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <p class="text-[#A8A8A8] text-center" style="max-width: 80%">
        Được thành lập vào năm 2021, LOT SOFTWARE nổi bật là một trong những
        công ty phát triển phần mềm hàng đầu tại Việt Nam. LOT xây dựng các công
        nghệ giúp mọi người kết nối, tìm kiếm cộng đồng và phát triển doanh
        nghiệp của họ.
      </p>
    </div>
    <div class="">
      <div class="section-level py-10 px-10 container m-auto">
        <div
          class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pb-10 justify-items-center group"
        >
          <div
            class="max-w-sm w-full transition-transform duration-300 ease-in-out lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:-translate-y-6"
          >
            <div class="flex flex-col overflow-hidden">
              <div class="relative transition-transform z-10 item-active">
                <img
                  class="transform w-full h-auto"
                  src="../assets/slideabout/avtNam.png"
                  alt="Avatar 1"
                />
                <div
                  class="text-center rounded w-full whitespace-nowrap py-4 bg-black"
                >
                  <div class="text-white mb-2 font-medium p-title">
                    Lưu Quí Nam
                  </div>
                  <p class="text-white font-light p-service">
                    Phó Giám Đốc Kinh Doanh
                  </p>
                </div>
                <div class="person-item"></div>
              </div>
            </div>
          </div>
          <div
            class="max-w-sm w-full transition-transform duration-300 ease-in-out lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:-translate-y-6"
          >
            <div class="flex flex-col overflow-hidden">
              <div class="relative transition-transform z-10 item-active">
                <img
                  class="transform w-full h-auto"
                  src="../assets/slideabout/avatarPhuc.png"
                  alt="Avatar 1"
                />
                <div
                  class="text-center rounded w-full whitespace-nowrap py-4 bg-black"
                >
                  <div class="text-white mb-2 font-medium p-title">
                    Nguyễn Văn Phúc
                  </div>
                  <p class="text-white font-light p-service">
                    Trưởng Phòng Phát Triển Website
                  </p>
                </div>
                <div class="person-item"></div>
              </div>
            </div>
          </div>
          <div
            class="max-w-sm w-full transition-transform duration-300 ease-in-out lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:-translate-y-6"
          >
            <div class="flex flex-col overflow-hidden">
              <div class="relative transition-transform z-10 item-active">
                <img
                  class="transform w-full h-auto"
                  src="../assets/slideabout/avatarKhoa.png"
                  alt="Avatar 1"
                />
                <div
                  class="text-center rounded w-full whitespace-nowrap py-4 bg-black"
                >
                  <div class="text-white mb-2 font-medium p-title">
                    Hồ Đăng Long Khoa
                  </div>
                  <p class="text-white font-light p-service">
                    Trưởng Phòng Phát Triển App
                  </p>
                </div>
                <div class="person-item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.bg-color {
  background-color: black;
  overflow: hidden;
}

.marquee-wrapper {
  overflow: hidden;
  width: 100%;
  margin-top: 16px;
}

.marquee-track {
  display: flex;
  gap: 16px;
  width: max-content;
}

.marquee-item {
  flex-shrink: 0;
  width: calc((100vw - 32px - 16px * 4) / 5);
  box-sizing: border-box;
}
@media (max-width: 768px) {
  .mfr {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
