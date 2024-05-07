"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const SliderReview = () => {
  const data = [
    {
      img: "/main-page-img.png",
      name: "JERIN JOHNSON",
      desc: "I've been using the Jewels app for a few months now, and I am thoroughly impressed. From the very first moment I opened the app, I could tell it was something special. The interface is not only beautiful but also extremely intuitive, making it easy for me to navigate through its luxurious offerings.",
    },
    {
      img: "/main-page-img.png",
      name: "JERIN JOHNSON",
      desc: "I've been using the Jewels app for a few months now, and I am thoroughly impressed. From the very first moment I opened the app, I could tell it was something special. The interface is not only beautiful but also extremely intuitive, making it easy for me to navigate through its luxurious offerings.",
    },
    {
      img: "/main-page-img.png",
      name: "JERIN JOHNSON",
      desc: "I've been using the Jewels app for a few months now, and I am thoroughly impressed. From the very first moment I opened the app, I could tell it was something special. The interface is not only beautiful but also extremely intuitive, making it easy for me to navigate through its luxurious offerings.",
    },
    {
      img: "/main-page-img.png",
      name: "JERIN JOHNSON",
      desc: "I've been using the Jewels app for a few months now, and I am thoroughly impressed. From the very first moment I opened the app, I could tell it was something special. The interface is not only beautiful but also extremely intuitive, making it easy for me to navigate through its luxurious offerings.",
    },
    {
      img: "/main-page-img.png",
      name: "JERIN JOHNSON",
      desc: "I've been using the Jewels app for a few months now, and I am thoroughly impressed. From the very first moment I opened the app, I could tell it was something special. The interface is not only beautiful but also extremely intuitive, making it easy for me to navigate through its luxurious offerings.",
    },
    {
      img: "/main-page-img.png",
      name: "JERIN JOHNSON",
      desc: "I've been using the Jewels app for a few months now, and I am thoroughly impressed. From the very first moment I opened the app, I could tell it was something special. The interface is not only beautiful but also extremely intuitive, making it easy for me to navigate through its luxurious offerings.",
    },
    {
      img: "/main-page-img.png",
      name: "JERIN JOHNSON",
      desc: "I've been using the Jewels app for a few months now, and I am thoroughly impressed. From the very first moment I opened the app, I could tell it was something special. The interface is not only beautiful but also extremely intuitive, making it easy for me to navigate through its luxurious offerings.",
    },
    {
      img: "/main-page-img.png",
      name: "JERIN JOHNSON",
      desc: "I've been using the Jewels app for a few months now, and I am thoroughly impressed. From the very first moment I opened the app, I could tell it was something special. The interface is not only beautiful but also extremely intuitive, making it easy for me to navigate through its luxurious offerings.",
    },
    {
      img: "/main-page-img.png",
      name: "JERIN JOHNSON",
      desc: "I've been using the Jewels app for a few months now, and I am thoroughly impressed. From the very first moment I opened the app, I could tell it was something special. The interface is not only beautiful but also extremely intuitive, making it easy for me to navigate through its luxurious offerings.",
    },
    {
      img: "/main-page-img.png",
      name: "JERIN JOHNSON",
      desc: "I've been using the Jewels app for a few months now, and I am thoroughly impressed. From the very first moment I opened the app, I could tell it was something special. The interface is not only beautiful but also extremely intuitive, making it easy for me to navigate through its luxurious offerings.",
    },
    {
      img: "/main-page-img.png",
      name: "JERIN JOHNSON",
      desc: "I've been using the Jewels app for a few months now, and I am thoroughly impressed. From the very first moment I opened the app, I could tell it was something special. The interface is not only beautiful but also extremely intuitive, making it easy for me to navigate through its luxurious offerings.",
    },
  ];
  return (
    <div className="flex justify-center items-center w-full ">
      <Carousel
        className="w-full "
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className=" -ml-1">
          {data.map((data, index) => (
            <CarouselItem key={index} className="pl-1 sm:max-w-[15rem] max-w-[20.2rem] ">
              <div className="p-2 h-[300px]">
                <div className=" h-[75px] "></div>
                <div className="h-[200px] sm:h-[280px]  bg-[#efeeee] relative rounded-xl">
                  <img
                    width={100}
                    height={100}
                    className="rounded-full  absolute sm:-top-[15%] -top-[25%] left-5 "
                    src="/main-page-img.png"
                  ></img>
                  <div className=" absolute top-[25%] ">
                    <h1 className=" pl-5 font-semibold">{data.name}</h1>
                    <p className=" text-[0.6rem]   p-5 sm:pb-6 ">{data.desc}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
    </div>
  );
};
