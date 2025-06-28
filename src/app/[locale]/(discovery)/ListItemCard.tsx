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
}

const ListItemCard: React.FC<ListItemCardProps> = ({ 
    item, 
    isBookmarked = false, 
}) => {
    const {mutateAsync: updateFavoriteItem, isPending: isUpdatingFavoriteItem} = useUpdateFavoriteItem();
    const queryClient = useQueryClient();

    const handleBookmarkClick = async () => {
        try {
            await updateFavoriteItem(item.id);
            
            // 즐겨찾기 목록, 아이템 목록 새로고침 (쿼리 키 items로 공유됨)
            queryClient.invalidateQueries({
                queryKey: discoveryKeys.items(), 
            })

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center p-4 gap-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            {/* image */}
            <div className="flex-shrink-0 mr-2">
                {item.image ? (
                    <div className="w-14 h-14 rounded-lg object-cover shadow-md flex items-center justify-center">
                        <Image 
                            src={item.image} 
                            alt={item.title}
                            className="rounded-lg object-cover"
                            width={40}
                            height={40}
                        />
                    </div>
                ) : (
                    <div className="w-14 h-14 bg-gray-200 shadow-md rounded-lg flex items-center justify-center" />
                )}
            </div>
            
            {/* title, description, urls */}
            <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900  truncate">
                    {item.title}
                </h3>
                <p className="text-sm text-gray-500  mt-1 line-clamp-2">
                    {item.description}
                </p>
                {(item.urls.web || item.urls.android || item.urls.ios) && (
                    <div className="flex gap-2 mt-2">
                        {item.urls.web && (
                            <a 
                                href={item.urls.web}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                            >
                                Web <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                        {item.urls.android && (
                            <a 
                                href={item.urls.android}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                            >
                                Android <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                        {item.urls.ios && (
                            <a 
                                href={item.urls.ios}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                            >
                                iOS <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                    </div>
                )}
            </div>

            <button
                onClick={handleBookmarkClick}
                disabled={isUpdatingFavoriteItem}
                className="flex-shrink-0 ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
                <Star 
                    className={clsx(
                        'w-5 h-5',
                        isBookmarked 
                            ? 'text-yellow-500 fill-current' 
                            : 'text-gray-400 dark:text-gray-500',
                        isUpdatingFavoriteItem && 'animate-pulse'
                    )}
                />
            </button>
        </div>
    );
};

export const ListItemCardSkeleton = () => {
    return (
        <div className="flex items-center p-4 gap-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 mr-2">
                <div className="w-14 h-14 bg-gray-200 shadow-md rounded-lg flex items-center justify-center" />
            </div>
            <div className="flex-1 min-w-0">
                <div className="h-4 bg-gray-200 rounded-full w-32 mb-2" />
                <div className="h-4 bg-gray-200 rounded-full w-24" />
            </div>
            <button className="flex-shrink-0 ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50" />
        </div>
    );
};

export default ListItemCard;