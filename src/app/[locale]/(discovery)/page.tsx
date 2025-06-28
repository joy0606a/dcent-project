'use client';

import Banner from './Banner';
import ListItemCard from './ListItemCard';
import { useItems, useFavoriteItems } from '@/hooks/useDiscovery';
import { Loader2 } from 'lucide-react';

export default function MainPage() {
  const { data: items = [], isLoading: isItemsLoading, error: itemsError } = useItems();
  const { data: favoriteItems = [], isLoading: isFavoriteItemsLoading, error: favoriteItemsError } = useFavoriteItems();

  console.log({ favoriteItems, items });

  if (isItemsLoading || isFavoriteItemsLoading) {
    return (
      <main className="dcent-layout-main min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
          </div>
        </div>
      </main>
    );
  }

  if (itemsError || favoriteItemsError) {
    return (
      <main className="dcent-layout-main min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-red-500">데이터를 불러오는 중 오류가 발생했습니다.</div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="dcent-layout-main min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <Banner />
        
        <div className="space-y-4">
          <div>
            <h2 className="text-base font-semibold text-gray-800 dark:text-white mb-4">
              즐겨찾기
            </h2>
            <div className="space-y-3">
              {favoriteItems.map((item) => (
                <ListItemCard 
                  key={item.id} 
                  item={item} 
                  isBookmarked={true}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 dark:text-white mb-4 mt-8">
              목록
            </h2>
            <div className="space-y-3">
              {items.map((item) => (
                <ListItemCard 
                  key={item.id} 
                  item={item} 
                  isBookmarked={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
