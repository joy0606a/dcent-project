import { ResponseBaseObject } from '@/apis/common/ResponseBaseObject';

export type ItemDto = {
    id: string;
    image: string;
    title: string;
    description: string;
    urls: {
        web?: string;
        android?: string;
        ios?: string;
    };
}

export type FavoriteItemsResponse = ItemDto[];

export type ItemsResponse = ItemDto[];

const API_URL = process.env.API_BASE_URL;
console.log({API_URL});

export const getFavoriteItems = async (): Promise<ResponseBaseObject<FavoriteItemsResponse>> => {
    const response = await fetch(`${API_URL}/discovery/favorite-items`);
    return response.json();
}

export const updateFavoriteItem = async (itemId: string): Promise<ResponseBaseObject<void>> => {
    const response = await fetch(`${API_URL}/discovery/favorite-items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
    });
    return response.json();
}

export const getItems = async (): Promise<ResponseBaseObject<ItemsResponse>> => {   
    const response = await fetch(`${API_URL}/discovery/items`);   
    return response.json();
}

export default {
    getFavoriteItems,
    updateFavoriteItem,
    getItems,
}