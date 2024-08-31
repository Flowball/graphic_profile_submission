"use client";

import Image from "next/image";
// @ts-ignore
import Slider from "react-infinite-logo-slider";

export default function ImageSlider() {
  return (
    <>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        <Slider.Slide>
          <Image src={"/postnord_logo.png"} width={200} height={200} alt="logotype" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={"/schenker_logo.svg"} width={200} height={200} alt="logotype" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={"/bring.png"} width={200} height={200} alt="logotype" />
        </Slider.Slide>
      </Slider>
    </>
  );
}
