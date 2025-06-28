import { NextResponse } from 'next/server';
import { mockItems } from '@/mocks/discoveryData';
import { ResponseBaseObject } from '@/apis/common/ResponseBaseObject';
import { ItemsResponse } from '@/apis/discovery';

export async function GET() {
  try {
    const response: ResponseBaseObject<ItemsResponse> = {
      error: {
        code: 0,
        message: 'Success'
      },
      payload: mockItems
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