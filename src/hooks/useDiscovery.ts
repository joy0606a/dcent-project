import { useMutation } from '@tanstack/react-query';
import discoveryApis, { ItemDto } from '@/client/discovery';
import { ResponseBaseObject } from '@/client/common/ResponseBaseObject';
import { useLocaleQuery } from '@/hooks/locale/useLocaleQuery';

// Query Keys
export const discoveryKeys = {
  all: ['discovery'] as const,
  items: () => [...discoveryKeys.all, 'items'] as const,
  favoriteItems: () => [...discoveryKeys.all, 'items', 'favorite'] as const,
};

// 아이템 목록 조회
export const useItems = () => {
  return useLocaleQuery({
    queryKey: discoveryKeys.items(),
    queryFn: discoveryApis.getItems,
    select: (data: ResponseBaseObject<ItemDto[]>) => data.payload,
  });
};

// 즐겨찾기 아이템 목록 조회
export const useFavoriteItems = () => {
  return useLocaleQuery({
    queryKey: discoveryKeys.favoriteItems(),
    queryFn: discoveryApis.getFavoriteItems,
    select: (data: ResponseBaseObject<ItemDto[]>) => data.payload,
  });
};

// 즐겨찾기 아이템 업데이트
export const useUpdateFavoriteItem = () => {
  return useMutation({
    mutationFn: discoveryApis.updateFavoriteItem,
  });
};
