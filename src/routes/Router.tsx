import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';

import DefaultLayout from '../layout/DefaultLayout';
import PrivateRoute from './PrivateRoute';
import MyLog from '../pages/MyLog';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound';
import My from '../pages/My/My';
import SkinDiagnosis from '../pages/SkinDiagnosis';
import Notice from '../pages/Notice';
import PeoplesLog from '../pages/PeoplesLog/PeoplesLog';
import Diagnosis from '../pages/diagnosis/Diagnosis';
import PeoplesLogDetail from '../pages/peoplesLog/PeoplesLogDetail';

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
          <Route path="/notice" element={<Notice />} />
          <Route path="/peoplesLog" element={<PeoplesLog />} />
          <Route path="/peoplesLogDetail" element={<PeoplesLogDetail />} />

          {/* 로그인한 사람만 접근 가능한 라우트 */}
          <Route element={<PrivateRoute />}>
            <Route path="/mylog" element={<MyLog />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
            <Route path="/skin" element={<SkinDiagnosis />} />
          </Route>
        </Route>

        {/* 404 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
