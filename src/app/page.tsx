"use client";

import Image from "next/image";
import Footer from "@src/components/Footer/Footer";
import AddressButton from "@src/components/AddressButton/AddressButton";
import TwitterButton from "@src/components/TwitterButton/TwitterButton";
import FeatureCards from "@src/components/Cards/FeatureCards";
import { featureData } from "@src/utils/staticData";

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-purple-600/20 to-green-600/20 min-h-lvh flex flex-col">
      <main className="flex flex-1 min-h-lvh">
        <section className="flex flex-1 flex-col justify-center items-center">
          <h1 className="text-7xl md:text-[10rem] font-cinzel font-medium pb-6 bg-gradient-to-b from-[#FCFBE0]  to-[#C1B798] inline-block text-transparent bg-clip-text">
            MIRACLE
          </h1>
          <p className="text-lg md:text-2xl text-center px-4 text-white">
            Building and Scaling Immersive Conversational AI platforms for
            Consumer Markets.
          </p>
          <AddressButton />
          <TwitterButton type="base" />
        </section>
      </main>

      <section className=" text-white mx-10 md:mx-16 my-20 md:my-24">
        <h2 className="text-2xl md:text-3xl font-medium  text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {featureData.map((res, i) => (
            <FeatureCards
              key={i}
              icon={res.icon}
              label={res.label}
              description={res.description}
            />
          ))}
        </div>
      </section>

      <section className=" flex flex-col items-center text-white mx-10 md:mx-16  my-20 md:my-24">
        <div className="h-[10rem] w-[10rem] mb-12 relative">
          <Image
            src="/assets/logo miracle.jpg"
            fill
            sizes="100%"
            alt="logo"
            quality={80}
            className="object-cover z-10 rounded-full"
          />
        </div>
        <div className="max-w-[50rem] text-justify flex flex-col gap-5 text-xs md:text-sm">
          <p>
            At MiracleAI, our mission is to build and scale immersive
            conversational AI platforms that transform consumer experiences.
            Founded by industry experts, we create cutting-edge AI products and
            drive their growth with our high-growth expertise.
          </p>
          <p>
            Our journey is rooted in a commitment to excellence, innovation, and
            delivering tangible results. We combine diverse skills to develop AI
            solutions that meet consumer needs and thrive in the market.
          </p>
          <p>
            Join us as an employee or freelancer, and together, let&apos;s push
            the boundaries of AI and shape the future of consumer technology.
          </p>
        </div>
        <TwitterButton type="outline" />
      </section>

      <section className=" text-white mx-10 md:mx-16  my-20 md:my-24">
        <h2 className="text-2xl font-medium text-center flex flex-col uppercase">
          our integrations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
          <div className="border border-emerald-500  cursor-pointer bg-black rounded-md px-8 py-5 flex flex-col items-center gap-5 relative hover:scale-110 transition-all duration-200">
            <div className=" bg-emerald-900 opacity-25 absolute top-0 h-full w-full" />
            <div className="w-12 h-12 relative">
              <Image
                src="/assets/logo-pump.svg"
                fill
                sizes="100%"
                alt="logo"
                quality={80}
                className="object-cover z-10"
              />
            </div>
            <h1 className="text-lg text-center text-emerald-500 z-10">
              Pump.fun
            </h1>
            <p className="text-center opacity-60 text-sm">
              Create a memecoin directly from chat, or trade coins currently
              launching.
            </p>
          </div>
          <div className="border border-teal-500  cursor-pointer bg-black rounded-md px-8 py-5 flex flex-col items-center gap-5 relative hover:scale-110 transition-all duration-200">
            <div className=" bg-teal-900 opacity-25 absolute top-0 h-full w-full" />
            <div className="w-12 h-12 relative">
              <Image
                src="/assets/logo-jupiter.svg"
                fill
                sizes="100%"
                alt="logo"
                quality={80}
                className="object-cover z-10"
              />
            </div>
            <h1 className="text-lg text-center text-teal-500 z-10">Jupiter</h1>
            <p className="text-center opacity-60 text-sm">
              Trade with optimal slippage and support for all token.
            </p>
          </div>
          <div className="border border-gray-500  cursor-pointer bg-black rounded-md px-8 py-5 flex flex-col items-center gap-5 relative hover:scale-110 transition-all duration-200">
            <div className=" bg-gray-900 opacity-25 absolute top-0 h-full w-full" />
            <div className="w-12 h-12 relative">
              <Image
                src="/assets/logo-screener.svg"
                fill
                sizes="100%"
                alt="logo"
                quality={80}
                className="object-cover z-10"
              />
            </div>
            <h1 className="text-lg text-center text-gray-500 z-10">
              DexScreener
            </h1>
            <p className="text-center opacity-60 text-sm">
              Track and analyze coin data across Solana.
            </p>
          </div>
          <div className="border border-yellow-500  cursor-pointer bg-black rounded-md px-8 py-5 flex flex-col items-center gap-5 relative hover:scale-110 transition-all duration-200">
            <div className=" bg-yellow-900 opacity-25 absolute top-0 h-full w-full" />
            <div className="w-12 h-12 relative">
              <Image
                src="/assets/logo-birdeye.svg"
                fill
                sizes="100%"
                alt="logo"
                quality={80}
                className="object-cover z-10"
              />
            </div>
            <h1 className="text-lg text-center text-yellow-500 z-10">
              Birdeye
            </h1>
            <p className="text-center opacity-60 text-sm">
              Real-time charts and comprehensive analytics.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
