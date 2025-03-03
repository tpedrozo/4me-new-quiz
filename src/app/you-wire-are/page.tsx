"use client";
import React from "react";
import RadioForm from "@/components/radio-form";
import { YOU_WIRE_ARE_DATA } from "@/mocks/you-wire-are-data";

export default function YouWireAre() {
  const data = YOU_WIRE_ARE_DATA;

  return <RadioForm data={data} />;
}
