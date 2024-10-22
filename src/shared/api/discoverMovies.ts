import { get_bearer_token } from "@utils/variables";
import { sendRequest } from "@utils/fetch";
import { useQuery } from "@tanstack/react-query";

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

function useMovieList() {
  return useQuery({
    queryKey: ["movieList"],
    queryFn: sendRequest(url, options),
  });
}

export default useMovieList;
