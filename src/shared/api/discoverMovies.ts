import { get_bearer_token } from "@utils/variables";

/** Discover - Movie
 * {@link } https://developer.themoviedb.org/reference/discover-movie
 */
const baseUrl = "https://api.themoviedb.org/3/discover/movie";
const queryParams = new URLSearchParams({
  include_adult: "false",
  include_video: "false",
  language: "en-US",
  page: "1",
  sort_by: "popularity.desc"
});
const url = `${baseUrl}?${queryParams.toString()}`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${get_bearer_token()}`,
  },
};

export const fetchMobileListData = async () => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};