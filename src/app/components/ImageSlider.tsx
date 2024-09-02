"use client";

import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import Slider from "react-infinite-logo-slider";

export default function ImageSlider() {
  const suppliers = [
    { image: "/postnord_logo.png", link: "https://www.postnord.se/" },
    { image: "/schenker_logo.svg", link: "https://www.dbschenker.com/se-sv" },
    { image: "/bring.png", link: "https://www.bring.se/" },
    { image: "/tnt.png", link: "https://www.tnt.com/" },
    { image: "/fedex.png", link: "https://fedex.com/" },
  ];
  return (
    <>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={true}
        blurBoderColor={"red"}
      >
        {suppliers.map((supplier) => (
          <Slider.Slide key={supplier.link}>
            <Link href={supplier.link} target="_blank">
              <Image src={supplier.image} width={200} height={200} alt="logotype" />
            </Link>
          </Slider.Slide>
        ))}
      </Slider>
    </>
  );
}
