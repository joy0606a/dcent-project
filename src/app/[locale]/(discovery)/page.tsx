'use client';

import Banner from './Banner';
import ItemCard, { ItemCardSkeleton } from './ItemCard';
import { useItems, useFavoriteItems } from '@/hooks/useDiscovery';
import { useTranslations } from 'next-intl';

export default function MainPage() {
  const t = useTranslations();
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

  const renderLoadingSkeleton = () => (
    <div className="space-y-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <ItemCardSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  );

  const renderError = () => (
    <div className="flex items-center justify-center rounded-lg border border-red-200 bg-red-50 p-4 text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
      {t('common.error_loading_data')}
    </div>
  );

  const renderEmpty = () => (
    <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
      {t('common.no_data')}
    </div>
  );

  const renderFavoriteSection = () => {
    if (isFavoriteItemsLoading) return renderLoadingSkeleton();
    if (favoriteItemsError) return renderError();
    if (favoriteItems.length === 0) return renderEmpty();

    return (
      <div className="space-y-3">
        {favoriteItems.map((item) => (
          <ItemCard key={item.id} item={item} isBookmarked={true} />
        ))}
      </div>
    );
  };

  const renderItemsSection = () => {
    if (isItemsLoading) return renderLoadingSkeleton();
    if (itemsError) return renderError();
    if (items.length === 0) return renderEmpty();

    return (
      <div className="space-y-3">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} isBookmarked={false} />
        ))}
      </div>
    );
  };

  return (
    <main className="mb-[80px] min-h-screen bg-gray-50 pb-4 dark:bg-gray-900">
      <section className="mt-[61px]">
        <Banner />
      </section>

      <div className="dcent-layout mx-auto mt-6 flex max-w-2xl flex-col gap-6">
        <div className="space-y-4">
          <div>
            <h2 className="mb-4 text-base font-semibold text-gray-800 dark:text-white">
              {t('list.dapp_favorite_title')}
            </h2>
            {renderFavoriteSection()}
          </div>

          <div>
            <h2 className="mt-8 mb-4 text-base font-semibold text-gray-800 dark:text-white">
              {t('list.dapp_list_title')}
            </h2>
            {renderItemsSection()}
          </div>
        </div>
      </div>
    </main>
  );
}
