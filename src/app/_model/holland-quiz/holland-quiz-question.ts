import { HollandQuizOption } from './holland-quiz-option';

export interface HollandQuizQuestion {
  id: string;
  text: string;
  type: string;
  options: HollandQuizOption[];

  // constructor(
  //   id: string,
  //   text: string,
  //   type: string,
  //   options: HollandQuizOption[]
  // ) {
  //   this._id = id;
  //   this._text = text;
  //   this._type = type;
  //   this._options = options;
  // }
}
