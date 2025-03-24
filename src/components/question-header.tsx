"use client";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type QuestionHeaderProps = {
  title: string;
};

export default function QuestionHeader({ title }: QuestionHeaderProps) {
  const router = useRouter();

  return (
    <div className="py-4 sm:py-7 px-4 sm:px-10 flex justify-between bg-[#F5F0EA]">
      <div className="flex items-center gap-10">
        <Button variant="link" onClick={() => router.back()}>
          <FaArrowLeft className=" text-primary" />
        </Button>
        <h2 className="text-lg lg:text-[40px] bg-gradient-to-r from-black via-[#8F8C89] to-[#8F8C89] inline-block text-transparent bg-clip-text">
          {title}
        </h2>
      </div>
      {/* <Logo width={80} height={20} /> */}
    </div>
  );
}
