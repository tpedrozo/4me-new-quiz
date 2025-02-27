export type IStep = {
  groupId: number;
  step: number;
  percentage: number;
  title: string;
  question: string;
  imagePath: string;
  smallImagePath?: string;
  nextStep: string;
  previousStep: string;
  inputValues: string[];
  mainRoute: string;
};
