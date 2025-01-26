"use client";

import Image from "next/image";
import Navbar from "@src/components/Navbar/Navbar";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoXbox } from "react-icons/io";
import Footer from "@src/components/Footer/Footer";
import AddressButton from "@src/components/AddressButton/AddressButton";

export default function Home() {
  return (
    <div className="text-white bg-gradient-to-r from-purple-600/20 to-green-600/20 min-h-lvh flex flex-col">
      <main className="flex flex-1 min-h-lvh">
        <Navbar />
        <section className="flex flex-1 flex-col justify-center items-center">
          <h1 className="text-[10rem] font-fredoka font-medium pb-6">
            MIRACLE
          </h1>
          <p className="text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <AddressButton />
          <div className="flex gap-2 bg-purple-500 px-20 py-2 text-black tracking-widest uppercase cursor-pointer hover:text-slate-700">
            <FaXTwitter size={25} />
            <p>Talk to Miracle</p>
          </div>
          <p className="text-sm py-2">A Miracle tim</p>
        </section>
      </main>

      <section className="min-h-lvh mx-16">
        <h2 className="text-3xl font-medium mt-20 text-center">Features</h2>
        <div className="grid grid-cols-3 gap-8 mt-14">
          <div className="p-8 bg-zinc-900 rounded-md flex flex-col gap-4 shadow-md border border-zinc-800 hover:border-green-500 hover:transition-all hover:scale-110 duration-200 group">
            <div className="bg-purple-500 p-4 w-min rounded-lg">
              <FaXTwitter size={30} />
            </div>
            <p className="text-xl font-semibold group-hover:text-green-500 ">
              Lorem Ipsum
            </p>
            <p className="text-sm opacity-50">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </p>
          </div>
          <div className="p-8 bg-zinc-900 rounded-md flex flex-col gap-4 shadow-md border border-zinc-800 hover:border-green-500 hover:transition-all hover:scale-110 duration-200 group">
            <div className="bg-purple-500 p-4 w-min rounded-lg">
              <FaXTwitter size={30} />
            </div>
            <p className="text-xl font-semibold group-hover:text-green-500 ">
              Lorem Ipsum
            </p>
            <p className="text-sm opacity-50">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </p>
          </div>
          <div className="p-8 bg-zinc-900 rounded-md flex flex-col gap-4 shadow-md border border-zinc-800 hover:border-green-500 hover:transition-all hover:scale-110 duration-200 group">
            <div className="bg-purple-500 p-4 w-min rounded-lg">
              <FaXTwitter size={30} />
            </div>
            <p className="text-xl font-semibold group-hover:text-green-500 ">
              Lorem Ipsum
            </p>
            <p className="text-sm opacity-50">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </p>
          </div>
          <div className="p-8 bg-zinc-900 rounded-md flex flex-col gap-4 shadow-md border border-zinc-800 hover:border-green-500 hover:transition-all hover:scale-110 duration-200 group">
            <div className="bg-purple-500 p-4 w-min rounded-lg">
              <FaXTwitter size={30} />
            </div>
            <p className="text-xl font-semibold group-hover:text-green-500 ">
              Lorem Ipsum
            </p>
            <p className="text-sm opacity-50">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-lvh mx-16 flex flex-col items-center">
        <h2 className="text-3xl font-medium mt-20 text-center">
          MIRACLE - New World Token
        </h2>
        <div className="h-[10rem] w-[10rem] my-12 relative">
          <Image
            src="/assets/logo miracle.jpg"
            fill
            sizes="100%"
            alt="logo"
            quality={80}
            className="object-cover z-10 rounded-full"
          />
        </div>
        <div className="max-w-[60rem] text-justify flex flex-col gap-5 text-sm">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for lorem ipsum will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
        </div>
        <div className="flex gap-2 border border-purple-300 text-purple-300 px-20 py-2  tracking-widest uppercase mt-12 cursor-pointer hover:bg-purple-500 hover:text-black">
          <FaXTwitter size={25} />
          <p>Talk to Miracle</p>
        </div>
      </section>

      <section className="min-h-lvh mx-24">
        <h2 className="text-2xl font-medium mt-20 text-center flex flex-col uppercase">
          Recent News
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="border border-green-900 hover:border-green-500  cursor-pointer bg-black rounded-md px-8 py-14 flex flex-col items-center gap-8 relative group">
            <div className=" group-hover:bg-green-900 group-hover:opacity-25 absolute top-0 h-full w-full" />

            <IoLogoXbox className="mt-8 z-10" size={60} />
            <div className="w-1/2 h-[1px] bg-white z-10" />
            <h1 className="uppercase text-5xl text-center tracking-widest z-10">
              miracle whitepaper
            </h1>
          </div>

          <div className="border border-green-900 hover:border-green-500  cursor-pointer bg-black rounded-md px-8 py-14 flex flex-col items-center gap-8 relative group">
            <div className=" group-hover:bg-green-900 group-hover:opacity-25 absolute top-0 h-full w-full" />

            <IoLogoXbox className="mt-8 z-10" size={60} />
            <div className="w-1/2 h-[1px] bg-white z-10" />
            <h1 className="uppercase text-5xl text-center tracking-widest z-10">
              miracle whitepaper
            </h1>
          </div>

          <div className="border border-green-900 hover:border-green-500  cursor-pointer bg-black rounded-md px-8 py-14 flex flex-col items-center gap-8 relative group">
            <div className=" group-hover:bg-green-900 group-hover:opacity-25 absolute top-0 h-full w-full" />

            <IoLogoXbox className="mt-8 z-10" size={60} />
            <div className="w-1/2 h-[1px] bg-white z-10" />
            <h1 className="uppercase text-5xl text-center tracking-widest z-10">
              miracle whitepaper
            </h1>
          </div>
        </div>
      </section>

      <section className="min-h-lvh mx-24">
        <h2 className="text-2xl font-medium mt-20 text-center flex flex-col uppercase">
          Planned Updates
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="border border-green-900 hover:border-green-500  cursor-pointer bg-black rounded-md px-8 py-14 flex flex-col items-center gap-8 relative group">
            <div className=" group-hover:bg-green-900 group-hover:opacity-25 absolute top-0 h-full w-full" />

            <IoLogoXbox className="mt-8 z-10" size={60} />
            <div className="w-1/2 h-[1px] bg-white z-10" />
            <h1 className="uppercase text-5xl text-center tracking-widest z-10">
              white paper
            </h1>
          </div>

          <div className="border border-green-900 hover:border-green-500  cursor-pointer bg-black rounded-md px-8 py-14 flex flex-col items-center gap-8 relative group">
            <div className=" group-hover:bg-green-900 group-hover:opacity-25 absolute top-0 h-full w-full" />

            <IoLogoXbox className="mt-8 z-10" size={60} />
            <div className="w-1/2 h-[1px] bg-white z-10" />
            <h1 className="uppercase text-5xl text-center tracking-widest z-10">
              research paper
            </h1>
          </div>

          <div className="border border-green-900 hover:border-green-500  cursor-pointer bg-black rounded-md px-8 py-14 flex flex-col items-center gap-8 relative group">
            <div className=" group-hover:bg-green-900 group-hover:opacity-25 absolute top-0 h-full w-full" />

            <IoLogoXbox className="mt-8 z-10" size={60} />
            <div className="w-1/2 h-[1px] bg-white z-10" />
            <h1 className="uppercase text-5xl text-center tracking-widest z-10">
              integration paper
            </h1>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
