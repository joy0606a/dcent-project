import { ResponseBaseObject } from '@/client/common/ResponseBaseObject';
import { getLocaleCode, getFullLocaleCode } from '@/lib/locale';

export type ItemDto = {
  id: string;
  image: string;
  title: string;
  description: string;
  urls: {
    web?: string;
    android?: string;
    ios?: string;
  };
};

export type FavoriteItemsResponse = ItemDto[];

export type ItemsResponse = ItemDto[];

const API_URL = process.env.API_BASE_URL;

export const getFavoriteItems = async (): Promise<
  ResponseBaseObject<FavoriteItemsResponse>
> => {
  const response = await fetch(`${API_URL}/discovery/favorite-items`, {
    headers: {
      'Accept-Language': getFullLocaleCode(getLocaleCode()),
    },
  });
  const data = await response.json();

  return data;
};

export const updateFavoriteItem = async (
  itemId: string,
): Promise<ResponseBaseObject<void>> => {
  const response = await fetch(`${API_URL}/discovery/favorite-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ itemId }),
  });
  const data = await response.json();

  return data;
};

export const getItems = async (): Promise<
  ResponseBaseObject<ItemsResponse>
> => {
  const response = await fetch(`${API_URL}/discovery/items`, {
    headers: {
      'Accept-Language': getFullLocaleCode(getLocaleCode()),
    },
  });
  const data = await response.json();

  // API 응답의 error.code가 0이 아니면 에러로 처리
  if (data.error && data.error.code !== 0) {
    throw new Error(data.error.message || 'Failed to get items');
  }

  return data;
};

export default {
  getFavoriteItems,
  updateFavoriteItem,
  getItems,
};
