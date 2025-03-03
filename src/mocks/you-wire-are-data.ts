import { IStep } from "@/models/step-form";

export const YOU_WIRE_ARE_DATA: IStep = {
  groupId: 9,
  step: 9,
  percentage: 80.04,
  maxLength: 1,
  title: "Seus fios são...",
  question: "yourWireAre",
  mainRoute: "/you-wire-are",
  imagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwS1VYF3NbkBW_nN_hair-stands-form.png?auto=format,compress",
  smallImagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwTEUIF3NbkBW_qj_hair-stands-form-small.png?auto=format,compress",
  nextStep: "/dandruff",
  previousStep: "/hair-loss",
  inputValues: ["Normais", "Finos", "Grossos", "Não tenho certeza"],
};
