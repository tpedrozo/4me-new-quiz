"use client";
import React from "react";
import RadioForm from "@/components/radio-form";
import { FRIZZ_TYPE_DATA } from "@/mocks/frizz-type-data";

export default function FrizzType() {
  const data = FRIZZ_TYPE_DATA;

  return <RadioForm data={data} />;
}
