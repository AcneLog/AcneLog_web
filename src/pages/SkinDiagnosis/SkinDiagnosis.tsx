import { useState } from 'react';
import * as S from './SkinDiagnosis.styles';
import { useNavigate } from 'react-router-dom';
import XBtn from '../../assets/xIcon.svg';

// 설문조사 문항
const questions = [
  '세안 후 얼굴이 쉽게 당긴다.',
  '하루 중 오후가 되면 이마나 코 주위가 번들거린다.',
  '세안 후 당김은 느껴지지만, 시간이 지나면 번들거림이 생긴다.',
  '피부 각질이 자주 일어난다.',
  '화장을 하면 들뜨거나 뭉치는 경우가 많다.',
  '모공이 눈에 띄게 크고 피지가 자주 보인다.',
  '피부 속은 건조한데 겉은 유분기로 번들거린다.',
  '보습제를 자주 덧바르지 않으면 건조하다.',
  '기초 제품을 발라도 금방 유분기가 올라온다.',
  '볼 부분은 건조한데 T존은 번들거린다.',
  '피부가 쉽게 예민해지고 자극에 민감하다.',
  '피지로 인해 블랙헤드나 여드름이 자주 생긴다.',
  '봄, 가을, 겨울에 사용하던 크림을 여름에 사용했을 때 유분기가 심해진다.',
  '수분크림을 발라도 속당김이 느껴진다.',
  '화장을 안 하면 피부가 푸석하고 생기 없어 보인다.',
];

// 건성, 지성, 수부지 별 문항 인덱스
const dryIndexes = [0, 3, 4, 7, 10, 14];
const oilyIndexes = [1, 5, 8, 11, 12];
const dehydratedIndexes = [2, 6, 9, 13];

// 답변 유형
const scoreLabels = ['전혀 아니다', '아니다', '보통이다', '그렇다', '매우 그렇다'];

function SkinDiagnosis() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(15).fill(null));
  const navigate = useNavigate();

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
              <p>{q}</p>
            </S.QuestionText>
            <S.RadioGroup>
              {scoreLabels.map((label, i) => (
                <S.Label key={i}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={i + 1}
                    checked={answers[index] === i + 1}
                    onChange={() => handleChange(index, i + 1)}
                  />
                  <span>{label}</span>
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
