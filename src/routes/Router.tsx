import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import DefaultLayout from '../layout/DefaultLayout';
import PrivateRoute from './PrivateRoute';
import MyLog from '../pages/MyLog';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Diagnosis from '../pages/Diagnosis';
import PeoplesLog from '../home/PeoplesLog';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* 로그인 없이 접근 가능한 공통 Layout 라우트 */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/peoplesLog" element={<PeoplesLog />} />

          {/* 로그인한 사람만 접근 가능한 라우트 (중첩) */}
          <Route element={<PrivateRoute />}>
            <Route path="/mylog" element={<MyLog />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
          </Route>
        </Route>

        {/* 404 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
