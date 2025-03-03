"use client";
import React from "react";
import RadioForm from "@/components/radio-form";
import { DANDRUFF_DATA } from "@/mocks/dandruff-data";

export default function Dandruff() {
  const data = DANDRUFF_DATA;

  return <RadioForm data={data} />;
}
