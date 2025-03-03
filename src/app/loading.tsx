import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen grid place-items-center bg-zinc-900">
      <Image
        alt="logo"
        src="https://images.prismic.io/4mequizt/Z7_0uJ7c43Q3gSbR_dark-logo.png?auto=format,compress"
        className="animate-pulse"
        quality={100}
        width={200}
        height={80}
      />
    </div>
  );
}
