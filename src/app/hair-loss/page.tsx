"use client";
import RadioForm from "@/components/radio-form";
import { HAIR_LOSS_DATA } from "@/mocks/hair-loss-data";

export default function HairLoss() {
  const data = HAIR_LOSS_DATA;

  return <RadioForm data={data} />;
}
