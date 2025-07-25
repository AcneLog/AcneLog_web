import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import PrivateRoute from './PrivateRoute';
import MyLog from '../pages/MyLog/MyLog';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound';
import My from '../pages/My/My';
import SkinDiagnosis from '../pages/SkinDiagnosis/SkinDiagnosis';
import Notice from '../pages/Notice/Notice';
import PeoplesLog from '../pages/PeoplesLog/PeoplesLog';
import Home from '../pages/Home/Home';
import Diagnosis from '../pages/Diagnosis/Diagnosis';
import Result from '../pages/Diagnosis/Result';
import PeoplesLogDetail from '../pages/PeoplesLog/PeoplesLogDetail';
import MyLogDetail from '../pages/MyLogDetail/MyLogDetail';
import NoticeDetail from '../pages/Notice/NoticeDetail';
import SkinDiagnosisResult from '../pages/SkinDiagnosis/SkinDiagnosisResult';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* 로그인 없이 접근 가능한 공통 Layout 라우트 */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my" element={<My />} />
          <Route path="/peoplesLog" element={<PeoplesLog />} />
          <Route path="/peoplesLogDetail/:id" element={<PeoplesLogDetail />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />

          {/* 로그인한 사람만 접근 가능한 라우트 */}
          <Route element={<PrivateRoute />}>
            <Route path="/myLog" element={<MyLog />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
            <Route path="/skin" element={<SkinDiagnosis />} />
            <Route path="/skin/result" element={<SkinDiagnosisResult />} />
            <Route path="/result/:id" element={<Result />} />
            <Route path="/myLogDetail/:id" element={<MyLogDetail />} />
          </Route>
        </Route>

        {/* 404 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
