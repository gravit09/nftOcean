import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    speed: 800,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mb-10 mt-5 ">
      <Slider {...settings}>
        <div className="mr-3">
          <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img
              src="https://dappradar.com/nft-metadata-image?encrypted=true&format=preview&filePath=5e4e378a3c9b6c22f5244079258b6e648273fc0af340a8c9208af1c69bb02c56b222f005a4bae321e7e3fe4d1bc55c09b9876cc143a610d92eb1d6599175e50c555e79cfde955ff9714b1939cae4da6d"
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="mr-3">
          <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img
              src="https://www.cnet.com/a/img/resize/e0ebf3dc974fce8609d2ba49fa36cf0f93190062/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&fit=crop&height=1200&width=1200"
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="mr-3">
          <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img
              src="https://miro.medium.com/v2/resize:fit:600/1*-saQtZXY_162nlyBG6M0Cg@2x.jpeg"
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="mr-3">
          <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img
              src="https://nftnow.com/wp-content/uploads/2022/10/kiwami-3428.png"
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="mr-3">
          <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img
              src="https://i.pinimg.com/736x/97/f3/1e/97f31e49f03313c84fab160582f4240f.jpg"
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
