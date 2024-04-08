import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopCollector() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container card-row p-8 mt-0 ">
      <div class="flex items-center justify-between m-2 ">
        <div class="flex items-center -space-x-3">
          <h1 className="m-2 text-3xl font-bold">Top Collector Buys</h1>
        </div>
        <button
          type="button"
          class="inline-block rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        >
          View All
        </button>
      </div>
      <Slider {...settings}>
        <div class="relative hover:-translate-y-2 transition-all duration-300 flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-80">
          <div class="relative overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border h-45">
            <img
              src="https://i.seadn.io/s/raw/files/3fc12618f84514e0df6953b38905f50c.png?auto=format&dpr=1&h=500"
              alt="ui/ux review check"
              class="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold m-2">Based Fellas</h1>
          <div class="flex items-center justify-between m-2 ">
            <div class="flex items-center -space-x-3">
              <p>Floor</p>
            </div>
            <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              Volume
            </p>
          </div>
          <div class="flex items-center justify-between m-2 ">
            <div class="flex items-center -space-x-3">
              <p className="font-bold">0.68 ETH</p>
            </div>
            <p class="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
              2,728 ETH
            </p>
          </div>
        </div>
        <div class="relative hover:-translate-y-2 transition-all duration-300 flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-80">
          <div class="relative overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border h-45">
            <img
              src="https://i.seadn.io/s/raw/files/c761d96dc33c0dd7df463e978b289b3b.jpg?auto=format&dpr=1&h=500"
              alt="ui/ux review check"
              class="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold m-2">UnderGround World</h1>
          <div class="flex items-center justify-between m-2 ">
            <div class="flex items-center -space-x-3">
              <p>Floor</p>
            </div>
            <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              Volume
            </p>
          </div>
          <div class="flex items-center justify-between m-2 ">
            <div class="flex items-center -space-x-3">
              <p className="font-bold">40 ETH</p>
            </div>
            <p class="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
              1,364 ETH
            </p>
          </div>
        </div>
        <div class="relative hover:-translate-y-2 transition-all duration-300 flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-80">
          <div class="relative overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border h-45">
            <img
              src="https://i.seadn.io/gcs/files/6e6efb4c70c8faf8b5a23bd499a34323.jpg?auto=format&dpr=1&h=500"
              alt="ui/ux review check"
              class="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold m-2">Base Pepe</h1>
          <div class="flex items-center justify-between m-2 ">
            <div class="flex items-center -space-x-3">
              <p>Floor</p>
            </div>
            <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              Volume
            </p>
          </div>
          <div class="flex items-center justify-between m-2 ">
            <div class="flex items-center -space-x-3">
              <p className="font-bold">0.2 ETH</p>
            </div>
            <p class="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
              512 ETH
            </p>
          </div>
        </div>
        <div class="relative hover:-translate-y-2 transition-all duration-300 flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-80">
          <div class="relative overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border h-45">
            <img
              src="https://i.seadn.io/gae/So80zwi42fQxZVYRhedjI8U5mjV2_dMCA26MCm5SpVv2YoTuVg4daRMY-NSjxaJ8I4uxRXzeQKREb-xIxp_HgJq30ETsMFTMJnPdsg?auto=format&dpr=1&h=500"
              alt="ui/ux review check"
              class="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold m-2">Moonbirds</h1>
          <div class="flex items-center justify-between m-2 ">
            <div class="flex items-center -space-x-3">
              <p>Floor</p>
            </div>
            <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              Volume
            </p>
          </div>
          <div class="flex items-center justify-between m-2 ">
            <div class="flex items-center -space-x-3">
              <p className="font-bold">0.4 ETH</p>
            </div>
            <p class="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
              3,177 ETH
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default TopCollector;
