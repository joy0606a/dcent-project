'use client';

import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { useUpdateFavoriteItem, discoveryKeys } from '@/hooks/useDiscovery';
import { ItemDto } from '@/client/discovery';
import { useQueryClient } from '@tanstack/react-query';

type ListItemCardProps = {
  item: ItemDto;
  isBookmarked?: boolean;
};

const ListItemCard: React.FC<ListItemCardProps> = ({
  item,
  isBookmarked = false,
}) => {
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
    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
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
              >
                Web <ExternalLink className="h-3 w-3" />
              </a>
            )}
            {item.urls.android && (
              <a
                href={item.urls.android}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
              >
                Android <ExternalLink className="h-3 w-3" />
              </a>
            )}
            {item.urls.ios && (
              <a
                href={item.urls.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
              >
                iOS <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        )}
      </div>

      <button
        onClick={handleBookmarkClick}
        disabled={isUpdatingFavoriteItem}
        className="ml-4 flex-shrink-0 rounded-full p-2 transition-colors hover:bg-gray-100 disabled:opacity-50"
      >
        <Star
          className={clsx(
            'h-5 w-5',
            isBookmarked
              ? 'fill-current text-yellow-500'
              : 'text-gray-400 dark:text-gray-500',
            isUpdatingFavoriteItem && 'animate-pulse',
          )}
        />
      </button>
    </div>
  );
};

export const ListItemCardSkeleton = () => {
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

export default ListItemCard;
