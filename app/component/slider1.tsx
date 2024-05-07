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

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  );
}

const data = [
  { id: "1", img: "/11.png" },
  { id: "2", img: "/12.png" },
  { id: "3", img: "/13.png" },
  { id: "4", img: "/14.png" },
  { id: "1", img: "/11.png" },
  { id: "2", img: "/12.png" },
  { id: "3", img: "/13.png" },
  { id: "4", img: "/14.png" },
  { id: "1", img: "/11.png" },
  { id: "2", img: "/12.png" },
  { id: "3", img: "/13.png" },
  { id: "4", img: "/14.png" },
  { id: "1", img: "/11.png" },
  { id: "2", img: "/12.png" },
  { id: "3", img: "/13.png" },
  { id: "4", img: "/14.png" },
];

export const SliderMain = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      {" "}
      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className=" -ml-1">
          {data.map((data, index) => (
            <CarouselItem key={index} className="pl-1 max-w-[13.4rem] ">
              <div className="">
                <Card className="w-52 h-52">
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <img
                      src={data.img}
                      className="object-cover w-full h-full"
                      alt=""
                    />
                  </CardContent>
                </Card>
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
