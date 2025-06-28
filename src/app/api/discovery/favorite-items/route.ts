import { NextResponse } from 'next/server';
import { mockItems } from '@/app/api/mocks/discoveryData';
import { ResponseBaseObject } from '@/client/common/ResponseBaseObject';
import { FavoriteItemsResponse } from '@/client/discovery';
import { favoriteItemIds, toggleFavoriteItem } from '../shared-state';

export async function GET() {
  try {
    // mockItems에서 favoriteItemIds에 포함된 아이템들만 필터링
    const favoriteItems = mockItems.filter((item) =>
      favoriteItemIds.has(item.id),
    );

    const response: ResponseBaseObject<FavoriteItemsResponse> = {
      error: {
        code: 0,
        message: 'Success',
      },
      payload: favoriteItems,
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorResponse: ResponseBaseObject<FavoriteItemsResponse> = {
      error: {
        code: 500,
        message: 'Failed to retrieve favorite items',
      },
      payload: [],
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { itemId } = await request.json();

    if (!itemId) {
      const errorResponse: ResponseBaseObject<void> = {
        error: {
          code: 400,
          message: 'Item ID is required',
        },
        payload: undefined,
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    // 아이템이 실제로 존재하는지 확인
    const itemExists = mockItems.some((item) => item.id === itemId);
    if (!itemExists) {
      const errorResponse: ResponseBaseObject<void> = {
        error: {
          code: 404,
          message: 'Item not found',
        },
        payload: undefined,
      };

      return NextResponse.json(errorResponse, { status: 404 });
    }

    // 즐겨찾기 토글
    toggleFavoriteItem(itemId);

    const response: ResponseBaseObject<void> = {
      error: {
        code: 0,
        message: 'Favorite item updated successfully',
      },
      payload: undefined,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('즐겨찾기 업데이트 오류:', error);
    const errorResponse: ResponseBaseObject<void> = {
      error: {
        code: 500,
        message: 'Failed to update favorite item',
      },
      payload: undefined,
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
