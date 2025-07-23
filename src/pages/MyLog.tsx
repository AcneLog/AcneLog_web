import { useNavigate } from 'react-router-dom';
import { MyLogDetailMap } from './MyLogDetail/MyLogDetailDummyData';

function MyLog() {
  const loglist = Object.values(MyLogDetailMap);
  const navigate = useNavigate();
  return (
    <div>
      <h1>나의 진단로그 페이지</h1>
      {loglist.map((log) => (
        <button onClick={() => navigate(`/myLogDetail/${log.id}`)}>상세보기</button>
      ))}
    </div>
  );
}

export default MyLog;
