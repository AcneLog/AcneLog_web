import { apiPrivate } from '../api/client'; // or apiPrivate, 인증 필요 없으면 apiPublic

export interface SurveyOption {
  optionId: string;
  label: string;
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
export interface SkinResultState {
  skinType: string;
  memberName: string;
}
export const skinTypeService = {
  async getSurveyQuestions(): Promise<SurveyQuestion[]> {
    const res = await apiPrivate.get('/survey/questions');
    // console.log('[Survey Response]', res.data.data.questions);
    return res.data.data.questions;
  },
  async submitSurveyAnswers(answers: Record<string, number>) {
    const res = await apiPrivate.post('/survey/response', { answers });
    // console.log('[Submit Survey Response]', res.data);
    return res.data;
  },
};
