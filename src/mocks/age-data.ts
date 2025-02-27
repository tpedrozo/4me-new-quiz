import { IStep } from "@/models/step-form";

export const AGE_DATA: IStep = {
  groupId: 3,
  step: 3,
  percentage: 20.01,
  title: "Qual é sua idade?",
  question: "age",
  mainRoute: "/age",
  imagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwS1a4F3NbkBW_nj_wash-hair-form.png?auto=format,compress",
  smallImagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwTEVIF3NbkBW_qn_wash-hair-form-small.png?auto=format,compress",
  nextStep: "/complementary",
  previousStep: "/general-info",
  inputValues: [
    "Menos de 18 anos",
    "18-30 anos",
    "31-40 anos",
    "41-50 anos",
    "51-60 anos",
    "61-70 anos",
    "Mais de 70 anos",
  ],
};
