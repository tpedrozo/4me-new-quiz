import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
};

export default function Logo({ width = 100, height = 40 }: LogoProps) {
  return (
    <Image
      alt="logo"
      src="https://images.prismic.io/4mequizt/Z7_0uJ7c43Q3gSbR_dark-logo.png?auto=format,compress"
      className="z-10"
      quality={100}
      width={width}
      height={height}
    />
  );
}
