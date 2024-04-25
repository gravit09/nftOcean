import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardRow() {
  //this component will show nft collections row.
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
    <div className="slider-container card-row p-8 mt-0">
      <div class="flex items-center justify-between m-2 ">
        <div class="flex items-center -space-x-3">
          <h1 className="m-2 text-3xl font-bold">Notable collections</h1>
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
              src="https://i.seadn.io/s/raw/files/c2d2cff1e45cfe134e01306486458a7a.png?auto=format&dpr=1&h=500"
              alt="ui/ux review check"
              class="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold m-2">Early Retired Cats Club</h1>
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
              2,725 ETH
            </p>
          </div>
        </div>
        <div class="relative hover:-translate-y-2 transition-all duration-300 flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-80">
          <div class="relative overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border h-45">
            <img
              src="https://i.seadn.io/gcs/files/38f36655e420669261f3ebba775f40b6.png?auto=format&dpr=1&h=500"
              alt="ui/ux review check"
              class="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold m-2">Incomplete Control</h1>
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
              src="https://i.seadn.io/s/raw/files/f85d2a82dde2b8146b6bf11ddbedb3b1.png?auto=format&dpr=1&h=500"
              alt="ui/ux review check"
              class="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold m-2">Oasis</h1>
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
              src="https://raw.seadn.io/files/66794fa8117976be25181911a1e89900.svg"
              alt="ui/ux review check"
              class="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold m-2">Swatches</h1>
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

export default CardRow;
