import { useNavigate, useParams } from 'react-router-dom';
import * as S from './MyLogDetail.styles';
import { useEffect, useState } from 'react';
import xIcon from '../../assets/xIcon.svg';
import { myLogDetailService, MyLogItem } from '../../services/myLogservice';

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
  }, []);
  if (!myLogDetailResponse) return <p>데이터 없음</p>;

  const data = myLogDetailResponse;

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
            <S.DiagnosisValue>{data.createdAt ? data.createdAt : '-'}</S.DiagnosisValue>
          </li>
          <li>
            <S.BlackBadge>공개 여부</S.BlackBadge>
            <S.CustomRadio className="custom-radio">
              <input
                type="radio"
                name="visibility"
                value="true"
                checked={isPublic === true}
                onChange={() => setIsPublic(true)}
              />
              공개
            </S.CustomRadio>
            <S.CustomRadio style={{ marginLeft: '1rem' }} className="custom-radio">
              <input
                type="radio"
                name="visibility"
                value="false"
                checked={isPublic === false}
                onChange={() => setIsPublic(false)}
              />
              비공개
            </S.CustomRadio>
          </li>
          <li>
            <S.BlueBadge>진단명</S.BlueBadge>
            <S.DiagnosisValue>{data.acneType}</S.DiagnosisValue>
          </li>
        </S.DetailList>
        <S.Description>
          <h4 style={{ color: '#17171b', marginBottom: '0.5rem' }}>☝🏻 '{data.acneType}'이란?</h4>
          <S.DiagnosisValue>{data.description}</S.DiagnosisValue>
        </S.Description>
      </S.InfoSection>

      <S.Title>치료 및 관리 가이드</S.Title>
      <S.TreatmentSection>
        <S.BlackBadge>치료법</S.BlackBadge>
        <div className="treatment-title">{data.careMethod}</div>
        <div>{data.careMethod}</div>
      </S.TreatmentSection>

      <S.ManagementSection>
        <S.BlackBadge>관리 가이드</S.BlackBadge>

        <div key={data.guide}>
          <div style={{ marginBottom: '0.5rem' }}>
            <S.YellowBadge>✔ {data.guide}</S.YellowBadge>
          </div>
          <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
            <li>{data.guide}</li>
          </ul>
        </div>
      </S.ManagementSection>

      <S.Title>이 영상 추천해요!</S.Title>
      <S.RecommendSection>
        {data.videoList.map((video, idx) => (
          <div
            className="product-item"
            key={video.videoId}
            onClick={() => window.open(video.videoUrl, '_blank')}
          >
            <img src={video.thumbnailUrl} alt={`추천 영상 ${idx + 1} `} />
            <p> {video.videoTitle}</p>
          </div>
        ))}
      </S.RecommendSection>

      <S.Title>이 제품 추천해요!</S.Title>
      <S.RecommendSection>
        {data.productList.length ? (
          data.productList.map((product, idx) => (
            <div className="product-item" key={product.id}>
              <img src={product.imageUrl} alt={`추천 제품 ${idx + 1}`} />
              <p>{product.name}</p>
            </div>
          ))
        ) : (
          <p>추천 제품이 없습니다.</p>
        )}
      </S.RecommendSection>
    </S.Content>
  );
};

export default MyLogDetail;
