"use client";
import { useProfile } from "@/contexts/profile-context";
import { IHairType } from "@/models/hair-type.model";
import { useRouter } from "next/navigation";
import React from "react";
import QuestionHeader from "./question-header";
import ImageSelector from "./images-selector";
import Logo from "./logo";
import ProgressBar from "./progress-bar";

type SelectByImageProps = {
  data: IHairType[];
  profileOption: string;
  nextStep: string;
  previousStep: string;
  questionTitle: string;
  mainRoute: string;
};

export default function SelectByImage({
  data,
  profileOption,
  nextStep,
  previousStep,
  questionTitle,
  mainRoute,
}: SelectByImageProps) {
  const { profile, updateProfile, setActionData, resumeData, setResumeData } =
    useProfile();
  const router = useRouter();

  const handleSelectedHairType = (hairType: IHairType) => {
    updateProfile({ ...profile, [profileOption]: hairType?.name as string });
    setActionData({
      imagePath: hairType?.fullImagePath as string,
      nextStep: nextStep,
      previousStep: previousStep,
      title: hairType?.name as string,
      questionTitle: questionTitle,
      description: hairType?.description as string,
    });
    const resumeIndex = resumeData?.findIndex(
      (item) => item?.groupId === hairType?.groupId
    );
    if (resumeIndex >= 0) {
      resumeData?.splice(resumeIndex, 1);
    }
    setResumeData([
      ...resumeData,
      {
        groupId: hairType?.groupId as number,
        imagePath: hairType?.smallImagePath as string,
        question: questionTitle,
        answer: hairType?.name as string,
        mainRoute: mainRoute,
      },
    ]);
    router.push("/confirmation-step");
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center pr-10 bg-[#F5F0EA]">
        <QuestionHeader title={questionTitle} />
        <div className="flex items-center gap-10">
          <div className="w-16">
            <ProgressBar percentage={data[0]?.percentage} />
          </div>
          <Logo width={80} height={20} />
        </div>
      </div>
      <div
        className={`w-full h-[calc(100vh_-_104px)] grid grid-flow-row lg:flex`}
      >
        {data?.map((item, index) => (
          <ImageSelector
            key={index as number}
            src={item?.imagePath as string}
            alt={item?.name as string}
            textButton={item?.name as string}
            handleSelected={() => handleSelectedHairType(item)}
          />
        ))}
      </div>
    </div>
  );
}
