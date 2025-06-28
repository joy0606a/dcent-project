'use client';

import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { isAndroid, isIOS } from 'react-device-detect';
import { useUpdateFavoriteItem, discoveryKeys } from '@/hooks/useDiscovery';
import { ItemDto } from '@/client/discovery';
import { useQueryClient } from '@tanstack/react-query';
import ItemDetailDrawer from './ItemDetailDrawer';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

type ItemCardProps = {
  item: ItemDto;
  isBookmarked?: boolean;
};

const ItemCard: React.FC<ItemCardProps> = ({ item, isBookmarked = false }) => {
  const { mutateAsync: updateFavoriteItem, isPending: isUpdatingFavoriteItem } =
    useUpdateFavoriteItem();
  const queryClient = useQueryClient();

  const handleBookmarkClick = async () => {
    try {
      await updateFavoriteItem(item.id);

      // 즐겨찾기 목록, 아이템 목록 새로고침 (쿼리 키 items로 공유됨)
      queryClient.invalidateQueries({
        queryKey: discoveryKeys.items(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ItemDetailDrawer item={item}>
      <div className="flex cursor-pointer items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
        {/* image */}
        <div className="mr-2 flex-shrink-0">
          {item.image ? (
            <div className="flex h-14 w-14 items-center justify-center rounded-lg object-cover shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-lg object-cover"
                width={40}
                height={40}
              />
            </div>
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-200 shadow-md" />
          )}
        </div>

        {/* title, description, urls */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-gray-500">
            {item.description}
          </p>
          {(item.urls.web || item.urls.android || item.urls.ios) && (
            <div className="mt-2 flex gap-2">
              {item.urls.web && (
                <a
                  href={item.urls.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Web <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {item.urls.android && isAndroid && (
                <a
                  href={item.urls.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Android <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {item.urls.ios && isIOS && (
                <a
                  href={item.urls.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  iOS <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* 즐겨찾기 - 이미 즐겨찾기인 경우 확인 다이얼로그, 아닌 경우 바로 추가 */}
        {isBookmarked ? (
          <FavoriteItemDialog item={item} onConfirm={handleBookmarkClick}>
            <button
              onClick={(e) => e.stopPropagation()}
              disabled={isUpdatingFavoriteItem}
              className="ml-4 flex-shrink-0 rounded-full p-2 transition-colors hover:bg-gray-100 disabled:opacity-50"
            >
              <Star
                className={clsx(
                  'h-5 w-5',
                  'fill-current text-yellow-500',
                  isUpdatingFavoriteItem && 'animate-pulse',
                )}
              />
            </button>
          </FavoriteItemDialog>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleBookmarkClick();
            }}
            disabled={isUpdatingFavoriteItem}
            className="ml-4 flex-shrink-0 rounded-full p-2 transition-colors hover:bg-gray-100 disabled:opacity-50"
          >
            <Star
              className={clsx(
                'h-5 w-5',
                'text-gray-400 dark:text-gray-500',
                isUpdatingFavoriteItem && 'animate-pulse',
              )}
            />
          </button>
        )}
      </div>
    </ItemDetailDrawer>
  );
};

export const ItemCardSkeleton = () => {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="mr-2 flex-shrink-0">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-200 shadow-md" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-2 h-4 w-32 rounded-full bg-gray-200" />
        <div className="h-4 w-24 rounded-full bg-gray-200" />
      </div>
      <button className="ml-4 flex-shrink-0 rounded-full p-2 transition-colors hover:bg-gray-100 disabled:opacity-50" />
    </div>
  );
};

export const FavoriteItemDialog = ({
  item,
  children,
  onConfirm,
}: {
  item: ItemDto;
  children: React.ReactNode;
  onConfirm: () => void;
}) => {
  const handleConfirm = (e: React.MouseEvent) => {
    e.stopPropagation();
    onConfirm();
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>즐겨찾기에서 제거</AlertDialogTitle>
          <AlertDialogDescription>
            "{item.title}"를 즐겨찾기에서 제거하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>취소</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>제거</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ItemCard;
