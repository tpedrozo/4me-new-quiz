"use client";

import RadioForm from "@/components/radio-form";
import { AGE_DATA } from "@/mocks/age-data";

export default function Age() {
  const data = AGE_DATA;

  return <RadioForm data={data} />;
}
