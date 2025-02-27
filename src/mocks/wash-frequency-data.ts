import { IStep } from "@/models/step-form";

export const WASH_FREQUENCY_DATA: IStep = {
  groupId: 9,
  step: 9,
  percentage: 60.03,
  title: "Com qual frequência você lava os fios?",
  question: "washFrequency",
  mainRoute: "/wash-frequency",
  imagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwS1a4F3NbkBW_nj_wash-hair-form.png?auto=format,compress",
  smallImagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwTEVIF3NbkBW_qn_wash-hair-form-small.png?auto=format,compress",
  nextStep: "/chemical-process",
  previousStep: "/hair-length",
  inputValues: [
    "Todo dia",
    "4-5x semana",
    "3x semana",
    "2x semana",
    "1x semana",
  ],
};
