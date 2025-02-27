export interface IResume {
  groupId: number;
  imagePath: string;
  question: string;
  answer: string | string[];
  originAnswerPath?: string;
  mainRoute: string;
}
