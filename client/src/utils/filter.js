// Filtered Function
export const filteredHome = (item) => {
  return !item.thumbnail.trending;
};
export const filteredMovie = (item) => {
  return item.category === "Movie";
};
export const filedteredTvSeries = (item) => {
  return item.category === "TV Series";
};
export const filteredMovies = (item) => {
  if (item.isBookmarked && item.category === "Movie") {
    return item;
  }
};
export const filteredSeries = (item) => {
  if (item.isBookmarked && item.category === "TV Series") {
    return item;
  }
};
