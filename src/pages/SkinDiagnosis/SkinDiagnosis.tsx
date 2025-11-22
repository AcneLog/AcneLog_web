import { useEffect, useState } from 'react';
import * as S from './SkinDiagnosis.styles';
import { useNavigate } from 'react-router-dom';
import XBtn from '../../assets/xIcon.svg';
import { skinTypeService, SurveyQuestion } from '../../services/skinTypeService';

// 건성, 지성, 수부지 별 문항 인덱스
const dryIndexes = [0, 3, 4, 7, 10, 14];
const oilyIndexes = [1, 5, 8, 11, 12];
const dehydratedIndexes = [2, 6, 9, 13];

function SkinDiagnosis() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(15).fill(null));
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

  const calculateSkinType = () => {
    if (answers.includes(null)) {
      alert('모든 문항에 응답해주세요.');
      return;
    }

    const sum = (indexes: number[]) => indexes.reduce((acc, idx) => acc + (answers[idx] ?? 0), 0);

    const dry = sum(dryIndexes);
    const oily = sum(oilyIndexes);
    const dehydrated = sum(dehydratedIndexes);

    const max = Math.max(dry, oily, dehydrated);

    let skinType = '';
    if (max === dry) skinType = '건성';
    else if (max === oily) skinType = '지성';
    else skinType = '수부지';

    // 다음 페이지로 진단 결과 넘기기
    navigate('/skin/result', {
      state: {
        skinType,
      },
    });
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
              {q.options.map((label, i) => (
                <S.Label key={i}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={i + 1}
                    checked={answers[index] === i + 1}
                    onChange={() => handleChange(index, i + 1)}
                  />
                  <span>{label.optionText}</span>
                </S.Label>
              ))}
            </S.RadioGroup>
          </S.QuestionCard>
        ))}
      </S.Wrapper>

      <S.SubmitButton onClick={calculateSkinType}>제출하기</S.SubmitButton>
    </S.SkinLayout>
  );
}

export default SkinDiagnosis;
