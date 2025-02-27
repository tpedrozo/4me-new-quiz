import React from "react";
import Image from "next/image";

type ImageSelectorProps = {
  src: string;
  alt: string;
  textButton?: string;
  handleSelected: () => void;
};

export default function ImageSelector({
  src,
  alt,
  textButton,
  handleSelected,
}: ImageSelectorProps) {
  return (
    <div className="relative w-full bg-black" onClick={handleSelected}>
      <Image
        alt={alt}
        src={src}
        className="z-10 transition-opacity duration-[2s] ease-in-out"
        quality={100}
        fill
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        blurDataURL="https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="absolute z-20 w-full h-full bg-[#090502]/40 peer transition-colors duration-500 ease-in-out" />
      <div className="w-full h-14 bg-[#F5F0EA] text-black lg:opacity-0 lg:peer-hover:opacity-100 transition-colors duration-500 ease-in-out hover:opacity-100 flex justify-center items-center absolute bottom-0 lg:bottom-[52px] z-10">
        <button className="font-bold">{textButton}</button>
      </div>
    </div>
  );
}
