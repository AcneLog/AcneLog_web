import React, { useState } from 'react';
import * as S from './Diagnosis.styles';
import useCustomNavigate from '../hooks/useNavigate';

const Diagnosis: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    setImage(null);
  };

  const handleSubmit = () => {
    if (image) {
      alert('진단을 시작합니다.');
    }
  };
  const goToPage = useCustomNavigate();
  return (
    <S.UploadBox>
      <S.Title>
        피부 이미지 업로드 <span>*파일 1장만 가능합니다</span>
      </S.Title>

      {image ? (
        <S.PreviewWrapper>
          <S.CloseButton onClick={handleCancel}>&times;</S.CloseButton>
          <S.PreviewImage src={image} alt="선택 이미지" />
          <p>선택 이미지</p>
        </S.PreviewWrapper>
      ) : (
        <S.UploadLabel>
          +
          <input type="file" accept="image/*" onChange={handleImageChange} hidden />
        </S.UploadLabel>
      )}

      <S.GuideBox>
        <ul>
          <li>밝고 자연광이 있는 곳에서 촬영해주세요.</li>
          <li>특정 부위를 명확히 촬영해 붉은 정도를 인식해주세요.</li>
          <li>사진이 흐리거나 초점이 맞지 않으면 분석 결과의 정확도가 낮아질 수 있습니다.</li>
        </ul>
      </S.GuideBox>

      <S.ButtonGroup>
        <S.ActionButton primary disabled={!image} onClick={handleSubmit}>
          진단하기
        </S.ActionButton>
        <S.ActionButton onClick={() => goToPage('/')}>취소하기</S.ActionButton>
      </S.ButtonGroup>
    </S.UploadBox>
  );
};

export default Diagnosis;
