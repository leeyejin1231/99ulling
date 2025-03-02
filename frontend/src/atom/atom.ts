import { atom } from 'recoil';

export const loginNickNameState = atom({
  key: 'loginNickNameState',
  default: '뀰줍',
});

export const loginUserAddressState = atom({
  key: 'loginUserAddressState',
  default: '제주시 첨단로 242',
});

export const loginFarmerNameState = atom({
  key: 'loginFarmerNameState',
  default: '농부',
});

export const loginFarmerAddressState = atom({
  key: 'loginFarmerAddressState',
  default: '제주시 첨단로 242',
});

export const searchState = atom({
  key: 'searchState',
  default: {
    address: '제주시 첨단로 242',
    availableTime: '09:00 : 13:00',
    farmImage: '/sharing99.png',
    femarData: '제주의 태양과 맑은 물을 먹고자라나 맛이 좋아요',
    id: 3,
    name: '알찬귤 농장',
    remainCount: 70,
    totalCount: 100,
  },
});

export const shareState = atom({
  key: 'shareState',
  default: 100,
});
