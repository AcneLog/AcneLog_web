import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';

function DefaultLayout() {
  const location = useLocation();
  const isMyPage = location.pathname === '/my';

  return (
    <>
      {!isMyPage && <Header />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
