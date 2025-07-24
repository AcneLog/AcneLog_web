import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

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
  textAlign: 'center',
  borderRadius: '1rem',
};

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const BasicModal: React.FC<BasicModalProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="body1" sx={{ mb: 3, fontFamily: 'Pretendard', fontWeight: 500 }}>
          저장하시겠습니까?
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button variant="outlined" onClick={onConfirm} style={{ fontFamily: 'Pretendard' }}>
            확인
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
