"use client";

import CheckboxForm from "@/components/checkbox-form";
import { COMPLEMENTARY_DATA } from "@/mocks/complementary-data";

export default function Complementary() {
  const data = COMPLEMENTARY_DATA;

  return <CheckboxForm data={data} />;
}
