import { useEffect, useState } from 'react';
import * as S from './SkinDiagnosis.styles';
import { useNavigate } from 'react-router-dom';
import XBtn from '../../assets/xIcon.svg';
import { skinTypeService, SurveyQuestion } from '../../services/skinTypeService';

function SkinDiagnosis() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(12).fill(null));
  const [questions, setQuestions] = useState<SurveyQuestion[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await skinTypeService.getSurveyQuestions();
        setQuestions(data);
      } catch (e) {
        console.error('설문조사 불러오기 실패', e);
      }
    })();
  }, []);

  const handleChange = (questionIdx: number, score: number) => {
    const updated = [...answers];
    updated[questionIdx] = score;
    setAnswers(updated);
  };

  const submitAnswers = async () => {
    if (answers.includes(null)) {
      alert('모든 문항에 응답해주세요.');
      return;
    }
    // answers 객체 만들기
    // answers 객체 만들기
    const answerObj: Record<string, number> = {};
    answers.forEach((value, index) => {
      const questionId = questions[index].questionId; // Q001 형태
      answerObj[questionId] = value as number;
    });

    try {
      // 백엔드에 전송
      const res = await skinTypeService.submitSurveyAnswers(answerObj);

      navigate('/skin/result', {
        state: {
          memberName: res.data.memberName,
          skinType: res.data.skinType,
        },
      });
    } catch (e) {
      console.error('설문조사 제출 실패', e);
      alert('설문조사 제출에 실패했습니다. 다시 시도해주세요.');
    }
  };
  return (
    <S.SkinLayout>
      <S.TitleLayout>
        {/* x 버튼 누를 시, 마이페이지 사이드바로 이동 */}
        <S.X_Icon onClick={() => navigate('/my')}>
          <img src={XBtn} alt="x-button" />
        </S.X_Icon>
        <S.Title>나의 피부 타입 진단하기</S.Title>
      </S.TitleLayout>

      <S.Wrapper>
        {questions.map((q, index) => (
          <S.QuestionCard key={index}>
            <S.QuestionText>
              <p>{index + 1}.</p>
              <p>{q.questionText}</p>
            </S.QuestionText>
            <S.RadioGroup>
              {q.options.map((labels, i) => (
                <S.Label key={i}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={i + 1}
                    checked={answers[index] === i + 1}
                    onChange={() => handleChange(index, i + 1)}
                  />
                  <span>{labels.label}</span>
                </S.Label>
              ))}
            </S.RadioGroup>
          </S.QuestionCard>
        ))}
      </S.Wrapper>

      <S.SubmitButton onClick={submitAnswers}>제출하기</S.SubmitButton>
    </S.SkinLayout>
  );
}

export default SkinDiagnosis;
