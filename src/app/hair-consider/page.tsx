"use client";
import SelectByImage from "@/components/select-by-image";
import { HAIR_CONSIDER_DATA } from "@/mocks/hair-consider-data";

export default function HairConsider() {
  const data = HAIR_CONSIDER_DATA;

  return (
    <SelectByImage
      data={data}
      profileOption={"hairConsider"}
      nextStep={"/hair-length"}
      previousStep={"/hair-consider"}
      questionTitle={"Como você considera seu cabelo?"}
      mainRoute="/hair-consider"
    />
  );
}
