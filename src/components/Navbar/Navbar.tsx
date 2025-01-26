import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative">
      <div className="h-[4rem] w-[4rem] mx-4 my-4 absolute">
        <Image
          src="/assets/logo miracle.jpg"
          fill
          sizes="100%"
          alt="logo"
          quality={80}
          className="object-cover z-10 rounded-full"
        />
      </div>
    </div>
  );
}
