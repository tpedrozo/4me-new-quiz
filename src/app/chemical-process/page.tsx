"use client";
import RadioForm from "@/components/radio-form";
import { CHEMICAL_PROCESS_DATA } from "@/mocks/chemical-process-data";

export default function ChemicalProcess() {
  const data = CHEMICAL_PROCESS_DATA;

  return <RadioForm data={data} />;
}
