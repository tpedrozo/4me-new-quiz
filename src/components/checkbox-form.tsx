"use client";

// import { useProfile } from "@/contexts/profile-context";
import Image from "next/image";
import Link from "next/link";
import { IStep } from "@/models/step-form";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Logo from "./logo";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import ProgressBar from "./progress-bar";
import { useProfile } from "@/contexts/profile-context";
import { useRouter } from "next/navigation";
import { IProfile } from "@/models/profile.model";

type CheckboxFormProps = {
  data: IStep;
};

export default function CheckboxForm({ data }: CheckboxFormProps) {
  const { profile, updateProfile, resumeData, setResumeData, isFinished } =
    useProfile();
  const dataQuestion = data?.question as keyof IProfile;
  const [optionSelected, setOptionSelected] = useState<string[]>(
    (profile[dataQuestion] as string[]) || []
  );
  const router = useRouter();

  const handleSaveAndNextStep = () => {
    updateProfile({ ...profile, [data.question]: optionSelected });
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
        answer: optionSelected,
        mainRoute: data?.mainRoute,
      },
    ]);
    if (isFinished) {
      router.push("/review");
    } else {
      router.push(data.nextStep.trim());
    }
  };

  const handleSelectOption = (option: string): void => {
    if (option === "Nenhuma opção") {
      setOptionSelected([option]);
      return;
    }
    if (optionSelected.includes("Nenhuma opção")) {
      optionSelected.splice(optionSelected.indexOf("Nenhuma opção"), 1);
    }
    if (optionSelected.indexOf(option) >= 0) {
      setOptionSelected(optionSelected.filter((item) => item !== option));
    } else {
      setOptionSelected([...optionSelected, option]);
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
      <div className="px-6 py-10 sm:p-20 h-screen flex justify-start sm:justify-center flex-col gap-6 bg-[#F5F0EA] relative">
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
          <div
            defaultValue="option-one"
            className={cn(
              data?.inputValues?.length > 5 && "grid grid-cols-2 gap-2",
              `w-full max-w-[392px] mx-auto`
            )}
          >
            {data?.inputValues?.map((item, index) => (
              <Label
                htmlFor={item}
                key={index}
                className={`flex items-center space-x-2 rounded-md ${
                  optionSelected.includes(item)
                    ? `bg-black text-white`
                    : `bg-gray-50`
                } p-3 max-w-[198px]`}
              >
                <Checkbox
                  value={item}
                  checked={optionSelected.includes(item)}
                  id={item}
                  className={`${
                    optionSelected.includes(item)
                      ? `border-gray-500`
                      : `border-black`
                  }`}
                  onCheckedChange={() => handleSelectOption(item)}
                />
                <Label
                  htmlFor={item}
                  className="peer-checked:text-black cursor-pointer"
                >
                  {item}
                </Label>
              </Label>
            ))}
          </div>
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
