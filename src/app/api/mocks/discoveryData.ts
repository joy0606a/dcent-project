import { ItemDto } from '@/client/discovery';

// locale에 따른 번역 데이터 가져오기
function getTranslations(locale: string) {
  try {
    if (locale.startsWith('ko')) {
      return require('../../../../messages/ko.json');
    }
    return require('../../../../messages/en.json');
  } catch (error) {
    // fallback to English
    return require('../../../../messages/en.json');
  }
}

// 번역된 텍스트 가져오기
function getTranslatedText(key: string, translations: any): string {
  if (key.includes('_')) {
    // dapps 섹션의 키인 경우
    return translations.dapps?.[key] || key;
  }
  // 그냥 원본 텍스트인 경우
  return key;
}

export const mockItems: ItemDto[] = [
  {
    id: '1',
    image: '',
    title: 'FLRFarm',
    description: 'https://xff.flr.finance/',
    urls: {
      web: 'https://xff.flr.finance/',
      android: 'https://xff.flr.finance/',
      ios: 'https://xff.flr.finance/',
    },
  },
  {
    id: '2',
    image: '/images/icon_opensea.png',
    title: 'opensea_create_title',
    description: 'https://opensea.io/asset/create',
    urls: {
      web: 'https://opensea.io/asset/create',
      android: 'https://opensea.io/asset/create',
      ios: 'https://opensea.io/asset/create',
    },
  },
  {
    id: '3',
    image: '',
    title: 'POAP - Scan',
    description: 'https://app.poap.xyz/',
    urls: {
      web: 'https://app.poap.xyz/',
      android: 'https://app.poap.xyz/',
      ios: 'https://app.poap.xyz/',
    },
  },
  {
    id: '4',
    image: '/images/icon_buy.png',
    title: 'buy_crypto_title',
    description: 'buy_crypto_description',
    urls: {
      web: 'https://dcent.co/buy-crypto',
      android: 'https://dcent.co/buy-crypto',
      ios: 'https://dcent.co/buy-crypto',
    },
  },
  {
    id: '5',
    image: '',
    title: 'metamask_connect_title',
    description: 'metamask_connect_description',
    urls: {
      web: 'https://metamask.io/connect',
      android: 'https://metamask.io/connect',
      ios: 'https://metamask.io/connect',
    },
  },
  {
    id: '6',
    image: '/images/icon_astar.png',
    title: 'astar_portal_title',
    description: 'astar_portal_description',
    urls: {
      web: 'https://portal.astar.network',
      android: 'https://portal.astar.network',
      ios: 'https://portal.astar.network',
    },
  },
  {
    id: '7',
    image: '/images/icon_ftso.png',
    title: 'ftso_portal_title',
    description: 'ftso_portal_description',
    urls: {
      web: 'https://ftso.fi',
      android: 'https://ftso.fi',
      ios: 'https://ftso.fi',
    },
  },
  {
    id: '8',
    image: '',
    title: 'klayswap_title',
    description: 'klayswap_description',
    urls: {
      web: 'https://klayswap.com',
      android: 'https://klayswap.com',
      ios: 'https://klayswap.com',
    },
  },
  {
    id: '9',
    image: '',
    title: 'tokamak_dao_title',
    description: 'tokamak_dao_description',
    urls: {
      web: 'https://dao.tokamak.network',
      android: 'https://dao.tokamak.network',
      ios: 'https://dao.tokamak.network',
    },
  },
  {
    id: '10',
    image: '/images/icon_zapper.png',
    title: 'zapper_title',
    description: 'zapper_description',
    urls: {
      web: 'https://zapper.fi',
      android: 'https://zapper.fi',
      ios: 'https://zapper.fi',
    },
  },
  {
    id: '11',
    image: '/images/icon_compound.png',
    title: 'compound_title',
    description: 'compound_description',
    urls: {
      web: 'https://compound.finance',
      android: 'https://compound.finance',
      ios: 'https://compound.finance',
    },
  },
  {
    id: '12',
    image: '/images/icon_pooltogether.png',
    title: 'pooltogether_title',
    description: 'pooltogether_description',
    urls: {
      web: 'https://pooltogether.com',
      android: 'https://pooltogether.com',
      ios: 'https://pooltogether.com',
    },
  },
  {
    id: '13',
    image: '/images/icon_uniswap.png',
    title: 'uniswap_title',
    description: 'uniswap_description',
    urls: {
      web: 'https://uniswap.org',
      android: 'https://uniswap.org',
      ios: 'https://uniswap.org',
    },
  },
  {
    id: '14',
    image: '',
    title: 'yearn_finance_title',
    description: 'yearn_finance_description',
    urls: {
      web: 'https://yearn.finance',
      android: 'https://yearn.finance',
      ios: 'https://yearn.finance',
    },
  },
  {
    id: '15',
    image: '/images/icon_1inch.png',
    title: 'oneinch_title',
    description: 'oneinch_description',
    urls: {
      web: 'https://1inch.io',
      android: 'https://1inch.io',
      ios: 'https://1inch.io',
    },
  },
  {
    id: '16',
    image: '/images/icon_opensea.png',
    title: 'opensea_title',
    description: 'opensea_description',
    urls: {
      web: 'https://opensea.io',
      android: 'https://opensea.io',
      ios: 'https://opensea.io',
    },
  },
  {
    id: '17',
    image: '/images/icon_rarible.png',
    title: 'rarible_title',
    description: 'rarible_description',
    urls: {
      web: 'https://rarible.com',
      android: 'https://rarible.com',
      ios: 'https://rarible.com',
    },
  },
  {
    id: '18',
    image: '',
    title: 'kaiapotter_title',
    description: 'kaiapotter_description',
    urls: {
      web: 'https://kaiapotter.com',
      android: 'https://kaiapotter.com',
      ios: 'https://kaiapotter.com',
    },
  },
  {
    id: '19',
    image: '/images/icon_bluewhale.png',
    title: 'bluewhale_title',
    description: 'bluewhale_description',
    urls: {
      web: 'https://bluewhale.protocol',
      android: 'https://bluewhale.protocol',
      ios: 'https://bluewhale.protocol',
    },
  },
  {
    id: '20',
    image: '',
    title: 'swapscanner_title',
    description: 'swapscanner_description',
    urls: {
      web: 'https://swapscanner.io',
      android: 'https://swapscanner.io',
      ios: 'https://swapscanner.io',
    },
  },
  {
    id: '21',
    image: '',
    title: 'intract_title',
    description: 'intract_description',
    urls: {
      web: 'https://intract.io/quests',
      android: 'https://intract.io/quests',
      ios: 'https://intract.io/quests',
    },
  },
  {
    id: '22',
    image: '',
    title: 'skate_staking_title',
    description: 'skate_staking_description',
    urls: {
      web: 'https://skate.fi/staking',
      android: 'https://skate.fi/staking',
      ios: 'https://skate.fi/staking',
    },
  },
  {
    id: '23',
    image: '',
    title: 'orbit_bridge_title',
    description: 'orbit_bridge_description',
    urls: {
      web: 'https://bridge.orbitchain.io',
      android: 'https://bridge.orbitchain.io',
      ios: 'https://bridge.orbitchain.io',
    },
  },
  {
    id: '24',
    image: '/images/icon_xdsea.png',
    title: 'xdsea_title',
    description: 'xdsea_description',
    urls: {
      web: 'https://xdsea.com',
      android: 'https://xdsea.com',
      ios: 'https://xdsea.com',
    },
  },
  {
    id: '25',
    image: '',
    title: 'celer_cbridge_title',
    description: 'celer_cbridge_description',
    urls: {
      web: 'https://cbridge.celer.network',
      android: 'https://cbridge.celer.network',
      ios: 'https://cbridge.celer.network',
    },
  },
];

// locale에 따라 번역된 아이템들을 반환하는 함수
export function getLocalizedItems(locale: string = 'en'): ItemDto[] {
  const translations = getTranslations(locale);

  return mockItems.map((item) => ({
    ...item,
    title: getTranslatedText(item.title, translations),
    description: getTranslatedText(item.description, translations),
  }));
}

// 즐겨찾기 아이템들 (처음 5개를 기본 즐겨찾기로 설정)
export function getLocalizedFavoriteItems(locale: string = 'en'): ItemDto[] {
  return getLocalizedItems(locale).slice(0, 5);
}
