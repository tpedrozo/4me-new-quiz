"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useProfile } from "@/contexts/profile-context";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Logo from "@/components/logo";
import { IStep } from "@/models/step-form";
import { cn } from "@/lib/utils";
import ProgressBar from "./progress-bar";
import { IProfile } from "@/models/profile.model";

type RadioFormProps = {
  data: IStep;
};

export default function RadioForm({ data }: RadioFormProps) {
  const { profile, updateProfile, resumeData, setResumeData, isFinished } =
    useProfile();
  const dataQuestion = data?.question as keyof IProfile;
  const [optionSelected, setOptionSelected] = useState(profile[dataQuestion]);
  const router = useRouter();

  const handleSaveAndNextStep = () => {
    updateProfile({ ...profile, [dataQuestion]: optionSelected });
    const resumeIndex = resumeData?.findIndex(
      (item) => item?.groupId === data?.groupId
    );
    if (resumeIndex >= 0) {
      resumeData?.splice(resumeIndex, 1);
    }
    setResumeData([
      ...resumeData,
      {
        groupId: data.groupId,
        imagePath: data.smallImagePath as string,
        question: data.title,
        answer: optionSelected as string,
        mainRoute: data?.mainRoute,
      },
    ]);
    if (isFinished) {
      router.push("/review");
    } else {
      router.push(data.nextStep.trim());
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block w-full h-screen relative">
        <Image
          alt="male-image"
          src={data.imagePath}
          className="z-10"
          quality={100}
          fill
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <div className="px-6 py-10 pb-10 sm:p-20 h-screen flex justify-start sm:justify-center items-center flex-col gap-6 bg-[#F5F0EA] relative overflow-y-auto">
        <div className="w-16 absolute top-5 right-10 hidden sm:block">
          <ProgressBar percentage={data?.percentage} />
        </div>
        <div className="w-full max-w-[392px] mx-auto flex items-center gap-2">
          <Link href={data?.previousStep}>
            <MdArrowBack className="text-2xl" />
          </Link>

          <Logo />
        </div>
        <div className="w-full max-w-[392px] mx-auto">
          <div className="flex justify-center items-center p-2 bg-gray-50 w-full max-w-[100px] rounded-full">
            <h6>Passo {data?.step}</h6>
          </div>
        </div>
        <h2 className="font-hind text-4xl text-start text-bold mx-auto w-full max-w-[392px] bg-gradient-to-r from-black via-[#8F8C89] to-[#8F8C89] inline-block text-transparent bg-clip-text">
          {data?.title}
        </h2>
        <div className="flex flex-col gap-6 w-full">
          <RadioGroup
            defaultValue={String(optionSelected) as string}
            className={cn(
              data?.inputValues?.length > 3
                ? "grid grid-cols-2 gap-2"
                : "grid grid-cols-1 gap-2",
              `w-full max-w-[392px] mx-auto`
            )}
            onValueChange={(value) => setOptionSelected(value)}
          >
            {data?.inputValues?.map((item, index) => (
              <Label
                key={index}
                className={`flex items-center space-x-2 rounded-md ${
                  optionSelected === item ? `bg-black text-white` : `bg-gray-50`
                } p-3 sm:max-w-[198px]`}
              >
                <RadioGroupItem
                  value={item}
                  id={item}
                  className={`${
                    optionSelected === item ? `border-gray-500` : `border-black`
                  }`}
                />
                <Label
                  htmlFor={item}
                  className="peer-checked:text-black cursor-pointer"
                >
                  {item}
                </Label>
              </Label>
            ))}
          </RadioGroup>
          <div className="w-full sm:max-w-[392px] mx-auto flex justify-start">
            <Button
              className="flex items-center gap-2 w-full"
              disabled={!optionSelected}
              onClick={(e) => {
                e.preventDefault();
                handleSaveAndNextStep();
              }}
            >
              Avançar <MdArrowForward className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
