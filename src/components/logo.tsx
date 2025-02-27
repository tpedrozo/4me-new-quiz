import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
};

export default function Logo({ width = 100, height = 40 }: LogoProps) {
  return (
    <Image
      alt="logo"
      src="/dark-logo.png"
      className="z-10"
      quality={100}
      width={width}
      height={height}
    />
  );
}
