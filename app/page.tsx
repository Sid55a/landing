import Image from "next/image";
import FAQsPage from "./component/faqpage";
import NavBar from "./component/navBar";
import { SliderMain } from "./component/slider1";
import { SliderReview } from "./component/sliderReview1";
import { SliderEnd } from "./component/sliderEnd1";

export default function Home() {
  return (
    <div>
      {/* FIRST MAIN  */}
      <div className=" flex w-[100%] ">
        <div className=" flex-basis-2/3 w-[100%] bg-red-900">
          <img alt="img" src="/main-page-img.png" className=""></img>
        </div>
        <div className=" flex-basis-1/3 w-[100%] bg-[#EAE4C0] flex flex-col items-start justify-center pl-5 pr-5">
          <div className=" text-xl  font-bold 2xl:text-6xl  lg:text-3xl  xl:text-4xl  md:text-2xl ">
            {" "}
            WELCOME TO GETJWELLS
          </div>
          <p className="  text-sm  2xl:text-xl">
            The epitome of luxury and sophistication in the digital realm.
          </p>
          <button className="  justify-self-start outline-black sm:mt-5  mt-10 sm:pt-0 sm:pb-0  sm:pl-[0.3rem] sm:pr-[0.3rem]  sm:text-[1rem]  border border-black pt-2 pb-2 pl-4 pr-4">
            Learn More
          </button>
        </div>
      </div>

      {/*  SECOND MAIN */}
      <div className="mt-10  text-center">
        <h1 className=" text-3xl font-semibold">HIGH JWELRY</h1>
      </div>
      {/*high jwlee section  */}
      <div className=" flex mt-10 ">
        <div className=" basis-1/3 ">
          <img alt="img1" src="/img1.png" className="w-full h-full"></img>
        </div>
        <div className="grid grid-cols-2 basis-1/3 gap-2 mx-2 ">
          <div className="">
            <img src="1.png" className=" w-full h-full"></img>
          </div>
          <div className="">
            <img src="2.png" className="w-full h-full"></img>
          </div>
          <div className="">
            <img src="3.png" className="w-full h-full "></img>
          </div>
          <div className="">
            <img src="4.png" className="w-full h-full"></img>
          </div>
        </div>

        <div className="flex flex-col bg-[#A7C585] basis-1/3 gap-10  justify-center items-center text-center ">
          <div className=" text-white font-semibold Brand essence text-xl sm:text-[70%] 2xl:text-3xl xl:text-4xl ">
            Brand essence
          </div>
          <p className="text-center px-4 text-[30%] text-white 2xl:text-lg xl:text-lg">
            We strive to create a marketplace where every piece tells a unique
            story and becomes a cherished heirloom for generations to come. We
            believe in the transformative power of diamonds to capture the
            essence of love, beauty, and celebration.
          </p>
        </div>
      </div>
      {/* Why us */}
      <div className=" flex mt-10 items-start justify-center  w-full">
        <div className=" w-full basis-1/2 flex  flex-col items-start pt-20 justify-start pl-10 ">
          <h1 className=" font-semibold  text-4xl">WHY CHOOSE US?</h1>
          <p className=" text-start text-xl   mt-4">
            Join an exclusive community of like-minded individuals who share
            your passion for the finer things in life. Jewels provides a
            platform to connect, share, and inspire with luxury enthusiasts from
            around the globe.
          </p>
        </div>
        <div className="  w-full basis-1/2 gap-1 p-5 bg-[#EAE4C0] grid grid-cols-2 h-full ">
          <div className="">
            <div className="flex flex-col justify-center items-center gap-2">
              <img className="w-40 h-auto " src="/12.png"></img>
              <h3 className=" text-xs text-center   w-52">
                Targeting niche customers from tier 1 adn 2 cities
              </h3>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center gap-2">
              <img className="w-44 h-auto" src="/11.png"></img>
              <h3 className=" text-xs  text-center   w-52">
                Targeting niche customers from tier 1 adn 2 cities
              </h3>
            </div>
          </div>
          <div className="">
            {" "}
            <div className="flex flex-col justify-center items-center gap-2">
              <img className="w-44 h-auto max-h-40" src="/13.png"></img>
              <h3 className=" text-xs  text-center   w-52">
                Targeting niche customers from tier 1 adn 2 cities
              </h3>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center gap-2">
              <img className="w-44 h-auto" src="/14.png" />
              <h3 className=" text-xs  text-center   w-52">
                Targeting niche customers from tier 1 adn 2 cities
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* New in store */}
      <h1 className=" my-10 text-center font-semibold text-3xl">
        NEW IN STORE
      </h1>
      <div className="w-full mt-4">
        <SliderMain></SliderMain>
      </div>

      {/* New in store */}
      <h1 className=" mt-10 text-center font-semibold text-3xl">
        COSTUMER REVIEW
      </h1>
      <div className="w-full mt-1">
        <SliderReview></SliderReview>
      </div>

      {/* Fall in the city */}
      <div className=" flex w-[100%] mt-20  gap-4  ">
        <div className=" basis-1/2 w-[100%] ">
          <img alt="img" src="/women.png" className="w-[100%]"></img>
        </div>
        <div className=" basis-1/2 width-[100%] bg-[#A7C585] flex flex-col items-center justify-center pl-5 pr-5">
          <div className="flex flex-col gap-14 justify-center h-full">
            <div className=" text-center text-white text-xl  font-bold 2xl:text-6xl  lg:text-3xl  xl:text-4xl  md:text-2xl ">
              {" "}
              FALL IN THE CITY
            </div>
            <p className="  text-white text-sm  2xl:text-xl flex justify-center items-center text-center">
              We prioritize your privacy and security with state-of-the-art
              encryption and cutting-edge security features, ensuring that your
              personal information and transactions are always protected. With
              Jewels, experience the peace of mind that comes with knowing your
              data is in safe hands.
            </p>
          </div>
        </div>
      </div>

      {/* Que */}

      <div className=" text-xl font-semibold text-center mt-10 uppercase">
        Frequently asked questions
      </div>
      {/* acordian */}
      <FAQsPage></FAQsPage>

      <SliderEnd></SliderEnd>

      <div className="bg-[#EAE4C0] min-h-32 flex flex-col justify-center items-center">
        <p className="font-semibold text-3xl">Get Jwel</p>
        <p className="font-semibold text-3xl">Sellers</p>
      </div>
    </div>
  );
}
