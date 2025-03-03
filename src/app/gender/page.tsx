"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/progress-bar";
import { useProfile } from "@/contexts/profile-context";
import Image from "next/image";

export default function Gender() {
  const router = useRouter();
  const { profile, updateProfile } = useProfile();

  const handleSaveGender = (genderSelected: string) => {
    updateProfile({ ...profile, gender: genderSelected });
    router.push("/age");
  };

  return (
    <div className="w-screen h-screen relative grid md:grid-cols-2 pb-20 md:pb-0 overflow-y-auto">
      <div className="" onClick={() => handleSaveGender("feminino")}>
        <div className="relative w-full h-full bg-black">
          <Image
            alt="logo"
            src="https://images.prismic.io/4mequizt/Z7_DiZ7c43Q3gSTj_female.png?auto=format,compress"
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
            <button className="font-bold">Feminino</button>
          </div>
        </div>
      </div>
      <div className="" onClick={() => handleSaveGender("masculino")}>
        <div className="relative w-full h-full bg-black">
          <Image
            alt="logo"
            src="https://images.prismic.io/4mequizt/Z7_Dip7c43Q3gSTk_gender-male.png?auto=format,compress"
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
            <button className="font-bold">Masculino</button>
          </div>
        </div>
      </div>

      {/* <ImageSelector
        src="https://images.prismic.io/4mequizt/Z7_Dip7c43Q3gSTk_gender-male.png?auto=format,compress"
        alt={"male"}
        textButton="Cabelo masculino"
        handleSelected={() => handleSaveGender("masculino")}
      />
      <ImageSelector
        src={
          "https://images.prismic.io/4mequizt/Z7_DiZ7c43Q3gSTj_female.png?auto=format,compress"
        }
        alt={"female"}
        textButton="Cabelo feminino"
        handleSelected={() => handleSaveGender("feminino")}
      /> */}
      <div className="w-16 absolute top-5 right-10 z-40">
        <ProgressBar
          percentage={0}
          pathColor="white"
          trailColor="#1F1F1F"
          textColor="white"
        />
      </div>
    </div>
  );
}
