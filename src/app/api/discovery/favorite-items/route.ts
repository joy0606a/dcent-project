import { NextResponse } from 'next/server';
import { mockFavoriteItems } from '@/mocks/discoveryData';
import { ResponseBaseObject } from '@/apis/common/ResponseBaseObject';
import { FavoriteItemsResponse } from '@/apis/discovery';

// 즐겨찾기 상태를 관리하는 임시 저장소 (실제로는 데이터베이스 사용)
let favoriteItemIds = new Set(['1', '2', '3', '4', '5']);

export async function GET() {
  try {
    const favoriteItems = mockFavoriteItems.filter(item => favoriteItemIds.has(item.id));
    
    const response: ResponseBaseObject<FavoriteItemsResponse> = {
      error: {
        code: 0,
        message: 'Success'
      },
      payload: favoriteItems
    };
    
    return NextResponse.json(response);
  } catch (error) {
    const errorResponse: ResponseBaseObject<FavoriteItemsResponse> = {
      error: {
        code: 500,
        message: 'Failed to retrieve favorite items'
      },
      payload: []
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
          message: 'Item ID is required'
        },
        payload: undefined
      };
      
      return NextResponse.json(errorResponse, { status: 400 });
    }
    
    // 즐겨찾기 토글
    if (favoriteItemIds.has(itemId)) {
      favoriteItemIds.delete(itemId);
    } else {
      favoriteItemIds.add(itemId);
    }
    
    const response: ResponseBaseObject<void> = {
      error: {
        code: 0,
        message: 'Favorite item updated successfully'
      },
      payload: undefined
    };
    
    return NextResponse.json(response);
  } catch (error) {
    const errorResponse: ResponseBaseObject<void> = {
      error: {
        code: 500,
        message: 'Failed to update favorite item'
      },
      payload: undefined
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
} 