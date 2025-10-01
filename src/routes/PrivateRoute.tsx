import { useEffect, useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useIsAuthed } from '../auth/authStore';
import { Alert, Fade, Stack } from '@mui/material';

export default function PrivateRoute() {
  const isLoggedIn = useIsAuthed();
  const location = useLocation();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        navigate('/login', { replace: true, state: { from: location } });
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn, navigate, location]);

  if (!isLoggedIn && showAlert) {
    return (
      <Stack
        sx={{
          width: '100%',
          px: 2,
        }}
      >
        <Fade in={showAlert} timeout={500}>
          <Alert variant="filled" severity="info">
            로그인이 필요한 서비스입니다.
          </Alert>
        </Fade>
      </Stack>
    );
  }

  return <Outlet />;
}
