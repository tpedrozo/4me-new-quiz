import { IStep } from "@/models/step-form";

export const DANDRUFF_DATA: IStep = {
  groupId: 10,
  step: 10,
  percentage: 83,
  maxLength: 3,
  title: "Você costuma ter caspa?",
  question: "dandruff",
  mainRoute: "/dandruff",
  imagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwS1TIF3NbkBW_nE_dandruff-form.png?auto=format,compress",
  smallImagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwTEToF3NbkBW_qh_dandruff-form-small.png?auto=format,compress",
  nextStep: "/frizz-type",
  previousStep: "/you-wire-are",
  inputValues: ["Nunca", "Às vezes", "Sempre"],
};
