import { NextResponse } from 'next/server';
import { getLocalizedItems } from '@/app/api/mocks/discoveryData';
import { ResponseBaseObject } from '@/client/common/ResponseBaseObject';
import { ItemsResponse } from '@/client/discovery';
import { favoriteItemIds } from '../shared-state';

// Accept-Language 헤더에서 locale 추출
function getLocaleFromHeaders(request: Request): string {
  const acceptLanguage = request.headers.get('accept-language') || 'en';

  // en, ko, en-US, ko-KR 등을 처리
  if (acceptLanguage.toLowerCase().includes('ko')) {
    return 'ko';
  }
  return 'en';
}

export async function GET(request: Request) {
  try {
    const locale = getLocaleFromHeaders(request);
    const localizedItems = getLocalizedItems(locale);

    // localizedItems에서 favoriteItemIds에 포함되지 않은 아이템들만 필터링
    const nonFavoriteItems = localizedItems.filter(
      (item) => !favoriteItemIds.has(item.id),
    );

    const response: ResponseBaseObject<ItemsResponse> = {
      error: {
        code: 0,
        message: 'Success',
      },
      payload: nonFavoriteItems,
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorResponse: ResponseBaseObject<ItemsResponse> = {
      error: {
        code: 500,
        message: 'Failed to retrieve items',
      },
      payload: [],
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
