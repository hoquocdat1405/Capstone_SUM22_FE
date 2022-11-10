export interface HollandQuizOption {
  id: string;
  text: string;
  value: number;
  isSelected: boolean;
}

export interface DiscQuizOptionModel {
  id: string;
  optionContent: string;
  value: string;
}

export interface DiscPostQuizOption {
  optionId: number;
  optionValue: string;
}
