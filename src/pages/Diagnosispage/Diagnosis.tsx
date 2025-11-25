import React, { useState } from 'react';
import * as S from './Diagnosis.styles';
import { NavigateOptions, useNavigate } from 'react-router-dom';
import { diagnosisService } from '../../services/diagnosisService';
import Loading from '../../components/common/Loading';

const Diagnosis: React.FC = () => {
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null); // 실제 파일 저장
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleCancel = () => {
    setImagePreview(null);
    setFile(null);
  };

  const goToPage = (path: string, options?: NavigateOptions) => {
    navigate(path, options);
  };

  const handleDiagnosis = async () => {
    if (!file || !imagePreview) return;
    try {
      setIsLoading(true);
      const startTime = Date.now();
      const minLoadingTime = 10000;

      // 1) 이미지 업로드
      await diagnosisService.uploadImage(file);

      // 2) 이미지 분석
      const result = await diagnosisService.analyzeImage(file);

      // 최소 로딩 시간 확보
      const elapsed = Date.now() - startTime;
      if (elapsed < minLoadingTime) {
        await new Promise((res) => setTimeout(res, minLoadingTime - elapsed));
      }
      goToPage('/diagnosis/result', {
        state: {
          result: result,
        },
      });
    } catch {
      alert('에러가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.UploadBox>
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <S.Title>
            피부 이미지 업로드 <span>*파일 1장만 가능합니다</span>
          </S.Title>

          {imagePreview ? (
            <S.PreviewWrapper>
              <S.CloseButton onClick={handleCancel}>&times;</S.CloseButton>
              <S.PreviewImage src={imagePreview} alt="선택 이미지" />
              <p>선택 이미지</p>
            </S.PreviewWrapper>
          ) : (
            <S.UploadLabel>
              +
              <input type="file" accept="image/*" onChange={handleImageChange} hidden />
            </S.UploadLabel>
          )}

          <S.GuideBox>
            <h3 style={{ marginBottom: '0.5rem' }}>☝🏻 피부 이미지 업로드 가이드</h3>
            <ul>
              <li>밝고 자연광이 있는 곳에서 촬영해주세요.</li>
              <li>특정 부위를 명확히 촬영해 붉은 정도를 인식해주세요.</li>
              <li>사진이 흐리거나 초점이 맞지 않으면 분석 결과의 정확도가 낮아질 수 있습니다.</li>
            </ul>
          </S.GuideBox>

          <S.ButtonGroup>
            <S.ActionButton $primary disabled={!file || isLoading} onClick={handleDiagnosis}>
              진단하기
            </S.ActionButton>
            <S.ActionButton onClick={() => goToPage('/')}>취소하기</S.ActionButton>
          </S.ButtonGroup>
        </>
      )}
    </S.UploadBox>
  );
};

export default Diagnosis;
