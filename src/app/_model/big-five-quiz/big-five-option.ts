export interface BigFiveQuizOptionModel {
  id: string;
  optionContent: string;
  value: string;
}

export interface BigFivePostQuizOption {
  optionId: number;
  optionValue: string;
  selectedField: boolean;
}
