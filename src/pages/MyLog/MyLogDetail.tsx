import { useNavigate, useParams } from 'react-router-dom';
import * as S from './MyLogDetail.styles';
import { useEffect, useState } from 'react';
import xIcon from '../../assets/xIcon.svg';
import { myLogDetailService, MyLogItem } from '../../services/myLogservice';
import { acneTypeMap } from '../../constants/acneTypeMap';

const MyLogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [myLogDetailResponse, setMyLogDetailResponse] = useState<MyLogItem | null>(null);
  const [isPublic, setIsPublic] = useState<true | false>(false);

  const fetchMyLogDetailData = async () => {
    try {
      const data = await myLogDetailService.getMyLogDetail(id!);

      setMyLogDetailResponse(data);
      setIsPublic(data.isPublic ? true : false);
    } catch (err) {
      console.error('API 호출 오류:', err);
    }
  };

  useEffect(() => {
    fetchMyLogDetailData();
  }, [id]);
  if (!myLogDetailResponse) return <p>데이터 없음</p>;

  const data = myLogDetailResponse;

  //공개여부 변경 함수, API 개발 후 수정 예정
  const handleVisibilityChange = async (value: boolean) => {
    try {
      setIsPublic(value); // 상태 먼저 바꿔서 UI 반영

      //await myLogDetailService.updateVisibility(id!, value); // API 호출
      console.log('공개 여부 변경 성공');
    } catch (err) {
      console.error('공개 여부 변경 실패', err);
      // 실패하면 UI 상태 원복
      setIsPublic(!value);
    }
  };

  return (
    <S.Content>
      <S.CloseButton onClick={() => navigate(-1)}>
        <img src={xIcon} />
      </S.CloseButton>

      <S.Image src={data.imageUrl} alt="피부 사진" />

      <hr style={{ border: 'none', borderTop: '0.1rem dashed #ccc', margin: '1rem 0' }} />
      <S.InfoSection>
        <S.DetailList>
          <li>
            <S.BlackBadge>진단일</S.BlackBadge>{' '}
            <S.DiagnosisValue>{data.createdAt ? data.createdAt : '진단일 없음'}</S.DiagnosisValue>
          </li>
          <li>
            <S.BlackBadge>공개 여부</S.BlackBadge>
            <S.CustomRadio className="custom-radio">
              <input
                type="radio"
                name="visibility"
                value="true"
                checked={isPublic === true}
                onChange={() => handleVisibilityChange(true)}
              />
              공개
            </S.CustomRadio>
            <S.CustomRadio style={{ marginLeft: '1rem' }} className="custom-radio">
              <input
                type="radio"
                name="visibility"
                value="false"
                checked={isPublic === false}
                onChange={() => handleVisibilityChange(false)}
              />
              비공개
            </S.CustomRadio>
          </li>
          <li>
            <S.BlueBadge>진단명</S.BlueBadge>
            <S.DiagnosisValue>
              {acneTypeMap[data.acneType as keyof typeof acneTypeMap] || '알 수 없음'}
            </S.DiagnosisValue>
          </li>
        </S.DetailList>
        <S.Description>
          <h4 style={{ color: '#17171b', marginBottom: '0.5rem' }}>
            ☝🏻 '{acneTypeMap[data.acneType as keyof typeof acneTypeMap] || '알 수 없음'}'이란?
          </h4>
          <S.DiagnosisValue>{data.description}</S.DiagnosisValue>
        </S.Description>
      </S.InfoSection>

      <S.Title>치료 및 관리 가이드</S.Title>
      <S.TreatmentSection>
        <S.BlackBadge>치료법</S.BlackBadge>
        {/* <div className="treatment-title">{data.careMethod}</div> */}
        <div>{data.careMethod}</div>
      </S.TreatmentSection>

      <S.ManagementSection>
        <S.BlackBadge>관리 가이드</S.BlackBadge>

        <div key={data.guide}>
          <div style={{ marginBottom: '0.5rem' }}>
            {/* <S.YellowBadge>✔ {data.guide}</S.YellowBadge> */}
          </div>
          <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
            <li>{data.guide}</li>
          </ul>
        </div>
      </S.ManagementSection>

      <S.Title>이 영상 추천해요!</S.Title>
      <S.RecommendSection>
        {data.videoList.map((video, idx) => (
          <S.ImgDiv
            className="product-item"
            key={video.videoId}
            onClick={() => window.open(video.videoUrl, '_blank')}
          >
            <img src={video.thumbnailUrl} alt={`추천 영상 ${idx + 1} `} />
            <p> {video.videoTitle}</p>
          </S.ImgDiv>
        ))}
      </S.RecommendSection>

      <S.Title>이 제품 추천해요!</S.Title>
      <S.RecommendSection>
        {data.productList.length ? (
          data.productList.map((product, idx) => (
            <S.ImgDiv
              className="product-item"
              key={product.productId}
              onClick={() => window.open(product.productUrl, '_blank')}
            >
              <img src={product.productImage} alt={`추천 제품 ${idx + 1}`} />
              <p>{product.productName}</p>
            </S.ImgDiv>
          ))
        ) : (
          <p>추천 제품이 없습니다.</p>
        )}
      </S.RecommendSection>
    </S.Content>
  );
};

export default MyLogDetail;
