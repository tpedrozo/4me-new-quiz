"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/progress-bar";
import ImageSelector from "@/components/image-selector";
import { useProfile } from "@/contexts/profile-context";

export default function Gender() {
  const router = useRouter();
  const { profile, updateProfile } = useProfile();

  const handleSaveGender = (genderSelected: string) => {
    updateProfile({ ...profile, gender: genderSelected });
    router.push("/general-info");
  };

  return (
    <div className="w-screen h-screen grid grid-cols-2 relative">
      <ImageSelector
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
      />
      <div className="w-16 absolute top-5 right-10 z-40">
        <ProgressBar
          percentage={6.67}
          pathColor="white"
          trailColor="#1F1F1F"
          textColor="white"
        />
      </div>
    </div>
  );
}
