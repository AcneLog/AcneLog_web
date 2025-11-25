import Lottie from 'react-lottie-player';
import loadingAnimation from '../../assets/loading_final.json';

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '65vh',
      }}
    >
      <Lottie loop animationData={loadingAnimation} play style={{ width: 200, height: 200 }} />
      <p style={{ fontSize: '1.25rem', textAlign: 'center', marginTop: '1rem' }}>
        AI가 진단하는 중이에요
        <br /> 잠시만 기다려주세요!
      </p>
    </div>
  );
}
