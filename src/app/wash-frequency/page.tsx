"use client";
import React from "react";
import { WASH_FREQUENCY_DATA } from "@/mocks/wash-frequency-data";
import RadioForm from "@/components/radio-form";

export default function WashFrequency() {
  const data = WASH_FREQUENCY_DATA;

  return <RadioForm data={data} />;
}
