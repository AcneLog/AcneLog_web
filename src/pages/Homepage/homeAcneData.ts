import comedonesImg from '../../assets/skin/COMEDONES.png';
import papulesImg from '../../assets/skin/PAPULES.png';
import pustulesImg from '../../assets/skin/PUSTULES.png';
import follicultisImg from '../../assets/skin/FOLLICULITIS.png';

type AcneTypeItem = {
  typeId: number;
  acneTypeKR: string;
  imgUrl: string;
  acneTypeAPI: 'comedones' | 'pustules' | 'papules' | 'follicultis'; // 추가된 키
};
export const acneTypeData: AcneTypeItem[] = [
  { typeId: 1, acneTypeKR: '좁쌀 여드름', imgUrl: comedonesImg, acneTypeAPI: 'comedones' as const },
  { typeId: 2, acneTypeKR: '염증성 여드름', imgUrl: papulesImg, acneTypeAPI: 'papules' as const },
  { typeId: 3, acneTypeKR: '화농성 여드름', imgUrl: pustulesImg, acneTypeAPI: 'pustules' as const },
  { typeId: 4, acneTypeKR: '모낭염', imgUrl: follicultisImg, acneTypeAPI: 'follicultis' as const },
];
