"use client";

import CheckboxForm from "@/components/checkbox-form";
import { GOALS_DATA } from "@/mocks/goals-data";

export default function Goals() {
  const data = GOALS_DATA;

  return <CheckboxForm data={data} />;
}
