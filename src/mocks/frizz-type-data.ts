import { IStep } from "@/models/step-form";

export const FRIZZ_TYPE_DATA: IStep = {
  groupId: 11,
  step: 11,
  percentage: 93.38,
  maxLength: 3,
  title: "Em relação a frizz, seus fios são...",
  question: "frizzType",
  mainRoute: "/frizz-type",
  imagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwS1U4F3NbkBW_nL_hair-frizz-form.png?auto=format,compress",
  smallImagePath:
    "https://images.prismic.io/ignewstpedrozo/ZwTEToF3NbkBW_qg_hair-frizz-form-small.png?auto=format,compress",
  nextStep: "/complementary",
  previousStep: "/dandruff",
  inputValues: ["Danificados", "Pouco danificados", "Não danificados"],
};
