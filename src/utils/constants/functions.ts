export const viewCountConversion = (viewCount: string) => {
  if (!viewCount) {
    return 0;
  }
  if (viewCount.length <= 3) {
    return viewCount;
  }
  if (viewCount.length > 3 && viewCount.length <= 6) {
    return `${viewCount[0]}K`;
  }
  if (viewCount.length > 6 && viewCount.length <= 9) {
    return `${viewCount[0]}${viewCount[1]}K`;
  }
  if (viewCount.length > 9 && viewCount.length <= 12) {
    return `${viewCount[0]}${viewCount[1]}${viewCount[2]}K`;
  }
};
