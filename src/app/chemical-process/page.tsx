"use client";
import CheckboxForm from "@/components/checkbox-form";
import { CHEMICAL_PROCESS_DATA } from "@/mocks/chemical-process-data";

export default function ChemicalProcess() {
  const data = CHEMICAL_PROCESS_DATA;

  return <CheckboxForm data={data} />;
}
