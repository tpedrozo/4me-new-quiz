"use client";

import React from "react";
import SelectByImage from "@/components/select-by-image";
import { HAIR_TYPE_DATA } from "@/mocks/hair-type-data";

export default function HairType() {
  const data = HAIR_TYPE_DATA;

  return (
    <SelectByImage
      data={data}
      profileOption={"hairType"}
      nextStep={"/hair-consider"}
      previousStep={"/general-info"}
      questionTitle={"Como é o seu cabelo?"}
      mainRoute="/hair-type"
    />
  );
}
