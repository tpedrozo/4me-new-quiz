"use client";

import QuestionHeader from "@/components/question-header";
import { useProfile } from "@/contexts/profile-context";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function ConfirmationStep() {
  const { actionData, isFinished } = useProfile();
  const router = useRouter();

  useEffect(() => {
    if (actionData?.title?.length === 0) {
      router.push("/hair-type");
    }
  }, []);

  return (
    <div>
      <QuestionHeader title={actionData?.questionTitle as string} />
      <div className="w-full h-[calc(100vh_-_104px)] grid grid-cols-1 relative">
        <Image
          alt={actionData?.title as string}
          src={actionData?.imagePath as string}
          className="z-10"
          quality={100}
          fill
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <div className="absolute bottom-[52px]  z-30 p-10 bg-[#1f1f1f] w-full">
        <Link
          href={actionData?.previousStep as string}
          className="absolute bg-white -top-[68px] left-0 p-6 cursor-pointer"
        >
          <MdClose className="text-black text-xl" />
        </Link>
        <div className="flex gap-4 items-center justify-between">
          <div className="flex flex-col gap-4">
            <h4 className="text-[#F5F0EA] text-[40px]">
              {actionData?.title as string}
            </h4>
            <p className="text-[#F5F0EA] text-opacity-50">
              {actionData?.description as string}
            </p>
          </div>
          <Link
            href={isFinished ? "/review" : (actionData?.nextStep as string)}
            className="flex items-center gap-4 text-gray-50"
          >
            <p>Avançar</p>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
