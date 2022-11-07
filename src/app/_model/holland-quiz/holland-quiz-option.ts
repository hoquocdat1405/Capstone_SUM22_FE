export interface HollandQuizOption {
  id: string;
  text: string;
  value: number;
  isSelected: boolean;
}

export interface HollandQuizOptionModel {
  id: string;
  optionContent: string;
  value: string;
}

export interface HollandPostQuizOption {
  optionId: number;
  optionValue: string;
}
