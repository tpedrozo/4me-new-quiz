import { IStep } from "@/models/step-form";

export const HAIR_LOSS_DATA: IStep = {
  groupId: 11,
  step: 11,
  percentage: 73.37,
  title: "Você teve queda de cabelo nos últimos meses?",
  question: "hairLoss",
  mainRoute: "/hair-loss",
  imagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwS1VIF3NbkBW_nM_hair-loss-form.png?auto=format,compress",
  smallImagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwTEXIF3NbkBW_qw_hair-loss-form-small.png?auto=format,compress",
  nextStep: "/you-wire-are",
  previousStep: "/chemical-process",
  inputValues: ["Sim", "Não"],
};
