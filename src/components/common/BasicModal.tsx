import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

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
  onConfirm: () => void; // 예 클릭 시
  onReject: () => void; // 아니오 클릭 시
  confirmText?: string; // 확인 버튼 텍스트 (기본: "예")
  rejectText?: string; // 취소 버튼 텍스트 (기본: "아니오")
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  onClose,
  message,
  onConfirm,
  onReject,
  confirmText = '예',
  rejectText = '아니오',
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography
          variant="body1"
          sx={{ mb: 3, fontFamily: 'Pretendard', fontWeight: 500, whiteSpace: 'pre-line' }}
        >
          {message}
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="outlined" onClick={onConfirm} sx={{ fontFamily: 'Pretendard' }}>
            {confirmText}
          </Button>
          <Button variant="outlined" onClick={onReject} sx={{ fontFamily: 'Pretendard' }}>
            {rejectText}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
