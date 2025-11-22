import { apiPrivate } from '../api/client'; // or apiPrivate, 인증 필요 없으면 apiPublic

export interface SurveyOption {
  optionId: string;
  optionText: string;
  score: number;
}

export interface SurveyQuestion {
  questionId: string;
  questionText: string;
  questionType: string;
  options: SurveyOption[];
  required: boolean;
  order: number;
}

export const skinTypeService = {
  async getSurveyQuestions(): Promise<SurveyQuestion[]> {
    const res = await apiPrivate.get('/survey/questions');
    //console.log('[Survey Response]', res.data.data.questions);
    return res.data.data.questions;
  },
};
