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

const data = [
  { id: "1", img: "/1.png" },
  { id: "2", img: "/2.png" },
  { id: "3", img: "/3.png" },
  { id: "4", img: "/4.png" },
  { id: "1", img: "/1.png" },
  { id: "2", img: "/2.png" },
  { id: "3", img: "/3.png" },
  { id: "4", img: "/4.png" },
  { id: "1", img: "/1.png" },
  { id: "2", img: "/2.png" },
  { id: "3", img: "/3.png" },
  { id: "4", img: "/4.png" },
  { id: "1", img: "/1.png" },
  { id: "2", img: "/2.png" },
  { id: "3", img: "/3.png" },
  { id: "4", img: "/4.png" },
];

export const SliderEnd = () => {
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
        <CarouselContent className=" ">
          {data.map((data, index) => (
            <CarouselItem key={index} className=" max-w-[13.5rem] max-h-[10rem]">
              <div className="">
                <Card className="w-56 h-48 border-none">
                  <CardContent className="flex aspect-square items-center justify-center p-1">
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
    // <div className="m-auto">
    //   <div className="mt-20">
    //     <Slider {...Settings}>
    //       {data.map((d) => (
    //         <div key={d.id} className=" h-[200px] bg-red-white text-black">
    //           <div className=" border border-black solid h-[8rem] rounded-sm flex justify-center items-center">
    //             <img className="h-44 w-80 " src={d.img} />
    //           </div>
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </div>
  );
};
