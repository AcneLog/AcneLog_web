import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const goToPage = (path: string, state: Record<string, unknown> = {}) => {
    navigate(path, { state });
  };

  return goToPage;
};

export default useCustomNavigate;
