import { NextResponse } from 'next/server';
import { mockItems } from '@/app/api/mocks/discoveryData';
import { ResponseBaseObject } from '@/client/common/ResponseBaseObject';
import { ItemsResponse } from '@/client/discovery';
import { favoriteItemIds } from '../shared-state';

export async function GET() {
  try {
    // mockItems에서 favoriteItemIds에 포함되지 않은 아이템들만 필터링
    const nonFavoriteItems = mockItems.filter(item => !favoriteItemIds.has(item.id));
    
    const response: ResponseBaseObject<ItemsResponse> = {
      error: {
        code: 0,
        message: 'Success'
      },
      payload: nonFavoriteItems
    };
    
    return NextResponse.json(response);
  } catch (error) {
    const errorResponse: ResponseBaseObject<ItemsResponse> = {
      error: {
        code: 500,
        message: 'Failed to retrieve items'
      },
      payload: []
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
} 