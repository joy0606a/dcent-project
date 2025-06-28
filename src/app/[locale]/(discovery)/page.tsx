'use client';

import Banner from './Banner';
import ListItemCard from './ListItemCard';
import { useItems, useFavoriteItems } from '@/hooks/useDiscovery';
import { Loader2 } from 'lucide-react';

export default function MainPage() {
  const {
    data: items = [],
    isLoading: isItemsLoading,
    error: itemsError,
  } = useItems();
  const {
    data: favoriteItems = [],
    isLoading: isFavoriteItemsLoading,
    error: favoriteItemsError,
  } = useFavoriteItems();

  console.log({ favoriteItems, items });

  if (isItemsLoading || isFavoriteItemsLoading) {
    return (
      <main className="dcent-layout-main min-h-screen bg-gray-50 p-4 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl">
          <div className="flex min-h-[400px] items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
          </div>
        </div>
      </main>
    );
  }

  if (itemsError || favoriteItemsError) {
    return (
      <main className="dcent-layout-main min-h-screen bg-gray-50 p-4 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-red-500">
              데이터를 불러오는 중 오류가 발생했습니다.
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mb-[80px] min-h-screen bg-gray-50 pb-4 dark:bg-gray-900">
      <section className="mt-[61px]">
        <Banner />
      </section>

      <div className="dcent-layout mx-auto mt-6 flex max-w-2xl flex-col gap-6">
        <div className="space-y-4">
          <div>
            <h2 className="mb-4 text-base font-semibold text-gray-800 dark:text-white">
              즐겨찾기
            </h2>
            <div className="space-y-3">
              {favoriteItems.map((item) => (
                <ListItemCard key={item.id} item={item} isBookmarked={true} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mt-8 mb-4 text-base font-semibold text-gray-800 dark:text-white">
              목록
            </h2>
            <div className="space-y-3">
              {items.map((item) => (
                <ListItemCard key={item.id} item={item} isBookmarked={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
