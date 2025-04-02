import { IStep } from "@/models/step-form";

export const CHEMICAL_PROCESS_DATA: IStep = {
  groupId: 7,
  step: 7,
  percentage: 58,
  maxLength: 3,
  title: "Você tem algum processo químico?",
  question: "chemicalProcess",
  mainRoute: "/chemical-process",
  imagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwS1X4F3NbkBW_nX_paint-hair-form.png?auto=format,compress",
  smallImagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwTEWIF3NbkBW_qr_paint-hair-form-small.png?auto=format,compress",
  nextStep: "/hair-loss",
  previousStep: "/wash-frequency",
  inputValues: [
    "Progressiva/Botox",
    "Alisamento",
    "Descoloração",
    "Tintura sem descoloração",
    "Não",
  ],
};
