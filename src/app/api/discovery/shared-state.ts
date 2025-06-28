// 즐겨찾기 상태를 관리하는 공유 상태 (실제로는 데이터베이스 사용)
export let favoriteItemIds = new Set(['1', '2', '3', '4', '5']);

// 즐겨찾기 상태 업데이트 함수
export function toggleFavoriteItem(itemId: string): boolean {
  if (favoriteItemIds.has(itemId)) {
    favoriteItemIds.delete(itemId);
    console.log(`즐겨찾기에서 제거: ${itemId}`, Array.from(favoriteItemIds));
    return false; // 제거됨
  } else {
    favoriteItemIds.add(itemId);
    console.log(`즐겨찾기에 추가: ${itemId}`, Array.from(favoriteItemIds));
    return true; // 추가됨
  }
}

// 즐겨찾기 상태 확인 함수
export function isFavoriteItem(itemId: string): boolean {
  return favoriteItemIds.has(itemId);
}
