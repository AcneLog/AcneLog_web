import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// 기본 스타일 정의
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px transparent #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center' as const,
  borderRadius: '1rem',
};

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  message: string; // 모달에 표시할 메시지
  confirmLink: string; // 확인 시 이동할 링크
  confirmText?: string; // 확인 버튼 텍스트 (기본: "확인")
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  onClose,
  message,
  confirmLink,
  confirmText = '확인',
}) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    onClose();
    navigate(confirmLink);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="body1" sx={{ mb: 3, fontFamily: 'Pretendard', fontWeight: 500 }}>
          {message}
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button variant="outlined" onClick={handleConfirm} sx={{ fontFamily: 'Pretendard' }}>
            {confirmText}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
