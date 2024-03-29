export interface MbtiQuizOption {
  id: string;
  text: string;
  value: number;
  isSelected: boolean;
}

export interface MbtiPostQuizOption {
  optionId: number;
  optionValue: string;
}
