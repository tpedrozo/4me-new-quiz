"use client";
import React, { useState } from "react";
import Image from "next/image";
import Loading from "../loading";
import { BsStars } from "react-icons/bs";
import Link from "next/link";

export default function Success() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-[#0A0A0A]">
      {loading && <Loading />}
      <main className="w-screen h-screen relative grid place-items-center justify-center">
        <Image
          alt="woman with hair wind"
          src="https://images.prismic.io/4mequizt/Z8URcBsAHJWomCcE_success.png?auto=format,compress"
          className="z-10 transition-opacity duration-[2s] ease-in-out bg-left"
          quality={100}
          fill
          objectFit="cover"
          onLoadingComplete={(image) => {
            setLoading(false);
            image.classList.remove("opacity-0");
          }}
        />
        <div className="absolute z-30 w-full h-full bg-[#090502]/20" />
        <div className="flex flex-col justify-start items-center gap-6 px-6 relative z-30  mx-auto w-full py-20 h-screen">
          <Image
            alt="logo"
            src="https://images.prismic.io/4mequizt/Z76Jt57c43Q3gO-Q_logo-white.png?auto=format,compress"
            className=" z-40"
            quality={100}
            width={80}
            height={20}
          />
          <h1 className="font-hind mt-36 leading-tight text-6xl sm:text-8xl text-center text-regular max-w-[750px] bg-gradient-to-r from-[#F5F0EA] via-[#8F8C89] to-[#8F8C89] inline-block text-transparent bg-clip-text">
            Obrigado!
          </h1>
          <p className="text-[#F5F0EA] text-center">
            Nossa equipe entrará em contato e dará segmento com o seu
            atendimento.
          </p>
          <Link
            href="https://web.whatsapp.com/send?phone=41984464251"
            target="_blank"
            className="bg-white text-black px-4 py-2 rounded-md shadow-lg flex  items-center gap-2"
            onClick={() =>
              typeof window !== "undefined" && localStorage.clear()
            }
          >
            Fale com a nossa equipe
            <BsStars />
          </Link>
        </div>
      </main>
    </div>
  );
}
