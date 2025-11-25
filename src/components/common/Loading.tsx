import Lottie from 'react-lottie-player';
import loadingAnimation from '../../assets/loading_final.json';

export default function Loading() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <Lottie loop animationData={loadingAnimation} play style={{ width: 200, height: 200 }} />
    </div>
  );
}
