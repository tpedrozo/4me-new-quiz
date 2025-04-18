import { IStep } from "@/models/step-form";

export const COMPLEMENTARY_DATA: IStep = {
  groupId: 12,
  step: 12,
  percentage: 100,
  maxLength: 9,
  title: "Algo a complementar?",
  question: "complementary",
  mainRoute: "/complementary",
  imagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwS1a4F3NbkBW_nj_wash-hair-form.png?auto=format,compress",
  smallImagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwTEVIF3NbkBW_qn_wash-hair-form-small.png?auto=format,compress",
  nextStep: "/review",
  previousStep: "/frizz-type",
  inputValues: [
    "Gravidez",
    "Pós parto",
    "Menopausa",
    "Queda de cabelo",
    "Uso de megahair no último ano",
    "Transição capilar",
    "Infecções nos últimos 3 meses",
    "Corte químico no último ano",
    "Nenhuma opção",
  ],
};
