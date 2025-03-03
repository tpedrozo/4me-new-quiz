"use client";

import { HAIR_LENGTH_HAIR } from "@/mocks/hair-length";
import SelectByImage from "@/components/select-by-image";

export default function Hairlength() {
  const data = HAIR_LENGTH_HAIR;

  return (
    <SelectByImage
      data={data}
      profileOption={"hairLength"}
      nextStep={"/wash-frequency"}
      previousStep={"/hair-consider"}
      questionTitle={"Qual o comprimento dos seus cabelos?"}
      mainRoute="/hair-length"
    />
  );
}
