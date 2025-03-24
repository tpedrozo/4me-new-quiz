import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { BsStars } from "react-icons/bs";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] relative">
      <div className="w-full h-screen grid grid-rows-[1fr_auto] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            alt="woman with hair in a half face"
            src="https://images.prismic.io/4mequizt/Z7-x6p7c43Q3gSPQ_home.webp?auto=format,compress"
            className="z-10 transition-opacity duration-[2s] ease-in-out bg-left bg-no-repeat"
            quality={100}
            fill
            objectFit="cover"
          />
          <div className="absolute z-10 w-full h-full bg-[#090502]/25" />
          <div className="flex flex-col justify-center items-center gap-6 relative z-20 mx-auto w-full px-6">
            <h1 className="font-hind text-6xl lg:text-8xl text-center text-regular max-w-[750px] bg-gradient-to-r from-[#F5F0EA] via-[#8F8C89] to-[#8F8C89] inline-block text-transparent bg-clip-text">
              Desperte a Beleza do seu Cabelo
            </h1>
            <p className="text-[#F5F0EA] text-center lg:text-start">
              Sabemos que seu cabelo tem suas próprias necessidades únicas.
            </p>
            <Link
              href="/gender"
              className="bg-white text-black px-4 py-2 rounded-md shadow-lg flex items-center gap-2"
            >
              Desperte a beleza do seu cabelo
              <BsStars />
            </Link>
          </div>
        </div>
        <Footer isFixed={false} />
      </div>
    </main>
  );
}
