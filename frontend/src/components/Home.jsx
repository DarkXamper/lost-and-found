import React, { Suspense, useEffect, useState } from "react";
import bgHex from "../assets/images/bg-hex.svg";
import Skeleton from "react-loading-skeleton";
import Hero from "../assets/images/Hero.webp";
import { Link } from "react-router-dom";
// const Hero = React.lazy(() => import("../assets/images/Hero.webp"))
const Home = () => {
  // const [imageUrl, setImageUrl] = useState(
  //   "https://www.vectorstyler.com/img/features/artistic-tools1.png"
  // );
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   const handleImageLoaded = () => {
  //     console.log("Image loaded");
  //     setIsLoaded(true);
  //   };
  //   const image = new Image();
  //   image.src = imageUrl;
  //   image.onload = handleImageLoaded;
  //   image.onerror = handleImageLoaded;

  //   // const handleImageUrl = (e) => setImageUrl(e.target.src);
  // }, [imageUrl]);

  return (
    <div className=" min-h-screen w-full dark:bg-[#0d121cf9] flex items-center justify-center">
      <div className="absolute w-full h-full flex items-center justify-center">
        <Suspense fallback={<Skeleton height={500} />}>
          <img
            src={bgHex}
            className="bg-center bg-no-repeat bg-cover opacity-50 w-[1004] h-[600]"
            alt="bg-hexa"
          />
        </Suspense>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col items-center justify-center relative">
        <div className="flex flex-col">
          <div>
            <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
              Lost & Found
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-normal text-gray-900 dark:text-white md:text-7xl font-poppins">
              Lost An Item? Find it{" "}
              <span className="text-orange-500">here!</span>
            </p>
            <p className="mt-4 max-w-2xl text-xl md:text-2xl text-gray-400 ">
              List Items And Find The One You Lost!
            </p>
          </div>

          <div className="rounded-md shadow mt-10 w-fit">
            <Link
              to="/itemList/createlisting"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
            >
              Get started
            </Link>
          </div>
        </div>

        <div>
          {/* {isLoaded ? (
            <img
              className="object-cover w-full h-full rounded-lg"
              src={Hero}
              loading="lazy"
              alt="Lost & Found"
            />
          ) : (
            <Skeleton />
          )} */}
          <Suspense fallback={<Skeleton width={600} height={400} />}>
            <img
              className="object-cover w-full h-full"
              src={Hero}
              alt="Lost & Found"
            />
          </Suspense>
          {/* <img
              className="object-cover w-full h-full rounded-lg backdrop-blur-xl"
              src={imageUrl}
              alt="Lost & Found"
            /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
