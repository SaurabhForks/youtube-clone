const key = import.meta.env.VITE_GOOGLE_YOUTUBE_KEY;

export const YOUTUBE_GET_TOP_TRENDING = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=20&key=${key}`;

export const GOOGLE_SUGGEST_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
